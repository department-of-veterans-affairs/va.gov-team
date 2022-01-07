# Current State
VA.gov currently has two authentication processes for Veterans. One of these processes is a single sign-on (SSO) solution which facilitates a Veteran to be able to login to VA.gov with three different credential providers, DSLogon, MyHealtheVet, and ID.me. The SSO solution currently is offered on a random basis to 30% of all Veterans who attempt to login to VA.gov. There is also an option for a Veteran to login at one of these partner sites, DSLogon or MyHealtheVet, then go to VA.gov and continue to be logged in instead of needing to re-enter their credentials. The key metric to measure the Veteran login experience is the “SAML Response Rate.” This metric determines if a Veteran is able to complete the [login flow](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/login/reference-documents/auth/authentication-and-authorization.md). 

The standard login flow of a user, followed by a link to the technical view of the architecture: (User browser -> local ISP -> Azure F5 -> TIC (Azure) -> several load balancers -> “post to eauth” -> eauth (IAM) -> CSP -> eauth -> browser/api/vets-website) [Technical Architecture of va.gov](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/platform/engineering/TechnicalArchitectureOverview.md).

# Goals
1. Gain confidence that the technical VA.gov login components are operating correctly.
2. Ensure SAML requests and responses are being sent, received, and logged at each of the required junction points.
    1. User/broswer -> VA.gov -> ISAM -> ID.me -> ISAM -> VA.gov -> User/browser
    2. Identify potential problems at each juncture by isolating missing SAML Requests and Responses within the lifecycle of a user login.
3. Ensure quality metrics regarding login performance are created
    1. VA.gov:
        1. Percentage of requests and responses received. This determines the successful login rate of a user who clicks on one of the CSPs on the sign-in modal.
        1. Latency average anomalies for each of the login processes. Depending on which login process is being measured it could highlight an outage with a dependent system.
        1. Error rates regarding user login actions.
            1. Statistical analysis of browser versions, IP addresses, CSP type, time of day, and other important facts.
        1. Individual user login rates to indicate malicious activity.
            1. More to follow.
        1. SAML request totals, SAML response totals. Indicates trend of number of user login attempts
            1. Additionally broken down by CSP
        1. Number of requests missing a response
            1. Statistical analysis of browser versions, IP addresses, CSP type, time of day, and other important facts. This could show an indication of a change that caused a browser incompatibility issue.
4. IAM: TBD
5. ID.me: TBD
6. MHV: TBD
7. DSLogon: TBD

