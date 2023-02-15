**Data that&#39;s &quot;easy&quot; to extract**

- --Went through all back-end places where 526 EZ data existed, and where we could mine it out. Built a service for the purposes of Vets.gov consuming that (stitches together 526 model + pre-fill data).
- --It&#39;s operational
- --Not currently being consumed
- --Load operation for prefill, validation operation against backend, submit (cesc – claim establishment service call – and batch uploads into VBMS etc)
  - Assumes vets-api would be storing stuff for in flight forms
  - Similar to how it works on claims evidence upload: vets-api owns in-flight data up until submission

**526 Service**

- --Allows you to interact and see test data, and not just the objects
- --wss-form526-services-web/loginSim
- --Partners that this has to talk to
- --Does not currently support the ancillary forms (it&#39;s 526 EZ ONLY)
- --There are more datapoints that can be exposed by EVSS than just the a-f sources now
  - For MVP could consider hardcoding some on FE instead of getting them in service…
- --EVSS knows the total depth of everything that&#39;s retrievable for all forms (all the fields that are possible to get for load), but don&#39;t know delta for what incremental new fields we&#39;d get by connected to each new partner.
- --We can ignore any references to VNP because it&#39;s in-flight storage but is ONLY consumed by RBPS for 686 right now.
- --NHI: just blobs, no structure, no xml. Just in flight storage.
- --The new service does NOT support printing in-flight, unvalidated forms (so you can print it and finish filling out by hand)
  - If we want to expose it on Vets.gov, how do we do it bc we&#39;re assuming rn that in-flight data is sitting on front-end but the form is sitting on back-end

**Legacy Current State of Business**

- --6 year old system that&#39;s a façade to the backend systems
- --Very little architecture, just mapping to forms
- --VNP have been removed already but they&#39;re mentioned
- --RBPS leverages these in-flight tables instead of the authoritative data for 686
- --Pre-fill form model object in entirety when they load the form the first time. There are opportunistic pieces of data that we&#39;ll re-fetch if they come back in and something has changed. So for pre-fill data
- --If there&#39;s authoritative data that VA doesn&#39;t have, then we&#39;ll send it to the VA before &quot;submit&quot; but it&#39;s not clear what they&#39;re putting gin the app (save in flight) vs sending to VA database.
- --They track what documents don&#39;t make it
- --eFolder wrapping services (eDoc services) and wrap them through a queue that wraps into batch process and uses that process to upload when VBMS is up
- --BIRLs will block submission if something doesn&#39;t match (like if Gender isn&#39;t there)

**eBenefits Approach**

- --Over time interfaces have been evolving more into interview style (as opposed to just straight online versions of the forms). Filling out the forms is not something the Veteran needs to do, they just need to answer certain questions and then obfuscate as much as possible from the user.
- --Take inputs for address, and while it&#39;s in flight the data is saved in a form model, instead of just accepting data and interview questions
  - Interview flow and Data storage were mapped 1-to-1 allows for super quick form creation, but it can have negative affects to logic
- --Don&#39;t see any technical constraints to order of operations right now

**How do we collaborate for 526 EZ**

- --BGS operates on 7 week minimum cycle
- --Keep track of those dates really closely, so we know what date we need to ask for stuff in order to support delivery 7 weeks later
- --If BGS has a service we can call, then it&#39;s faster to get access. If they don&#39;t have a service we can call but they have the data, it&#39;ll take 7 weeks to get it.

**Larry Fobian Questions**

- --Are there medals in the service history

**Josh and Syed Questions**

- --JIRA file for 526 EZ Technical Design
- --Model and form objects and mapping between them for current eBenefits tool
- --Will send us data for
- --Meet again Josh M/T, Syed W

**High priority tasks that we need**

- --Need to tell EVSS what fields in addition to what&#39;s currently in the service we need, so they can check if there&#39;s an existing BGS service for them, and if not, request one which will take 7 weeks.
- --If we need to change who&#39;s storing what, who&#39;s doing orchestration,
- --FROG has research on how veterans interact w/self-service system
- --3 options – need diagrams about this
  - 1)
  - 2)
  - 3)

**eFolder**

- --Veterans can&#39;t revoke files they&#39;ve already submitted
- --VBMS does not have in it&#39;s charter self-service, so any requests that would make things easier for Veterans to view, access, interact are denied
- --Have to figure out what&#39;s shareable from eFolder bc a lot of it is confidential stuff that VSRs are working on

**Pre-populating for Increases**

- --Forms have changed over time, new field names and stuff, so might not be able to pre-populate
- --Would there be another way to pre-pop new 526 EZs with their old 526 EZ
