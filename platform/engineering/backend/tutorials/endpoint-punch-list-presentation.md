# Vets-API Endpoint Punch List Presentation

## Presentation

https://hackmd.io/p/r1Mn_TqYG#/

## Source File

---
slideOptions:
  transition: slide
  slideNumber: true

---

<!-- .slide: data-background="http://completetri.com/wp-content/uploads/checklist.jpg"-->

<div style="background-color: rgba(0, 0, 0, 0.7); color: #fff; padding: 20px; margin: 0 -1em;">

# Endpoint Punch List

</div>

---

<!-- .slide: data-background="https://i.imgur.com/u90MMBi.jpg"-->

<div style="background-color: rgba(0, 0, 0, 0.5); color: #fff; padding: 20px;">

# Endpoint Code

</div>

---

<!-- .slide: data-background="https://i.imgur.com/g2PF0NG.jpg"-->

<div style="background-color: rgba(0, 0, 0, 0.5); color: #fff; padding: 20px;">

# Swagger Docs

</div>

---

<!-- .slide: data-background="https://i.imgur.com/yjtyBTS.jpg"-->

<div style="background-color: rgba(0, 0, 0, 0.5); color: #fff; padding: 20px;">

# Betamocks

</div>

---

<!-- .slide: data-background="https://i.imgur.com/gieKISZ.jpg"-->

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

<!-- .slide: data-background="https://i.imgur.com/I6F7OId.jpg"-->

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

<!-- .slide: data-background="https://i.imgur.com/I6F7OId.jpg"-->

---

<!-- .slide: data-background="#efefef" -->

## [Service Object Implementation](https://gist.github.com/hpjaj/67eeb7cc5f69ac672d0176fcb1f06dc7)

---

<!-- .slide: data-background="#efefef" -->

## [Controller/Route/Serializer](https://gist.github.com/hpjaj/0780168e80d5a4ae09a17d35b8bb6328)

---

<!-- .slide: data-background="#2a9a40" -->

# Swagger Docs

---

<!-- .slide: data-background="https://i.imgur.com/g2PF0NG.jpg"-->

<div style="background-color: rgba(0, 0, 0, 0.5); color: #fff; padding: 20px; margin-bottom: 8em;">

## Request/Response Docs

</div>

---

<!-- .slide: data-background="https://i.imgur.com/TQPWnBQ.jpg"-->

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

[Swagger implementation](https://gist.github.com/hpjaj/2d0d332d39e77aed6bdb993268d01078)<!-- .element: class="fragment" data-fragment-index="4" -->

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

## [Betamocks Config](https://gist.github.com/hpjaj/3ff754ace8bfd7e56ce5abb48a8314e8)

---

<!-- .slide: data-background="#efefef" -->

## [Betamocks Recording & Mock Data Table](https://gist.github.com/hpjaj/def97d12c67902e6d2af7e628a0870e5)

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
- [Spec files examples](https://gist.github.com/hpjaj/a9ffc192a75fc3d5726404a3ddc07942)

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

### [`match_response_schema` Implementation](https://gist.github.com/hpjaj/2f1be22e1bca1d694a574812e97f32b4)

---

<!-- .slide: data-background="#2a9a40" -->

# In Conclusion

---

<!-- .slide: data-background="https://i.imgur.com/oX8GSbI.jpg"-->

<div style="background-color: rgba(0, 0, 0, 0.8); color: #fff; padding: 20px;">

## [Endpoint Punch List](https://hackmd.io/s/HkZNMeCtG)

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
- [Endpoint Punch List](https://hackmd.io/s/HkZNMeCtG)

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

