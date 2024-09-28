# Search Best Bet Evaluation and Implementation Process
## Using Search.gov
Search "best bets" are implemented in Search.gov by the IA team and consist of the page title, description and any keywords. Keywords are vetted words or phrases that aren't already in the title or description.

Learn more about [best bets documentation on Search.gov](https://search.gov/admin-center/content/best-bets.html)

### Example
<img width="600" alt="Screenshot 2023-04-14 at 4 48 08 PM" src="https://user-images.githubusercontent.com/122128479/232160689-fe907ffe-28e2-41af-be6f-1ab0f6f13955.png">

## Guidelines
### IA and implementation
- Choose a maximum of two keywords
- Use Google Analytics, Domo, or Google Trends to identify words that people use to search for the content
- Prioritize content that’s related to veterans and their beneficiaries
- Each page must have different content (no duplicates or identical pages)
   - Best bets on a single term should be distinctly different content
- Links must be internal only
- Avoid linking to documents or files because they have poor accessibility
- Keywords must be specific and directly related to the content that's being promoted
   - Avoid keywords that are too broad or that can have multiple meanings
     - Such as counseling or benefits
   - Don't use keywords that exceed 255 characters
   - Insert appropriate accent marks for translation work
     - Such as español
- Implement content and recommendations directly into Search.gov

### Content
- The link label in the best bet should utilize the page H1
- The teaser text in the best bet should utilize the meta description of the page

## Process
1. Request comes in from Randi to complete any of the following tasks in Search.gov:
   - add keywords for specific page(s) on Va.gov
   - update the current keywords for specific page(s) on Va.gov
   - update links and content for specific page(s) on Va.gov
2. Confirm with the requesting team when the requested page will be live, if applicable
3. Coordinate with the Content team as they will provide page H1 and metadescription for pages that haven’t been published yet
4. For pages that are live on the site, update the URL, title, and/or the description directly in Search.gov.
   - If the current metadescription is over the 255 character max, coordinate with the Content team to review and provide feedback on how it could be shortened to fit the character limits.
5. Review any relevant research, if applicable
6. Validate any current keywords against [IA and implementation guidelines](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/information-architecture/process/search-best-bets-process.md#ia-and-implementation)
7. Review any additional keywords that have been requested or that should be added to Search.gov
8. Use metric tools to evaluate performance and inform keywords list
9. Follow up in original request ticket with findings and recommendations
10. Implement any changes into Search.gov

### IA checklist
- Insert the required information:
    - **URL.** Add the URL of the web page that you want to promote. Make sure the URL is properly formatted, and includes the https:// protocol.
    - **Title and Description.** Add the title and description of the web page that you want to promote. Each field can have up to 255 characters. 
    Titles and descriptions are visible to searchers.
    - **Status and Publish Dates.** By default, newly created Best Bets are Active. If you don’t want your Best Bet to display, set it to Inactive. The default start date is the day on which you create the best bet. The default end date is null, so it will stay up forever until you decide to take it down. You can opt to specify other start and end dates using the date pickers.
- If page hasn’t been published yet, confirm who the UX writer is from the Content team as they will provide page H1 and metadescription
- To find the metadescription:
    - Right clicking “View Page Source”
    - Look for 'meta name="description"
    - Copy all the information in the "content" attribute that follows it and clean up any encoding once pasted
- Template for metrics we will use
   - Example data points used to evaluate use of best bets
   - Search volume of requested keywords related to the page content
   - Current internal and external search ranking of the page
   - General analytics on the landing page, like page views and bounce rates
- If we need to promote a feature or content on an external site, link to an internal page that provides contextual information and a link to the external site
- Avoid linking to a PDF. Example, we will link to a form landing page in the forms search tool instead of directly to a pdf of the form

## Archiving best bets
There are two ways to archive an existing best bet, they are:
1. Change the destination link and leave the existing best bet in place with a new destination
2. Set the end date to whatever the appropriate date is to end the existing one, and add a new one with the appropriate end date.
