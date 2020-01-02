## Overview
This document describes testing and analysis of how the vets.gov infrastructure will perform when supporting the download of electronic health records. Health records are provided by a MyHealtheVet API and have the potential to consist of a larger payloads than the typical response returned by vets-api. The goal is to ensure that the infrastructure that we control - mainly the reverse proxies, vets-api application servers, and the Cisco CSR instances - will behave well in the face of this kind of traffic.

This document is focused on the analysis of downloading a single large health record file, in order to support this feature with a soft launch at low user counts. We will discuss the issues of supporting all health record downloads at MHV's current level of traffic in a separate document.


## Problem Description
MHV provides an API allowing a user to request a refresh of their health records, and then download the records as either a PDF or text file. (For reference, API path is `/mhv-api/patient/v1/bluebutton/bbreport/{pdf,txt}`)

Unlike most vets-api API responses where a typical payload is on the order of 1-10kB, PDF health records are much larger. The MHV team provided these figures for reports created in a 180 day period:
> MINIMUM: 29.7 KB (30503 bytes)<br/>
> AVERAGE: 679.3 KB (695575 bytes)<br/>
> MAXIMUM: 97.5 MB (102228053 bytes)<br/>
> STDDEV: 1.5 MB (1613383 bytes)

It's not clear how MHV generated these statistics to say how to interpret the standard deviation figure, since file sizes generally do not follow a normal distribution. In any case, even the average download size is a couple orders of magnitude greater than a typical vets-api response payload, and we should definitely expect frequent responses on the order of several megabytes. We also want to be confident that the maximum-size download, even if rare, will not affect the overall performance or stability of vets.gov

We investigated the behavior of MHV's API endpoint. The main points of interest are that PDFs are returned via a chunked transfer encoding with a chunk size of 8kB, and that it is possible to request the content be compressed using the Accept-Encoding request header. There does not appear to be support for partial downloads.

