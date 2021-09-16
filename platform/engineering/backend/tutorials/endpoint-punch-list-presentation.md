----

# We're moving our docs! 
### Find [the latest version of this page](https://depo-platform-documentation.scrollhelp.site/developer-docs/Vets-API-Endpoint-Punch-List-Presentation.1886846984.html) on the Platform website.

### Still can't find what you're looking for? Reach out to [#vfs-platform-support](https://dsva.slack.com/archives/CBU0KDSB1) on Slack.

----


# Vets-API Endpoint Punch List Presentation

## Presentation
* [Video presentation](https://www.youtube.com/watch?v=V_i8JLXk5rg)
* [view slides](https://hackmd.io/@z9SepQsSSlu0NKymVGnXTA/r1ZdSNJmr#/) (view)
* [edit slides](https://hackmd.io/FdnzysLHRD2BuKostPBUxw?both)

=======================
## Source File 
(this is a versioned backup of the slides in hackmd)

---
slideOptions:
  transition: slide
  slideNumber: true

---

<!-- .slide: data-background="https://raw.githubusercontent.com/department-of-veterans-affairs/va.gov-team/master/platform/engineering/backend/tutorials/endpoint-punch-list-presentation/images/checklist.jpg"-->

<div style="background-color: rgba(0, 0, 0, 0.7); color: #fff; padding: 20px; margin: 0 -1em;">

# Endpoint Punch List

</div>

---

<!-- .slide: data-background="https://raw.githubusercontent.com/department-of-veterans-affairs/va.gov-team/master/platform/engineering/backend/tutorials/endpoint-punch-list-presentation/images/emails-controller.jpg"-->

<div style="background-color: rgba(0, 0, 0, 0.5); color: #fff; padding: 20px;">

# Endpoint Code

</div>

---

<!-- .slide: data-background="https://raw.githubusercontent.com/department-of-veterans-affairs/va.gov-team/master/platform/engineering/backend/tutorials/endpoint-punch-list-presentation/images/profile_swagger.jpg"-->

<div style="background-color: rgba(0, 0, 0, 0.5); color: #fff; padding: 20px;">

# Swagger Docs

</div>

---

<!-- .slide: data-background="https://raw.githubusercontent.com/department-of-veterans-affairs/va.gov-team/master/platform/engineering/backend/tutorials/endpoint-punch-list-presentation/images/pciu-mockdata.jpg"-->

<div style="background-color: rgba(0, 0, 0, 0.5); color: #fff; padding: 20px;">

# Betamocks

</div>

---

<!-- .slide: data-background="https://raw.githubusercontent.com/department-of-veterans-affairs/va.gov-team/master/platform/engineering/backend/tutorials/endpoint-punch-list-presentation/images/tests.jpg"-->

<div style="background-color: rgba(0, 0, 0, 0.5); color: #fff; padding: 20px;">

# Spec Coverage

</div>

---

<!-- .slide: data-background="#efefef" -->

# Frontend Signoff

```javascript
{
  "data": {
    "attributes": {
      "email": "john@example.com",
      "effective_at": "2018-02-27T14:41:32.283Z"
    }
  }
}
```

:white_check_mark: :white_check_mark: :white_check_mark: 

---

<!-- .slide: data-background="#2a9a40" -->

# Endpoint Code

---

<!-- .slide: data-background="https://raw.githubusercontent.com/department-of-veterans-affairs/va.gov-team/master/platform/engineering/backend/tutorials/endpoint-punch-list-presentation/images/pciu-swagger.jpg"-->

---

<!-- .slide: data-background="#efefef" -->

# Endpoint Creation

- Integrate an external service<!-- .element: class="fragment" data-fragment-index="1" -->
- Service object<!-- .element: class="fragment" data-fragment-index="2" -->
- Controller, route and serializer<!-- .element: class="fragment" data-fragment-index="3" -->

---

<!-- .slide: data-background="#efefef" -->

# Service Object

- Calls the service's endpoints<!-- .element: class="fragment" data-fragment-index="1" -->
- Dependencies<!-- .element: class="fragment" data-fragment-index="2" -->
    - Service class<!-- .element: class="fragment" data-fragment-index="3" -->
    - Config class & Faraday connection<!-- .element: class="fragment" data-fragment-index="4" -->
    - Response class<!-- .element: class="fragment" data-fragment-index="5" -->
    - settings.yml<!-- .element: class="fragment" data-fragment-index="6" -->


---

<!-- .slide: data-background="https://raw.githubusercontent.com/department-of-veterans-affairs/va.gov-team/master/platform/engineering/backend/tutorials/endpoint-punch-list-presentation/images/pciu_swagger.jpg"-->

---

<!-- .slide: data-background="#efefef" -->

## [Service Object Implementation](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/platform/engineering/backend/tutorials/endpoint-punch-list-presentation/supporting_code/service-object-implementation.md)

---

<!-- .slide: data-background="#efefef" -->

## [Controller/Route/Serializer](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/platform/engineering/backend/tutorials/endpoint-punch-list-presentation/supporting_code/controller-route-serializer.md)

---

<!-- .slide: data-background="#2a9a40" -->

# Swagger Docs

---
<!-- .slide: data-background="https://raw.githubusercontent.com/department-of-veterans-affairs/va.gov-team/master/platform/engineering/backend/tutorials/endpoint-punch-list-presentation/images/profile-swagger.jpg"-->

<div style="background-color: rgba(0, 0, 0, 0.5); color: #fff; padding: 20px; margin-bottom: 8em;">

## Request/Response Docs

</div>

---

<!-- .slide: data-background="https://raw.githubusercontent.com/department-of-veterans-affairs/va.gov-team/master/platform/engineering/backend/tutorials/endpoint-punch-list-presentation/images/swagger-response.jpg"-->

<div style="background-color: rgba(0, 0, 0, 0.5); color: #fff; padding: 20px; margin-bottom: 8em;">

## Model Docs

</div>

---

<!-- .slide: data-background="#efefef" -->

# Swagger Files

```bash
app/swagger/requests/*
```
<!-- .element: class="fragment" data-fragment-index="1" -->

```bash
app/swagger/schemas/*
```
<!-- .element: class="fragment" data-fragment-index="2" -->

```bash
app/controllers/v0/apidocs_controller.rb
```
<!-- .element: class="fragment" data-fragment-index="3" -->

[Swagger implementation](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/platform/engineering/backend/tutorials/endpoint-punch-list-presentation/supporting_code/swagger-impementation.md)<!-- .element: class="fragment" data-fragment-index="4" -->

---

<!-- .slide: data-background="#2a9a40" -->

# Betamocks

---

<!-- .slide: data-background="#efefef" -->

# Betamocks Process

1. Set config<!-- .element: class="fragment" data-fragment-index="1" -->
2. Create recording<!-- .element: class="fragment" data-fragment-index="2" -->
3. Update mock data table<!-- .element: class="fragment" data-fragment-index="3" -->

---

<!-- .slide: data-background="#efefef" -->

## [Betamocks Config](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/platform/engineering/backend/tutorials/endpoint-punch-list-presentation/supporting_code/betamocks-config.md)

---

<!-- .slide: data-background="#efefef" -->

## [Betamocks Recording & Mock Data Table](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/platform/engineering/backend/tutorials/endpoint-punch-list-presentation/supporting_code/betamocks-recording-mock-data-table.md)

---

<!-- .slide: data-background="#2a9a40" -->

# Spec Coverage

---

<!-- .slide: data-background="#efefef" -->

# Spec Areas

- Service object specs
- Request specs
- VCR cassettes
- Response schema
- [Spec files examples](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/platform/engineering/backend/tutorials/endpoint-punch-list-presentation/supporting_code/spec-files-examples.md)

---

<!-- .slide: data-background="#efefef" -->

## `match_response_schema`

```ruby
expect(response).to match_response_schema(
  'email_address_response'
)
```
<!-- .element: class="fragment" data-fragment-index="1" -->

---

<!-- .slide: data-background="#efefef" -->

### [`match_response_schema` Implementation](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/platform/engineering/backend/tutorials/endpoint-punch-list-presentation/supporting_code/match_response_schema-implementation.md)

---

<!-- .slide: data-background="#2a9a40" -->

# In Conclusion

---

<!-- .slide: data-background=""https://raw.githubusercontent.com/department-of-veterans-affairs/va.gov-team/master/platform/engineering/backend/tutorials/endpoint-punch-list-presentation/images/endpoint-punch-list.jpg"-->

<div style="background-color: rgba(0, 0, 0, 0.8); color: #fff; padding: 20px;">

## [Endpoint Punch List]()

</div>

---

<!-- .slide: data-background="#efefef" -->

# Resources

- [Integrate an external service](https://github.com/department-of-veterans-affairs/devops/tree/master/docs/External%20Service%20Integrations)
- [Email address endpoint PR](https://github.com/department-of-veterans-affairs/vets-api/pull/1718)
- [Email address Betamocks config PR](https://github.com/department-of-veterans-affairs/vets-api/pull/1746)
- [Email address Betamocks recording PR](https://github.com/department-of-veterans-affairs/vets-api-mockdata/pull/13)
- [Setup Swagger locally](https://github.com/department-of-veterans-affairs/vets-api/tree/master/app/swagger)
- [Setup Betamocks](https://github.com/department-of-veterans-affairs/vets-api/blob/master/docs/setup/betamocks.md)
- [vets-api-mockdata readme](https://github.com/department-of-veterans-affairs/vets-api-mockdata/blob/master/README.md)
- [Endpoint Punch List]()

---

<!-- .slide: data-background="#efefef" -->

# Questions?

---

<!-- .slide: data-background="#efefef" -->

# Q & A Takeaways

- get the API correct, collaborate with the architects
- dealing smartly and proactively with the error edge cases
- insight into how the middleware is being instrumented, and references to them
- alphabetize the Swagger API endpoints
- automate the inclusion of the files in the apidocs controller

---

<!-- .slide: data-background="#2a9a40" -->

# Thanks!

