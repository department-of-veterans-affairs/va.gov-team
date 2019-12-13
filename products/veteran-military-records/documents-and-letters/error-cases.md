1. letterGeneration.letterEligibilityError is only possible from /letters/v1 which gets the list of eligible letters.
    1. This gets thrown if it is not possible to determine the letter eligibity for a letter. We initially had two thoughts on this possibility, and we ended up returning the letters we could determine eligibility for and throwing this error message if there were other letters we couldn’t determine yes or no on eligibility (we were didn’t to return letters that user might not be eligible for) .
    1. We tested in INT by turning off a service so it happens, we did add a ch33 user to replicate this, but I need to find that information and make sure we have that in letters CI working. I will get back to you on this one.
1. lettergenerator.notEligible is only possible when generating a letter. 
    1. This gets thrown if the user tries to generate a letter they are not eligible for. We have the use case where a veteran tries to generate a dependent summary benefit letter
    1. We have Jane Doe with the PID – 123456789 (but any veteran would work) call letters/v1/benefit_summary_dependent/generate
1. lettergenerator.serviceError is when the internal service has an error, this is some kind of unforeseen circumstance that we obviously try to avoid.
    1. If there was some kind of null pointer error, or something we just didn’t test against or expect this falls out as the error
    1. We have been able to reproduce by heavily turning off services in the INT environment but we don’t have a use case to test this in CI.
1. letterDestination.fullname.invalid is when the Corp database has an invalid name or something in the database and we don’t want to break our contract and pass back an empty name, or city if US address, etc.
    1. This is if the veteran record is messed up in Corp we haven’t seen this in INT or PINT unless for some reason MVI or something isn’t working for some reason and we don’t get back valid data.
    1. We have the user in CI with the PID 222222245
1. Invalid AddressLine1
    1. PId – 222222243
1. Invalid City
    1. Pid – 222222244
1. Invalid Country
    1. Pid – 222222241
1. Invalid Zip Code
    1. Pid - 222222247
