  
# VA Notify – API Key Management Research Readout

## Research Goals
- Evaluate the usability of the new self-service API key management flow.
- Identify any points of confusion or friction in the three-step key generation process.
- Validate whether the “one thing per page” pattern supports clear decision-making.
- Understand users’ mental models around key naming, environment selection, and revocation.

## Research Questions
- Do users understand the purpose of API keys and the implications of managing them?
- Can users confidently complete the steps to generate a key?
- Does the environment suffix behavior in the key naming step make sense to users?
- Do users understand that they will only see the full API key once?
- Do users understand how to manage inactive keys and when to revoke active ones?
- Is the interface accessible and aligned with user expectations for security-sensitive workflows?

## Methodology
- **Format:** Remote moderated usability testing (Teams)
- **Participants:** 6 service team members (mix of technical and business roles)
- **Tools:** Clickable Figma prototype
- **Sessions:** ~30 minutes each, recorded with participant consent
- **Tasks:**
  - Generate a new API key
  - Revoke an existing key
  - Review inactive key display and permissions

## Hypotheses and Conclusions
- **H1:** Users will find the 3-step key generation process intuitive → Confirmed
- **H2:** Users will understand the naming suffix and its impact → Mostly confirmed, with minor preferences
- **H3:** One-time key visibility will be clearly understood →  Understood but needs stronger visual emphasis
- **H4:** Revocation and inactive key logic will be clear → Confirmed
- **H5:** Role-based permissions will be inferred correctly →  Mixed; clearer messaging could help

## Key Findings
1. Users found the step-by-step process intuitive and easy to follow.
2. The one-time copy warning was noticed but could benefit from bolding or confirmation.
3. All users expected email notifications when keys need to be rotated.
4. Most were fine with only showing 2 inactive keys, though some preferred extended history.
5. Users appreciated the environment suffix in naming but one preferred it as a prefix.



## Detailed Findings with Quotes

**Step-by-step process is clear and intuitive**  
> “This process looks good. I don’t think I would have any issues.”  –Session 1
> 
> Yeah, I think so. I think it’s good. It’s pretty, you know, pretty straightforward and clear.”  –Session 4



**One-time copy warning needs emphasis**  
> “I mean it is pretty prominent for a sentence. ‘This is the only time you'll be able to view your full API key.’ So I think that's probably maybe might be good to like make that bold as well.”  –Session 4


**Email notifications are expected**  
> “I would expect it probably on an e-mail.”  – Session 1
> 
> “Probably some kind of notification e-mail... sometimes the Slack alerts can be overwhelming, you know, might get lost in the maelstrom.”  – Session 4
> 
> “I would assume we'd probably get the those of us who can update them would get an e-mail.”  – Session 5
> 
> “Just some e-mail. [...] We have our e-mail group ID, the benefit of the e-mail group ID is that if I'm away or somebody else is away then somebody will get it because there is a route.”  – Session 6


**Naming and suffix behavior mostly accepted**  
> “I support the suffix of the environment being there, because that that calls out [the VA Notify] environment for our knowledge.” – Session 2  
> 
> “I think it's helpful because it confirms which environment you set it for.”  –Session 3
> 
> “I would suggest to move the environment in the beginning...”
–Session 6

**Inactive key history concerns**  
> ““Only two inactive API keys I don't think it is enough. We might need at least two years... Because for the compliance and the audit trail purpose...” – Session 6  
> 
> “I could see it being nice to go back and review what was used when something breaks or gets reported.” – Session 5  

## Additional Insights
 - One participant suggested renaming “Generate API Key” to “Generate New API Key” to increase confidence 
 - One participant recommended showing and copying the key name alongside the key value 
 - One participant requested the “Active” tag should also be shown next to the “Expiring” tag for accuracy 
 - Some users didn’t realize keys would expire or need rotation, revealing a gap in onboarding clarity.

## Recommendations
1. Keep the existing flow structure - users found it intuitive.
2.  Bold or confirm the one-time copy message for visibility.
3.  Display and copy the key name with the key itself.
4.  Rename the button to “Generate New API Key.”
5.  Retain auto adding environment in the key name, but consider changing it to a prefix.
6.  Extend inactive key history to up to 2 years for audit needs.
7.  Reinforce expiration and rotation expectations during onboarding and via alerts.
8.  Ensure read-only visibility for lower-permission users

## Next Steps
- Update the prototype to reflect label, visibility, and copy improvements.

## Areas Where Further Research Is Needed
- Evaluate what types of metadata and audit features teams want in long-term key history.
- Assess how users understand and act on alerts (email, portal banners, etc.) over time.

---

_Last updated: July 2025_
