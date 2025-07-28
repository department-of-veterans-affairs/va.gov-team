# Facility Filtering and setup
- This document is informational as to how the Facility search was set up and how we needed to filter out certain facilities.
- This search functionality is dependent on a parent/child relationship between facilities with and without caregiver support.

## Facility set up
- The facility search uses the Facilities API through Lighthouse
- The Caregiver tech team provides any updates if a facility gains or loses caregiver support
- This ensures the list of facilities that return are valid choices to be displayed
     - The facilities that display in the search results either have caregiver support services or have a parent that has caregiver support services
 
## Facility filtering
- Due to API behavior, the team has had to filter out the Manila VAMC (vha_358).
     - This facility has the lowest ID number, which can cause it to default to the top of the list when we search for the parent facility
     - The Manila VAMC does not have caregiver support services and is not an applicable parent facility for the purposes of the 10-10cg form
- The team has also implemented validations on the front and back end to confirm facility selected and parent facility, if applicable.

## Slack conversations for reference

<details>
     <Summary>01/28/2025 - First discussion with team</Summary>

**Mitch Saltykov**
Jan 28th at 8:06 AM

Hey, Heather Justice Brandon Cooper and I have been looking at the CG issue with folks looking in Santa Fe but being redirected to Manilla. There was a bug in how we handled requests for parent facilities that aren't in the initial result set, which we've worked through, but we noticed that the Manilla facility (vha_358) does not offer Caregiver Support services. We didn't notice this before because the Philippine Islands' "state" code varies between "PI" and "PH" across the app.
Do we know what Caregivers in Manilla are supposed to do for support? It's the only international VA health office, and it's not like any other facilities are going to be "close enough", right? With this bug fixed, we won't be sending folks to Manilla from Santa Fe, but we will still have no options for Philippine Veterans' Caregivers....

Best-case scenario would be that this is an oversight, and the facility's Lighthouse data should be updated to reflect that it does offer caregiver services. But if not...? This is the only parent facility in our system that  doesn't offer Caregiver Services.
Should we special-case this to direct to a different facility that does offer them? Should we block Caregiver signups from the Philippines? Should we allow these signups even though the facility won't offer the support they'd need, since it gets them in the system?
... do we have a sense of how many CG applications we get from the Philippines, for that matter? Would be good to know the scope of this issue.

**Heather Justice**
  Jan 28th at 8:10 AM
The CG program only applies to US based facilities and Veterans residing in US (and territories)
So the Manila facility is not applicable
In theory, it should not come up as a valid parent facility for a US clinic (edited) 

**Mitch Saltykov**
  Jan 28th at 8:13 AM
well, it won't come up for US searches any more, but if you search for the address ("Pasay City") or Manila, it comes up.

**Heather Justice**
  Jan 28th at 8:13 AM
I suppose we should consider user behavior.  When asked where the Veteran seeks care, would they search for the Manila location?
unlikely but it could happen..

**Mitch Saltykov**
  Jan 28th at 8:14 AM
to recap, the logic is:
caregiver searches for a facility
we show a list
they pick one
if they pick one that offers caregiver services, we assign them that same one
if not, we assign them its parent facility
all parent facilities offer caregiver support
... except for this one Manila facility, which is its own parent but doesn't
(all parent facilities are their own parents)

**Brandon Cooper**
  Jan 28th at 8:16 AM
In the case that a Veteran has legitimately selected Manila as their location, we would submit it and Carma would flag it as not valid, which at that point they have now started the process of applying and Carma can figure out where they should get care? The alternative is to block it, which would then either lead the Veteran to not apply, or select a facility somewhere in the US? I don't know which is more desirable. An edge case for sure, though.

**Heather Justice**
  Jan 28th at 8:17 AM
Also a good point.  At least if they apply, based on the last convo we had with CG stakeholders that they want people to just apply, this could be a valid edge case and most likely rare

**Brandon Cooper**
  Jan 28th at 8:18 AM
As far as we can tell this is the only parent VA Facility that does not offer caregiver services. We missed it previously because the value used for the state code was changed from what it was in vets-json-schema.

