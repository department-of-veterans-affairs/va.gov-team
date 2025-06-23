## VA Chatbot Moderation Evaluation

The purpose of moderation is to prevent sensitive utterances from being handled by Chatbot’s main NLU component, whether that be the current root bot CQA or future LLM capabilities. One example of this is a veteran who may be displaying symptoms of an intent to harm themselves; this is one such case where we would not want to pass this utterance on to the main NLU component, but instead route directly to a curated message with information about the Veterans Crisis Line. 

There are many capabilities that offer moderation, so our approach to take a first attempt at evaluating them was to create a Baseline, wherein our team would manually flag utterances for sensitive categories, such as “Self Harm”, “Violence”, “Hate”, etc. We then submit these responses to moderation models we want to evaluate and compare their responses to our Baseline. Our team created an application that will run locally to fetch the responses from the different models, run the comparison, and display the results to analyze in a dashboard. That application can be found [here](https://github.com/department-of-veterans-affairs/chatbot-moderation).

Below is a screenshot from a summarized view of the comparison results.

![mod1](https://github.com/user-attachments/assets/d1d94490-4a17-4e5f-a1a8-55d3e2d03315)


For the purposes of this initial evaluation, our team focused more on the results of the Self-Harm category as we have a clear route to VCL for this type of flagged utterance. Below is the evaluation for just utterances that were flagged for Self-Harm by our Baseline.

![mod2](https://github.com/user-attachments/assets/9c969048-da8b-45f9-8314-6bd6532edc9f)


As we can see from the results above, the Anthropic and Azure Content Safety models flagged all of the utterances with Self-Harm compared to the team’s Baseline. These models also flagged some utterances with Self-Harm that the Baseline did not, which we can consider false positives. Our assumption in the cases of Self-Harm is that false positives are more acceptable than false negatives. Based on that assumption, the Anthropic and Azure Content Safety models are the more performant models for content moderation. **However, since we already have an Azure Content Safety resource available in our DEVTEST resource group in MAG, we are moving forward with this model.** In future iterations, new models and model versions can be added and the comparison analysis can be generated again.

**Additional Utterances:**

![utterances](https://github.com/user-attachments/assets/584723c9-d082-4efe-a6f2-acac7e304f31)