# Results
Analysis of VA.gov SAML Requests and Responses with the newly implemented vagov_saml_prod cookie:
![Screen Shot 2021-05-04 at 5 01 34 PM](https://user-images.githubusercontent.com/71290526/117069454-7b938900-acfa-11eb-8afc-bc7d37c12c76.png)

# SAML Response Rate Flow
  The expected SAML cookie tracker flow [reference image below]:
1. Veteran clicks on the sign-in button on VA.gov. This button opens a modal that presents the Veteran with the three login options. 
1. Once they click on any of these methods, a SAML request is created within the VA.gov API and logged on our backend servers (running in AWS). 
1. As this request is created, the VA.gov frontend creates a request which is then POSTed to the next hop, the Identity Broker, also known as the ISAM. 
1. The Veteran is redirected through the Identity broker and onto the credential provider.
    1. Within the Veterans browser a cookie is created, something that can be used to uniquely identify the Veterans login attempt before they authenticate. 
    1. This cookie information is also logged by the VA.gov API to facilitate the measurement of the “SAML Response Rate.” 
1. The Veteran then enters their credentials and Multi-Factor Authentication (MFA) information into the credential providers site. 
    1. One of the credential providers, ID.me, has adopted the storage of the above mentioned cookie tracker information and also stores this information in their logs to measure the Veteran Login experience. 
1. After the credentials have been accepted, the Veteran is redirected back to the ISAM along with the tracking cookie information from the original VA.gov API. 
    1. The ISAM logs the response from the credential provider with the cookie tracker data. 
1. The ISAM records and repackages the users information from the credential provider and redirects them back to VA.gov. 
1. VA.gov consumes the cookie tracking information from the ISAM and records this as a SAML response. 
1. The combination of every request and response is then matched up to calculate the "SAML Response Rate." More specifically, an identifier from the SAML request is matched up with an identifier from the SAML response via the cookie tracker. 
    1. If a SAML response identifier cannot be found to match the SAML request, then we annotate this as a "missing response." We measure the matches overtime to determine the “SAML Response Rate”. 

![SAML Cookie Tracker (2)](https://user-images.githubusercontent.com/71290526/116739664-ef175c80-a9c1-11eb-91bd-838561531dda.png)


# SAML Response Rate Metric
The metric creation flow:
1. Obtain logs from va.gov infrastructure
    1. Parse 24 hours of vets-api logs from AWS Cloudwatch Log Group `dsva-vagov-prod/srv/vets-api/src/log/vets-api-server.log`, example [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsp/teams/identity/Cookie_Tracer/cookie_tracer_vagov.py).
    1. Filter the AWS logs for the `vagov_saml_request_prod` cookie by searching for the `transaction_id` and `saml_request_id` attributes.
        1. An example of a query that is used to obtain only the saml requests and responses (excluding custom/inbound, verify and signup):
        >  logquery = "fields @timestamp, @message | sort @timestamp desc | filter @message like \"transaction_id\" | parse @message \"SSOe: * =>\" as SSOe_reqresp | parse @message '\"path\":\"*\"' as Path |parse @message '\"remote_ip\":\"*\"' as IP | parse @message '\\\"transaction_id\\\"=>\\\"*\\\"}\"}' as transaction_id | parse @message '\"patientIcn\":\"*\"' as patientICN | parse @message '\"request_id\":\"*\"' as RequestID | parse @message '\"uuid\":\"*\"' as UUID | parse @message '\"icn\\\"=>\\\"*\\\"' as ICN | parse @message '\"id\\\"=>\\\"*\\\"' as ID_samlrequestid | parse @message '\"authn\\\"=>\\\"*\\\"' as Authn | parse @message '\"message\":*,' as loginstatus | parse @message '\"type\\\"=>\\\"*\\\"' as Type | filter transaction_id not like 'nil' OR Authn not like 'nil' OR Type not like 'nil' | filter Type not like 'signup' AND Type not like 'custom' AND Type not like 'mfa' AND Type not like 'verify' | filter @message like \"SAML Response\" OR @message like \"SAML Request\" | filter ispresent(SSOe_reqresp) AND ispresent(transaction_id) AND ispresent(Authn) AND ispresent(Type) | limit 10000"
    1. Next you must format the data exports from AWS in a way that allows you to perform a reverse inner join on `transaction_id` and `saml_request_id`, in other words, create a list of requests and responses that do not have a match but also merge the matches into a single row. An example of this can be found here.
    The data should look similar to the following:
    ![Screen Shot 2021-05-03 at 12 15 03 PM](https://user-images.githubusercontent.com/71290526/117067487-1474d500-acf8-11eb-9c90-3e4d0cc6ad13.png)
        1. We should "mostly" match `transaction_id` across the request/response of both loa1 and loa3 authentication contexts for a given user login attempt
        1. The `saml_request_id` will match for an loa1 request and response, but will not match for the subsequent loa3 (which will have a different `saml_request_id`).
        1. There should be 3 `RequestID`s, one for the first call that creates an loa1 request, one that takes an loa1 response and then creates an loa3 request (on the same backend process), and then the last one that takes the loa3 response.
    1. The next phase involves running different types of analysis on the subsequent data sets. For all of the data analysis we have used a python library called `Pandas`. Examples in script [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsp/teams/identity/Cookie_Tracer/single_hour_analysis.py) and below:
        1. Merge va.gov requests with va.gov responses on `transaction_id` and `ID_samlrequestid`, leaves a column called `_merge` that will contain values left_only, both, and right_only. Left_only indicates the left dataframe (va.gov requests) didn’t have a match in the right dataframe (VA.gov responses). Both means found a match in both data sets. Right_only means found a response but no request.
        > va_reqresp_df = pd.merge(vagov1_request, vagov1_response, how='outer', on=['transaction_id','ID_samlrequestid'], indicator=True) 
        1. Create a sub dataframe from the merge of va.gov requests and responses (va_reqresp_df) which only contains requests matched with responses (both in the _merge column)
        > va_req_with_resp_df = va_reqresp_df.loc[va_reqresp_df['_merge'] == 'both'] 
  1. Obtain logs from IAM Splunk (Identity Broker)
      1. Request 24 hours of saml request and response logs from the IAM team. They utilize Splunk for their logging. [This search](https://logsaz.iam.va.gov/en-US/app/fraud_reporting/ssoe_cookie_tracker_version_3?form.field1.earliest=1620691200&form.field1.latest=1620705599&form.hreq=*) query can be used to extract data, recommend only trying to extract 2 hours at a time. Once the table starts to show some data you need to go into the "[lookup editor]"(https://logsaz.iam.va.gov/en-US/app/lookup_editor/lookup_list#) to extract the csv with the log data. Once on the "lookup editor" page, select the "Fraud Reporting" app. Then click on "export" under the actions cloumn for the "ssoe_cookie_results3.csv" lookup. You will want to open the excel file and validate the c_time matches the search time, I would often have to download the file from export several times before I got the actual search I just performed. Its also imprt to ensure the table is showing data in the original query, this is how you know the parsing for the export has completed. Examples in script [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsp/teams/identity/Cookie_Tracer/single_hour_analysis.py) and below:
          1. Merge the va.gov requests matched with responses dataframe (va_req_with_resp_df) which doesn't contain any requests or responses missing a match, with the IAM requests dataframe on transaction_id and ID_samlrequestid. This will create a dataset that has a column titled "exists" with values of left_only, both, and right_only. left_only means there was no matching request from the "IAM requests" log with the "request and response from va.gov matching" dataset. Both means there was a match, right_only means an IAM request was not found in the va.gov requests log. 
          > va_reqresp_merge_iamrequest_df = pd.merge(va_req_with_resp_df, iam_request, how='outer', on=['transaction_id','ID_samlrequestid'], indicator='exists')
          1. create a sub data frame that contains requests found in va.gov that matched with a response but no subsequent request was found in the IAM logs.
          > va_reqresp_missing_iam_request_df = va_reqresp_merge_iamrequest_df.loc[va_reqresp_merge_iamrequest_df['exists'] == 'left_only']
          1. merge va.gov requests data set with iam_request on transaction_id and ID_samlrequestid, leaves a column called _merge that will contain values left_only, both, and right_only. left_only indicates the left dataframe (va.gov requests) didn't have a match in the right dataframe (IAM requests). Both means found a match in both data sets. right_only means found a request in the IAM requests without a match in the va.gov requests.
          > va_iam_request_merge = pd.merge(vagov1_request, iam_request, how='outer', on=['transaction_id','ID_samlrequestid'], indicator=True)
          1. create a sub dataframe that contains requests found in va.gov that did not have a match in the IAM requests dataset (left_only) 
          > va_iam_request_missing_total = va_iam_request_merge.loc[va_iam_request_merge['_merge'] == 'left_only']
1. Obtain logs from ID.me (Credential Provider / CSP / Identity Provider)
      1. Request 24 hours of saml request and response logs from the ID.me team.
          1. Merge

# Query AWS Logs for SSOe Events
Things to know before:
  * aws cloudwatch insights (aws console) limits you to 10k results per query, if the query were to take longer than 15 minutes it times-out and what you get back if the query would result in more than 10k is sketchy/not reliable
  * `get_query_results` (python boto3 cli for cloudwatch logs) doesn’t have a paginator so this doesn’t alleviate the 10k result limit issue.
  * `filter_log_events` (python boto3 cli for cloudwatch logs) has a paginator however the `filterPattern` doesn't allow for parsing of data into columns, it returns an event which is a list of dictionaries (super pain to deal with without parsed columns to ensure the data you want exists in the event accurately)
  * AWS Athena cloudwatch connector has issues with logs that dont look exactly the same with each event (think of columns needing to match) so even with grok pattern matching we haven’t been successful because there is no "make this column NULL if 0 matches found and move onto the next column"
  * Grafana Loki is planned to be released to production in June, all future analysis of these types of events should shift to Loki rather than using unreliable scripts and Athena.

## AWS cli query:
  1. Setup your terminal to run aws cli commands, examples in this [file](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsp/teams/identity/Cookie_Tracer/cookie_tracer_vagov.py). [aws-vault](https://github.com/99designs/aws-vault) is an excellent aws credential storage solution. Also recommend the setup of a python virtual environment to ensure all your dependencies are set up correctly.
  1. Within [this script](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsp/teams/identity/Cookie_Tracer/cookie_tracer_vagov.py) substitute the foldername variable with the directory you want the resulting va.gov saml request and response matching logs to go to, along with the start and end variables with the appropriate query datetimes. The query time should be kept to no longer than two hour chunks. For longer analysis it is recommended that you use a script like [this](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsp/teams/identity/Cookie_Tracer/file_merger.py) to combine the csv files. 
  1. All data analysis after the AWS cli queries are completed are within the scope of the SAML Response Rate Metric section of this document.

# Next Steps
## Questions for IAM:
  1. How do csp of CAC get transaction_id and samlrequest_ids?
      1. These identifiers are being used with other partners than va.gov.
  1. How confident are you that splunk is keeping all saml log events?
      1. Fairly confident, work being done on 5/6/21 to confirm this.
## Questions for ID.me:
  1. Do you record the va.gov saml transaction_id and/or saml_request_id within your logs to assist with measuring the va.gov login experience?
      1. No
## Questions for VA.gov Identity Team
  1. At what point of the login process do we generate the rails log that contains the transaction ID
      1. When we call ‘auth new’
  1. Do we have 1 transaction id per request or 1 saml request id per request?
      1. 1 saml request ID per transaction (request and response for loa1, new saml request id for same user for loa3). The transaction id should be the same for the entire login process of the user (both loa1 and loa3)
  1. Do we see more loa1s are lost or loa3, etc.
  1. Do we have trends based on user agent for missing responses
  1. Perform statistical analysis of missing responses based on browser user agent
      1. Add full log not just requests

## Innovation
Develop ability within va.gov logs to trace success of a given user. This would require some form of login step recording prior to authentication being completed, but it could end up helping to detect specific users who are having repeated issues that are otherwise lost in the sea of random network errors.
