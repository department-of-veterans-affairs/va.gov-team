## Background

For the submit inquiry endpoint, CRM is expecting certain fields to have authoritative data. For example, First, Last, and SSN are assumed to match the upstream VA Profile and MPI records.

## Today's Flow

When we specify an ICN, CRM has logic to update their AVA Profile and Educational Facilities data with the data we send them. This doesn’t apply to unauthenticated flows. But, if the ICN is sent, the backing data needs to match the system(s) of record.

## Possible Design Changes

This has implications for pre-fill in the form, and namely, whether or how we let submitters manipulate the information that is pulled from VA Profile. We could:

1. Not allow submitters to edit pre-filled information
2. Redirect submitters to their profile on [VA.gov](http://va.gov/), to update information there.
3. Allow submitters to edit pre-filled information in the form, but add a flag so CRM knows data has been manipulated.

**We suspect that the 3rd option has the better user experience.** If something is wrong, submitters have the chance to update it in the form without being redirected halfway through their task. It assumes that submitters understand what they’re editing (and that it will NOT also update their profile, or other information elsewhere.) Only the form payload would be affected.

With the 3rd option, CRM should only trust data if it has not been manipulated by the submitter.

## Next Steps

The following action items need to be completed.

- [ ] Joe to share with Kyle as a heads up of whhat the design team is considering.
- [ ] Design team to synthesize their research, decide on one of the given options.
- [ ] Joe to coordinate with CRM to get changes (if any) into their backlog.
