# Representative Status Widget 1.0 (MVP) Overview

Developed by the Accredited Representation Management (ARM) team, the Representative Status Widget will provide insight into any current representation.  This widget is intended to support ARM products as well as any other products that may benefit from a user understanding if they have an accredited representative appointed.  

The MVP is available on:
   1. [Find a VA accredited representative or VSO](https://www.va.gov/get-help-from-accredited-representative/find-rep/)
   2. [Get help from a VA accredited representative or VSO](https://www.va.gov/get-help-from-accredited-representative/)

#### Representative Status Widget 

Different widget states:
1. Unauthenticated
2. Authenticated, no reprsentative
3. Authenticated, organization appointed (VSO)
4. Authenticated, individual appointed (attorney or claims agent)
5. Error state (includes a number to call to inquire about representative status)

Current representative status is being retreived from the Benefits Claims API POA Services, and can be returned for authenticated users with a Participant ID (aka Corporate ID).  Any users who do not have a Participant ID will see the error state.
