# Google translate assessment 

## Google translate widget

### Initial research summary

#### Benefits 

- The free Google translate widget is available for government sites during the coronavirus pandemic. 

- This approach requires a low level of tech effort, and would be a quick solution to providing some level of translated COVID-19 content and gathering some data.

#### Risks & drawbacks 

- Google deprecated this widget in 2019 and shifted to the API. They stopped providing support for the tool. They then brought it back this year only for government, academic, and nonprofit organizations to provide translated coronavirus content. Given that this widget wasn’t supported in the past, and is being supported again only for the COVID-19 pandemic, this is not a long-term solution. And there is risk in implementing a solution that will likely not be supported sooner rather than later. If we still had the solution in place when it was deprecated again, we would have to either use it without support or scramble to implement a new solution in place. 

- Government sites that currently use the widget include disclaimers noting the potential for inaccuracy and relinquishing liability for these inaccuracies (see examples below). Digital.gov strongly discourages the use of machine or automatic translations as a sole solution and the use of such disclaimers. A U.S. Department of Labor Civil Rights Center report on ensuring meaning access for LEP individuals also recommends against a machine translation-only approach. Our conversations with the translation experts at MedLine Plus and leaders in the government multilingual community support the same recommendation that machine translation is not sufficient for quality, accuracy, or cultural relevance. <br/> <br/> When asked if Google translate with no editing is an acceptable interim solution, multilingual experts responded with a firm no due to these 2 reasons: <br/> 1) We’re the government and it’s our responsibility to provide accurate content. <br/> 2) Spanish-speaking folks will notice that we haven’t put effort into providing quality translation, and we will lose a lot of credibility.

-	To ensure that we’re providing accurate Spanish-language content, this approach would require up-front content preparation effort as well as post-editing by a professional translator. Our own quality assessment via back-translation and quality ranking (using the BLEU 0-6 ranking scale) by a bilingual VHA colleague shows that while Google translate does a decent job some of the time in translating English content to Spanish, it does not generally produce high-quality translations of our content. Out of 41VA.gov FAQs, our colleague ranked only 3 as “high quality translation,” 21 as “understandable to good translation,” and 17 as “the gist is clear, but has significant grammatical errors.”

**Note:** Google did provide a [customization meta tag](https://translate.googleblog.com/2012/05/now-you-can-polish-up-googles.html) that allowed for site administrators to edit translations and accept suggested edits from users. It's unclear from our first look at the widget if this is still available, and determining this is a key next step.

- The widget quality will not scale well to other languages. Reading of the literature available on this topic shows that Spanish is one of the best quality outputs for Google Translate. The translation quality goes down especially for languages such as Chinese. This is an issue in particular because data shows that Chinese is the 2nd most common language spoken by low English proficiency (LEP) U.S. residents (Spanish is #1) and the 3rd most common language other than English that Veterans who are immigrants to the U.S. report speaking at home. Further, our current Coronavirus FAQs page analytics data shows that, while a small audience, users who are changing the language of the page currently are choosing Spanish most often, but Chinese 2nd most often. 

-	The ability to gather accurate usage data may be limited by the on-page nature of the widget. If we don’t have a separate Spanish-language page, the Spanish content won’t appear in search results. If we only provide a translation option on one page with no translation of site navigation, users navigating the site will only know this translated content exists if they’re on this one page. Both of these limit findability and awareness of Spanish-language content.

- The user experience is also limited by the widget. Best practice is to not make people go through the English content to get to the translated content.

## Google translate API

### Initial research summary

#### Benefits 

- The Google translate API would allow us to create a glossary to consistently translate our specific terminology. This can include words we do not want translated (such as "Veterans Affairs") as well as ambiguous words that we want translated a certain way. This can help solve some of the problems we saw in the Coronavirus FAQs quality assessment. [Read more about the glossary option](https://cloud.google.com/translate/docs/advanced/glossary)
- If we use the AutoML translation model, we can further train the base model for our domain-specific text.

#### Risks & drawbacks 

- More complex implementation
- Cost after free period ends. However, it appears there is a free tier for the service that allows users to test the capabilities for the first 500,000 characters per month. [Read more about pricing](https://cloud.google.com/translate/pricing)

### More information

•	**Translation API Basic:** Translates text and includes support for translating HTML and automatic language detection. This is a general purpose, “quick and dirty” way to get localization, but doesn’t do a good job of translating domain-specific language. It doesn't appear to offer much, if any value, beyond Google translate in the user's browser or the Google translate widget (with the exception of being available/supported long-term vs. the widget).

•	**Translation API Advanced:** Adds features, including batch translation (for processing large document sets stored in the cloud), translations with glossaries, and custom-trained machine learning models (AutoML Translation). 

#### AutoML translation model features:

Starts with the general Google Translation API, and adds a layer that specifically helps the model get the right translation for domain-specific content. This allows you to train the system to recognize patterns from translated sentence pairs.

#### How it works:

You supply matching pairs of sentences in the source and target languages (ie, a sentence in English and a sentence in Spanish that hold the same meaning). 

Google splits data into 3 buckets: Train (must have at least 3 sentence pairs), Validate (must have 100 – 10,000 sentence pairs), and Test (must have 100 – 10,000 sentence pairs). Google recommends using at least 500 sentence pair s for each of the 3 buckets, and more if possible to help the model learn patterns and have more data for validating and testing, as well as to help the model generalize to a wider variety of scenarios in your domain.

In doing this, you:

- Try to choose sentence that are 200 words or less.
- Try to capture the full diversity of semantics you expect to encounter if possible
- Get text samples from multiple authors and translators to help ensure that the model will work for different authors who will write slightly differently
- Make sure a person who understands both languages well validates that the sentence pairs match up correctly and represent understandable, accurate translations.
- Make sure the data set is clean.
- Import your data as a TSV or TMX file.

Once your model is trained, you receive a summary of its performance. This allows you to debug the data if needed. And it allows you to evaluate those models using a BLEU (BiLingual Evaluation Understudy), a metric for automatically evaluating machine-translated text, as well as manually. It has been shown that BLEU scores correlate well with human judgment of translation quality. You can test specific cases that you worry might adversely impact users if there’s a mistake or if the translation introduces bias.

Next, you create a dataset and import the training sentence pairs into it. You can have multiple datasets.

Next, you use your prepared dataset to create a custom model. AutoML Translation creates a new model each time you start training, so you may have multiple models.

AutoML Translation then uses items from the Validation and Test sets to evaluate the quality and accuracy of the new model. Again, this happens via a BLEU score. And you can also test manually.

If you’re not happy with the quality of the model, you can add more (and more diverse) training sentence pairs and keep training and testing until you get the quality you want. You can also reevaluate existing models using new sets of test data.

#### Implementation

Chicago.gov article on implementation: https://design.chicago.gov/2019/08/21/Using-Google-Translate-For-Internationalization.html 
