# Forking Simple Forms code as a basis for Accredited Representative Portal’s claim submission features


To prototype claims submission in the Accredited Representative Portal, we used Simple Forms code as a starting point, copying it over to a new directory and adapting it to meet our requirements. 

Lifting and shifting the code saved us a lot of time. However, in the early design phases, it became clear that forking Simple Forms rather than reusing it in-place was the better option:

* We needed to put it behind a representative login page, rather than on VA.gov 
* We need to do additional checks on the backend to ensure the submitting representative has POA for the claimant
* We need to add a new form section asking whether the claimant is the veteran
* We will soon need to add multi-form upload for documents that require supporting evidence
* Reps are power users and we’re optimizing for efficiency in ARP, so we’ll collect the form metadata on one page
* Since we want to make absolutely sure that representatives who are also Veterans don’t have their VA.gov/ARP data co-mingled, we’ll create our own database table for in-progress forms, separate from the VA.gov table. We plan to reuse this table for all ARP forms.


While we forked most of the Simple Forms frontend code, we do plan to use some existing backend directly:

* The upload component 
* The backend code to upload a document and poll
* The code to trigger the email confirmation that the document was uploaded

