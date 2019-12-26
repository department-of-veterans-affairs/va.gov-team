# Switching to Jest

| | | | |
| --- | --- | --- | --- |
|**Decision Made:**|No, but open to revisiting| **Decision Date:** | 12/2018 |
|**Revisit Decision:**| Yes | **Revisit Date:** | July 2019 |

**Revisit Criteria:** If a developer is interested in Jest and has time or suggestions for fixing the speed issues, we should revisit this.

**Decision Makers:** @rianfowler @jbalboni


---

## tl;dr
Jest is probably the most common testing framework in the React ecosystem and has some nice benefits, so we evaluated switching to it from our Mocha-based stack. However, we found that it made our tests twice as slow and were unable to address this in a reasonable amount of time.

## History

A Jest RFC was started by Ryan McAuliffe and some exploratory work was done by him and Claire Hsu. The overall consensus of developers here was that Jest has some nice features and is typically faster than Mocha based tests, so it seemed like a good improvement for us. However, during our evaluation we found that our tests were significantly slower than our current approach. Rian Fowler did some further testing around this issue and was unable to resolve it.

## Pros
- Jest is widely supported in the React community
- It has easy to use extensions for aXe and snapshot testing that we could use
- It supports parallelization, and makes better use of all resources available to it

## Cons
- It's approximately [2x slower than our current tests]()
- Some of the useful features (snapshots) could be adopted without switching to Jest

## Decision
We're putting the switch to Jest on hold for the time being. The slowdown is the primary reason for this, since the consensus otherwise was that Jest was an improvement. Any developer with time or ideas should feel free to attempt to address the performance issue and we will re-evaluate.
