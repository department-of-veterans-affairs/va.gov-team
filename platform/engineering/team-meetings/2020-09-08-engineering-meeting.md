# VSP & VFS Engineering Meeting

_2020 September 8, 2:30-3:20p ET_

- https://zoom.us/j/93387192601
- Meeting ID: 933 8719 2601
- +16468769923,,93387192601# US (New York)
- +13017158592,,93387192601# US (Germantown)
- Find your local number: https://zoom.us/u/adVwap8E0X

## Recording

- https://zoom.us/rec/share/rqSwsvkbXw984RD-EQk_G6nm7qZM6KfJUVNC0oyhoSPI8_VhNAofethimlzZE1ed.VHpKNsq00SRSNsBX
- Passcode: Ex3gesis Merl!n

## Agenda

- Greetings
  - [x] Start recording
- Announcements
- Topics
  - Dependency Claims (@digitaldrk, et al)
  - Terraform Repositories (@dginther)
- Review action items
- Schedule next meeting’s talks
- Goodbye
  - [x] End recording
  - [x] Update notes with recording link/pwd
  - [x] Share meeting notes in #platform-team, #vfs-all-teams, #vfs-platform-support, & #vfs-engineers.

## Announcements

- Please respond to the [Platform Satisfaction Survey](https://dsva.slack.com/archives/CE4304QPK/p1598547094042800) ([direct link](https://ows.io/qs/01s2dd7l))

## Dependency Claims

_presented by @digitaldrk, et al_

### Overview

Recently deployed a rework of the 686 form: the most complicated form ever.

Team mission: Sunset eBenefits.

Repositories involved:
* vets-api
* vets-api-mockdata
* vets-json-schema
* vets-website
* bgs-ext

What makes this form implementation interesting?
* Multiple flows submitted at once
* Number of variations of the information sent
* Results of some operations required for others
* Inconsistent data

The flowcharts are complex. Multiple persons may need created and added to relationships.

* Use one large PR or branch for reference and context
* References smaller PRs.
* Submit smaller PRs with ample time for review.
* Try to get PR submissions in before the morning review batch.
* Ask VSP about folder ownership

### Q&A

Q: Is there anything in CI that will complain if I don't get the commit message right?
A: It won't fail, but it won't create a release. The semantic release step will give you a note that says your commit messages didn't indicate a version change.

## Terraform Repositories

_presented by @dginther_

### Overview

Changes merged today:
* There is no longer a modules folder under the terraform folder in the devops repository.
* Each of those former folders has been moved to their own repository.
* There is a README in devops repository that links to the new repositories.
* semantic-release node plugin is applied.
* Module documentation auto-generated.
* Commit messages are transformed into semantic release notes.

Demian wrote a [blog post](https://adhocteam.us/2020/08/25/automating-terraform-modules/).

### Q&A

None.

## Sept 4 Production Incident

VSP engineering leads met, there are incident reports in the works, and there will be recommendations forthcoming. We will discuss again at our next meeting.

## Notes


## Action items

- [x] @omgitsbillryan @krfz: Look into getting @saneshark an alpha account to Sentry 10
- [x] @f1337: Find a collaborative voting tool for topic suggestions. I think it's a choice between Stickies.io and funretro.io. Funretro appears to have inertia here already, so unless there is vocal disagreement, I suggest we start with that.

## Topics for next time

- Sept 4 production incident review meeting outcomes
- Support bot demo (@f1337)

## Future Topic Suggestions

- ETL (@jsev-io, from VSP sprint demo)
- Contract Testing With PACT (@LindseySaari & @U-DON)
- Sentry 10 (@krfz)
- Alerting & notifications (suggested by @annaswims)
- Sentry 10 API tinker workshop (suggested by @saneshark)
- Error handling in external services & i18n (suggested by @annaswims)
- Caching: models in Redis vs rails cache (suggested by @annaswims)
