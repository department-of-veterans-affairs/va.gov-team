# Background Job System for Vets API

| | | | |
| --- | --- | --- | --- |
|**Decision Made:**|Yes| **Decision Date:** | 09/15/2016 |
|**Revisit Decision:**| No | **Revisit Date:** | N/A |

**Revisit Criteria:** N/A

**Decision Makers:** @austin-martinez, @carlmjohnson, @kreek, @lihanli, @markolson, @robbiethegeek, @saneshark


---

## tl&dr

We need to asynchronously run some processes in order to get a better user expererience, to stick to a schedule, or to enable silent retries on behalf of the user.

## History

Education Benefits Form needs to submit batched data each day at 3AM EST, and it was decided that we should use the  opportunity to decide on what would become the standard background processing system.

Some discssion followed in [Slack](https://dsva.slack.com/archives/vetsgov-engineers/p1473880889000095) and in a [Github issue](https://github.com/department-of-veterans-affairs/vets-api/issues/100), where we settled on Sidekiq (frontend by the Rails standard ActiveJob where it made sense). It was also decided that using Cron to start Rake Tasks was the best and easiest way to get started with scheduled tasks.

### Contributing Factors

* Appeals Team has already has a good experience with Sidekiq
  * Ops having experience is a plus as well
  
* Includes test helpers for rspec
* Supports all the functionality we need in the open source version, and has paid versions for extra support / functionality if needed.
