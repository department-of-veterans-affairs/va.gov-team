# Drupal CMS Image Upload Research Findings

**Office of the CTO - Digital Experience (OCTO-DE)
Image Uploader, VA Innovate, Iterate, and Run**

Date: 09/26/2024

David Pearl [david.pearl@adhocteam.us](mailto:david.pearl@adhocteam.us) 

**Jump to:**

- [Hypotheses and Conclusions](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/medical-centers/research/2024%20VAMC%20CMS/ImageUploader/PostStudy/Findings/Drupal%20CMS%20Image%20Upload%20Research%20Findings.md#hypotheses-and-conclusions)
- [Key Findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/medical-centers/research/2024%20VAMC%20CMS/ImageUploader/PostStudy/Findings/Drupal%20CMS%20Image%20Upload%20Research%20Findings.md#key-findings)
- [Detailed Findings & Recommendations](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/medical-centers/research/2024%20VAMC%20CMS/ImageUploader/PostStudy/Findings/Drupal%20CMS%20Image%20Upload%20Research%20Findings.md#details-of-findings--recommendations)
- [CMS Drupal Feedback](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/medical-centers/research/2024%20VAMC%20CMS/ImageUploader/PostStudy/Findings/Drupal%20CMS%20Image%20Upload%20Research%20Findings.md#cms-drupal-feedback)
- [Next Steps](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/medical-centers/research/2024%20VAMC%20CMS/ImageUploader/PostStudy/Findings/Drupal%20CMS%20Image%20Upload%20Research%20Findings.md#next-steps)
### **Research Goals**

As Veterans begin to engage with VA, learning about benefits through events and their local facilities, they will rely on accurate and quality content on [VA.gov](http://va.gov/) pages that are created by Drupal CMS editors. The moments that matter include Getting out, Starting up, and Taking care of myself.

The purpose of this research is to **get editor feedback on the new CMS media upload design**.

Based on on our findings, usability adjustments will be made to the image uploader in the CMS.

### **Research Questions**

**Current media upload tool**

- What are the challenges and pain points of the current image upload and management process?

**Prototype of new media upload tool**

- Do editors understand how to use the new media upload tool? (points of confusion of the user flow)
- Do editors understand how and what to enter as alt text?

### **Methodology**

- Usability testing - For usability testing of the new prototype
- Contextual inquiry - For reviewing current process of image uploading

## **Hypotheses and Conclusions**

### **Hypotheses**

Our hypothesis is that participants will prefer the updated mockup, based on previous research, and will also provide additional feedback on ways to improve it. Since the goal is to make usability adjustments to the image uploader, the only way to validate and expand on these adjustments is through testing.

### **Conclusion:** *Definitely True!*

Participants overwhelmingly prefer the prototype over the current version, citing its streamlined process and reduced complexity. 

The prototype was perceived as cleaner, easier to use, more direct, and more straightforward overall by all 8 participants.

> *“I like how this looks.” - P1*
> 

> *“Overall it was clean and easy and there was a lot less that was unclear.” - P3*
> 

> *“This one seems like it more to the point. I just wanna get this imagery dropped off and  get it to go with the event or whatever. – P5*
> 

> *“It was cleaner because you reduce steps and you already know that.” - P7*
> 

## **Key Findings**

1. **Description Field Confusion:** All participants found little distinction between image descriptions and alternative text fields, unclear about their purposes.
2. **Description Removal Appreciated:** All participants liked the removal of description.
3. **Section Selection Issues:** Many participants found selecting image sections time-consuming and confusing, mainly due to the lengthy list of options.
4. **Crop Option Confusion:** Participants had diverse preferences and limited understanding of crop options, often finding them excessive and confusing.
5. **Automatic Cropping Feature:** All participants appreciated automatic cropping with preview before finalization.
6. **Preference for "Save and Insert":** Most participants strongly preferred the "Save and Insert" option over "Save and Select" due to its perceived efficiency.
7. **Image Size Display:** Some participants wanted to see the pixel size details of their uploaded images.
8. **Image Preview Experience:** Many participants expressed frustration with the current image preview process, citing slow loading speeds and time-consuming adjustments.
9. **Separate Image Upload and Media Library Buttons:** All participants confidently utilized the distinct "Upload Image" and "Media Library" buttons without issue.
10. **Limited Use for Media Library:** Most participants infrequently used the media library and rarely encounter scenarios where they would use images uploaded by others.

## **Details of Findings & Recommendations**

### Current Image Uploading Process

The following feedback highlights findings and recommendations based on user’s experiences with the current image uploading process. Participants uploaded an image from their CMS and walked the moderator through the experience.

#### Workflow

- **Diverse Editing Tools:** Most CMS editors use various tools for pre-processing images, avoiding external work-orders for image adjustments.
    
    > *“I use Photoshop and I crop it to the dimensions, and I'll retouch it for them.” - P4*
    > 
    
    > *“[In Adobe], I have like a template for the events and then changing titles and stuff like that… It's a 7 by 2 ratio. So there's not much room to do much else with it.” – P6*
    > 
    
    > *“I pasted the image I had into paint and drug it into the middle to the left, to right for the size that I needed it to be.” – P6*
    > 
    - **Recommendation:**
        - Consider creating standardized Photoshop templates for all content types images, as VA editors have Adobe Creative Cloud access.

#### Text & Selection Fields

- **Description Field Confusion:** All participants found little distinction between image descriptions and alternative text fields, unclear about their purposes.
    
    > *“I think naturally I just put a description in I didn't even like recognize that it was not a required field..” - P2*
    > 
    
    > *“The file name is going to tell me generally what the picture is and the alternative text is going to generally tell me what the picture is...” - P8*
    > 
    - **Recommendation:** Remove description fields to streamline the process and reduce confusion. [Prototype Validation]
- **Alt Text Challenges:** Some participants struggled to describe complex images like screenshots due to alt text requirements.
    
    > *“I wanted to describe like step one, “upload an image of your ID” because that's what the picture was of and I couldn't do it because it had “image of”. - P3*
    > 
    - **Recommendation:** Increase flexibility in alt text requirements for complex images, particularly screenshots.
- **Section Selection Issues:** Many participants found selecting image sections time-consuming and confusing, mainly due to the lengthy list of options.
    
    > *“I wish there if there were a way to expedite that just to make a default setting for ourselves…” - P5*
    > 
    
    > *“This was kind of annoying to scroll through…” - P3*
    > 
    - **Recommendation:**
        - Display only sections that the editor has permission to edit, simplifying the selection process.
        - Implement a search function within the sections list to allow participants to quickly find their desired section.

#### **Image Uploading UI**

- **Crop Option Confusion:** Participants had diverse preferences and limited understanding of crop options, often finding them excessive and confusing.
    
    > *“…I'm confused by that because I don't know which one I'm supposed to select because there's times I've gone through and I upload something and my image is like “Oh God, that's not even what I wanted to show.” So I have to back out and, you know, redo the image and, and move it so that I have what's pertinent that shows.” - P1*
    > 
    - **Recommendation:**
        - Remove crop options for content types with a required crop (e.g., 7:2 for events). [Prototype Validation]
        - For pages without specific image size requirements, only include free-form cropping options.
- **Image Preview Experience:** Many participants expressed frustration with the current image preview process, citing slow loading speeds and time-consuming adjustments.
    
    > *“It's just harder to know how it's gonna look in production until I can upload it and preview it. So there's just naturally gonna be some like readjusting at that phase. Even if I have all the images and they're like all the right size and I upload it, I'm like, “Oh actually, I have the right size but like the main thing that I want is up here.” So I'm gonna need to like rethink that and resize it or something.” - P3*
    > 
    - **Recommendation:**
        - Provide immediate preview of the cropped image to allow real-time adjustments. [Prototype Validation]
        - Consider live preview, side-by-side that shows real-time updates, so participants know exactly how the image will look within the content.
- **Preference for "Save and Insert":** Most participants strongly preferred the "Save and Insert" option over "Save and Select" due to its perceived efficiency.
    
    > *“I know save and insert is the one that you use, because I've used both obviously and one works and one doesn't.” - P4*
    > 
    
    > *“Save and insert means it immediately jumps me back to this page and I'm already here. If I do save and insert it, uploads the image and then it asks me do I save and upload? Then it asks me do I wanna insert it? So I just skip a step, right?” - P1*
    > 
    - **Recommendation:** Remove the "Save and Select" option to simplify the process. [Prototype Validation]
- **Image Size Display:** Some participants wanted to see the pixel size details of their uploaded images.
    
    > *“The consistency that we were looking for in this instance was a consistent width… If Drupal would tell me what the size is and what the what the width is, either in pixels or inches or something… I can like see the numbers then I can see, “Oh, that number is off.”” - P3*
    > 
    - **Recommendation:** Display image dimensions (width and height) in pixels directly within the image upload interface. This will help participants ensure images meet size requirements and optimize performance.
- **GIF Playback Issues:** Some participants noted GIFs uploaded to the Drupal CMS don't animate correctly in production.
    
    > *“It said that it allows GIFS and we uploaded a GIF because another PA specialist   wanted to have two photos rotate through. When it went to the external side, it didn't actually move, it stayed at one photo.” - P5*
    > 
    - **Recommendation:** Remove GIF support from the Drupal CMS. [Prototype Validation]

#### Media Library

- **Limited Use for Media Library:** All participants infrequently used the media library and rarely encounter scenarios where they would use images uploaded by others.
    
    > *“I am rarely ever assuming that it's worth my time to look for an image because I'm doing new things, new news release, new stories, new events happening around our local VA new region. So I'm not looking for historical past postings to then utilize.” - P7*
    > 
    
    > *“I almost never use it except to find my own pictures that I've uploaded before… I've kind of looked through them. Most of the time when I'm uploading images, it's very specific to our facility and the stories that we're posting. - P8*
    > 
    - **Recommendation:**
        - Consider limiting media library access to personal or section only
- **Image Reusability Concerns:** Some participants expressed concerns about image reusability and permissions, questioning the applicability of consent granted to specific VA offices.
    
    > *“The VA has rules about the photos that we take of people, staff included and how they can be used. So if someone signs a consent form for us to use [an image] for a specific story or a specific page on our internet, I can't give other people permission to use it because they didn't ” - P7*
    > 
    
    > *“I assumed anything that went into the media library was going to be reused because it belongs to VA National.” - P8*
    > 
    - **Recommendation:**
        - Remove the "Reusable" checkbox on image uploads, and default to a global image reusability behavior. [Prototype Validation]
        - Clarify image usage rights and permissions, providing guidance on when and how images can be reused
        - Consider limiting media library access to personal or section only

### Proposed Image Uploading Process

The following feedback highlights findings and recommendations based on user’s experiences with the proposed image uploading process. Participants were prompted to upload an image and walk through the process using the Figma prototype.

#### Text & Selection Fields

- **Description Removal Appreciated:** All participants liked the removal of description.
    
    > *“Description and alt text kind of are like [the same], I put the same thing in both most of the time. So and it is nice to have it like [this].” -P4*
    > 
    - **Recommendation:** Maintain description removal. [Prototype Validation]

#### **Image Uploading UI**

- **Image Size Recommendations:** All participants valued size information but some wanted it earlier in the upload process.
    
    > *“So if it said ”Event image recommended size… in this box [on event page]… that would be perfect…because I usually have Photoshop open with the image I've been editing still there.” - P4*
    > 
    - **Recommendation:**
        - Provide clear, upfront information about recommended image sizes on content page within the image upload component (e.g., event). Include both pixel dimensions and aspect ratios to align with users' workflow.
- **Automatic Cropping Feature:** All participants appreciated automatic cropping with preview before finalization.
    
    > *“Having the preset aspect ratio that it just goes into, that’s excellent.” - P7*
    > 
    
    > *“I think having like the one image ratio for certain templated spots is great because it just helps cut out something to think about.” - P3*
    > 
    
    > *“If your picture is a little bit too big, you wanna move it so it shows the pertinent information… you have an opportunity to adjust it so it can say “town hall” or whatever and then people will know exactly what it is. But yeah, I think it's great. - P1*
    > 
    - **Recommendation:** Maintain automatic cropping. [Prototype Validation]
- **Clarity on Size Requirements:** One participant was confused about whether “Recommended sizes” were required or if variations were acceptable.
    
    > *“Recommended seems to be the wrong word because I’m looking at that, whether recommended means I need to do something or I don't. Does that mean you're going to resize at this? Does it mean that the image size… is actually the at the one aspect ratio that's allowed… it's unclear to me.” - P7*
    > 
    - **Recommendation:** Clearly state whether exact sizes are necessary and specify minimum and maximum acceptable dimensions.
- **Editing Flexibility:** One participant expressed need for post-upload adjustments without erasing and re-uploading images or accessing the media library.
    
    > *“My hesitation and pressing that [remove image button] was that I wasn't necessarily ready to like scrap everything and go back and find my image. I just wanted to like, readjust it again. I just wanted to go one step back versus like two or three, but it wasn't a bad experience.” -P3*
    > 
    - **Recommendation:** Add an "Edit Image" button for readjusting images after uploading.
- **Clarifying Image Upload Indicators:** One participant expressed confusion of the "1 out of 1" indicator for single image uploads.
    
    > *“I’m confused by seeing that text, like what it means because I didn't see anywhere in the flow place to add more than one. ” - P3*
    > 
    - **Recommendation:** Remove this indicator for single image uploads.

#### Media Library

- **Separate Image Upload and Media Library Buttons:** All participants confidently utilized the distinct "Upload Image" and "Media Library" buttons without issue.
    - **Recommendation:** Maintain the split button design. [Prototype Validation]

### Additional Image Uploading Insights

#### **Future Considerations**

- **Single Image Limitation:** Several participants are frustrated by the restriction to one image on most content types, limiting visual enhancement.
    
    > *“If we've taken seven images and taken the time to send a photographer, why can't our story here include seven images.” - P7*
    > 
    - **Recommendation:** Consider allowing multiple image uploads for all content types.
- **Flyer Uploads:** Some participants want to upload flyers to events directly, while others worry about PDF accessibility compliance.
    
    > *“I don't want there to be [PDFs in events] because then I would have to make those flyers that we get, and we get so many a day, 508 compliant, and that would be a huge burden.” – P4*
    > 
    
    > *“What I really want is to upload the flyer that was created by our medical media team that is 8.5 by 11 that has all the information on it already done. ” – P4*
    > 
    - **Recommendation:** Consider allowing flyer/PDF uploads for all content types, but streamline the 508 compliance process for editors.
- **Image Resolution Issues:** One participant struggled to achieve high-quality image resolution, especially with small images.
    
    > *“I'm still not happy with the resolution. I think it looks really pixelated.” - P3*
    > 
    - **Recommendation:**
        - Offer recommended image size guidelines [Prototype Validation]
        - Consider preventing low-quality image uploads (e.g., less than 250 px)

#### **Feature Requests**

The following feedback highlights feature requests participants suggested that may improve their experience uploading images. 

- **AI-Suggested Cropping:** One participant wanted to automatically suggest optimal image cropping based on the focal point of the image.
    - **Potential Benefit:** This feature could save time and improve the quality of image presentations.
- **AI-Suggested Alt Text:** One participant wanted to AI to generate alternative text suggestions for images.
    - **Potential Benefit:** This could improve accessibility and SEO by providing accurate and descriptive alt text.
- **Unique Thumbnails:** One participant wanted to create unique thumbnails for each story.
    - **Potential Benefit:** Unique thumbnails can improve visual appeal and make it easier to identify images.
- **Image Carousel:** One participant wanted to display multiple images in a carousel format.
    - **Potential Benefit:** This feature could enhance the visual appeal of content and provide a more engaging user experience.

### CMS Drupal Feedback

The following feedback highlights general aspects of the [VA.gov](http://va.gov/) Drupal CMS, separate from image upload functionalities.

- **Complex Node Structure:** Several participants noted difficulty with navigating and remember the hierarchical structure of nodes in the Drupal CMS.
    
    > *“It's hard to find what you're looking for things you've already done if you have to update them. And I think I have spent way too much time and maybe it's me and I'm dumb because I couldn't figure out how to find some of these things and I go to search but it's difficult sometimes when you have to update like three different pages and one of them is hard to find.” – P6*
    > 
    
    > *“It can be a challenge to remove all the content. Some things have no images, some things have two images. And you want to make sure you're deleting everything together, the images with the advisory.” – P4*
    > 
    - **Recommendation:** Allow participants to edit and adjust nodes directly from parent pages, streamlining organization and reducing errors.
- **Detail Page:** Several participants disliked being required to put pages under programs, when they would be better suited under health services.
    
    > *“Women's Veteran Care has a detail page and the URL is under health services. But other services want detail pages and they're not necessarily what I would categorize as a program. For example, our rheumatology wanted like a gout care page… I don't feel like gout care is a program. It's just a disease. One of many that's under rheumatology, which is a health service. So, so unfortunately, because everything was grayed out under health services. I had no choice but to put it under programs. – P4*
    > 
    
    > *“If I'm creating a new detail page, it has to go under programs no matter what. And so this is starting to fill up very quickly… we're only gonna get more requests as time goes on.” – P4*
    > 
    - **Recommendation:** Consider allowing participants to create detail pages under health services.
- **Insufficient Lede Length:** Some participants noted current lede word count is too short causing participants to repeat content in both the lede and body of articles.
    
    > *“Word counts for the lede of the story can be an issue and then you can't link in here. Sometimes people have really long first sentences and then sometimes even in our National Tool Kits, they'll give us like a press release or, and like they'll, they'll want like a link in the first sentence and then we can't do that.” - P4*
    > 
    - **Recommendation:** Increase the lede word limit for more comprehensive content. Use ellipses in previews if the lede exceeds the desired length.
- **VA police page:** One participant expressed frustration with the current process for creating and managing VA police pages, particularly in terms of copying and pasting local information.
    
    > *“Our police people wanted to have a detail page and we weren't able to copy and paste the local information that they wanted. So now I have two VA police pages… They wanted information on who to report lost or stolen items to, they want our dispatch, they want who to send complaints to and who to send vehicle registration to.” – P4*
    > 
    - **Recommendation:** Allow VA police page to be customizable to accommodate variations in local information.
- **Caption Limitations:** One participant is unable to add captions to images on all content types, forcing them to include captions directly on images.
    
    > *“I've had to kind of can make it up in Photoshop but like it's not the easiest to get consistent fonts.” - P4*
    > 
    - **Recommendation:** Extend caption functionality to all page types within the Drupal CMS.
- **Rich Text Formatting Issues:** One participant noted that pasting content from Microsoft Word into Drupal CMS leads to formatting loss, requiring time-consuming manual corrections.
    
    > *“And all the rich formatting for Microsoft word that I paste in there is gonna disappear. And then I'm gonna remember to curse at Drupal again because now I have to reformat it all because it wasn't utilizing the schema for Microsoft Word’s storage of rich text.” – P7*
    > 
    - **Recommendation:** Enhance compatibility between Drupal and Microsoft Word to preserve rich text formatting when pasting content.
- **Link Functionality Problems:** One participant noted that SafeLink obfuscation feature hinders their ability to copy and paste links effectively.
    
    > *“Yeah, see it's pasting that bad link… That's a problem because it makes more bad links and it makes for a workflow with greater chance for error. It takes time cleaning up these “un-Safe links.” – P7*
    > 
    - **Recommendation:**
        1. **Reassess SafeLink:** Evaluate the necessity of SafeLink and its impact on user experience. Consider alternative security measures that don't interfere with basic link functionality.
        2. **Offer Bypass Option:** If SafeLink is essential, provide a clear way for participants to bypass obfuscation and manage links directly.
        3. **Enhance User Guidance:** Provide clear instructions on working with SafeLink, including proper link management techniques.
- **Time Zone Confusion:** One participant struggle to select the Pacific time zone in Events because the option "Los Angeles" doesn't clearly represent the entire Pacific Time Zone.
    
    > *“It’s going to be Pacific. What? Oh here we go. Los Angeles.” – P1*
    > 
    - **Recommendation:** Implement more intuitive time zone options, such as "Pacific Time Zone," "Eastern Time Zone," and "Central Time Zone."
- **Inconsistent Capitalization:** One participant was frustrated by inconsistent capitalization of "health care" for health care systems.
    
    > *“It always annoys me that there's different capitalization in there and “health care” isn't capitalized and “Northeast Ohio” is.” - P7*
    > 
    - **Recommendation:** Allow capitalization of "health care" to align with user expectations and maintain consistency.

## **Next Steps**

1. IIR team to review the research and recommendations with the CMS team in depth.
2. CMS team to identify any overlap with this research and editor survey responses.

## **Appendix**

### Resources

- [Link to conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/medical-centers/research/2024%20VAMC%20CMS/ImageUploader/ConversationGuide.md)
- [Link to recruitment email](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/medical-centers/research/2024%20VAMC%20CMS/ImageUploader/RecruitmentEmail.md)
- [Link to prototype](https://www.figma.com/proto/OjptXN3dzYqJHDQb8zV2eb/CMS-Research?page-id=246%3A8&node-id=254-1068&viewport=396%2C351%2C0.13&t=gZUe6WufnnPEQhVb-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=254%3A1068&show-proto-sidebar=1&hotspot-hints=0)
- [Link to Figma design]([https://www.figma.com/proto/OjptXN3dzYqJHDQb8zV2eb/CMS-Research?page-id=246%3A8&node-id=254-1068&viewport=396%2C351%2C0.13&t=gZUe6WufnnPEQhVb-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=254%3A1068&show-proto-sidebar=1&hotspot-hints=0](https://www.figma.com/design/OjptXN3dzYqJHDQb8zV2eb/CMS-Research?node-id=40-812&t=l48Z0DRNsuzgE7BT-1))
- [Link to notes](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/medical-centers/research/2024%20VAMC%20CMS/ImageUploader/ImageUploaderNotes)
- [Link to transcripts](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/facilities/medical-centers/research/2024%20VAMC%20CMS/ImageUploader/Transcripts)

### **Tools used for Synthesis**
- [Dovetail for transcription & tagging](https://iir-workspace-epf3.dovetail.com/projects/1fnDiRThXwm9VymUV6Znga/tags/b/2SQBixJJmgYiLkFwEpU1PN) 
- [Figma for affinity mapping](https://www.figma.com/design/OjptXN3dzYqJHDQb8zV2eb/CMS-Research?node-id=559-2&t=v8GPR79ZnFBLkIGh-1)

### **Pages and applications used**

- [Link to prototype](https://www.figma.com/proto/OjptXN3dzYqJHDQb8zV2eb/CMS-Research?page-id=246%3A8&node-id=254-1068&viewport=396%2C351%2C0.13&t=gZUe6WufnnPEQhVb-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=254%3A1068&show-proto-sidebar=1&hotspot-hints=0)
- Live Drupal CMS as of September 2024

### **Secondary research**

[VAMC CMS Editor Experience, August 2024](https://www.notion.so/Drupal-CMS-Image-Upload-Study-5f2ccd8c704d4ca0807b0aa9d63a4be4?pvs=21)

## **Recruitment criteria**

### **Primary criteria (must-haves)**

- VAMC editor
- Has CMS account and editing permissions
- Has created content in [VA.gov](http://va.gov/) CMS
- Has uploaded an image to [VA.gov](http://va.gov/) before

### We talked to **8 participants.**

Audience segment:

- 7 VAMC editors
- 1 CAIA editor

Gender:

- Male: 4
- Female: 4

Devices used during study:

- Desktop: 8
