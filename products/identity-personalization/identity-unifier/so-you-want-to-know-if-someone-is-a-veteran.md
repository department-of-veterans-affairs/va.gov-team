Great! This is the VA. This must be very simple to figure out.

Ok, so:

# what do you mean by Veteran?

Here are like 10 things you might mean

### Definition 1a: Legal definition - Title 38 Veteran (38 USC 101)
Federal law defines as Veteran anyone who:
+ Served at least one day on federal active duty, and
+ Received a discharge under other than dishonorable conditions.

Part 1 is simple enough, and probably is the standard you want. Part 2 is trickier; it sounds like it should be describing the character of discharge, but it isn't, at least not exactly. There are 5 main characters of discharge, one of which is broken into two parts -
  + Honorable
  + General
  + Other Than Honorable (OTH)
  + Bad Conduct - Special Court Martial
  + Bad Conduct - General Court Martial
  + Dishonorable
  
The first two automatically qualify for the criterion above; the last two automatically do not. The middle two require a review by VA. In other words, according to the law, people with OTH or BCD-S discharges are neither Veterans nor non-Veterans until VA reviews their cases to decide. Oh, and VA doesn't review them until they happen to apply for a benefit.

### Definition 1b:
In 2016, Congress passed a law saying that people who have spent 20 years in the Reserve and are eligible for retirement pay should also be considered Veterans, but should not receive any benefits due to this Veteran status. Technically they should be legally Veterans as well. 38 USC 101 was not amended though, so go figure. Not clear if anyone knows this law was passed, or if they care, tbh.

## Definition 2: Strict Title 38 Entitlement
+ Served at two years federal active duty, or one of several exceptions
+ Received a discharge under other than dishonorable conditions (same as above)

Most VA programs require a minimum amount of time in service (generally two years, with several possible exceptions) to qualify as a Veteran — along with the character of discharge criterion above. Within VA, people will sometimes refer to this group (and this group only) as Veterans. But, it's probably too strict for most other use cases. Strictly smaller set than 1a.

### Definition 3a: Colloquial Definition #1 - No Dishonorable
+ Served at least one day federal active duty (same as 1)
+ Any discharge that is not a Dishonorable Discharge

Strictly larger set than 1a. Very easy to determine. Based on very cursory conversations, it's my impression that this is generally what non-VA private sector people are looking for.

### Definition 3b: 
A corollary would be:
+ Served at least one day federal active duty
+ Any discharge that is not a Dishonorable Discharge or Bad Conduct from General Court Martial

Given that that is the line at which someone is automatically disqualified within VA, so that maps more closely to VA eligibility. There is some precedent for this as the relevant distinction for generous eligibility determinations. Congress made homeless Veteran programs wider eligibility than other Veteran programs, and set this standard (3b). This is slightly stricter than 3a.

### Definition 4: All Active duty
+ Served at least one day federal active duty
+ .... and no other restrictions.

This is closest to the 'all people with a DD-214' definition. Strictly larger than all the above (except 1b).

### Definition 5: Everyone
All of the above definitions still exclude Guard/Reserve people. You could include them, and return everyone with any connection at all to the military.

# where do you find this information?
Good question!

You should look up a person's identity in MVI. MVI will do a probabilistic match, and include a backend search to DEERS, a larger DoD database. This includes most Veterans you are liable to find.

But MVI also includes all kinds of other people... VA employees, contractors, dependents. So how do you figure out if someone is a Veteran?

### MVI Person type
Well, conveniently, MVI has a person type field, currently takes values V1-V4 for those people in MVI who are there in their role as Veterans. Unfortunately, V1-V4 are part of a confusing outdated typology that don't mean anything. V1 is roughly Definition 2 above. V1-V4 is a little smaller than 3b, but then plus some dependents, randomly. So, you probably don't want to use this.

### VADIR
VADIR (via its service eMIS) is the definitive VA database for military record; surely this can tell you if someone is a Veteran?

But no; there is no field for this. There is only this V-typology, only this time it includes V1-V8, and still none of them probably map to what you are looking for.

Now, you could custom code most Veteran status from VADIR, although it depends on your definition. For Definition 1 and especially for Definition 2, for example, you'll need to augment your VADIR data with VBA rulings.

### customer types!
Now, thankfully, help is coming. There is a project underway to define a set of "customer types" for Veteran eligibility (yes, these should be Veteran types, but that name is taken by the V-types which are, of course, very much not that). These will be exposed via Vet360, and depending which definition of Veteran you're looking for, you can grab the right people.

But, until then... good luck!
