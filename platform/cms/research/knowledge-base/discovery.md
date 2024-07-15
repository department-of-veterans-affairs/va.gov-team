
---

# CMS Knowledge Base Discovery

Notes and takeaways from an initial course of exploratory research.

Date: 10/24/23

[Joann Agnitti](joann@cityfriends.tech)

<br>

**Jump to:**

[User stories](#user-stories)

[Key findings](#key-findings)


## Who we talked to 

We talked to **4 participants**, each of whom had a considerable amount of experience with the CMS Knowledge Base and offered a different perspective. 

* 2 Helpdesk team members
* 1 Sitewide product manager
* 1 CAIA editor

## User stories
  **High priority**

1. Improved search functionality 

    As a KB user, I want the search functionality to be improved so that I can receive more relevant results and efficiently find the information I need. ([related ticket #9373](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/9373))

2. Knowledge Base jumping off points 

    As a new user of the knowledge base, I want the landing page to give me a starting point and show me how to find what I need easily, so I'm not confused and can use it effectively. 
    <br>

3. Improved navigation experience 

    As a KB user, I want the layout of the left navigation menu within the knowledge base to be improved so that I can easily locate the articles and information I need.  

4. Relevant content for different needs 

    As an editor with specific needs, I want the landing page of the knowledge base to display articles that are immediately relevant to my focus areas so I can quickly find pertinent information, boosting my confidence in the KB’s usefulness.  

**Medium priority**

5. Enriching articles with visuals
    
    As a KB article author, I want to add images and media to knowledge base articles so that I can enhance the understanding of complex or unfamiliar language and concepts (e.g., by incorporating screenshots) to improve the clarity and usability of instructions and explanations.

6. Article style consistency 

    As a KB article reader, I want the lack of consistency in article formatting, content, and adherence to a specific style guide to be addressed, so that all articles can provide the same level of information, clarity, and usability. 

**Lower priority**

7. Improved language and terminology 

     As a KB article reader, I want articles to be written in a straightforward, easy-to-understand manner, with clear terminology, so that people new to Drupal can quickly grasp the content without confusion. 

8. Clarity and recency of instructions 

    As a KB article reader, I want articles to be both up-to-date and clear, to ensure that I, and fellow editors, can trust the accuracy and easily follow the guidance provided in the articles. 


## Key Findings 

<H4>Issues with the Knowledge Base </H4>

**Landing page**

1. Orientation challenges 

    * When users arrive at the Knowledge Base landing page, some struggle to figure out how to get started or where to go to find the information they need. This initial confusion can discourage them from using the KB effectively.  
    * In addition, articles highlighted on the landing page are chosen based on best guess at relevance. Currently, these do not change, they are static. 

2. Content relevancy 
    * When users arrive at the landing page with specific needs but don’t immediately see articles relevant to their focus areas (or that are only relevant to other focus areas), they question the usefulness of the Knowledge Base for their situation.  

    * >“There should be more categories” - CMS editor 

3. Navigation difficulty 

    * Users face challenges due to the layout of the left navigation menu, making it hard for them to locate the articles or information they need within the KB.  

**Search**

4. Search frustration 

    * Users have trouble when trying to find information through our search function. This challenge often leads to irrelevant search results, leaving users frustrated due to their inability to locate the information they need. 
    * >“I don’t always find what I need.” - CMS editor 

<H4>Issues with KB articles </H4>

 **Content**

5. Addition of images and media 
    * Some stakeholders, including an editor, expressed the importance of visuals in KBAs. They believe that using images, diagrams, and other media can make complex or unfamiliar language and concepts easier to grasp. They suggest including screenshots to make instructions and explanations easier to follow.  

6. Language discrepancies 

    * Articles are not always written in a straightforward, easy-to-understand manner. Additionally, the terminology can be perplexing and unfamiliar to editors new to Drupal.  

7. Outdated information
    * The instructions in a particular article were not clear and were out of date. This caused one editor to lose trust in the reliability of that article and those they subsequently read.  

**Formatting**

8. Lack of consistency in article style 

    * Users have noticed variations in the formatting of KB articles. For example, some articles contain many useful links, information, and provide step-by-step instructions while others do not. Although Drupal offers templates that could standardize the layout, we are not implementing them consistently. Additionally, we do not follow a specific style guide, which means that rules are not consistently followed.   

  
**Feedback**

9. No feedback from feedback widget
    * The widget on each article page that asks if an article was helpful or not does not work as expected. When users click it, nothing happens. This means they are not sure if their vote was counted because of the lack of response from the widget.  

<H4>Content opportunities</H4> 

10. Streamline Helpdesk tasks
    * Address common questions within KB articles so that the Helpdesk team is able to focus their efforts on more complex or challenging cases, saving time and energy.  
    * The Helpdesk team will reference KB articles “all the time” in tickets in response to a user question. Unfortunately, they have received feedback that “the article isn’t helpful.”  
    * Some common ticket themes: 
      * How to update facility information (e.g., location data) 

      * Difference between system level and facility level 

      * What is a detail page and why is it important? (A detail page allows images and other media) 

      * There is no KBA that breaks down different content types 

      * How to edit events 

      * Facility closures 

      * Linking to docs, videos, files 

      * >“I searched and I searched and I couldn’t find what I was looking for” even though the KB article exists 

11. Centralize information for editors 
    * Provide editors (specifically CAIA editors) the information they need in one place, reducing the need for them to create separate documents scattered across various locations. This would also help in raising the relevancy of the KB for their needs.  
    * Content topics CAIA editors find useful 

      * Benefit detail pages, static pages on VA.gov 
      * Setting up navigation 

      * Menu items in the left navigation 

      * Content blocks (like Q&A)

      * Basics of setting up benefits page 

      * Translation will eventually be done entirely through drupal, so need KBAs to walk through the process 

      * Setting up widgets (like React)


12. Reimagine training and knowledge 

    * All of our training and KB articles are currently in the same place. The question is, do users expect this, or do they anticipate a separate platform exclusively for training videos? It’s worth noting that without a system to track and validate completion of training videos, there’s a risk of productivity loss. It might be worth considering a more robust training system.  
    * Additionally, our training videos contain valuable information, but their length can be a barrier for users seeking quick answers.  

<H4>Other considerations</H4>

13. New editors are unfamiliar with Drupal 
    * Many new editors come to the CMS with no prior experience with Drupal. The acronyms used within the CMS and KB articles often create confusion due to their unfamiliarity. Yet, it’s important to note that most editors begin their journey at the Knowledge Base. This presents an opportunity to enhance their onboarding experience, making information more accessible and easier to understand.  

14. Article length vs. organization 
    * It’s important to weigh the length of articles against their content. Having all topics on one page means everything can be found in one place rather than being spread across several different pages (like creating, editing, and removing pages).  However, this can lead to lengthy and cumbersome pages.  




