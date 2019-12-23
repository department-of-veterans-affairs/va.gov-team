This document gives context for what work happened in 2016 regarding trying to be able to use MHV credentials on Vets.gov. 

## Existing MHV Credentials
The existing MHV credentials are not officially LOA2, even though most Veterans have in person identity proofed themselves to get MHV Premium accounts. For more info on what the three MHV account types are (i.e. what "basic", "advanced", and "premium" mean in this context), [this email](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/66d592ace2a1af9c8cd82e66deccbd8de33594ef/Products/Identity/Login/2016_Discovery_Original_Identity_Solution/meeting_notes/2016-08-26_email_from_carnetta_scruggs_re_MHV_LOA.md) from Carnetta is a good primer. 

To give a sense of scale to this, on [MHV's Statistics page](http://vaww.va.gov/MYHEALTHEVET/statistics.asp) you can see that MHV has 3,935,000 "registrants", which means "basic" accounts (anyone can sign up, no verification that the user is a Veteran).  There are 2,355,000  "identity proofed VA patients", which is their highest level, called a Premium account.

## Vets.gov Discovery

After the discovery sprint in May 2016 (see [2016-05-Discovery-Sprint.md](2016-05-Discovery-Sprint.md)), the goal was to figure out how to "federate MHV logins" so Veterans could use their MHV credentials to log into ID.me, thus not having to create a new account to access functionality on Vets.gov. 

Greg Gershman had the lead on this and documented [three approaches](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/66d592ace2a1af9c8cd82e66deccbd8de33594ef/Products/Identity/Login/2016_Discovery_Original_Identity_Solution/MHV%20integration/early_idea_mhv-iam-integration-options.md). The first of those approaches, which involved adding a SAML plugin to MHV's CMS (Liferay), was explored for a while and is slightly further documented [here](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/66d592ace2a1af9c8cd82e66deccbd8de33594ef/Products/Identity/Login/2016_Discovery_Original_Identity_Solution/MHV%20integration/early_idea_mhv-vets.gov-integration.md). There was also a GitHub issue about this, the contents of which can be found [here](https://github.com/department-of-veterans-affairs/vets.gov-team/issues/2683). The most in depth technical information on what was tried is in a long [email chain](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/611c411b87b5afd90e19a366d138a0f95cc1fbce/Products/Identity/Login/2016_Discovery_Original_Identity_Solution/MHV%20integration/Email-chain-about-liferay.md) going back and forth trying to make the Liferay SAML plugin work. That email chain is likely no longer relevent, but I figured I would provide it for context if anyone wanted to see what was actually tested. Finally, as a last bit of context, the Slack conversation around this was in #vetsgov-identity and is available [here](https://dsva.slack.com/archives/C241CFDDH/p1473338439000022).

Over the course of August and early September 2016 the MHV team was unable to get the Liferay SAML plugin working. On 9/22/2016, Greg and Alex went to Silver Spring, MD and met with MHV's technical team in person to figure out next steps. The meeting notes are [here](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/66d592ace2a1af9c8cd82e66deccbd8de33594ef/Products/Identity/Login/2016_Discovery_Original_Identity_Solution/meeting_notes/2016-09-22_MHV_identity.md). 

Most relevantly and directly from those notes:

> The larger conceptual problem with using MHV credentials on vets.gov is that the MHV business team does not want to be in the credentialing business; it is costing millions of dollars a year to manage call centers for account problems, mainly password resets, and MHV does not have resources to continue this. MHV business team believes the future of MHV is being able to use other credentials to log in (including ID.me). This is entirely built out and in production, but not launched nationally because Marina stopped it. With this, the MHV team doesn't believe using MHV credentials on vets.gov is the right approach.

Talking to Marina after this meeting and asking why she stopped this, her response via Slack was, "What I think I stopped was rolling out a whole new launch of credentials for myhealthevet when we knew they would then again migrate to vets.gov. I never intended to force continued use of the MHV credential itself...my intention was to avoid two migrations...If there's a world where they are actually happier with an ID.me credential and doing away with MHV one, then we should capture that world!"


## "Sign In Partners"

So what is this thing MHV built? TBD. 

## Side note about connecting directly to MHV's user database
If I recall correctly, MHV's user database isn't actually the source of truth for whether users can actually log into MHV. For example, if a Veteran creates an account but then is disabled for any reason, the knoweldge that the account was disabled isn't kept in the same place as where the username/password is kept, so if we did a database dump of usernames/passwords, we would lose this context about which users were disabled. I can't find much documentation on this, so it's likely somewhat inaccurate; I write it here as something to find out more about, rather that to take this paragraph as an answer.  

## Side note about Sequestered Accounts
The 9/22/2016 meeting is also where the concept of a "sequestered MHV account" came about ([this part](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/66d592ace2a1af9c8cd82e66deccbd8de33594ef/Products/Identity/Login/2016_Discovery_Original_Identity_Solution/meeting_notes/2016-09-22_MHV_identity.md#sequestered-accounts) of the meeting notes), which led to MHV creating an API for creating these "sequestered accounts."  Vets.gov plans to use starting this API in June 2017 to allow Vets.gov users without MHV accounts to be able to use health functionailty on Vets.gov. Natalie Moore is the product manager on this if you want to learn more, but this topic is mostly separate from the "using existing MHV credentials" conversation that this document is focused on.
