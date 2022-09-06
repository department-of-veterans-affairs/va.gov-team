# Testing the API (without a front-end)

You can use the browser console to test the API. 

1. Go to VA.gov and have the user login. 
2. Open the browser console. 
3. Run the following fetch() functions

```
fetch("https://api.va.gov/v0/form1095_bs/available_forms", {
   method: 'GET',
   credentials: 'include',
   headers: {
     'X-Key-Inflection': 'camel',
     'Source-App-Name': window.appName,
     'X-CSRF-Token': localStorage.getItem('csrfToken'),
   },
})
```

```
fetch("https://api.va.gov/v0/form1095_bs/download_txt/2021", {
   method: 'GET',
   credentials: 'include',
   headers: {
     'X-Key-Inflection': 'camel',
     'Source-App-Name': window.appName,
     'X-CSRF-Token': localStorage.getItem('csrfToken'),
   },
})
```

```
fetch("https://api.va.gov/v0/form1095_bs/download_pdf/2021", {
   method: 'GET',
   credentials: 'include',
   headers: {
     'X-Key-Inflection': 'camel',
     'Source-App-Name': window.appName,
     'X-CSRF-Token': localStorage.getItem('csrfToken'),
   },
})
```
