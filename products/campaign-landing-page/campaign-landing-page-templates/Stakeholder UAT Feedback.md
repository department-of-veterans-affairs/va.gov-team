## CLP Stakeholder Discussion - VBA Stakeholder (Sandy Tadeo)
February 25, 2021

### Question/Answers:
By chance will this presentation be available via a link for as a reference? This is really great! *as a reference? 

What is the image crop size and does the CMS automatically format the photo for you when uploaded?

Questions on images ratios, expansion due to screen aspect ratio.  Interested in how images will need to be prepared in order to share and link.  

This page is for section - Concern is limit to only three audiences and wondering will it expand to other audience types?  (Note: We’re only rolling this out to VACO partners). 

Hero page top link - can we change this as a primary call to action.

Can they move panels around?  ‘No modularization of panels’

Can we include video in the first three sections.  Video panel is on the 4th panel and can’t currently move up to a higher order. 

I’m wondering if the Collab review might be too much oversight/overhead for these teams (as a sense).  They are looking for something like a Drupal baseline, pushed back on publishing timeline and collab cycle element.  

Campaign length is a stinking point - They have a lot of weekly and biweekly campaigns.  Current lifecycle process:  They is not a solid concrete process the then a carousel process.  

Discussion points:
- Pension Coaching (April) Financial Literacy Month.
- What is each Month theme?  Seasonality of the CLP.  
- https://benefits.va.gov/benefits/financial-literacy.asp

