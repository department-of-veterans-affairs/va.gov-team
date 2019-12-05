# Benefits API

Note: This is a draft. Official spec will be done using apipie or other tool that generates documentation from code based on DSVA recommendation.

## Create a claim

### Request

`POST /claims`
```
{
  claim: {
    first_name: 'XXX',
    ...
  }
}
```

### Response
```
HTTP 200
{
  claim: {
    id: 123,
    first_name: 'XXX',
    ...
  }
}
```

## Update a claim

### Request

`PATCH /claims/:id`
```
{
  claim: {
    first_name: 'YYY',
    ...
  }
}
```

### Response
```
HTTP 200
{
  claim: {
    id: 123,
    first_name: 'YYY',
    ...
  }
}
```

## Submit a claim

### Request

`POST /claims/:id/submissions`

### Response

```
HTTP 200
{
  confirmation: XXX
}
```

## List claim documents

### Request
`GET /claims/:claim_id/documents`

### Response
```
HTTP 200
{
  documents: [
    {
      ...
    },
    ...
  ]
}
```

## Upload a document

### Request
`POST /claims/:claim_id/documents`

### Response
```
HTTP 200
{
  document: {
    ...
  }
}
```

## Delete a document

### Request
`DELETE /claims/:claim_id/documents/:id`

### Response
```
HTTP 200
{
  document: {
    ...
  }
}
```
