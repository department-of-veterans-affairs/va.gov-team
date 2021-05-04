----

# We're moving our docs! 
### Find [the latest version of this page](https://depo-platform-documentation.scrollhelp.site/integrations/Request-Processing.724992009.html) on the Platform website.

### Still can't find what you're looking for? Reach out to [#vfs-platform-support](https://dsva.slack.com/archives/CBU0KDSB1) on Slack.

----

# Vets API Request Processing

Request processing occurs after Routing {TODO - add content}, [Authentication](authentication.md), and [Authorization](authorization.md). It consists of validating any user input or parameters, processing that input, and generating a response.

## Example

## Caching

## Error Handling

## Instrumentation

## External Service Client Instantiation

## Implementation Considerations

### Security

### Performance

Take into consideration the time and resources that are required to process a request. In order to improve the user experience and prevent resource exhaustion at the infrastructure level, try to minimize the request process time, and ensure that implementations are as performant as is realistic given the requirements. Generally, Vets-API recommends request processing not exceed 100ms. If this is unavoidable, consider running the process asynchronously {TODO - add content}, and ensure that the user experience takes this processing time into account.

<hr>

Back: [Vets API PDF Generation](pdf-generation.md)

Next: [Vets API Response Serialization](response-serialization.md)
