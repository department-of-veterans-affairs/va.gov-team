# Contact Info
We can’t prepopulate the ‘I live on a military base outside the US’ every time because when an overseas address can’t be verified, the VA Profile backend does its own validation and changes the address type from OVERSEAS MILITARY to DOMESTIC. This is why even though we’re submitting an address type of overseas military, the API returns domestic.

## Errors

You can technically get back 2 different service failure error screens, depending on what status you get back. We do this b/c the status helps us determine how bad the response was and if we can give a user a refresh option. Right now, for the general cases, we have [404, 500, 502] that are not recoverable(no refresh) and [408, 503, 504] which are considered recoverable(with refresh)