**Heather Justice**
  Jan 28th at 8:20 AM
Ok.. and what is the effort if we wanted to filter it out?

**Mitch Saltykov**
  Jan 28th at 8:25 AM
we're talking through options... it depends on what UX we want:
if it's not too frustrating, an easy solution would be to let them search for whatever facility, even this one if they e.g., put in a Philippine address, then after the select it we check if it's this one facility. if so, we tell them there's no caregiver support facility on the page we now use for confirmation.
we could prevent them from even picking the Manila facility, but that might be worse? like, I don't want people frustrated by us telling them the VA facility the Vet definitely already uses doesn't exist. (edited) 

**Heather Justice**
  Jan 28th at 8:30 AM
what are the chances that a Veteran uses the Manila facility if they live in the US

**Brandon Cooper**
  Jan 28th at 8:30 AM
I'd have to imagine very low?

**Mitch Saltykov**
  Jan 28th at 8:30 AM
we could raise warnings earlier, during the Vet address input? but maybe there are legitimate situations where a Vet lives in the Philippines and has a caregiver who doesn't or something?

**Heather Justice**
  Jan 28th at 8:31 AM
They cant

**Mitch Saltykov**
  Jan 28th at 8:31 AM
How much remote care do Caregivers offer?

ok

**Heather Justice**
  Jan 28th at 8:31 AM
The Veteran has to live in the US or US Territory.  This is tru for health enrollment too
so if the Veteran is enrolled in VA health care (which is required for this program), then they must reside in US.  Then it would follow that the facility they visit must also be in US

**Brandon Cooper**
  Jan 28th at 8:33 AM
Do we consider leaving it as is for now, and if we hear of a bunch of Veterans legitimately enrolling in caregiver support then we look at filtering it out?

**Heather Justice**
  Jan 28th at 8:34 AM
I think so yes.  It seems the least likely use case

**Mitch Saltykov**
  Jan 28th at 8:34 AM
but the Manila facility does offer some services:
https://www.va.gov/manila-va-clinic/
The Manila VA Outpatient Clinic (Manila VA OPC) is the only VA facility located in a foreign country. The eligibility criteria to receive medical services for Veterans living or traveling outside the United States are different than for Veterans located in the United States and its territories. The Manila VA OPC and VA Foreign Medical Program (FMP) provide medical care to Veterans only for their VA-rated, service-connected disability, or any disability associated with and held to be aggravating a VA-rated, service-connected disability (in accordance with 38 U.S.C. 1724 and 38 C.F.R. 17.35).

"don't do anything" has a considerably lower effort-estimate than "that stuff we said"!

do we already have a dashboard or something tracking where requests come from in or out of the US? if this search volume is zero that'd be great to know


**Heather Justice**
  Jan 28th at 8:43 AM
hmm.. let me check something.  We dont have a dashboard, but i have a list of users that changed or got rerouted to another facility (from when I was looking up how often that happens)

ok I can say that from Jan 2022 - Jan 2023, no cases were ever transferred to or from Manila VA facility


**Mitch Saltykov**
  Jan 28th at 8:49 AM
outstanding!


**Heather Justice**
  Jan 28th at 8:50 AM
Ok so based on a rare occurrence and likelihood that someone would intentionally search and select the Manila VA facility, we agree to not filter it out at this time?

</details>

<details>
     <Summary>02/28/2025-03/04/2025 Conversation on second round of errors seen</Summary>

**Heather Justice**
  Feb 28th at 12:27 PM
Hey there Mitch Saltykov and Brandon Cooper
 - we just got an email from Gaspare (CG) that they got a form with Manila facility.  We will need to look into this, see if we can identify the actual facility, and see what we can do to resolve this issue (crazy how Manila keeps coming into our lives!)
We received an unroutable online 10-10CG (Case CD-1890659); The VA Medical Center that populated on the pdf is just “358”, which I think might be the Manila VA Clinic.
Upon testing the online application screen, there does not appear to be a confirmation screen for an associated VA Medical Center for this clinic. I’ve also noticed that when you type certain data in the search facility field, like 3 digit numbers, like 123, 333, 444 etc. – Manila VA Clinic comes up as a search result.
Heather, could we review what happened from the va.gov perspective? Is this possibly an unintended result of the facility search update?
We would also like a confirmation of which VA Medical Center is supposed to be forwarded apps from the Manila VA Clinic, if possible.

