# Expense-to-document association delivery risk

## The Gist
There is no Dynamics CRM support for associating expenses to documents, a need for a good user experience on VA.gov.
After many discussions, Dynamics support for this feature will not be put into place in the near future. To bandaid 
over this, the API team is putting the document ID into the "notes" field of an expense. There is work needed by the
API team to expose the document ID through various endpoints. Because of the govt shutdown and other factors, **there is
a risk that delivery of complex claims will be delayed**.

## The Decision
After talking with Kay, Kristen, and Mark, we agreed to [accept the risk to delivery](###1-accept-the-risk) in order to stay focused on building
complex claims on VA.gov.

## The Options
### 1: Accept The Risk
* **Approach**: Continue laser focus on building complex claims. If the API work arrives too late to test effectively, or arrives with defects,
we will communicate and handle this problem at that time.
* **Main Pro**: We get to continue building the bulk of the work of complex claims
* **Main Con**: If something goes wrong, this is a key feature of the UI and will delay delivery overall

### 2. Build a Temporary UI
* **Approach**: Build a non-associated version of the UI
* **Main Pro**: We can test integrations with the API in staging and the work is not that difficult
* **Main Con**: It is not what we tested with users, still takes time away from complex claims work.

### Build Stop-Gap Association
* **Approach**: Build/use association table in the vets-api database
* **Main Pro**: We don't need to rely on the API to finish work, and the work can stay in after production
* **Main Con**: More complicated solution, takes time away from main complex claims work
