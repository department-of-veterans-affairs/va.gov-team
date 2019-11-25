# DALC Stakeholder Meeting
## Agenda:

#### Attendees: 
Matthew Self, Nick Wygonik, Riley Orr, Rebecca Walsh, Amen Ra, Mahariel Rosario, Joseph Brothers, DALC Stakeholders

#### Background:
Our team, Benefits & Memorials 2, is working on modernizing the digital mechanism Veterans use to order medical devices. 
Practically, this means working with Veterans to design and launch a new ordering mechanism on the VA.gov platform.

#### Purpose:
We are meeting today so both the design and development teams can ask questions about user-facing experiences and technical constraints. 

#### Outcomes:
The design team was able to gain an understanding of why different methods are preferred over online ordering as well as some issues Veterans face when ordering prosthetic socks and hearing aid batteries. The development team was able to come up with a plan to collaborate on the API that will be used to pull data from DLC. 

#### Structure:
- Design team asks questions (20 min)
- Development team asks questions (20 min)
- DALC asks questions (10 min) 

## Notes:
### Riley's Notes
Note: All questions/comments made by the BaM2 team are in **bold**, and I mostly captured the portion of the conversation between the designers and stakeholders 

Moderator: I am going to just be asking a bunch of questions and Riley is taking notes for me. Last time we met we talked a lot about how the process works from the business side and a lot of what we need to get started with the design-side is to ask about the users and who these Veterans are, where they struggle, and how things differ between them

**Do Veterans seem to prefer different methods depending on if they’re ordering prosthetic socks or batteries**

Most Veterans utilize phone or card system. As far as eBenefits is concerned, there’s very few users on eBenefits. The reason for that is that they’re limited to just batteries and/or prosthetic socks. If I were a hearing-impaired Veteran, I could use eBenefits to order my battery supplies but I’d have to call the DLC to order any other hearing aid supplies. 

**And most of these orders are more complex than what can be done in eBenefits now?**

That’s correct. Typically a Veteran will receive tubes, domes, maintenance parts for their hearing aid. Currently they can only receive the batteries piece of it.

**Do those orders change significantly each time they make an order?**

No, they typically will call our agents and say, “Hey, will you send me what you sent me 6 months ago”. 

**Alright. So the people who are ordering through eBenefits are ordering because they are simpler. Is there another reason why a Veteran may prefer another method?**

It’s just easier to order utilizing one process versus multiple processes. I have talked to disabled Veterans internally to the organization and most of them has requested My Healthevet to order their prescriptions. 

**So they’re ordering prescriptions in there and fill everything at once?**

Yes, one area of ordering for all their medical supplies.

**We found some evidence that suggests users go through the messaging aspect of My HealtheVet. Is that true?** 

We don’t have access to that. They are likely messaging their provider who orders on their behalf. 

**Do you find any issues that Veterans encounter with each method of ordering?**

When utilizing the phone system we have such a high volume. We expect to double that volume when we implement [sleep apnea accessory]. In a perfect world for myself, I would like to see them order all accessories in one system rather than using the phone system.

**Do you find the demographics for ordering differ much?**

I don’t know. I just assume that if you’re not computer savvy you wouldn’t utilize My HealtheVet or eBenefits. You’d be more likely to call or send in a request.

I can certainly provide numbers of demographics. 

**I wanted to ask about the live agent phone calls. What do those conversations often look like. I know you said earlier it was a lot of, “I’d like to order the same thing as last time” but how can those conversations differ?**

It takes an agent about 87% more time to order via the phone because say a Veteran from Florida is talking about the weather and they engage in conversation. It really slows the process down. They express their concern about the wait time on the phone. We have implemented a callback solution, but some Veterans stay on hold to wait for an agent to talk to them. When we attempt to call back hearing-impaired Veterans they can’t hear it, and they get upset. 

**As far as the Veterans requesting those items, how can those conversations change person to person?**

The conversation may be, “Hey, send me the things that go into my ears and give me batteries for my hearing aids” There’s a lot of guess work trying to figure out what the Veteran’s asking for. We get a lot of calls, “I need my CPAP equipment and hearing aid batteries”. Just a lot of trying to be a detective.

**What sort of authentication do they go through on the phone?**

It’s before and after. When the agent picks up the phone then they verify the Veteran’s name and address to verify they’re shipping to the right address. 

For things like tubes and domes there can be some back and forth conversation to nail down the size or the specific type of dome, for example, that’s needed for that aid. That’s often part of the conversation too. Drilling down the sizing of the specific item. 

**When they try to figure out the sizing it’s not, “Oh the thing I ordered before”?**

That’s about 50% of the requests. The other 50 is, “I have a tube that connects to my hearing canal, I need to replace that” so the agent has to look up that specific accessory. There are some calls where the Veteran, at least with batteries, can hit 1 on the phone system and fulfill the order that they received in the past. There’s some safety mechanisms built in that as well so they can’t order every day.

A called can opt into the automated system instead of talking to an agent and provide their information and then we would generate a battery order out of that. 

**What’s the most complex order you might see through the agent-assisted and the forms that they’re sending in by mail?**

We’re looking at each other cuz there could be multiple. Socks is always a difficult one. Jeff processes these orders.

There’s a lot of variety in terms of material, thickness, measurements across the top and the toe, the length. So, if the Veteran wants to adjust any of the measurements there’s a lot of back and forth between what they want and if we can get it. So, those calls can take a while.

**How long do these interactions take?**