**Mitch Saltykov**
  Feb 28th at 12:29 PM
repro'd in staging. oof.

**Heather Justice**
  Feb 28th at 12:37 PM
Created a ticket for investigating.  When we can get time to check it out.

**Brandon Cooper**
  Feb 28th at 12:41 PM
Should we just add something to never return Manila? I searched for 111  and this was what we sent to vets-api.
Those are legitimate lat/long coordinates, as seen by the map when I looked them up.
For whatever reason the api always seems to return Manila if it doesn't find it?

**Mitch Saltykov**
  Feb 28th at 12:42 PM
IIRC it sorted first in the results when we were dealing with it in the confirmation screen?

**Brandon Cooper**
  Feb 28th at 12:43 PM
I made a curl request with the lat/long shown above and Manila was the only result that was returned
So that is what the api is sending us back
Which was the same thing happening like you mentioned where if you send it invalid params it returns Manila. So maybe that's what's happening here too? But It looked like we are finding a lat/long result that is valid.
Although do we think they ended up with Manila by searching nonsense and selecting it, or by some other means? that'd be the thing to confirm
Of note too, we updated the pdf generation to submit the supplied facility id even if it is not shown in a hard coded list we are using to generate the name on the input field in the pdf. So I would expect Manila's id to show up in both the pdf and form data if it was selected.


**Heather Justice**
  Feb 28th at 12:47 PM
i would wager the nonsense route, or typo..
i dunno tho

**Mitch Saltykov**
  Feb 28th at 12:47 PM
Plausible. Searching on 12345 yields normal results, but 1234 gives Manila.
... though 11111 explicitly says
No search results found.

**Allan To**
  Feb 28th at 12:48 PM
do we know if veterans or anyone filling the form would search by facility id?

**Brandon Cooper**
  Feb 28th at 12:49 PM
I can't imagine they would? No true idea though.

**Heather Justice**
  Feb 28th at 12:49 PM
But then they would have to select Manila, right?

**Brandon Cooper**
  Feb 28th at 12:50 PM
@Mitch Saltykov
 If you look at the network requests, 11111returns an empty response from mapbox, while the 111 search returns valid lat/long. That's why it shows the error there.
Heather Justice Yeah, as far as we can tell that is how it should be working. That's my concern is if we maybe are missing a spot where it sets it on it's own since it seems the Lighthouse api really wants to return it for some reason.

**Allan To**
  Feb 28th at 12:52 PM
At least the 358 showed up in the PDF so they were able to see that it was Manila

**Brandon Cooper**
  Feb 28th at 12:53 PM
allan.to I did one thing right at least :slightly_smiling_face:
Since we know a Veteran is not permitted to get Caregiver services at the Manila Clinic, what's anyones thought about filtering it out from results?

**Allan To**
  Feb 28th at 12:55 PM
Brandon Cooper you always do a good job!

**Heather Justice**
  Feb 28th at 1:00 PM
We originally agreed not to, but I think at this point, we need to.  The question is tho, how do we avoid it defaulting on the backend? (edited) 

**Mitch Saltykov**
  Feb 28th at 1:01 PM
If we filter out Manila on the frontend, then they won't be able to submit without redoing the search and getting something valid, right? so no backend concern?

**Brandon Cooper**
  Feb 28th at 1:02 PM
yep! It would just return the "No search results found".
And we can't really change what the lighthouse api returns to us unless we talk to their team about why it does that :shrug:
I wonder what the behavior on the facility locator is for this...although some of this could stem from how we use the mapbox api? idk.
https://www.va.gov/find-locations/?page=1&address=111&facilityType=health&serviceT[…]5D=15.36675&context=Barangay%20111%2C%20Manila%2C%20Philippines
If I search 111 it shows the Manila VA facility
Same with 123 https://www.va.gov/find-locations/?page=1&address=123&facilityType=health&serviceT[…]%5D=15.29904&context=Barangay%20123%2C%20Pasay%2C%20Philippines