### Thread from Stakeholder Discussion:
#### Topic 1: Images
- Images are currently loaded on the FE wiith their original size, with no cropping or downsizing. url('http://prod.cms.va.gov/sites/default/files/2021-02/Veteran_Gets_Shot_Test%20%28Don%27t%20Use%29.jpg
i think we need to Figure out ideal aspect ratio for FE, and if we have the right image size (instead of just loading the original, which could be 10Mb)
Write better guidance for editors to match that. Answer questions like: Do i need to prepare the image ahead of time? (no! the CMS will let you crop during upload, and it will downsize it for you). What if i want to reuse an image from the media library? (no problem, but you may not be able to control the crop).
- Another thought about images… not raised by VBA folks but before i forget: the FE may want to specify the og:image for URL unfurling, like on social media (or Slack!). It would be a different derivative of the original image, but a different aspect ratio and size (we already support 2:1, which is pretty close to the 1.91 “ideal”).
- The purpose of the “who this is for” is meant to force thinking around the PRIMARY audience. There can be more than one but only one can be primary — and we’re providing some flexibility by allowing up to 3 ‘primary’ audiences.

#### Topic 2: Audiences
- “why only 3 audiences? Solid Start has many more audiences than that!”
do we have enough guidance for this field right now? Does the product guide need to “frontload” the audience strategy or guidance?
- In regards to the image, might be important to show what area would be covered up by the test box prior to uploading or as a selection criteria in support.

#### Topic 3: CTA
- What if i have more than one “primary” CTA, like Solid Start?, which has multiple”
Can we be doing more in the CMS UI to explain the intent of only allowing one CTA? Is that the role of training? Product guide?
- Product guide may also need to indicate SEO impact (or not) .  Perhaps a few pointers on how to select an audience for this field.  Could also be a fillable item in request form for a CLP.

#### Topic 4: Campaign Length / Sunsetting Timline/Process
- Determining campaign length and sunsetting process part of request form?  Details on cross check prior to defined sunset date to ensure relevancy.  Determine redirects and steps to sunset in guide?
- The other aspect that has real power is the seasonality of campaigns i.e. Financial Literacy month, Veterans Day, Fraud Awareness, etc.  Would VA businesses be able to store successful campaigns and restart them (especially after A/B testing or validating high traffic response) with minor tweaks at future dates if desired.  Do we have a repository set up to support the storage of these campaigns?  Is this of value?  (Note: just thinking out load and capturing here for future discussion).
- ^ I always thought that those annual campaigns could just stay out there, and each year, the business updates it with fresh content, new images, new videos, new UTM analytics code. So maybe the page stays out there, but they go through a new collab cycle with the launch of the new 2022 version of contents…?
It’s the one-off’s that probably need retiring/redirecting strategy.

## Key Takeaways:

### John Hashimoto: 
- My biggest :worried_animated:’s coming out of yesterday’s session:
When one of Sandy’s team-members mentioned a new CLP every few weeks.   That is NOT what I heard from Sandy and Jenny H-L when I asked originally.  My feeling about this product is it should only be used for major marketing initiatives — not every little thing a (sometimes obscure) program office wants to announce.   So, will have to manage/safeguard against that.
- Lack of flexibility in the template/content model (we expected some of this), such as: Audience Type (maybe there should be an option to leave that off); inability to re-order panels.
- Collab review process: there was some hesitancy about the notion that we (VA.gov) must review every CLP before it goes live.
Didn’t come up, but I’m still a concerned about the URL — right now, we specify per CLP.  Jen insists we should just draw from the H1 (I think this is problematic).  Let’s discuss.
- Smaller thing: lack of clarity about the difference between some panels — Spotlight and Stories.  To me, it’s just a way to add more content in different formats, which is just fine.

## Round 2 CLP Stakeholder Discussion - Tim/Team

### Observations, Questions, Ideation:

- Think we’re going to need a defining document - Tier 1, 2, and 3 content definition. (@John or @Jen to follow up with defined details).

- Need to define ‘Campaign’ tighter - which would help people find better options, and "is this right for me".  (Suspect VAMC’s wanting to use CLP for marketing tools). 

- Perhaps gain some insight from VA Marketing team as they might have different shade of feedback and why they might need an enhancement to this MVP.  

* Feedback: One thing that VA communicators like to put together a PDF.  (I don’t like PDF’s).  No Documents on the web if you can replace them.  The only documents allowed on the web will be only those that are mandated/congressional elements. 

- Video: There are videos that can’t be loaded to VA servers for various reasons.  Needs to be capable to use embed and not limit it to YouTube.  

- Panel 5:  Could we use an RSS Feedback to add to the Spotlight element.  Trying to move to Wordpress IP, and use the API to pull content so editors don’t have to recreate connect across platforms.  

- Panel 6: Stories that I could pull from Vantage Point blog/VA blog/newsletters etc. 

- Panel 7: Look at future requirement that will eliminate the need to use PDF on pages for download resources.  OCTO-DE lead should follow up on this forward.  

- Panel 8: Is there any connectivity between outreach events.  These are definitely shared events.  

- Panel 9: Possible create a shared FAQ shared library outside of free text that you have to build.  What is the minimum?  Three is what we answered. FAQs in general are a bad user experience, these should be frequently asked questions and not never asked questions.  This is a great way to streamline FAQ use and could link out to better content that helps.  

- Are the sections drag and drop and movable (stackable)?  Answer is now they are not at present lay down (backlog component).

- Is the length of the questions is limited? Yes, it is.  

- Panel 10: Q: Is there an option for email link verses a link.  Can we put the embed for email in this contact us section?  Is there a way to have a splash or Moto windows in the future.  Gov.delivery is the platform that is being used and could help with the email field going forward with this API.  

- “What can you do” - Is there a way to streamline the image sizing and best bet for shaping these images so they are more aligned for user experience. 

- How involved is the request process?  How much freedom do I have to create CLPs going forward?  
       - URLs need to be easy for Veterans to find.  We need our own link shortener that we can customize to help take care of the Vanity URL issue.  This is an - issue for VAMCs, etc.  and they’ll want to bring Veterans in and need something super simple to help find the content.  

- Need to bring in the Marketing folks to the conversation and gain their feedback.  

- Is this a tool for VA as a whole or VACO only?  So eventually, all folks from VA could use this tool.  Need to anticipate a wider use for this tool.  MVP customers are from VAMC not VACO.  I would encourage you to include the web governance board to help create the rules for this to determine who gets a page for this or not.  Take advantage of their experience.  Their is a need for a landing page, so this is a great tool.  