2-3 minutes on average. But the socks can be longer because of researching accessories. 

**As far as the socks go, are you finding that a lot of the calls you get are, “I need to change something” rather than “I need something new”**

There is a lot of fluctuation, maybe the Veteran has added weight or lost weight so they need a thicker/thinner sock. Maybe they got a new prosthesis so they need a totally different sock. 

**What type of errors occur most often in the ordering process?**

Sending things to the wrong address, sending the wrong item, I’d say we shoot for the right quantity but sometimes it’s not enough so the Veteran has to call back and request more. I guess those are the main ones. 

**So they fix those by calling in?**

Yes

**What would cause something to be sent to the wrong address?** 

Uhm, it’s usually human error but sometimes the Veteran will have a primary and space for a seasonal/temporary address. So you may have someone who lives in Minnesota and goes to Florida for the winter and they call in and want it shipped to Florida and someone ships it to Minnesota. It doesn’t happen a lot, but it does happen. 

**Going back a couple of minutes, you had mentioned that it’s annoying for Veterans to have to go to different platforms to order different things because eBenefits doesn’t handle the full catalogue that someone could order. What is it that makes some of those other catalogue items complicated enough that they haven’t or couldn’t be implemented online?** 

Well, the answer to the first part of that is it’s the limited number of items they have online to order. So, that’s the number one complaint. The second complaint is the eBenefits login. If they order batteries through eBenefits every 6 months it requires a long and complex password change. Say, I’m working with a specific Veteran on my team who utilizes My HealtheVet and wouldn’t utilize eBenefits for that reason and he showed me where he fills his prescriptions and asked why they couldn’t go to one centralized site to order all supplies. That’s the common complaint that we get. Why would I call you for half of my supplies and go online for the other half when I could call for all of them?

**Do you have a way for us to pull our data from your system? Like an external API or anything?**

We don’t have any external APIs, but based on the discussion putting something like that in place is feasible

**The followup to that is how is the data structured, but if you could put an API together then we could collaborate with you on how to structure that API.** 

[Missed the technical discussion]

**Does the DLC have any questions?**

I don’t think so right now. First pass at API and prototypes 

**Anything else you’d be looking for in the future?** 

Nothing I can think of. 

**When the Veterans are calling in and getting a little more assistance from the agents, is it really much of a back and forth or is the agent just working to fix an issues? Or is there a lot of drilling down to see what’s broken? Could this be an automated process?**

A typical ordering process is, “This is what I need” they’ve ordered it multiple times in the past. It’s not difficult to drill down to what they’re specifically asking for. The Veteran knows exactly what they need. 

**Would they be able to pick it out from a list?** 

They would, they annotate what they want in writing. We have scanning technology to scan some of the order, but a click and ship solution would be much added value to our process.

**So that’s how they do it via mail and through the phone. That’s just something that hasn’t been implemented to eBenefits?**

It’s just limited to socks and batteries. They are issued a card if they would not like to use the phone system

You asked if the accessory-type items are something that can be picked from a list which I think they can be, I think the list would be very large so that needs to be a consideration. There are various things like that we’d like to look at pretty carefully. Knowing that, I’d say the initial functionality we definitely want the battery reorder and the sock order capability. I think we’d like to build in additional accessory ordering but that may need to be a second phase given some of the complexities.

**What kind of stuff are you thinking? An example of one of the more complex accessories?** 

So, I guess the most common accessories are: wax filters, dome or earbuds (come in different sizes), some tubing (different sizes), they are very specific to the individual brand of hearing aid. If a Veteran has multiple sets of aids on his record and they’re different brands then we need to determine which aid they’re requesting parts for so we order the correct type. Also, they have cleaning tools and those can be specific to the type of aid. There’s also a couple different types of hearing dryers. 

**That’s super helpful to understand some of the other items in the catalogue**

**I did have a followup where they’re ordering things previously ordered: Is there some sort of major technical constraint that prevents them from being able to search through everything vs what they ordered in the past? This is the thing you ordered 5 months ago. If you want something not on the list, call this number?**

We were kicking around ideas internally for more complex items such as hearing aid accessories such as, repeat last order. Then they would get everything they ordered 6 months ago. 

**What was the result of those conversations?** 

We are in the process of developing a reorder card where they can check that box. Listening to our agents, they confirmed about 50% of our calls are, “Send me what you sent me last time” 

I anticipate that to occur with the sleep apnea population when we start the resupply role in that. 

The most recent order is something that could be included in the API where the products on that last order could be provided as part of the API exchange 

**You could do a subtle campaign that’s enticing to the Vets to migrate them to the online channel that seems to be the goal. Migration from one channel to the online channel** 

When I was talking to the distribution folks internal to the organization, we were talking about if we can add items to the My HealtheVet or VA.gov we could have informational packets in each order letting them know this is a new solution for you 

**I know we talked about a 5 month order lockout for 6 month supply. Would they be able to order the domes separately and the batteries another time. Are they ordering multiple times for multiple things?** 

In a perfect world they would order a 6 month supply, but it’s human nature to forget an accessory. The sky is the limit.

**So they could receive shipments every month of the year.** 

Correct.

**Would it be possible to send over a list of questions, not take type of your day but send questions you can answer at your leisure?**

That’d be awesome.

### Amen's Notes

- They can put an external API that we can collaborate with them on.

- API could be structured similar to Access VA 

- They will follow the standard VA policies on PII and PHI

- Have a way to filter out duplicate data. 

- First initial API call would perform a record check

