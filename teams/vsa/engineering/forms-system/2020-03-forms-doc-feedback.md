## March 6, 2020 VSA Developer Feedback on Forms System
The documentation on VA<span/>.gov Forms System (VAFS) needs to be more accessible.
* Navigation: good information there, just really hard to find.
* Big gap in how to add to form builder. Ideally, every component in design.va.gov should be there, but we only get the bare minimum; primitives such as text fields.
* If we knew how to add a new component to form builder it would speed up our development processes and make the platform more cohesive across the board.
* The VAFS documentation does not contain a link to the VA fork of RJSF, even though the RJSF documentation is required to figure out most advanced things.
    * This is the documentation we all have been using to learn VAFS: https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/forms/. 
    * Here it mentions that VASF is based on RJSF: https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/forms/creating-custom-fields-and-widgets/#how-vafs-uses-rjsf;
    * However, you really need to go to the VA’s fork of RJSF at https://github.com/department-of-veterans-affairs/react-jsonschema-form to understand how to build/modify a form component. Many of our developers were not aware of this link (undocumented; it needs to be better disseminated).
* The original RJSF site (not the VA fork) had an interactive tool to demo or test your schemas (add data to see how things look): https://rjsf-team.github.io/react-jsonschema-form/; it would be awesome to have that in the VAFS documentation site.
* How to use the form builder (basics): the documentation is there (actually covered well)  but hard to find, get around.
* The advanced parts, especially the internals of how it works, are not covered at all.
* Need lots of examples of different problems that people tried to solve, and how they solved them.
* Overall, there doesn’t seem to be a lot of documentation there beyond just setting things up. Once you get past the point of just setting things up, that’s where our documentation just falls off. 
* Nothing there in terms of troubleshooting when things doesn’t work. The errors we get back from the forms system are generally worthless and while this means we also need better error handling we also need troubleshooting steps to use when things go wrong. Give a common set of scenarios and then what to look for in those scenarios.
* There may also be a disconnect between the actual steps you need to do to run the form generator vs the details you see under “getting started > common tasks”
* Need some opinionated standards around use of the form builder.
* We are all building the same things over and over again. Since this is the case we should have a set of opinionated “recipes” that serve as examples.
* Advice to “just look at the code and find examples” does not work because you’ll see different ways to accomplish the same thing. Which way is the right way?
* Documentation needs to be built for engineers so that it speaks to an engineering audience; our current documentation looks more like it is written for a design audience.
