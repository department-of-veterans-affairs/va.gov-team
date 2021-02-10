# Search for representative search parameters
**VSA eBenefits Team | February 2021**

`James Adams, designer`

---

## Background

### Current search implementations

#### Office of General Counsel
- Link to OGC [Accreditation Search page](https://www.va.gov/ogc/apps/accreditation/index.asp)

#### eBenefits
- Link to eBenefits [Manage Your Representative for VA Claims](https://www.ebenefits.va.gov/ebenefits/vso-search) (Must be logged-in to search)

## Available data
There is a series of ASP files available for download from the Office of General Counsel (OCG) search page. Each of these is a HTML table listing all available organizations and individuals within its particular group:
- Organizations
- Representatives
- Attoryneys
- Claims agents

### Organizations

#### HTML

<details>
   <summary>Expand code snippet</summary>
   
```
<TR>
   <td>Organization Name</td>
   <td>POA</td>
   <td>Org Phone</td>
   <td>Org City</td>
   <td>Org State</td>
   <td>Representative</td>
   <td>Rep City</td>
   <td>Rep State</td>
   <td>Rep Zip</td>
   <td>Registration Num</td>
</TR>
```
</details>

<details>
   <summary>Expand organization example</summary>
  
```
<TR>
   <TD>American Legion</TD>
   <TD>'074</TD>
   <TD>202-861-2700</TD>
   <TD>Washington </TD>
   <TD>DC</TD>
   <TD>Abel, Jami M</TD>
   <TD>Painesville</TD>
   <TD>OH</TD>
   <TD>'44077-0490</TD>
   <TD>102</TD>
</TR>
```
</details>
   
### Representatives

#### HTML

<details>
   <summary>Expand code snippet</summary>
  
```
<TR>
   <td>Last Name</td>
   <td>First Name</td>
   <td>Registration Num</td>
   <td>City</td>
   <td>State</td>
   <td>Zip</td>
   <td>Phone</td>
</TR>
```
</details>

<details>
   <summary>Expand representative example</summary>
  
```
<TR>
   <TD>Smith</TD>
   <TD>William</TD>
   <TD>13457</TD>
   <TD>Memphis</TD>
   <TD>TN</TD>
   <TD>'38104</TD>
   <TD>901-523-8990x 1-2647</TD>
</TR>
```
</details>

### Attorneys

#### HTML

<details>
   <summary>Expand code snippet</summary>
  
```
<TR>
   <td>Last Name</td>
   <td>First Name</td>
   <td>Date Accredited</td>
   <td>Registration Num</td>
   <td>POA Code</td>
   <td>City</td>
   <td>State</td>
   <td>Zip</td>
   <td>Phone</td>
</TR>
```
</details>

<details>
   <summary>Expand attorney example</summary>
  
```
<TR>
   <TD>Smith</TD>
   <TD>Krystal</TD>
   <TD>3/19/2015</TD>
   <TD>34340</TD>
   <TD>C27</TD>
   <TD>Spartanburg</TD>
   <TD>SC</TD>
   <TD>'29302</TD>
   <TD>864-376-3633</TD>
</TR>
```
</details>

### Claims Agents

#### HTML

<details>
   <summary>Expand code snippet</summary>
  
```
<TR>
   <td>Last Name</td>
   <td>First Name</td>
   <td>Date Accredited</td>
   <td>Registration Num</td>
   <td>POA Code</td>
   <td>City</td>
   <td>State</td>
   <td>Zip</td>
   <td>Phone</td>
</TR>
```
</details>

<details>
   <summary>Expand claims agent example</summary>
  
```
<TR>
   <TD>Smith</TD>
   <TD>Asia</TD>
   <TD>12/17/2010</TD>
   <TD>18779</TD>
   <TD>4S6</TD>
   <TD>Jonesboro</TD>
   <TD>GA</TD>
   <TD>'30238</TD>
   <TD></TD>
</TR>
```
</details>

---