## Test Setup
- Implemented a [mock health records API](https://github.com/department-of-veterans-affairs/mock-health-records-api). The mock API responds with the same chunked encoding as the MHV API endpoint. You can drop PDF or text files of varying sizes into the mock API's content directory and it will serve them up randomly for each API request.

- Deployed the above mock API onto a standalone AWS instance in our dev environment.

- Configured [Toxiproxy](https://github.com/Shopify/toxiproxy) in front of the mock API, running on the same AWS instance. Toxiproxy allows you to dynamically configure varying latency and bandwidth constraints on incoming traffic. Adjusting the bandwidth available to the mock API was helpful in isolating different network behaviors, and will be helpful in simulating the characteristics of the AWS-VA VPN connection that we use to access MHV.

- Configured vets-api in dev to point to the mock API by updating `MHV_HOST`. 

- Authenticated with an available test-user on dev.vets.gov, then extracted the session token and used `curl` to perform API requests against the health records endpoint. (e.g. `url -v -X GET -H "Authorization: $VTOKEN" https://dev-api.vets.gov/v0/health_records > /tmp/test.pdf`)

- Used prometheus to examine the memory, filesystem, and network I/O responses to the various infrastructure elements that we can directly observe.

## Findings
### Iteration 1: Baseline
Without any changes to baseline implementation or configuration:
- The entire response is buffered by vets-api. The current health records implementation uses a Faraday client to get the health record from MHV, then passes the response object back to the controller where it can be returned to the user. This can be observed as a jump in the memory utilization of the vets-api instance (which is otherwise lightly-loaded) for each health record download. The memory utilization does seem to level off after a number of repeated downloads, probably because we hit a threshold where Ruby is collecting memory more aggresively. 
![app server memory buffering](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/medical-records/blue-button/2016/engineering/healthrec-vets-api-buffering.png)

- The reverse proxy also buffers the entire response. In this case the response is not stored in nginx's memory, but instead written to a temporary location on disk, as evidenced by a noticeable jump in disk I/O.
![reverse proxy disk buffering](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/medical-records/blue-button/2016/engineering/healthrec-revproxy-disk-buffering.png)

- Timing-wise, the transfer from mock API to vets-api takes place at whatever speed we configure Toxiproxy to allow (we do not have data about sustained download speeds from MHV via the AWS-VA VPN). The transfer between vets-api -> ELB -> reverse proxy is extremely fast since it's all within AWS's network. The download from reverse proxy (via CSR) is limited by the user's bandwidth. In this testing my typical cable modem connection was sustaining a download rate in the neighborhood of 300-500kbit/s.

- Other than the memory and disk use observed there was no other overall stress on vets.gov infrastructure. But again note that we are omitting the crucial CSR/VPN link by running the mock API within AWS.

### Iteration 2: Disable nginx buffering
Next we eliminated nginx's buffering with the `proxy_buffering off;` directive applied to the health records endpoint.
- As expected the disk I/O spike on the reverse proxy disappears. A comparison of `bytes received` vs. `bytes transmitted` on the reverse proxy shows that it is pulling the data from upstream at the same rate as it is sending it to the user (whereas with buffering in place, you'd see an almost instantaneous receive from upstream followed by a slow transmit downstream).
![reverse proxy network bytes received](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/medical-records/blue-button/2016/engineering/healthrec-revproxy-rcv-nobuffer.png)
![reverse proxy network bytes transmitted](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/medical-records/blue-button/2016/engineering/healthrec-revproxy-tx-nobuffer.png)

- Surprisingly, the `bytes received` of the reverse proxy did _not_ match the `bytes transmitted` of the vets-api instance. Instead vets-api is transmitting the data almost instantaneously. This result surprised us since it indicates that something between those instances must be buffering data. The only thing between those instances is the AWS elastic load balancer (ELB). Documentation is vague but indicates that ELBs _may_ buffer data. In this case it is clear that they are buffering the entire 90MB response payload.
![app server network bytes transmitted](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/medical-records/blue-button/2016/engineering/healthrec-vets-api-tx-fast.png)
![reverse proxy network bytes received](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/medical-records/blue-button/2016/engineering/healthrec-revproxy-rcv-nobuffer.png)

### Iteration 3: Investigate ELB buffering
- There are no configuration levers to control ELB buffering behavior. We did try changing the vets-api load balancer from using an HTTP (layer 7) listener to using a TCP (layer 4) listener. This had no effect, and the relative transmit/receive curves looked the same as before.

- We did try bypassing the ELB entirely, configuring the reverse proxy to point directly at a vets-api instance. In this case you see the `bytes received` by the reverse proxy match the `bytes transmitted` by vets-api. 
![app server network bytes transmitted - no elb](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/medical-records/blue-button/2016/engineering/healthrec-vets-api-tx-noelb.png)
![reverse proxy network bytes received - no elb](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/medical-records/blue-button/2016/engineering/healthrec-revproxy-rcv-noelb.png)

### Iteration 4: Streaming vets-api Implementation
- Implemented a [non-buffering MHV client](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/medical-records/blue-button/2016/engineering/streaming-implementation-notes.md) in vets-api. With this in place the input and output throughput of the vets-api instance match exactly, indicating that the ruby process is passing along chunks as they are received. In practice we still see a memory spike in the ruby process since it is opportunistically using available server memory, but the key is that the process is not obligated by design to store the entire content in memory at any given time.

The bytes transmitted/received curves at the right of these graphs demonstrate the correctly-implemented streaming implementation:
![app server network bytes received](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/medical-records/blue-button/2016/engineering/healthrec-streaming-vets-api-rx.png)
![app server network bytes transmitted](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/medical-records/blue-button/2016/engineering/healthrec-streaming-vets-api-tx.png)

### Iteration 5: End-to-end download from MHV
- MHV team staged a large (~87 MB) file on their development server. The file is binary gibberish but is served using the same chunking approach as the actual health record download endpoint. We hacked the health record client to retrieve this static file instead of making the usual pdf download API request.

- This testing included the full end-to-end proposed implementation:
  - Streaming implementation in vets-api
  - ELBs in the request/response path
  - Reverse proxies not buffering proxy responses and with `proxy_http_version = 1.1`

- In this scenario, the download from MHV to ELB is limited by the bandwidth of the VPN connection (where exactly within that connection is unknown) - the file streams to the ELB at the maximum rate that the VPN connection will allow.

- The download to the end user is in turn limited by the bandwidth of all of the internet elements between the user and the CSRs. This is typically slower than the VPN connection bandwidth so the content streams relatively quickly to the ELB and is then buffered there for the duration of the end user download.

- Very informally measured (reading off `Dload Speed` from curl and/or looking at the vets-api log file to see request processing time), we saw throughput of 2-4.5 MiB per second from our dev environment to MHV. So approximately 20-45 seconds for the staged 87 MB file.

- _Grain of salt: CSR throughput measurement via AWS CloudWatch is pretty coarse and we have not validated these values against the more accurate values present in the CSR console._ The below graph shows input/output throughput measured at the lone dev environment CSR. The bandwidth spikes are attributable to multiple _sequential_ attempts at retrieving the staged MHV file (spikes on the left were curl requests from vets-api instance; spikes on the right were end-to-end downloads). Provisionally, it looks like a single download will consume a significant percentage of our total available bandwidth, albeit for a short amount of time. A gross analysis of the overall throughput requirements for all MHV traffic is presented separately.
![CSR throughput](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/medical-records/blue-button/2016/engineering/healthrec-csr-throughput.png)

## Recommendations
1. ~~We need to verify the behavior of large file downloads across our VPN tunnel, especially since the CSR's behavior upon exceeding the licensed bandwidth limit is to start dropping packets. In particular, is a transfer of a single 90MB file enough to exceed the bandwidth limit? If so we will have to consider some more sophisticated traffic shaping than the traffic dumping that the CSR does.~~

2. Given the low user counts that we expect on initial launch, and the low frequency of very large health records, we can at least consider launching with no configuration or implementation changes. Our production infrastructure should tolerate such traffic. It may result in some alarms due to spikes in memory use or disk I/O, similar to what we saw before tuning alerts for GIDS which also handles large file uploads and downloads. However since these alerts would be for our flagship application they would require more diligence by on-call staff.

3. Of the infrastructure elements that we control, we should first consider eliminating the buffering in vets-api. Introducing memory pressure into our monolithic application seems like it carries the most risk. We should also consider tuning the number of threads/workers and connections to ensure those resources aren't starved.

4. Assuming the presence of an ELB in this download pipeline, and considering that we can't disable ELB buffering, we can consider taking advantage of it to do the buffering for us. The upside of doing so is that we don't have to provision more memory or disk I/O for our revproxy or appserver instances, and we expect Amazon's ELBs to be more than capable of handling this amount of traffic. The downside of doing so is that its buffering behavior is entirely opaque to us - and if it starts causing problems we have no real recourse.

5. If we are comfortable with ELB's buffering behavior, disable proxy buffering in the reverse proxy. In this case we are trading the use of an additional network connection (between reverse proxy and ELB) for the duration of the download instead of some disk utilization. As long as we ensure we have tuned network connection handling in Linux/nginx appropriately this seems overall easier for us.

## Additional Recommendations
All of the above is predicated on the assumption that we have to treat health record downloads as a pass-through - returning the file in the context of a direct API request. There has been discussion of instead staging health record files somewhere within AWS. Users would make an initial API request to get their health records, which would return a reference to a direct download URL. This could either be a location under api.vets.gov or a separate domain similar to what Gmail does for attachment content (usercontent.vets.gov). 

The staging approach would have some benefits:
- We could provision the file staging storage and download mechanism specifically for this purpose rather than conflating it with our overall nginx/appserver configuraiton.
- Absent file staging, if a user's download is interrupted, we have to retrieve the entire contents from MHV and start over. With a staging approach at minimum we could avoid the cost of retrieving health records from MHV since they would persist at the staging location for some amount of time. We could potentially also support resumption of an interrupted download.
- The staging approach has some benefits for frontend experience if it is implemented as a direct download (e.g. via an obfuscated URL path) instead of an API request that requires authentication. In particular it avoids the need for custom AJAX file download code.

While the file staging approach is not _necessary_ from a technical and operational perspective, it is worth ongoing consideration. Note that in any such approach, the content still needs to traverse the TIC/CSR -- it can't be staged on an entirely external system.
