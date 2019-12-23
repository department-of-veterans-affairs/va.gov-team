This is a quick memorialization of the disaster which was trying to set up a person search in VADIR. I haven't gone date by date here; this should be sufficient to get the point across.

In October, for the Homeless Veteran Data Tool, we were looking for the most comprehensive source of Veteran status. I met with Jim Jones in Washington and he outlined how we could use a fuzzy VADIR search for about $20K. He was supportive of our project and continued to be, and continued providing this cost estimate.

In April, the project was approved. At our soft kick-off on April 11, we met with Jim's deputy of sorts, Patrick Lewis. Patrick said we sould need to submit a Service Request for this search, which we did onn April 16.

In several meetings in late April and early May, Patrick and Jim provided consistently conflicting information about what the existing VADIR searches did and did not do. 1-2 weeks in, when things were not going well, we (myself, Aaron, and Alan Ning) requested access to the data ourselves, or proposed they use existing COTS productions for probabilistic search. They dismissed both as impossible given the large size of their data (20 million rows and 12 columns). In one early meeting they resolved that we should use test data to determine whether the existing relaxed search was relaxed enough for our purposes. But then when we got on a call with test data ready to go, they were not willing to try data in production.

For most of May our emails were ignored. In late May, Charles escalated to Mark Shaughnessy, who successfully got the PMs involved (Fred Tolley, Alex Torres) to attempt a bit of a re-set on the project in early June. It was determined at this point that there wasn't then and never had been a fuzzy search for VADIR; that it would be a new development project that would take 3-6 months. I pointed out this wouldn't work for our timeline and asked for _something_ that could be delivered sooner; could we have access to one of the existing searches and start there.

It was not until June 25 that we finally had a call to discuss a potential existing solution, the VRSS search, which uses the VADIR Standard relaxed search algorithm for person matching, and searches USVETS and BIRLS copies in addiiton to the core VADIR data. (This meeting was repeatedly delayed by a total of weeks so that Jim could review information regarding this search and be prepared.) At this meeting I agreed to using this as a provisional search until something better could be developed, but the mechanics of the person search still were not explained. The VRSS search would have to be *very* slightly modified for this use. On Jun 26, I submitted SR 1054 for this smaller scope of work.

On June 27, the estimate came back that it would cost $117K to do this version of the search, which is a 'Medium T-Shirt.' There was never an explanation for why the work would cost so much. I, Charles, and Mark asked repeatedly throughout July and were always told that the 'technical team said so.'

Additionally, despite weekly or more frequent requests, the details of this person search were never provided.

On July 31, I canceled both SR 866 and SR 1054, citing our choice to use MVI instead.

_-- GZ_
