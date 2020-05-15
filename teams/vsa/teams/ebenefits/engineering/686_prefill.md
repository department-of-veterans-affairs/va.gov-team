# Current issues

## front end

Prefill is supposed to work out of the box but this is predicated on the idea that the data coming from the prefill URL and the data on the front end is named the same. Our prefill data for the veteran is coming in called `veteranInformation` and on the front end it is called `veteranContactInformation`. Having the data named something different can be fixed using a function called `prefillTransformer` but that is also having problems in our form -

When the form loads there is a function that is supposed to fire called `prefillTransformer` however that is never being fired on the front end. I suspect this is because the prefill URL is returning an error on my local machine. This issue is detailed below -

## back end

On the front end the call to the prefill URL is failing on localhost with an error from EVSS

```
{ title: "Bad Gateway", detail: "Received an an invalid response from the upstream server", code: "EVSS502" }
```

We didn't think our prefill should be using EVSS so if it is we will need to get Lihan to fix this.

Either way the call to the prefill URL is returning an error on localhost which makes it impossible to fix prefill on localhost until we figure out what is causing this issue.
