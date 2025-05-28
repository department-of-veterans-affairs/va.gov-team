# AEDP Quick Check-in with Matt Dingee

## Attendees:
- Christine Steiffer
- Kristen Faiferlick
- Fran Cross
- Belle Poopongpanit
- Becky Phung
- Matt Dingee
- Alex Taker



## Agenda:
- **Update Prefill Pattern:** our design for the scenario where there is missing but required prefilled information
  - we had a solution but there were technical constraints that sent us back to teh drawing
- **Marital Informaiton:** one remaining group of questions around updload document and where we see that going in the overall marital status flow

## Artifacts
- **Figma**: https://www.figma.com/design/1z3bAkQl4uR1IvAxmtyqZi/AE-Design-Patterns---Update-Prefill?node-id=4989-58614&p=f&m=draw
- (From Matt: [Here is a branch of the component library in Figma that has the Tags I mentioned in them](https://www.figma.com/design/afurtw4iqQe6y4gXfNfkkk/branch/As3gh7VNu3IcCFQ6hg5nMu/VADS-Component-Library?m=auto)


### Prefill Pattern:
- **Christine**: Background: How to indicate missing/required information to users. The scenario where they have a page that shows information, but it's required they have that information, be we don't currently have it. The original solution was, rather than showing the page with the card form that has that summary (e.g. if the home address is missing), take them to the home address page, have them fix it, then take them back to the summary page.
  - **Christine**: There were some technical constraints. Belle wrote up a great [document](https://github.com/department-of-veterans-affairs/va.gov-team/blob/a70f9bca0fbd4da2bb4c15d27093a0d32e4d380c/products/authenticated-patterns/Engineering/%23305-Routing-Discovery-Missing-Contact-Info.md) on why that is. If we were to do that, it goes against the whole way a pattern is set up where we bring them to the summary page first. If we don't bring them to the summary page first, it creates a bigger technical lift. We came up with solution alongside CAIA with the optional tag, but came to the conclusion that breaks the more common 'required text'. We went back to figure out how to indicate it's required and missing. I assume there is a reason we don't have an error state for a card. I have explorations around that, and others we can think about. Where we are landing is that the red outline on the card is the best way to go. Another option that Becky indicated is having the subheader text be red and giving the error message. Adding the suheader and text really emphasizes that they need to do something. There are two states we need to design for: (1) when they land on the page, indicate it's missing and required; you're going to need to do something about it, and (2) if they hit continue without adding it, we add the outline and alert. How open would Matt be to having the read outlined card created?

- **Matt**: The card doesn't have an error state, but that's just because we haven't needed it yet. Now that there's a use case, I think it's worth considering. I'm wondering if the card in the error state is enough, given that it says it's required. Not sure it needs the tag and the text. Also, it's a little weird to have an error state before they've even done anything. Do we have a state that this is required and missing? Then, if they hit continue, we put them in the error state. Maybe some way to highlight the card - they have to fill it out. Usually the error state is if they do some action; we want to give them a chance to fix it before we given then an error. The required makes sense. That's how form fields are indicating rquired. The question, is do we need that missing tag or not; or is there another way to indicate the card is incomplete? In the forms tool they have a design that has a slim alert. We are working on colored tags and there is an alert variation. This might be a good use case for the alert. We made these tags color scheme-wise that aligned with our alerts. Where you have the red tag alert, there's a warning style for that, that's more of an alert. The message could be, we need your email before you continue. Some folks may blow by it, hit continue, and then we can display the error.
- **Christine**: Is there anyone else we should run this by when we have a final design before we update the guidance?
- **Matt**: We've been doing mini dscs for this team, so we could schedule that with Bryan and Danielle. I'll ping Barb to see if she has the alert figma file to share.


### Marital Status/Marital Information Patter

- **Kristin**: We met with product teams and got good feedback around the file upload process. If uploading forms is required, it would block the user from continuing at the download screen. Product teams said they tell folks on the screen that mentions the document(s) that they will ask for form(s) at the end.
  - **Kristin**: We have three designs to consider:
    - continue to ask for documents on the individual page(s) that require them. If required, block progress, 
    - ask for them all at the end,
    - hybrid: ask for them on the individual pages, with a message that they don't have to do it now, but they will need to at the end. If they haven't uploaded, then the last page will remind them to upload and block submittal until they do.
  - **Matt**: I like the hybrid. It makes sense to me; maybe they want to make as much progress as they can before they go find the documents and upload. The thing you have to work out is the required thing. I don't know if we have a great answer for when we're requiring a file; to indicate which files are required and which aren't. I wish we had a place where they could upload and store there documents where they could just upload once and reuse it.

- **Kristen**: I'll work with engineers; if they need to upload a divorce decree as an example; don't block on the individual page, then remind on the last page. 
  - **Matt**: Might be hard to implement, but should be feasible. I think there is a precedent in place that went through architecture intent to upload at the end and store the documents.
- **Kristen**: If it's not feasible, if it seems appropriate for their form, put the required documents at the end. 
  - **Matt**: I don't have a problem with that. If we give them guidance, that should be fine.
  - **Kristen**: We'll document it well and put annotations in Figma.



















