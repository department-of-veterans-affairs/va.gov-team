from locust import events, FastHttpUser, TaskSet, task
import requests
import uuid

class UserBehavior(TaskSet):
    executionCount = 0
    headers = {}

    def on_start(self):
        # Add integration APIGW ID header
        self.headers['x-apigw-api-id'] = '<redacted>'

        # Add authorization JWT
        self.headers['Authorization'] = "Bearer <redacted>"

    @task(1)
    def shorten_url(self):
       self.executionCount += 1

       longUrl = "https://dev.va.gov/health-care/appointment-check-in/?id=" + str(uuid.uuid4())

       with self.client.post("/actions/short-urls", json={"expires":"2022-02-12T00:00:00-07:00", "url":longUrl}, headers=self.headers, catch_response=True) as createUrlResponse:
           if createUrlResponse.status == "401":
               print("Error decoding JWT.")
               print(createUrlResponse.headers)


       if self.executionCount % 10 == 0:
           with self.client.get(createUrlResponse.json()["shortUrl"], headers=self.headers, allow_redirects=False, name="/short-urls/{id}", catch_response=True) as getUrlResponse:
               # print(getUrlResponse.headers['Location'])
               if getUrlResponse.headers['Location'] != longUrl:
                   getUrlResponse.failure("Did not get correct redirect")


class ShortUrlUser(FastHttpUser):
    tasks = [UserBehavior]

@events.request.add_listener
def on_request(request_type, name, response_time, response_length, response, exception, context, **kwargs):
    """
    Event handler that get triggered on every request.
    """
    if exception:
        print(response.text)
        print(response.headers
