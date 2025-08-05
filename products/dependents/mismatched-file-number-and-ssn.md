# Issue Brief: Mismatched file number and ssn 

_BEP expects that a Veteran's or spouse's file number to match their ssn. If the two do not match, BEP rejects the claim and throws an error (`ORA-20099: Error - File Number and Social Security number are different ORA-06512: at "CORPPROD.RBI_VNP_PERSON", line 69 ORA-04088: error during execution of trigger 'CORPPROD.RBI_VNP_PERSON'`)._

- There are some legitimate cases where ssn and file number may differ
- There are some issues with the Master Person Index (MPI) where ssn (only?) may be incorrect on a Veteran's account and needs to be manually fixed

## Open questions
- Are we stripping out hyphens from both ssn and file numbers?
- Has a request been submitted to BGS to allow ssn and file number to differ?
- Will the new RESTful API enforce the same ssn = file number limitation?
- Should we be getting ssn and file number from MPI rather than getting file number from BGS and ssn from MP?
   - This may prevent mismatches We get the file number from BGS via a ```find_person_by_ptcpnt_id``` endpoint, using ```User#participant_id```. ```participant_id``` appears to come from MPI. See [here](https://github.com/department-of-veterans-affairs/vets-api/blob/fd5b5ec2a8a8d14b8cab7a948f4504366823740f/app/models/user.rb#L177).
   - The file # that we'd pull from MPI (given the user's ICN) is the same BIRLS file # that BGS is using. So it would make sense to get our file # from MPI, rather than from BGS. This raises the question: if we get the file # from MPI which we know is the same one that BGS uses, and since in BGS, a nine digit file # is always equal to its corresponding SSN, why wouldn't we just send the file number, as the file number and ssn, to BGS?
   - Source of this info in [this comment](https://github.com/department-of-veterans-affairs/va.gov-team/issues/56995#issuecomment-1522405974).
- Do we have to send both file number and ssn to BGS? per Danny Reed (MPI), VA.gov only needs to send one or the other.
- Does VA.gov need to update the claim creation flow? Danny said that the 686c/BGS code is using outdated APIs and using an outdated flow. For instance, we shouldn't be creating person records in the first place (this issue stems from a failed person creation attempt)

## Suggested course of action
See https://github.com/department-of-veterans-affairs/va.gov-team/issues/56995#issuecomment-1532129932. File # / SSN mismatches are a big, complicated, systemic issue. IMO, the best we can do is:
1. Report them to MPI to resolve. See https://github.com/department-of-veterans-affairs/va.gov-team/issues/57798. 
2. Fail loudly when we discover a File # / SSN mismatch before jobs are enqueued; and render an appropriate error on the front-end and/or send an error notification email, instructing the veteran to contact VA for support.
3. Confirm that error notification emails are sent to veterans when we discover a File # / SSN mismatch while one of our jobs are running.

Another thought, it would be great if we could somehow preemptively inform VA call center employees that veterans have a mismatched File # and SSN, so they know how to help veterans, should they call.

## BGS requirements
- File number is 8 or 9 digit number with no dashes, but it can be shorter than 8-digits per Cory Easley (BIS)
- SSN is an 8 digit number with no dashes
- File numnber and SSN match

## File number
- There are four or five variations of what a file number might be, and only one variation would match SSN. Depends on age of Veteran and when they served. This is less and less relevant, it was mostly before Vietnam era that the numbers deviated.
- Currently, downstream system (BGS) enforces that these numbers be the same
- (Sensitive file won’t impact their file number)
- How often is this happening? Two cases: if the Veteran has different file # and SSN, does not happen frequently on 686. When we ask for spouse’s SSN on 686 we see more issues.
- File number is used for searching and identifying the Veteran
  - MPI includes file number, SSN, EDIPI, PID... tries to associate all of these to the Veteran. For older Veterans, the numbers may be different. There’s an effort to clean up the MPI, millions of records aren’t associated with the correct file number or SSN, often run into problems with mismatches.
  - “If applicable” on the Pension form refers to if the SSN and file number are the same, there's no need to re-enter it in this case. But in cases where it’s different from SSN, it would be helpful to have both

Source: [Julie Strothman via SME disussion](https://github.com/department-of-veterans-affairs/va.gov-team/issues/64137#issuecomment-1707120388)

## Volume of issue
August 2023:
- Spouse SSN/File Number not matching: 87
- Veteran SSN/File Number not matching: 23

July 2023:
- Spouse SSN/File Number not matching: 68
- Veteran SSN/File Number not matching: 26

## Previous efforts to mitigate this issue included:
- [A PR](https://github.com/department-of-veterans-affairs/vets-api/pull/12530) that resolves some of the file number mismatches, and improves our logging around this issue for our convenience, and to help us report on mismatches to MPI and BGS, so that they can follow up.

## Previous research
1. **There are issues with the SSNs we get from MPI and VA identity providers that we don't have much control over.**
Out of the sample of mismatches I have been investigating, about 60% are cases where the SSN we get from MPI or another VA identity provider (e.g. ID.me, DSLogon) are incorrect. In some of these cases, the SSN in MPI just had a little typo. In other cases, the SSN from a VA identity provider belonged to a completely different person (in one of those cases, it appeared that the SSN belonged to a relative of the veteran).
Danny at MPI and Trevor from the Identity Team are both aware of this problem with bad SSN (and other) data. Trevor and the Identity Team have handled this issue by
   1) writing code to detect veterans with screwed up data when they log in,
   2) compiling reports of these veterans, and
   3) sending these reports to MPI to resolve. Trevor explained that MPI has a team of people who are dedicated to manually reconciling screwed up veteran data.

This "bad data" problem is a big one and is largely beyond my control and beyond the scope of Form 686c.  Though, we could try detecting, compiling, and reporting screwed up veteran accounts to MPI to resolve, like the Identity Team does. We could also ask the Identity Team to do that for us. Alternatively, we could "fail sooner."  For instance, we could prevent the veteran from filling out Form 686c if their data is screwed up. We already do something like this for COE and other forms. For example, for COE, if a veteran does not have an EDIPI, we block access to the COE form and instead show an alert that tells the veteran to contact VA's helpdesk.

2. **There are issues with the File #s we get from BGS that we don't have control over.**
Out of the sample of SSN / File # mismatches I have been investigating, about 40% are cases where the File # that we get from BGS (via the ```find_person_by_ptcpnt_id endpoint```) are "bad."  The "bad" file numbers fall into three categories:
   1) seemingly legitimate file #, but contains dashes (e.g. XXX-XX-XXXX),
   2) 10-digit file number (XXXXXXXXXX), and 3) a date and a number (e.g. YYYYMMDD-XXXXX).

