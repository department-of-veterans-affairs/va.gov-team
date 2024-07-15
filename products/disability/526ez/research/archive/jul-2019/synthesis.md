# Automating Claim ID type in 526 applications

## Background

An application Disability Compensation that includes one or more new conditions requires VA to be able to classify the conditions so that the correct exam can be ordered to verify the severity (and service connection) of that claim. The mis-classification of claimed conditions creates significant delays and frustration for both Veterans and VA. The current application form on VA.gov asks Veterans to match their conditions to a list of about 800 possibilities. The Veteran is asked to type into a text field while we try to fuzzy match with the existing taxonomy. When a positive match is made, we can assign a contention claim ID (one of a shorter list of about 120 codes that are used to order the correct type of exam). There are a few scenarios where this falls short:

- The Veteran does not find a familiar looking term in the suggested list and submits their plain text description of their condition
- The Veteran finds a term but it is the wrong one to describe their actual condition



VA has been working on a plain language parsing API that can take Veteran entered text and match it [^1] with the short list of Contention Claim IDs that are used to order exams. We would like to use this to replace the fuzzy matching. We believe that this will produce better matches, and lead to faster claims adjudication. There are a few limits to this approach:

- The API is able to correctly match input text to a contention claim ID 86% of the time.
- 11% of the time, it cannot produce a match
- **3% of the time it produces an incorrect match**



The API was originally designed to be used "offline" with paper submissions that have been OCR'd before being submitted to the process. But the response time is about 1 second. We hypothesize that we could present the Veteran with the API's result and the Veteran could help guide us in the relative small number of situations that the result is wrong. We want to find out how to present this information to the Veteran in a way that allows for better results without eroding trust in VA.



## Method

We ran usability style sessions with Veterans, using a coded prototype that called the claim ID classification API and presented the results live to those Veterans. We ran 5 sessions with Veterans who varied across gender, age, branch, and geography.



## Results

Veterans had a variety of concerns about the Contention Claim IDs that we surfaced for them. Some of these are addressable by different design choices, but the 3% that are secretly wrong is a major impediment to trust. We do not recommend surfacing the match to the Veteran. We should instead record that on the back end for presentation to the adjudicators to aid in their work.

### Problems that surfaced

#### "That's wrong, I said *sleep apnea* and you are calling it *respiratory*"

The Contention Claim IDs are by their nature more general than the specific condition being reported by the Veteran. In some cases Veterans with a sophisticated understanding of medical terminology were frustrated to put in specific language and be presented with a more generic category.

This could be addressed by labels and helper copy that explain why that term is useful to VA even though it is more generic. 



#### "I just told you that"

In some cases the category name and Veteran language overlap 100%. For example, they claim "hearing loss" and we assign it the Contention Claim ID "Hearing Loss". This created some surprise and disappointment in Veterans who didn't understand what was going on.

Similar to the first problem, this could be addressed with writing. But we are still in a position of explaining a weird looking thing.



#### "Whoa, that's super-wrong"

In some cases the API returned understandable, but still wrong matches. For example, a Veteran who typed "loss of limb" received a claim ID of "hearing loss." This kind of error lead to a sever loss of confidence in the process. The Veteran claimed that they would just bail out of the whole application process and go talk to a VSO or someone else in person.

This seems very hard to address. We discussed digging deeper into the test data to look for patterns in errors. Could we put our thumb on the scale in some cases like this and manually intervene to weight some responses to the correct claim ID. The general feeling from those with more knowledge of machine learning systems was that this is brittle, and dangerous.

### Not all bad news

#### "This is pretty easy"

When the matches made sense to the Veterans, there was some "hey this is cool" type reactions. But weighed against the **super-wrong** scenario it does not seem like this outweighs the erosion of trust in VA.



## Conclusion

We do think that the API provides value to adjudicators and removes some of the grind of working claims. This system sets them up to be reviewers and troubleshooters and should save them time that can be better applied to the more difficult parts of the process. 

We do not think that showing the API matches to the Veteran provides sufficient value to outweigh the potential damage. We recommend that the UI take in the Veteran descriptions and use those as the labels for conditions in the parts of the application flow where the Veteran needs to interact with them. 

We recommend continued attention to the wrong match scenarios and work on ways to safely and durably improve the training of the algorithm.



[^1]: The system was designed to consume text that has been extracted from handwritten application forms that are scanned and converted with Optical Character Recognition (ORC) software. The algorithm was trained on a corpus of 5 million adjudicated application forms. After training, 1 million claims were run through the system. Sampling these claims got us the 86% / 11% / 3% stats used above.


