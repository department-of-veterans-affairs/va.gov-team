## The issue

On 2.19.20, the VA Profile informed us around 8:30 PM ET that they were unable to update addresses on production on VA.gov. They had been making some updates on their end and were doing their due diligence to make sure the update didn't break any of their integrations. This is when they discovered that they had not received any address updates from us since around 3:00 PM ET earlier that same day.

## Why this happened

This happened because of a code update Lihan made. Currently, the addresses we submit to VA Profile use country name instead of country code. Our API requires country name but VA Profile's doesn't — only county code. Additionally, country code is more reliable than country name; other systems that integrate with VA Profile may not define country names the same way we do, which could potentially cause issues as information from those other systems pass to VA Profile and then to us.

So, we determined passing country code is preferrable to passing country name, and Lihan went ahead and made this update. He tested everything on staging and it worked as expected and launched to production.

However, our code on staging is currently different than the code on production since we are actively developing the address validation feature which is on staging but not yet live in production. Lihan forgot that the code was currently different and did not account for this in his testing. 

## Why we think this wasn't caught

- **Not enough communication between Lihan and Erik** — More communication to other developers would likely have resulted in this issue being caught before it went to production.
- **No production testing** — We can't test everything on production when it launches without veteran help, but the VA profile is something we could test more easily, either with people on our team who are LOA3 in production or people on our team who are also veterans.
- **No alert system when features go down** — There's no way for us to know that one of our endpoints has stopped seeing traffic until someone manually discovers the feature is broken.

## Going forward

- We need better communication between developers to catch these issues before they happen.
- We should make sure all code launches are tested on production after they go out. For updates that don't require specific veteran circumstances, we can do this ourselves. For updates that do, we should launch work behind a feature flag and do UAT (Note: we already do this for larger features/updates).
- We will be launching Lihan's update, but we'll do it with the address validation launch so that it should work as expected. For this launch, we are going to launch behind a feature flag and do testing before rolling it out to everyone, so any issues would be caught before they had far-reaching effects.

## For the larger team to consider

From a platform perspective, our team may want to consider:

-	End to end tests that call external services (smoke tests).
- Some sort of alert system that will let us know if one of our endpoints stop seeing traffic for any length of time.