**Allan To**
  Feb 28th at 1:04 PM
Would we be able to do some sort of dropdown similar to that page you linked?

**Mitch Saltykov**
  Feb 28th at 1:05 PM
5-digit searches must be looking for a zip code specifically, while 111 and the like go street address or something vague

**Allan To**
  Feb 28th at 1:05 PM
If you put 111 it shows those two

**Brandon Cooper**
  Feb 28th at 1:05 PM
We can do almost anything :slightly_smiling_face: It just takes time to do it. It looks like they're just displaying the mapbox results which is what we do get back.
Looks like it does a partial match on the zip :shrug:
Realistically, this is no different than someone filling out a paper form and putting the Manila clinic on it, right?
Mitch Saltykov didn't we validate this is the only "parent" clinic that doesn't offer caregiver services?
Or maybe we just know only US based "parent" facilities do?

**Mitch Saltykov**
  Feb 28th at 1:08 PM
Barangay 111
https://en.wikipedia.org/wiki/Barangay
searching marginally larger numbers shifts the map around a little, presumably for different divisions
WikipediaWikipedia
Barangay
The barangay (; abbreviated as Brgy. or Bgy.), historically referred to as barrio, is the smallest administrative division in the Philippines. Named after the precolonial polities of the same name, modern barangays are political subdivisions of cities and municipalities which are analogous to villages, districts, neighborhoods, suburbs, or boroughs. The word barangay originated from balangay, a type of boat used by a group of Austronesian peoples when they migrated to the Philippines.
All municipalities and cities in the Philippines are politically subdivided into barangays, with the exception of the municipalities of Adams in Ilocos Norte and Kalayaan in Palawan, each containing a single bar… Show more
https://en.wikipedia.org/wiki/Barangay


**Allan To**
  Feb 28th at 1:09 PM
I think what we're worried about is if Manila somehow gets unintentionally filled even if they select another facility, but I could be wrong

**Brandon Cooper**
  Feb 28th at 1:10 PM
Agree with you on that, 
allan.to. I think the ticket Heather made could make sense as an investigation to see if there is something we are missing and this is unintentionally being set? Doing something do never allow it may fix it, but if it is accidentally occurring I'd like to know why/where.

**Heather Justice**
  Feb 28th at 1:31 PM
just got another report of it happening "358" listed in the facilities field

**Brandon Cooper**
  Feb 28th at 1:33 PM
I wonder if just not allowing it is the best first step? With the fact that the API is returning it it could be tricky to track down why it's happening, but if we block it it will at least fix it.

**Heather Justice**
  Feb 28th at 1:34 PM
That seems like the quickest, easiest solution.  We would definitely want to test these same scenarios to make sure it doesnt come back up
FYI here is what Tammy said in her email
>We just received notification of another unroutable 1010cg with 358 listed as the VAMC where the Veteran receives care (CD-1891515). The address on the app is in Florida so don’t suspect they intended for this to go to the Manila VA

**Mitch Saltykov**
  Feb 28th at 1:34 PM
agreed. so if the result is just Manila we show No Results instead?

**Heather Justice**
  Feb 28th at 1:35 PM
yeah.. and Tammy's note above makes me feel like there is still some weird default happening, but I am only guessing

**Brandon Cooper**
  Feb 28th at 1:36 PM
I think we'll want to remove it from the results right after making the API request. So it should never show up, even in results where there are multiple facilities. Since it seems like it's not people searching and selecting?
We could also add some additional logging to validate what is being searched? Or maybe what is selected? That could tell us more and not have pii concerns. Maybe they don't know what facility they want so since Manila showed up they selected it?

**Heather Justice**
  Feb 28th at 1:37 PM
agreed.. if there is any way we can stop it from coming up at all, would be great.. but yeah, i can't imagine it being selected on purpose.. especially twice now

**Mitch Saltykov**
  Feb 28th at 1:49 PM
that logging would have to be in PILs right? if we were concerned about the backend logging the output of MapBox, this would be even higher-risk.... (edited) 

