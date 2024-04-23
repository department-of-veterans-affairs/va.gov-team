# Architecture Decision Record (ADR)
## Callback API between VA and PEGA
**Date:** 4/23/2024

**Status:** Accepted(?)

### Context
The VA (IVC CHAMPVA) and PEGA are collaborating to develop a callback API that facilitates communication between their systems. The callback API will handle asynchronous notifications from PEGA and store the data in `vets-api`.

The engineering team needs to decide on the appropriate data storage solution for storing the files and their possible metadata. The team has to consider using Redis, LightHouse Delivery Infrastructure (LHDI), or a database. However, they also need to consider factors such as data persistence, durability, and ease of integration with existing systems.

The IVC CHAMPVA forms on VA.gov will send forms and supporting documents to an s3 bucket maintained by the DOCMP team (PEGA). This will allow them to confirm whether forms have reached s3, but doesn't tell them whether they were imported into PEGA, or whether they can be deleted from s3. In order to get that information, PEGA will add a step to their workflow to call a VA endpoint and send confirmation/status that the files were loaded into PEGA. They don't currently have such an endpoint, so this document reflected the decision-making for that implementation.

#### What options were considered?
1. LightHouse Delivery Infrastructure (LHDI)
   - They originally looked into LHDI because they were already processing forms and we didn't want to reinvent the wheel. After discussing this process with Steve Albers (Benefits Engineer OCTO) 
     he doesn't think leveraging LH makes sense. For starters, it's adding pipeline complexity to a process that starts on va.gov and should end on va.gov. Furthermore, LH engineers would need 
     to update the code on their end for each form we send them. Finally, they aren't sending LH any information currently before submitting to PEGA's S3 and they don't know how difficult or how 
     long it will take to accomplish this.
2. Redis
   - This was easily dismissed because it only holds data in it for up to 30 days. Forms take longer to process.
3. Database Table (Editor's Pick)
   - This option made the most sense since the table should be lightweight and they are just doing simple CRUD (Create, Read, Update, Delete) actions to it. Also with having their own table they 
     won't be interfering with any other table or have to rely on another existing table.

### Decision
After evaluating the requirements and considering the pros and cons of each option, the engineering team has decided to use a traditional relational database (e.g., PostgreSQL) as the data storage solution for the callback API. This decision also came easily after discussing other solutions with members of the platform team.

### Rationale
_Data Persistence and Durability_: Relational databases offer strong data persistence and durability guarantees compared to in-memory data stores like Redis (Platform told us there was a limit on how long data would persist). This ensures that callback requests and associated metadata are reliably stored, even in the event of system failures or restarts.

_Schema Flexibility_: Relational databases provide schema flexibility, allowing for structured data storage and querying capabilities. This flexibility enables the storage of diverse types of callback requests and metadata, accommodating potential future changes or expansions in the API's functionality. Also if they create a form in the future that a Veteran can utilize, it would be easier to retrieve that data for them.

_Ease of Integration_: Ruby has built-in support for relational databases, simplifying integration efforts to help develop the callback API data storage. This reduces development overhead and streamlines production.

### Consequences
1. _Simplified Infrastructure_: The use of a relational database streamlines deployment and maintenance efforts.
2. _Low Latency Impact_: The lightweight API and periodic data purging minimize latency concerns.
3. _Minimal Maintenance Overhead_: Routine tasks are straightforward due to the simple database schema. We will also create a Sidekiq job(s) to purge data on a timely basis to avoid data inflation and longevity of PII in the database.
