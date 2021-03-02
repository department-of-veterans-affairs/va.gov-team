# Fiduciary gating

**TL;DR: We are going to block people from updating direct deposit for edu info if they also have a fiduciary/incompetent/deceased flag for C&P payments. This is because we block that page for people with those flags.**

On 1/6/2020, we asked Melissa Rebstock (via email) if we needed to block people from updating direct deposit for edu if they have a fiduciary. This is the response we got.

> That’s a good question and I’m assuming the same as you but have added but have added Shay to the email thread.  She’s been the EDU POC I’ve worked with over the years.
> 
> Shay – Can you please see below?  We’re working to get EDU DD/EFT up and running on VA.gov and transition from eBenefits, but there’s a question about Veterans deemed incompetent or who have a fiduciary.  For C&P benefits, if the Veteran is deemed incompetent or has a fiduciary, we don’t allow online changes to their contact or payment information.  How is this handled in EDU?  Any assistance you can provide is appreciated.

Shay Norton-Leonard confirmed that they **do not** block direct deposit for edu if someone has a fiduciary flag:

> This question was asked in the past as well. (See email attached.) At that time, we decided not to restrict access to updating the direct deposit information, since it would be an edge case if someone deemed incompetent or had a fiduciary was going to school.

So, the conclusion is that we don't **have** to block direct deposit for edu based on whether someone has a fiduciary/is incomepetent/is deceased. Given that the endpoint that we're working with doesn't pass this info like it does for C&P payments, that makes a lot of sense.

**However**, we actually decided to hide the direct deposit for edu info *if* that person also receives C&P payments *and* we get back a fiduciary/incompetent/deceased flag from that endpoint. This is because all the direct deposit info exists on the same page, and we currently hide that section if we get back one of those flags. It would likely be a weird/inconsistent experience to block C&P updates but not edu updates given that use case. Plus, it seems like the likelihood that someone is actively receiving edu payments and is also under care of a fiduciary/has been deemed incompetent is unlikely