**Brandon Cooper**
  Feb 28th at 1:56 PM
Yeah the search value would be pii for sure, but would the facility selection if it's not tied to a person? It could really just be a statsd metrics or something.

**Mitch Saltykov**
  Feb 28th at 1:56 PM
ahh, good point

**Heather Justice**
  Mar 4th at 5:46 AM
Hey gang, do we have any more thoughts on this issue?  The CG team will want an update.  Also, For the ones that failed, We don't have anything saved on them right? like we don't know if the personal info log had a different (actually chosen) facility?
Just noting it here that we will need to do several end-to-end tests with the tech team on this.  I know this is weird stuff, but we need to do everything we can to exhibit thoroughness on avoiding this issue

**Mitch Saltykov**
  Mar 4th at 5:58 AM
Brandon and I talked it through yesterday, and landed on specifically filtering out Manila from CG results for now, and showing the "No Search Results" error if it's the only thing there. Rolling that out will be a quicker fix, followed by talking to Lighthouse to understand why we're getting that search result in the first place. Brandon's owning that effort. (edited) 

**Brandon Cooper**
  Mar 4th at 6:10 AM
Yeah, after Mitch and I talked we thought pretty much not allowing Manila to be valid was the best initial step to ensure it's not happening, since right now it's technically valid for Manila to be selected, we just think they aren't intending for that to be the selection.

**Heather Justice**
  Mar 4th at 6:20 AM
Thanks yall!  I think yall are right with that being the best option.. It does seem odd that it is happening.  The thing that is throwing me is the last feedback we got from Tammy where the person was in FL.  What are the odds they would purposely select Manila?  And if they didn't, how did it still end up going downstream?

**Brandon Cooper**
  Mar 4th at 6:23 AM
I don't think they are purposefully selecting it. When we send "valid" query params for some calls to the facility api but nothing is found, it defaults to returning the full list. We grab the first result when getting the parent facility, since it should be the only one returned. Manila happens to be the first result that shows up since it's facility id is the lowest. I think there's a chance when we are getting the parent id and querying on that that something is broken and so it returns the full list. But we had validated that all of them have a valid parent id...so not sure about that.
I can't imagine anyone is purposefully selecting it.
In some ways, it is good that it's Manila that is returned since it is clearly incorrect. If it were returning a different invalid facility it'd be harder to notice.

**Heather Justice**
  Mar 4th at 6:25 AM
it is just crazy that if a person selects a facility, why is it getting overridden? Nvm (edited) 

**Mitch Saltykov**
  Mar 4th at 6:25 AM
My VA is in California, but my Caregiver Support is in New Mexico?! Ugh, fine, [gets in car]
would indeed be worse

**Heather Justice**
  Mar 4th at 6:25 AM
LOL 

**Brandon Cooper**
  Mar 4th at 6:58 AM
It's only for the parent facility, and if that's the case it should show them on the next page? But the way we have that page you may be just be like "I guess that's where it is?"

**Mitch Saltykov**
  Mar 4th at 6:59 AM
never underestimate how little people* read
* I mean this expansively. devs spend so much time not reading the error messages we're trying to address....

**Heather Justice**
  Mar 4th at 7:00 AM
LOL can confirm my own scanning-type of reading

**Mitch Saltykov**
  Mar 4th at 7:00 AM
everyone does! but so do webapp users, alas.

**Brandon Cooper**
  Mar 4th at 7:01 AM
Sorry guys I didn't read any of that.

**Brandon Cooper**
  Mar 4th at 7:12 AM
Heather Justice Would we be able to know the addresses for the submissions that had Manila for the facility? I wonder if we may be able to reproduce it if we assume they are searching for something near their home (which I know is not always true but seems like a thing to try at least)

**Heather Justice**
  Mar 4th at 7:14 AM
We could ask the CG team if they can get that kind of info (at least a city/state) that they could send via encrypted email

**Brandon Cooper**
  Mar 4th at 7:23 AM
Yeah city/state would enough
</details>

<details>
     <Summary>03/13/2025 - Third (and final) discussion on Facilities issues</Summary>

