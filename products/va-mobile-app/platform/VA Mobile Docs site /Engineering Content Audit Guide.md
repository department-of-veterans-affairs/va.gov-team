# Engineering Content Audit Guide: VA Mobile Docs

## Information missing/inconsistent
1. What version of dependencies is needed?
> P6 [engineer]  Even before starting, I’ve set up mobile engineering before and it’s a pain because it’s always picky about versions. Calling out the required versions would be a great thing to do.
2. What version of Java?
> P6 [engineer]  What version of Java? There is a link with the answer, the link brings you to the latest version but the link says Java 8 or whatever it is. I was able to ascertain that by looking at the link but if you follow the link it takes you to the latest version no matter what.
* @TODO - Quick fix
> P1 [engineer] Inconsistencies in the documentation. Adding the java home to your ZHRC file to your profile to pull into ISO and Android (doc references one version of Java but then later references a different version of Java).
* @TODO - quick fix
3. Need more how to vs. just what to do.
> P1 [engineer] Lots of references to do x without explaining how to do x.
4. Historical architecture.
> P4 [engineer]  context is tough. Historical architectural decisions, why things are set up a different way. Still really hard to find.
5. Set up process Firebase kinks
> P4 [engineer] Weird kinks in the set up process, access to Firebase to pull down configuration files add barriers to entry for contributing.
* #wontfix - system access requirement
6. Outline the tools used and how we use them clearly
> P4 [engineer] Other things I look for, React native documentation, various documentation around the tools we use and how we use them.
7. Testing with Postman
> P6 [engineer] Used the site a lot when I was testing with post man, decent amount of time when I was doing that. First thing I did was put in a PR for out of date post-man selection and I don’t know if it ever got merged.
* Nothing wrong with this collection, we still use it. Just very old, works fine. One update to it.
8. Timestamps to check for latest updates
> P1 [engineer] There have been changes or updates made that never made it back to the doc site. Outdated content.
9. Remove X code 16 update workaround
> P1 [engineer] When X code 16 update broke everything. The workaround was referenced on the doc site even after the issue was fixed.
* @TODO - quick fix
10. Reassess API docs content
* Add keywords to frontmatter
> P1 [engineer] API docs are way less helpful than the front end docs.It says to do x but there is no how or where info given. If I follow the instructions on the doc site, sometimes they work and sometimes they don’t work.
11. Reassess feature flag vs. availability framework content
> P6 [engineer]  Information around feature flagging vs. availability framework is a bit confusing, I’m still not entirely sure I’m using it correctly? 

## What’s working well

1. Front end docs
> P1 [engineer] Front end docs are more fully flushed out.
2. Set up process
> P4 [engineer]  The set up instructions for the actual project, are pretty good.
3. First point of reference (VA mobile doc site)
> P4 [engineer]  As different areas of the development process came up that I was less familiar with, that was the first point of research
> P6 [engineer]  Doc site has totally worked. We’ve been able to use it to get up and running pretty quickly.
4. General content
> P4 [engineer]  It does a pretty good job of painting some broad strokes
> P6 [engineer]  Good parts are the shorter engineer focused parts. This is just how my brain works.
> P6 [engineer] General, it has been easy for me to find the information that I need. 
5. Getting questions answered
> P3 [designer]  Was able to get my questions answered.  Went to Jonathan Post  went to mobile team office hours
> P4 [engineer] reached out to Tim Wright to understand historical context around architectural decisions.
