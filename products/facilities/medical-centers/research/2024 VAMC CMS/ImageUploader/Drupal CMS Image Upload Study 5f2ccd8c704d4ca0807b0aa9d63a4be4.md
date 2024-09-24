# Drupal CMS Image Upload Study

This research aims to directly address known issues in Drupal CMS Image Upload workflow, such as cropping/uploading photos to [VA.gov](http://va.gov/) pages. By addressing these targeted issues, we aim to:

- Optimize the image upload and management process.
- Reduce help desk requests related to image management.
- Empower editors to feel more confident and efficient in working with images.

**Quick Links:**

- [Testing Prototype](https://www.figma.com/proto/OjptXN3dzYqJHDQb8zV2eb/CMS-Research?page-id=246%3A8&node-id=254-1068&node-type=SECTION&viewport=634%2C286%2C0.06&t=lmt3azvtpxKnpA9A-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=254%3A1068&show-proto-sidebar=1)
- [Research Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/medical-centers/research/2024%20VAMC%20CMS/ImageUploader/Research%20Plan%20for%20VA%20IIR.md)
- [Conversation Guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/medical-centers/research/2024%20VAMC%20CMS/ImageUploader/ConversationGuide.md)

The [Prototype Validation] tag means that these recommendations are already reflected in the prototype users reviewed.

---

# Overall

## Users Prefer New Image Upload Design

Users overwhelmingly prefer the prototype over the current version, citing its streamlined process and reduced complexity. 

The prototype was perceived as cleaner, easier to use, more direct, and more straightforward overall.

> *“I like how this looks.” - P1*
> 

> *“Overall it was clean and easy and it was a lot less like there was a lot less that was unclear.” - P3*
> 

> *“This one seems like it more to the point. I just wanna get this imagery dropped off and  get it to go with the event or whatever. – P5*
> 

> *“It was cleaner because you reduce steps and you already know that.” - P7*
> 

# Key Findings & Recommendations

## Current Image Uploading Process

The following feedback highlights findings and recommendations based on user’s experiences with the current image uploading process. Users uploaded an image from their CMS and walked the moderator through the experience.

### Text & Selection Fields

- **Description Field Confusion:** Users found little distinction between image descriptions and alternative text fields, unclear about their purposes.
    
    > *“I think naturally I just put a description in I didn't even like recognize that it was not a required field..” - P2*
    > 
    
    > *“The file name is going to tell me generally what the picture is and the alternative text is going to generally tell me what the picture is...” - P8*
    > 
    - **Recommendation:** Remove description fields to streamline the process and reduce confusion. [Prototype Validation]
- **Alt Text Challenges:** Users struggled to describe complex images like screenshots due to alt text requirements.
    
    > *“I wanted to describe like step one, “upload an image of your ID” because that's what the picture was of and I couldn't do it because it had “image of”. - P3*
    > 
    - **Recommendation:** Increase flexibility in alt text requirements for complex images, particularly screenshots.
- **Section Selection Issues:** Users found selecting image sections time-consuming and confusing, mainly due to the lengthy list of options.
    
    > *“I wish there if there were a way to expedite that just to make a default setting for ourselves…” - P5*
    > 
    
    > *“This was kind of annoying to scroll through…” - P3*
    > 
    - **Recommendation:**
        - Display only sections that the editor has permission to edit, simplifying the selection process.
        - Implement a search function within the sections list to allow users to quickly find their desired section.

### **Image Uploading UI**

- **Crop Option Confusion:** Users had diverse preferences and limited understanding of crop options, often finding them excessive and confusing.
    
    > *“…I'm confused by that because I don't know which one I'm supposed to select because there's times I've gone through and I upload something and my image is like “Oh God, that's not even what I wanted to show.” So I have to back out and, you know, redo the image and, and move it so that I have what's pertinent that shows.” - P1*
    > 
    - **Recommendation:**
        - Remove crop options for content types with a required crop (e.g., 7:2 for events). [Prototype Validation]
        - For pages without specific image size requirements, only include free-form cropping options.
- **Image Preview Experience:** Users expressed frustration with the current image preview process, citing slow loading speeds and time-consuming adjustments.
    
    > *“It's just harder to know how it's gonna look in production until I can upload it and preview it. So there's just naturally gonna be some like readjusting at that phase. Even if I have all the images and they're like all the right size and I upload it, I'm like, “Oh actually, I have the right size but like the main thing that I want is up here.” So I'm gonna need to like rethink that and resize it or something.” - P3*
    > 
    - **Recommendation:**
        - Provide immediate preview of the cropped image to allow real-time adjustments. [Prototype Validation]
        - Consider live preview, side-by-side that shows real-time updates, so users know exactly how the image will look within the content.
- **Preference for "Save and Insert":** Users strongly preferred the "Save and Insert" option over "Save and Select" due to its perceived efficiency.
    
    > *“I know save and insert is the one that you use, because I've used both obviously and one works and one doesn't.” - P4*
    > 
    
    > *“Save and insert means it immediately jumps me back to this page and I'm already here. If I do save and insert it, uploads the image and then it asks me do I save and upload? Then it asks me do I wanna insert it? So I just skip a step, right?” - P1*
    > 
    - **Recommendation:** Remove the "Save and Select" option to simplify the process. [Prototype Validation]
- **Image Size Display:** Users wanted to see the pixel size details of their uploaded images.
    
    > *“The consistency that we were looking for in this instance was a consistent width… If Drupal would tell me what the size is and what the what the width is, either in pixels or inches or something… I can like see the numbers then I can see, “Oh, that number is off.”” - P3*
    > 
    - **Recommendation:** Display image dimensions (width and height) in pixels directly within the image upload interface. This will help users ensure images meet size requirements and optimize performance.

### Media Library

- **Limited Use for New Images:** Users infrequently used the media library and rarely encounter scenarios where they would use images uploaded by others.
    
    > *“I am rarely ever assuming that it's worth my time to look for an image because I'm doing new things, new news release, new stories, new events happening around our local VA new region. So I'm not looking for historical past postings to then utilize.” - P7*
    > 
    
    > *“I almost never use it except to find my own pictures that I've uploaded before… I've kind of looked through them. Most of the time when I'm uploading images, it's very specific to our facility and the stories that we're posting. - P8*
    > 
    - **Recommendation:**
        - Consider limiting media library access to personal or section only
- **Image Reusability Concerns:** Users expressed concerns about image reusability and permissions, questioning the applicability of consent granted to specific VA offices.
    
    > *“The VA has rules about the photos that we take of people, staff included and how they can be used. So if someone signs a consent form for us to use [an image] for a specific story or a specific page on our internet, I can't give other people permission to use it because they didn't ” - P7*
    > 
    
    > *“I assumed anything that went into the media library was going to be reused because it belongs to VA National.” - P8*
    > 
    - **Recommendation:**
        - Remove the "Reusable" checkbox on image uploads, and default to a global image reusability behavior. [Prototype Validation]
        - Clarify image usage rights and permissions, providing guidance on when and how images can be reused
        - Consider limiting media library access to personal or section only

## Proposed Image Uploading Process

The following feedback highlights findings and recommendations based on user’s experiences with the proposed image uploading process. Users were prompted to upload an image and walk through the process using the Figma prototype.

### Text & Selection Fields

- **Description Removal Appreciated:** Users liked the removal of description.
    
    > *“Description and alt text kind of are like [the same], I put the same thing in both most of the time. So and it is nice to have it like [this].” -P4*
    > 
    - **Recommendation:** Maintain description removal. [Prototype Validation]

### **Image Uploading UI**

- **Image Size Recommendations:** Users valued size information but wanted it earlier in the upload process.
    
    > *“So if it said ”Event image recommended size… in this box [on event page]… that would be perfect…because I usually have Photoshop open with the image I've been editing still there.” - P4*
    > 
    - **Recommendation:**
        - Provide clear, upfront information about recommended image sizes on content page within the image upload component (e.g., event). Include both pixel dimensions and aspect ratios to align with users' workflow.
- **Clarity on Size Requirements:** Users were confused about whether “Recommended sizes” were required or if variations were acceptable.
    
    > *“Recommended seems to be the wrong word because I’m looking at that, whether recommended means I need to do something or I don't. Does that mean you're going to resize at this? Does it mean that the image size… is actually the at the one aspect ratio that's allowed… it's unclear to me.” - P7*
    > 
    - **Recommendation:** Clearly state whether exact sizes are necessary and specify minimum and maximum acceptable dimensions.
- **Automatic Cropping Feature:** Users appreciated automatic cropping with preview before finalization.
    
    > *“Having the preset aspect ratio that it just goes into, that’s excellent.” - P7*
    > 
    
    > *“I think having like the one image ratio for certain templated spots is great because it just helps cut out something to think about.” - P3*
    > 
    
    > *“If your picture is a little bit too big, you wanna move it so it shows the pertinent information… you have an opportunity to adjust it so it can say “town hall” or whatever and then people will know exactly what it is. But yeah, I think it's great. - P1*
    > 
    - **Recommendation:** Maintain automatic cropping. [Prototype Validation]
- **Editing Flexibility:** Users wanted post-upload adjustments without erasing and re-uploading images or accessing the media library.
    
    > *“My hesitation and pressing that [remove image button] was that I wasn't necessarily ready to like scrap everything and go back and find my image. I just wanted to like, readjust it again. I just wanted to go one step back versus like two or three, but it wasn't a bad experience.” -P3*
    > 
    - **Recommendation:** Add an "Edit Image" button for readjusting images after uploading.
- **Clarifying Image Upload Indicators:** The "1 out of 1" indicator for single image uploads caused confusion.
    
    > *“I’m confused by seeing that text, like what it means because I didn't see anywhere in the flow place to add more than one. ” - P3*
    > 
    - **Recommendation:** Remove this indicator for single image uploads.

### Media Library

- **Separate Image Upload and Media Library Buttons:** Users confidently utilized the distinct "Upload Image" and "Media Library" buttons without commenting on their separation.
    - **Recommendation:** Maintain the split button design. [Prototype Validation]

## Additional Image Considerations

The following feedback highlights feature requests users suggested that may improve their experience uploading images. 

- **Image Resolution Issues:** Users struggled to achieve high-quality image resolution, especially with small images.
    
    > *“I'm still not happy with the resolution. I think it looks really pixelated.” - P3*
    > 
    - **Recommendation:**
        - Offer recommended image size guidelines [Prototype Validation]
        - Consider preventing low-quality image uploads (e.g., less than 250 px)
- **GIF Playback Issues:** GIFs uploaded to the Drupal CMS don't animate correctly in production.
    
    > *“It said that it allows GIFS and we uploaded a GIF because another PA specialist   wanted to have two photos rotate through. When it went to the external side, it didn't actually move, it stayed at one photo.” - P5*
    > 
    - **Recommendation:** Remove GIF support from the Drupal CMS. [Prototype Validation]
- **Diverse Editing Tools:** Editors use various tools for pre-processing images, avoiding external work-orders for image adjustments.
    
    > *“I use Photoshop and I crop it to the dimensions, and I'll retouch it for them.” - P4*
    > 
    
    > *“[In Adobe], I have like a template for the events and then changing titles and stuff like that… It's a 7 by 2 ratio. So there's not much room to do much else with it.” – P6*
    > 
    
    > *“I pasted the image I had into paint and drug it into the middle to the left, to right for the size that I needed it to be.” – P6*
    > 
    - **Recommendation:**
        - Consider creating standardized Photoshop templates for all content types images, as VA editors have Adobe Creative Cloud access.
- **Single Image Limitation:** Users are frustrated by the restriction to one image on most content types, limiting visual enhancement.
    
    > *“If we've taken seven images and taken the time to send a photographer, why can't our story here include seven images.” - P7*
    > 
    - **Recommendation:** Consider allowing multiple image uploads for all content types.
- **Flyer Uploads:** Some users want to upload flyers to events directly, while others worry about PDF accessibility compliance.
    
    > *“I don't want there to be [PDFs in events] because then I would have to make those flyers that we get, and we get so many a day, 508 compliant, and that would be a huge burden.” – P4*
    > 
    
    > *“What I really want is to upload the flyer that was created by our medical media team that is 8.5 by 11 that has all the information on it already done. ” – P4*
    > 
    - **Recommendation:** Consider allowing flyer/PDF uploads for all content types, but streamline the 508 compliance process for editors.

## **Image Upload Feature Requests**

The following feedback highlights feature requests users suggested that may improve their experience uploading images. 

- **AI-Suggested Cropping:** Users desire a tool to automatically suggest optimal image cropping based on the focal point of the image.
    - **Potential Benefit:** This feature could save time and improve the quality of image presentations.
- **AI-Suggested Alt Text:** Users want AI to generate alternative text suggestions for images.
    - **Potential Benefit:** This could improve accessibility and SEO by providing accurate and descriptive alt text.
- **Unique Thumbnails:** Users want to create unique thumbnails for each story.
    - **Potential Benefit:** Unique thumbnails can improve visual appeal and make it easier to identify images.
- **Image Carousel:** Users want to display multiple images in a carousel format.
    - **Potential Benefit:** This feature could enhance the visual appeal of content and provide a more engaging user experience.

## CMS Drupal Feedback

The following feedback highlights general aspects of the [VA.gov](http://va.gov/) Drupal CMS, separate from image upload functionalities.

- **Detail Page:** Users disliked being required to put pages under programs, when they would be better suited under health services.
    
    > *“Women's Veteran Care has a detail page and the URL is under health services. But other services want detail pages and they're not necessarily what I would categorize as a program. For example, our rheumatology wanted like a gout care page… I don't feel like gout care is a program. It's just a disease. One of many that's under rheumatology, which is a health service. So, so unfortunately, because everything was grayed out under health services. I had no choice but to put it under programs. – P4*
    > 
    
    > *“If I'm creating a new detail page, it has to go under programs no matter what. And so this is starting to fill up very quickly… we're only gonna get more requests as time goes on.” – P4*
    > 
    - **Recommendation:** Consider allowing users to create detail pages under health services.
- **VA police page:** Users have expressed frustration with the current process for creating and managing VA police pages, particularly in terms of copying and pasting local information.
    
    > *“Our police people wanted to have a detail page and we weren't able to copy and paste the local information that they wanted. So now I have two VA police pages… They wanted information on who to report lost or stolen items to, they want our dispatch, they want who to send complaints to and who to send vehicle registration to.” – P4*
    > 
    - **Recommendation:** Allow VA police page to be customizable to accommodate variations in local information.
- **Caption Limitations:** Users can only add captions to images on story pages in the Drupal CMS, forcing them to include captions directly on images for other page types.
    
    > *“I've had to kind of can make it up in Photoshop but like it's not the easiest to get consistent fonts.” - P4*
    > 
    - **Recommendation:** Extend caption functionality to all page types within the Drupal CMS.
- **Insufficient Lede Length:** The current lede word count is too short, causing users to repeat content in both the lede and body of articles.
    
    > *“Word counts for the lede of the story can be an issue and then you can't link in here. Sometimes people have really long first sentences and then sometimes even in our National Tool Kits, they'll give us like a press release or, and like they'll, they'll want like a link in the first sentence and then we can't do that.” - P4*
    > 
    - **Recommendation:** Increase the lede word limit for more comprehensive content. Use ellipses in previews if the lede exceeds the desired length.
- **Complex Node Structure:** Users struggle to navigate and remember the hierarchical structure of nodes in the Drupal CMS.
    
    > *“It's hard to find what you're looking for things you've already done if you have to update them. And I think I have spent way too much time and maybe it's me and I'm dumb because I couldn't figure out how to find some of these things and I go to search but it's difficult sometimes when you have to update like three different pages and one of them is hard to find.” – P6*
    > 
    
    > *“It can be a challenge to remove all the content. Some things have no images, some things have two images. And you want to make sure you're deleting everything together, the images with the advisory.” – P4*
    > 
    - **Recommendation:** Allow users to edit and adjust nodes directly from parent pages, streamlining organization and reducing errors.
- **Rich Text Formatting Issues:** Pasting content from Microsoft Word into Drupal CMS leads to formatting loss, requiring time-consuming manual corrections.
    
    > *“And all the rich formatting for Microsoft word that I paste in there is gonna disappear. And then I'm gonna remember to curse at Drupal again because now I have to reformat it all because it wasn't utilizing the schema for Microsoft Word’s storage of rich text.” – P7*
    > 
    - **Recommendation:** Enhance compatibility between Drupal and Microsoft Word to preserve rich text formatting when pasting content.
- **Link Functionality Problems:** The SafeLink obfuscation feature hinders users' ability to copy and paste links effectively.
    
    > *“Yeah, see it's pasting that bad link… That's a problem because it makes more bad links and it makes for a workflow with greater chance for error. It takes time cleaning up these “un-Safe links.” – P7*
    > 
    - **Recommendation:**
        1. **Reassess SafeLink:** Evaluate the necessity of SafeLink and its impact on user experience. Consider alternative security measures that don't interfere with basic link functionality.
        2. **Offer Bypass Option:** If SafeLink is essential, provide a clear way for users to bypass obfuscation and manage links directly.
        3. **Enhance User Guidance:** Provide clear instructions on working with SafeLink, including proper link management techniques.
- **Time Zone Confusion:** Users struggle to select the Pacific time zone in Events because the option "Los Angeles" doesn't clearly represent the entire Pacific Time Zone.
    
    > *“It’s going to be Pacific. What? Oh here we go. Los Angeles.” – P1*
    > 
    - **Recommendation:** Implement more intuitive time zone options, such as "Pacific Time Zone," "Eastern Time Zone," and "Central Time Zone."
- **Inconsistent Capitalization:** Users are frustrated by inconsistent capitalization of "health care" for health care systems.
    
    > *“It always annoys me that there's different capitalization in there and “health care” isn't capitalized and “Northeast Ohio” is.” - P7*
    > 
    - **Recommendation:** Allow capitalization of "health care" to align with user expectations and maintain consistency.