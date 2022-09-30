# Testing the API (without a front-end)

You can use the browser console to test the API. 

1. Go to VA.gov and have the user login. 
2. Open the browser console. 
3. Execute the following code in the console. 

#### Download the text version of the 1095-B form
```
fetch("https://api.va.gov/v0/form1095_bs/download_txt/2021", {
   method: 'GET',
   credentials: 'include',
   headers: {
     'X-Key-Inflection': 'camel',
     'Source-App-Name': window.appName,
     'X-CSRF-Token': localStorage.getItem('csrfToken'),
   },
}).then(
    (res) => res.blob()
).then((blob) => {
    let objUrl = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = objUrl;
    a.target = '_blank';
    a.download = `1095B-2021.txt`
    document.body.appendChild(a)
    a.click();
    a.remove();
})
```

#### Download the PDF version of the 1095-B form
```
fetch("https://api.va.gov/v0/form1095_bs/download_pdf/2021", {
   method: 'GET',
   credentials: 'include',
   headers: {
     'X-Key-Inflection': 'camel',
     'Source-App-Name': window.appName,
     'X-CSRF-Token': localStorage.getItem('csrfToken'),
   },
}).then(
    (res) => res.blob()
).then((blob) => {
    let objUrl = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = objUrl;
    a.target = '_blank';
    a.download = `1095B-2021.txt`
    document.body.appendChild(a)
    a.click();
    a.remove();
})
```
