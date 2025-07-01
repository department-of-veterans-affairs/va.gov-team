# Travel Pay File Uploads

## Context
When a Veteran submits a claim, they have the ability to upload a file as evidence of an expense, or as evidence of attendance in the case of community care. 

Currently, BTSSS stores claim attachments directly in the CRM as binary data. This isn't the best approach, but enables us incrementally improve the performance and robustness of uploading a file.

**Considerations**

### Intent
Clerks use these uploaded attachments to validate and otherwise process claims + expenses.

### Association
From a data perspective, an attachment belongs to a single claim. This is different from a possible intuition: that a claim's expenses represent the costs incurred to the Veteran and therefore must be supported with an attachment (e.g. receipt) per expense.

