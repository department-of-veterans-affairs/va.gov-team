### Overview

This document describes how to implement content streaming in vets-api.

In a typical API request interaction, vets-api receives a request, invokes one or more backend systems to retrieve data, transforms that data appropriately, and then returns it to the user. In the case of retrieving a large file from the backend system (for example, health record downloads or secure messaging attachments), this means that vets-api will buffer the entire content in memory within the vets-api rails process before starting to send it to the API client. 

Instead it is possible to implement content streaming. This means that vets-api will retrieve content from the backend system in chunks, and send each chunk to the API client as it is received instead of buffering the contents in memory. (In practice, there are [other infrastructure elements](Large File Download.md) that may buffer the content, but this implementation at least protects the rails process from being obligated to store this content in memory). 

### Rails Implementation

The overall approach is to implement a backend service client that will produce a stream of chunks, and then consume/write that stream back to the API client. 
- While most of our existing backend clients use Faraday as an HTTP library, it does not support streaming content. Net::HTTP will produce a stream of chunked content.
- On the controller side, you gain the ability to stream content by including `ActionController::Live`. 
- Then, create an `Enumerator` to join the two:
```
class MyController < ApplicationController
  include ActionController::Live
  
  def get_big_content
    chunk_stream = Enumerator.new do |stream|
      backend_client.get_content(other_params, stream)
    end
    # (Should also set response headers here, see note below)
    chunk_stream.each do |c|
      response.stream.write c
    end
    response.stream.close
  end
end

class BackendClient

  def get_content(other_params, yielder)
    uri = URI.join(base_path, "bluebutton/bbreport/#{doctype}")
    request = Net::HTTP::Get.new(uri)
    request['Custom-Header'] = 'value'
    Net::HTTP.start(uri.host, uri.port, use_ssl: (uri.scheme == 'https')) do |http|
      http.request request do |response|
        response.read_body do |chunk|
          yielder << chunk
        end
      end
    end
  end
end
```
The above implementation is currently missing one key feature which is the ability to ferry headers from the backend service response into the API response. Doing so is a little awkward because you have to write the API response headers before you start writing the response body, but the headers are not available from the Net::HTTP client until you've taken the first element from the Enumerator. So you have to `take(1)` from the Enumerator, then ferry your headers, write the first taken chunk, then proceed normally.

### Reverse Proxy Configuration
Another major point to be aware of is that since we have a reverse proxy sitting in front of the application servers, you must set `proxy_http_version 1.1;` in nginx configuration, otherwise nginx will abruptly close the response stream after one or two chunks. 
