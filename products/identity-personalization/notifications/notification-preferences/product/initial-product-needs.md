# Initial product needs

## TL;DR

- For VA Profile's 12/14/20 launch, they are just establishing infrastructure for communication partners.
- In the January 2021 release, they  are still establishing infrastructure for communication partners, specifically grouping.
- However, there are no partners that have actually said yet “we need X and Y setting.” So at this point, there is no UI work to do because there are no settings defined. We’re just getting set up for when those settings are ready to be utilized by a communication partner like VETText or someone else.

## More details

These details were outlined by Terry Bazemore in an email on 12/8/20:

> Now to “briefly” answer your questions.
>  
> ----
> Example 1: There are no new notification preferences for V1.
> We’re only updating how the connection for the existing VEText health appointment reminder indicator works.
> ----
> 
> For 12/14 we are implementing the core functionality that allows us to capture a "Communication Item" that represents each type of communication that a sender (Communication Partner app / Product Line) is responsible for.
Each Communication Item must have at least 1 Communication Channel defined.  (e.g. VEText Appointment Reminder via Text channel).
>  
> To your question, we are doing more than updating how the connection for the existing VEText health appointment reminder indicator works.  We are establishing how all Communication Partners will define what they are responsible to communicate in an authoritative way.
>  
> Regarding impact on VEText, if you said to me "Terry for now, it is easier on VA.gov, to keep VEText as-is, and the corresponding VA.gov functionality in place while we migrate to the new approach”, I would say no worries, because we allowed for that.
>  
> On the other hand, if you said to me "Terry Va.gov does not want to manage two overlapping methods and sets of screens (even if we can control the context for a very short time), so we want to migrate VEText immediately and bring on VA Notify all in sync". I would say no worries, because we allowed for that also.
>  
> This is why we created the timeline.  And this is why I want a sync chat (small group) to clarify the options we have at our disposal (made possible by how we have scoped the data).
>  
> ----
> Example 2:
> We need to accommodate benefit-agnostic notification indicators. Someone should be able to select whether any office at the VA can contact them via email or via text message.
> ----
> 
> I so appreciate the term "benefit-agnostic" and I am clear on your intent for this question.  The intent of the new model is to provide a more granular capability than "benefit-agnostic".  Essential, the current capability with Contact Info is "benefit-agnostic" and the result is everybody updates the same value.
>  
> Clarice Chan, prior to Shane taking over that organization, indicated a need for Granular Communication Permissions.  Meaning, each Product Line could define Items for each type of Communication they send, and the applicable channels for each.
> 
> So, Communication Permissions model will now be more granular than "benefit-agnostic".  For example, the new model will allow VEText to capture a different Veteran selection for each type of communication they send (Appointment Reminders via Text, Appeals Notifications via Text).
>  
> This design does not preclude "benefit-agnostic" but we will address that in another step if it is validated as a requirement.  Think of it as a global option for each channel that would still allow for some granularity.  Before I say more on this we have to vet with business.  This is not in for 12-14 or Jan-11.  We may discuss further later if there is a resulting validated requirement.
> 
> ----
> Example 3:
> We need to accommodate the following benefit-specific indicators —
> -VEText
> -Health reminders: Email and Text.
> -Appeals hearing reminders: Email and Text.
> -Claim status updates: Email only.
> ----
> 
> Correct, this is the essence of what the new model provides.
>  
> With the new model, Va.gov has the opportunity to:
> -- Display a list of the Veterans current Permissions selections
> --Along with other available Communication Permission Selection Options (not already selected)
>  
> Va.gov has the opportunity to display these available Communication Permission Selection Options in 2 ways (hopefully to provide improved Veteran Experience).
> 1) As a complete list of available options (such as in a user settings page or settings section of VA.gov)
> 2) In context of what the user is doing (As a user: While I am updating my payment information on Va.gov, I see to the right of the main area a small list of Communication Permission selectable options with [add] or [remove] buttons (respectively) next to each.  This allows me to quickly change the permission selections for my payment notifications and only that).
>  
> Number 2 is enabled by the Jan 11 release of Grouping from a data perspective.
>  
> ----
> Additional
> ----
> 
> For the initial releases, establishing Communication Permissions Selection Options (Communication Item and Channel configurations created by the Communication Partners) will be created through a governed, manual process.
> 
> This creates the information that Va.gov will be able to display to VA Customers (Veterans and Persons known to MPI) for selection.  So, VA.gov will have the only UI and will present currently selected permissions and available option to the VA Customer.  Va.gov will send selected/updated permission selections back to VAProfile.