According to Cory at BGS, the file number we get back should be a nine or eight-digit number with no dashes.  Cory doesn't know where this bad data comes from. We're both planning to bring this up at the IPT meeting tomorrow to see if anyone else has more context.
For category #1 (e.g. XXX-XX-XXXX), on our end, we can simply strip out any dashes in file numbers we get from BGS. (See https://github.com/department-of-veterans-affairs/vets-api/pull/12530). However, like the bad SSN problem described previously, there is nothing we can do about categories #2 and #3.

Source: [Eugene Lynch](https://dsva.slack.com/archives/C05093R2215/p1682969874277149)

## Previous spikes and tickets:
- See https://github.com/department-of-veterans-affairs/va.gov-team/issues/56995 and its comments
- See https://github.com/department-of-veterans-affairs/va.gov-team/issues/57798 and its comments
- [SPIKE | Null Claim - Veteran's Spouse's SSN and File Number do not match](https://github.com/department-of-veterans-affairs/va.gov-team/issues/64137)
- [Null Claim - Veteran's Spouse's SSN and File Number do not match](https://github.com/department-of-veterans-affairs/va.gov-team/issues/64340)
- [SPIKE | Null Claim - Veteran File Number and SSN do not match](https://github.com/department-of-veterans-affairs/va.gov-team/issues/64138)
- [Null Claim - Veteran File Number and SSN do not match](https://github.com/department-of-veterans-affairs/va.gov-team/issues/64339)
- [Slack convo summarizing issue](https://dsva.slack.com/archives/C05093R2215/p1682969874277149)