**Heather Justice**
  Thursday at 6:37 AM
Brandon Cooper Mitch Saltykov - forwarded yall an email from Gaspare.  Something is up with the search in Prod for CG.

**Heather Justice**
  Thursday at 6:38 AM
Tampa, FL came up fine.  But the search for the SD parameters I used in Staging yesterday are not turning up results.  Also, i searched "South Dakota" and it loads up to 2 pages of results but the button is not loading any more (edited) 

**Brandon Cooper**
  Thursday at 6:39 AM
What SD search params did you use?
Do prod and staging return the same things?

**Heather Justice**
  Thursday at 6:40 AM
same ones in the email.
57741
57785
Marcus, SD
Sturgis, SD
South Dakota

**Brandon Cooper**
  Thursday at 6:41 AM
Those look like they are appearing correct to me? What browser is he using? 
Mitch Saltykov Could it be a stale browser or something?

**Heather Justice**
  Thursday at 6:42 AM
staging works fine
prod is not working
i just tried it and got the same errors
chrome

**Brandon Cooper**
  Thursday at 6:42 AM
oh gotcha. I was checking staging
I will look at prod

**Heather Justice**
  Thursday at 6:43 AM
that will teach me not to check prod after deployment.. :facepalm:  I only checked staging yesterday

**Mitch Saltykov**
  Thursday at 6:44 AM
interesting - the facilities query is returning Fort Meade fine in prod, but there's an error displaying it:

**Brandon Cooper**
  Thursday at 6:47 AM
yeah...this is really weird. The response looks the exact same but it's displaying an error.

**Mitch Saltykov**
  Thursday at 6:47 AM
the no address code is live, so it's not that...
getting the same error in Safari
console just has a google analytics error, which I'd hope doesn't get in the way of things even if it fails

**Brandon Cooper**
  Thursday at 6:48 AM
Matt Long Any idea about environment differences in prod vs staging that could impact something like this?

**Matt Long**
  Thursday at 6:52 AM
I’m not sure I understand the question? Are you seeing a discrepancy with the data coming back or an issue with rendering results?

**Mitch Saltykov**
  Thursday at 6:53 AM
rendering.
the facilities request is getting data back like it should, but then we get the above-screenshotted error showing them... in prod, for certain South Dakota searches, per the email (edited) 

**Brandon Cooper**
  Thursday at 6:54 AM
This is the sentry log we are setting when the fetch returns an error http://sentry.vfs.va.gov/organizations/vsp/issues/310358/?project=-1&query=message%3A%22Error+fetching+Lighthouse+VA+facilities%22&statsPeriod=24h
It works fine in staging but is display our generic error in prod?

**Mitch Saltykov**
  Thursday at 6:58 AM
the only place that produces the Error fetching Lighthouse VA facilities
error is src/applications/caregivers/actions/fetchFacilities.js:90 , which is the catch for reformatting facilities for display

**Matt Long**
  Thursday at 6:58 AM
For debugging you, could try to run locally but assign the api to both staging and prod for an A/B test. It sounds like obviously something is getting tripped up in that fetch.
yarn watch --env api=https://staging-api.va.gov
yarn watch --env api=https://api.va.gov

**Brandon Cooper**
  Thursday at 7:01 AM
That will make my local vets-website hit those environments?

**Matt Long**
  Thursday at 7:03 AM
Correct, yes. You may have to disable CORS in your browser, but that lets you hit those to test things out.

**Brandon Cooper**
  Thursday at 7:04 AM
Is there a way to confirm vets-website has the most recent code? Per https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/frontend-support-dashboard/ it does but is there an id or something that we can validate from the browser?

**Matt Long**
  Thursday at 7:08 AM
To my knowledge, no. I don’t think the build numbers are published anywhere.

**Mitch Saltykov**
  Thursday at 7:09 AM
I'm getting a 403 Forbidden trying to hit the prod api from local - where do we get the API keys for it?

**Adrian Rollett**
  Thursday at 7:09 AM
