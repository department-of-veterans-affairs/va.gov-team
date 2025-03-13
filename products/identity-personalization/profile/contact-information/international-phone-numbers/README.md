# Initiative Brief - Support International Phone Numbers 

## Background
MHV supports international phone numbers, VA Profile could support international phone numbers but currently does not because some of it's partner systems are unable to do so. 

VA Profile is exploring how to enable international phone number support in their platform without negatively impacting those partner systems. When VA Profile is able to support international numbers, VA.gov Profile will also need to support international numbers.  

## Problem statement
Currently, VA.gov does not support international phone numbers because it is not supported by VA profile. This causes annoyance and frustration for veterans who only have an international phone number. Additionally, MHV supports international phone numbers and not making this available becomes problematic as part of the MHV to VA.gov transition. 

**Why is this important**
Support for International numbers in VA Profile scheduled to be live by July 1, 2025 and the MHV to VA.gov transition is scheduled for June of this year. This work needs to be completed to comply with the new VA profile phone number, provide functionality for veterans living abroad as well as veterans migrating from MHV to MHV on VA.gov. 



## Results or Impact
This work is necessary as part of the deadlines listed above. However, we believe that by adding this functionality, there is potential for an increase in satisfaction of the VA.gov profile product as we have seen consistent feedback that veterans are frustrated they can't input their international phone numbers. We will track the following metrics
- CSAT - we will draw upon feedback scores from both the feedback button and intercept survey to determine any changes in the overall satisfaction with the contact information page. 
- Usage - Is there a way for us to determine how many international phone numbers we should expect to see in the profile and track whether input into this functionality is reaching that number? It is possible there might be a seeding effort occurring with VA profile and other systems (i.e. VISTA) but that hasn't been determined yet. 


## OKRs 
Which OCTO, Portfolio, Pod/Crew/Team OKRs does this initiative map to? 
- OCTO OKRs: O1.1 Improve satisfaction with our web and mobile products by 5 points. 
- Portfolio OKRs:
- Team/Crew/Pod OKRs: Auth experience and VADS


## VA stakeholders:
- VA Profile
- VADS
- MHV

## Definition of Done
We will need to change the Contact Info page to support international phone numbers and the Notification Settings page should also react and lock down text notifications (international phone numbers are not supported for notifications)
 
### Form Behavior Needed
- For phone numbers with a country code of +1, that includes the +1 country code, a 3-digit area code and a 7-digit phone number.
- For phone numbers with a country code other than +1, there is a county code from 1-3 digits and a phone number up to 12 digits.


### Pre-work:
To support international phone numbers VA.gov would need:

#### 1. VA Profile International Phone Number Support `DONE they're able to support`

<details><summary>Details</summary>
<p>

There's a weekly communication call between VA Profile (BE) and VA Notify, VEText, and VA.gov This issues was initially discussed on that biweekly call and is a request raised by MHV. 

VA Profile support for International numbers is planned for PI 30 starting in Sept 2024

<details><summary>Call Log</summary>
<p>

1/25/2024

![Image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/129431463/93ce6d8d-d10e-41d5-8393-637c2fa5df91)

2/14/2024



![Image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/129431463/c6821397-42f1-49ed-afa7-f97f6d14925f)


</p>
</details> 

</p>
</details> 

#### 2. VA Design System International Phone Number Component Work `DONE` 
<details><summary>Details</summary>
<p>

The VADS/DSC is working on creating components that support international Phone Numbers. We should be able to use their components. We'd need to check to make sure the behaviors they build (eg. regex) fit the VA Profile supported behaviors but otherwise their solution should be something we can implement relatively quickly once the components are in the VADS. 

- [slack thread](https://dsva.slack.com/archives/C0NGDDXME/p1716225111815539?thread_ts=1716210018.192779&cid=C0NGDDXME)
- [[Design] International phone number pattern #3222](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/3222)
- [Experimental Design [International Phone number support] #2885](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/2885)
     -  [design figma ](https://www.figma.com/design/CToySzwbZYIf7cP9PHh5Hn/Phone-Number-Exploration?node-id=10-1034&node-type=FRAME&t=UXm6CTevrXC9SAf2-0)
     - DSC work is being done as part of [Phone number input needs to allow more than 10 character for international numbers #2673](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/2673) 
</p>
</details> 

## Reference Links / Important Artifacts 
- Designs 
- [International Phone Numbers Epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/74562)
