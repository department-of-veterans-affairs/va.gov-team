---- 


# We've moved our docs!

### This document is no longer maintained.

### Please visit the [Platform website](https://depo-platform-documentation.scrollhelp.site/) for the latest information or contact the Platform Support Team via [#vfs-platform-support](https://dsva.slack.com/archives/CBU0KDSB1).


----
# Grammar and punctuation

- [Abbreviations and acronyms](#abbreviations-and-acronyms)
- [Active voice](#active-voice)
- [Capitalization](#capitalization)
- [Clause order](#clause-order)
- [Commas](#commas)
- [Contractions](#contractions)
- [Cross references and links](#cross-references-and-links)
- [Pronouns](#pronouns)

## Abbreviations and acronyms

**Key point:** If there’s a chance your audience won’t be familiar with an acronym or abbreviation, spell it out the first time you mention it. If the abbreviation or acronym is well-known, like API or HTML, use it instead and don’t worry about spelling it out.


#### Spell out unfamiliar acronyms for clarity

Include an acronym in parentheses following the spelled-out term. Then, use the short version for other references. 

**Exception:** If the first mention of a term occurs in a heading or title, you can use the abbreviation and then spell out the abbreviation in the first paragraph that follows the heading or title. 

| Recommended | 
| :----------- |
| # Platform ATO approach
Authorization to operate (ATO) is a requirement for launching any new product on the VA.gov platform. |


#### Use abbreviations that are as recognizable as the full term

Some acronyms, like USB, FAQ, and URL, are more well known than the spelled-out term. Don't spell out the term if the acronym is listed in [Merriam-Webster Dictionary](https://www.merriam-webster.com/). If you are sure that your audience is familiar with an acronym, it’s OK to use it.

If you speak the short version as a word ("This is a demo version of the product"), you can usually treat it as a word and not an abbreviation. If the full spelled-out word is common and easily understandable, use that rather than abbreviating. For example, write approximately instead of approx.

The following abbreviations rarely need to be spelled out:

*   API
*   File formats such as PDF or XML
*   HTML
*   REST
*   Units of measurement such as MB or GB
*   URL
*   USB


#### Use standard American abbreviations

Use English terms over Latin abbreviations. Don't use i.e. or e.g.; instead, use _that is_ or _for example_, respectively.


## Active voice

**Key point:** Make it clear who’s performing the action.

Use active voice most of the time. Sentences in active voice have a direct, clear tone.

With active voice, the subject performs the verb’s action. (Example: I sent you an email.) With passive voice, the subject is acted upon by the verb. (Example: A message was sent to your email address.)

Passive sentences are generally longer than active ones because they usually need a helping verb like “is” or “was” to make sense. 

| Recommended | Not recommended |
| :---------- | :----------- |
| When running build commands for staging and production environments, set the `NODE_ENV=production` variable. | Production-like builds are required for staging and production environments. `NODE_ENV=production` environment variable is required to be set when running these build commands |

**Exceptions**

In certain cases, it's okay to use passive voice. Passive voice might be the right choice in the following cases:

To emphasize an object over an action.

| Recommended | 
| :---------- | 
| The file is saved. |

To de-emphasize a subject or actor.

| Recommended | Not recommended |
| :---------- | :----------- |
| Over 50 conflicts were found in the file. | You created over 50 conflicts in the file. |

If your readers don’t need to know who’s responsible for the action.

| Recommended | 
| :---------- | 
| The database was purged in January. |

If you’re not sure whether to use active voice or passive voice, ask yourself whether or not it will help the reader to know the performer of the action. 


## Capitalization

**Key point:** Use sentence case for headings.

We use sentence case capitalization for most content, including page titles, headings, subheadings, buttons, and text links, unless a word is a proper noun. Don’t capitalize common words for emphasis or importance. 

Sentence case capitalizes the first letter of the first word. Title case capitalizes the first letter of every word except articles, prepositions, and conjunctions. Sentence case is easer to read and projects a casual, friendly tone.

| Recommended | Not recommended |
| :---------- | :----------- |
| Capitalize the first word. This is sentence case. | Capitalize every word. This Is Title Case.|

Exceptions:

*   For proper nouns, trademarks, keywords, and other terms that are always capitalized a certain way, use the standard capitalization for the term, regardless of where it appears in the title or heading
*   If you use a colon in a heading, treat what follows the colon as a separate heading, with an initial capital letter of its own.
*   Always capitalize the word “Veterans”
*   In global navigation, top menu labels, use title case 

## Clause order

**Key point:** Put conditional clauses before instructions, not after.

In conditional cases, put the condition before the instruction so the reader doesn’t have to read the whole sentence to know if the instruction applies. 

| Recommended | Not recommended |
| :---------- | :----------- |
| For more information, see [Feature toggles](link). | See [Feature toggles](link) for more information. |

## Commas

**Key point:** Use commas to separate items in series, and use commas to separate certain kinds of clauses.

#### Serial commas

In a series of three or more items, use a comma before the final and or or.

| Recommended | Not recommended |
| :---------- | :----------- |
| I love kittens, puppies, and bunnies. | I love kittens, puppies and bunnies. |

#### Commas after introductory words and phrases

In general, place a comma after an introductory word or phrase.

**Examples**

| Recommended | 
| :---------- |
| Finally, only groups that contain parameters appear in this list. | 
| Based on the requirements of your game, you can implement this method to update game information. |


#### Commas separating two independent clauses

When a coordinating conjunction (and, but, or, nor, for, so, or yet) separates two independent clauses, insert a comma after the first clause (before the conjunction) unless both clauses are very short.

| Recommended | Not recommended |
| :---------- | :----------- |
| The libraries not only make feed creation easier, but they also ensure that only valid feeds are produced. | The libraries not only make feed creation easier but they also ensure that only valid feeds are produced. |
| Type your ID and select **OK**. | Type your ID, and select **OK**. |

#### Commas separating independent from dependent clauses

When an independent clause and a dependent clause are separated by a coordinating conjunction, insert a comma only if the sentence could be misunderstood without one.

| Recommended | Not recommended |
| :---------- | :----------- |
| Direct-access flags are plain variables and can be read directly. | Direct-access flags are plain variables, and can be read directly. |
| The manager acknowledged the last team member who entered the room, and started the meeting. | The manager acknowledged the last team member who entered the room and started the meeting. |

## Contractions

**Key point:** In general, use contractions for a friendly and informal tone, but be careful with certain kinds of contractions.

Use common contractions such as it’s, you’re, haven’t, don’t to create a friendly, informal tone.

Contractions support our conversational, person-to-person voice and tone. 

*   Be careful not to mix up “its” and “it’s.”
*   Use “it’s” as a contraction of “it is,” never “it has.”
*   Don’t use non-standard contractions like “would’ve,” “could’ve,” or “should’ve.”
*   Never create contractions from a noun and a verb. This might make it look like the noun is possessive. 
    *   **Do this:** The feature is ready to launch.
    *   **Not this:** The feature’s ready to launch.
*   Don’t use too many contractions in a sentence. Too many contractions can make content difficult to read.


## Cross-references and links

**Key point:** Use cross-references to guide readers to related information. Avoid duplication by linking to other documents.

For content that adds to the reader’s understanding of a topic, but isn’t essential for the purpose of the current document, use links to cross-reference with other documentation. If multiple docs include similar content, consider reorganizing to avoid duplication. Duplicate content is hard to maintain and is often a sign that something isn’t quite right with the information architecture.

#### Links

Links should tell people what action to take, where to go next, or what information to expect when they select the link.

When you're writing link text, use a phrase that describes what the reader will see after following the link. Links should make sense without the surrounding text. That can take either of two forms:

*   The exact title of the linked-to page, capitalized the same way the title is capitalized.
*   A description of the linked-to page, capitalized like ordinary text instead of like a title.

Sometimes you have to rework a sentence to include a phrase that makes good link text.

*   Use natural and descriptive language.
*   Hyperlink the most relevant word or phrase.
*   Don’t make the link so long that the relevant words get lost.
*   Don't use the phrase _click here_ or _this document_. It's bad for accessibility and bad for scannability.
*   Don't use a URL as link text. Instead, use the page title or a description of the page.
*   Avoid generic CTA links like “Learn more,” “See more,” and “Read more” by themselves. 
*   If the embedded link text comes at the end of a sentence, don’t hyperlink the ending punctuation.
*   When a link opens a PDF, YouTube video, XLS or other file format, note that after the link in parentheses. **Example:** For more information, [download the security features PDF](link).

| Not recommended | Also not recommended |
| :---------- | :----------- |
| Want more? [Click here!](/wombats) | Want more? Read [this document](/wombats). |

## Present tense

**Key point:** Avoid “will.”

In general, use present tense rather than future tense; in particular, try to avoid using will where possible. 

| Recommended | Not recommended |
| :---------- | :----------- |
| Tests automatically run against the site running on that server. | Tests will automatically be run against the site running on that server. |

Sometimes, of course, future tense is unavoidable because you're actually talking about the future. (**Example:** The hedgehog will hibernate starting in October.) 

But the fact that the reader will be writing and running code in the future isn't a good reason to use future tense. Stick with present tense where possible.

Also avoid the hypothetical future “would”. 

| Recommended | Not recommended |
| :---------- | :----------- |
| If you send an unsubscribe message, the server removes you from the mailing list. | You can send an unsubscribe message. The server would then remove you from the mailing list. |

## Pronouns

**Key point:** Ensure that a pronoun clearly refers to its antecedent (the noun that it's replacing).

#### Ambiguous pronoun references

Avoid vague and confusing references between a pronoun and its antecedent.

| Recommended | Not recommended |
| :---------- | :----------- |
| If you type text in the field, the text doesn't change. | If you type text in the field, it doesn't change. |
| The name of the function to execute in the given script. The name does not include parentheses or parameters. | The name of the function to execute in the given script. It does not include parentheses or parameters. |

In many cases, it's best to use these types of words as adjectives modifying nouns instead of using them as pronouns.

| Recommended | Not recommended |
| :---------- | :----------- |
| Set this value to true. | Set this to true. |

#### Gender-neutral pronouns

Don't use “he,” “him,” “his,” “she,” “her,” or “hers” in generic references. Don't use “he/she” or “(s)he” or other such punctuational approaches. Use a plural pronoun (they, their, or them) in generic references to a single person. 

Other options to generically reference a single person include:

*   Rewrite to use the second person (you).
*   Rewrite the sentence to have a plural noun and pronoun.
*   Use “the” or “a” instead of a pronoun (for example, "the document").
*   Refer to a person's role (“reader,” “employee,” “customer,” or “client,” for example).
*   Use “person” or “individual.”


#### Optional pronouns

Use optional pronouns, such as that and who, to avoid ambiguity and clarify meaning in sentences.

| Recommended | Not recommended |
| :---------- | :----------- |
| Make sure that all the files are correct. | Make sure all the files are correct. |
| Right-click the link that you want to open. | Right-click the link you want to open. |

#### Personal pronouns

When referring to VA.gov Platform, use the first-person pronoun (we, us, our). Use the second person (you, your) to refer to the audiences we’re addressing. This aligns with our content principles to speak person-to-person with our customers rather than talking about them.
