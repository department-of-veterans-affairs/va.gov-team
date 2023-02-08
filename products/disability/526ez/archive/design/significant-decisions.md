# Significant decisions

If you spend any time going back on forth on a design decision (internally or with stakeholders), write it down here.
> ## Helpful (searchable) title
> 1. Brief background of the problem
> 2. What did you decide on?
> 3. What was the runner up?
> 4. What was the deciding factor?
> 5. When, or under what conditions, should we revisit this?



## Using Central Mail API for submitting 4142

1. The 4142 (private medical records release) typically goes into VBMS where it waits for a reviewer to find it and route to the appropriate vendor who will go get the records. This means a delay.
2. We are going to submit through the Central Mail API (new!) so that it can get immediately sent to the vendor.
3. We were going to either maintain the existing pain, or trade it for a different one by asking the applicant to print and mail to central themselves.
4. API became available. Caveat: we need to get them to add the 4142 type to their list
5. This should be good, but we may want to do the same thing for other forms (Aid & Attendance, etc.) 