hmm, you can check the deployed hash for vets-api :thinkthonk: (edited) 
Mitch Saltykov log in to prod and then do a 'copy as curl' on an api request in your browser, easiest way :slightly_smiling_face: (edited) 

**Brandon Cooper**
  Thursday at 7:14 AM
The backend responses look exactly the same in staging and prod, and this error is what was displaying previously when we weren't handling the facility objects without addresses. So wondering if something could be up with that?

**Mitch Saltykov**
  Thursday at 7:17 AM
uh, that's a lot of content... which attribute is the vets-api API key in that?
(I already have a Mapbox key in my .env) (edited) 

**Brandon Cooper**
  Thursday at 7:24 AM
Yeah I am not sure which one is the token

**Mitch Saltykov**
  Thursday at 7:26 AM
huh. running locally, (at local vets-api) I'm getting the error searching for 57741, but it seems to be for OTHER South Dakota facilities not having addresses
er, we should have a zoom going for this shouldn't we

**Brandon Cooper**
  Thursday at 7:26 AM
Do you have the most up to date version of main?

**Mitch Saltykov**
  Thursday at 7:26 AM
oh, possibly not

**Brandon Cooper**
  Thursday at 7:26 AM
It was merged yesterday

**Mitch Saltykov**
  Thursday at 7:28 AM
ack, retrying

**Brandon Cooper**
  Thursday at 7:36 AM
https://us04web.zoom.us/j/79046860107?pwd=gWB9uzetyPbv0a1uNte7JyE0domICQ.1

**Mitch Saltykov**
  Thursday at 7:39 AM
okay, the prod code is in fact stale

**Brandon Cooper**
  Thursday at 7:40 AM
Can we trigger a new deploy or something to ensure it is the updated code?

**Matt Long**
  Thursday at 7:41 AM
You could push a PR with a silly little change. That would trigger a fresh deployment.

**Mitch Saltykov**
  Thursday at 7:43 AM
procedure, for reference:
open https://www.va.gov/family-and-caregiver-benefits/health-and-disability/comprehensi[…]ssistance-for-family-caregivers/apply-form-10-10cg/introduction
open the inspector
go to the Sources tab
right-click Top
Search in all files for /v0/caregivers_assistance_claims/facilities (our backend endpoint URL string is in the code explicitly, so it doesn't get minified)
go to the fetchFacilities.js one
scroll down to line 83 to find
physical: formatAddress(attributes?.address.physical)
confirming that we're always looking for physical under address even if address is undefined, so that bugfix of Brandon's is not in this code (edited) 
so, the mystery of why it's failing right now is solved.
the mystery of WHY it's failing is still afoot.

**Brandon Cooper**
  Thursday at 7:45 AM
https://github.com/department-of-veterans-affairs/vets-website/pull/35228 to add extra errors data to sentry log

**Mitch Saltykov**
  Thursday at 7:47 AM
(gut feeling is that something led to the Continuous Deploy-ed code getting overwritten with a later deploy... somehow? platform may know?)

**Brandon Cooper**
  Thursday at 7:53 AM
Heather Justice It looks like our change was never deployed even though the deploy status page says it did. We are going to deploy another small change that should deploy the client code with our change included. We'll let you know when it is deployed and we have validated it is working.

**Heather Justice**
  Thursday at 7:54 AM
oof.. that seems odd

**Adrian Rollett**
Thursday at 7:54 AM
can you link the commit that didn't go out?

**Brandon Cooper**
  Thursday at 7:54 AM
https://dsva.slack.com/archives/CBU0KDSB1/p1741877325744549 I hit up platform about it here
https://github.com/department-of-veterans-affairs/vets-website/commit/db90e017f0f89dfb1ecb7bc09c2d25d96e8ed506

**Brandon Cooper**
  Thursday at 8:28 AM
Looks like it is working in prod now
I confirmed the new code is currently out there too

**Matt Long**
  Thursday at 8:28 AM
Silly silly deployments!

**Heather Justice**
  Thursday at 8:33 AM
thank you all!  I have retested in Prod too and sent a note to Gaspare.
FYI - the CG team will want to hear about how we fixed this and the Manila issue in tomorrow's call
</details>
