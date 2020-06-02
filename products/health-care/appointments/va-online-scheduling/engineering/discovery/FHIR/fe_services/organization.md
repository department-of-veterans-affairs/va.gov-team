# Organization Service

* [APIs Covered](#apis-covered)
* [Functions](#functions)
* [Feature Flag](#feature-flag)

<a name="apis-covered"></a>
## APIs Covered
- VAR
  - `/vaos/v0/facilities`
- VSP
  - `/Organization`

<a name="functions"></a>
## Functions

<dl>
<dt><a href="#getOrganizations">getOrganizations()</a> ⇒ <code>Array</code></dt>
<dd><p>Fetch details about the facilities given, typically the VistA sites
where a user is registered</p>
</dd>
<dt><a href="#getSiteIdFromOrganization">getSiteIdFromOrganization(organization)</a> ⇒ <code>String</code></dt>
<dd><p>Pulls the VistA id from an Organization resource</p>
</dd>
<dt><a href="#getRootOrganization">getRootOrganization(organizations, organizationId)</a> ⇒ <code>Object</code></dt>
<dd><p>Returns the root organization of a given id
Assumes that the list of orgs always includes the root and that there
are only two levels of nesting</p>
</dd>
<dt><a href="#getOrganizationBySiteId">getOrganizationBySiteId(organizations, siteId)</a> ⇒ <code>Object</code></dt>
<dd><p>Returns the organization given a VistA site id</p>
</dd>
<dt><a href="#getIdOfRootOrganization">getIdOfRootOrganization(organizations, organizationId)</a> ⇒ <code>String</code></dt>
<dd><p>Returns the root site id given a list of organizations and the parent organization</p>
</dd>
</dl>

<a name="getOrganizations"></a>

### getOrganizations() ⇒ <code>Array</code>
Fetch details about the facilities given, typically the VistA sites
where a user is registered

**Returns**: <code>Array</code> - A FHIR searchset of Organization resources  

| Param | Type | Description |
| --- | --- | --- |
| params.siteIds | <code>Array</code> | A list of three digit site ids |
| params.useVSP | <code>Boolean</code> | A flag that determines whether we go to the new VSP apis |

<a name="getSiteIdFromOrganization"></a>

### getSiteIdFromOrganization(organization) ⇒ <code>String</code>
Pulls the VistA id from an Organization resource

**Returns**: <code>String</code> - Three digit VistA id  

| Param | Type | Description |
| --- | --- | --- |
| organization | <code>Object</code> | The organization to get an id for |

<a name="getRootOrganization"></a>

### getRootOrganization(organizations, organizationId) ⇒ <code>Object</code>
Returns the root organization of a given id
Assumes that the list of orgs always includes the root and that there
are only two levels of nesting

**Returns**: <code>Object</code> - The organization data for the chosen id or its parent  

| Param | Type | Description |
| --- | --- | --- |
| organizations | <code>Array</code> | List of organizations |
| organizationId | <code>String</code> | Id of the organization to find the root for |

<a name="getOrganizationBySiteId"></a>

### getOrganizationBySiteId(organizations, siteId) ⇒ <code>Object</code>
Returns the organization given a VistA site id

**Returns**: <code>Object</code> - The matching organization  

| Param | Type | Description |
| --- | --- | --- |
| organizations | <code>Array</code> | The list of organizations to search |
| siteId | <code>String</code> | The site id to use |

<a name="getIdOfRootOrganization"></a>

### getIdOfRootOrganization(organizations, organizationId) ⇒ <code>String</code>
Returns the root site id given a list of organizations and the parent organization

**Returns**: <code>String</code> - The organization id  

| Param | Type | Description |
| --- | --- | --- |
| organizations | <code>Array</code> | Parent organizations |
| organizationId | <code>String</code> | Chosen parent organization |


<a name="feature-flag"></a>
## Feature Flag
