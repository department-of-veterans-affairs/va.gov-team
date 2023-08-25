# Add Logging Around Document Upload & POC

[Ticket](https://app.zenhub.com/workspaces/disability-benefits-experience-team-carbs-6470c8bfffee9809b2634a52/issues/gh/department-of-veterans-affairs/va.gov-team/60944)

## Terms
**3PI** - “3rd party interactions,” describes an interaction between one of our services and a third party API.  
**SCC** - “Shared Context Complexity”, described below in the “Complexity” section.

## Requirements
- Wrap our Supporting Document upload in meaningful logging
  - Logging should be as close to the 3PI as possible to maximize desirable visibility
    - This happens at the model level
-  Logging must contain information as defined in the ticket
  - Most of this is from the request
    - E.g. ‘current user id’
- Generate a Proof of concept.  This work will define a reusable pattern for the remaining 14 epic tickets.

## Primary Complexity

We have Model level actions that need logging with Controller level information.  Logging request level information from the model level presents the challenge of maintaining OO encapsulation while working with this shared context.  This complexity will be referred to herein as the “SCC”, or “shared context complexity”, meaning the difficulty around using context from the controller level in model level logging without coupling the two layers.

This is not just an academic concern.  Given our use of inheritance in the affected models and composition in the affected controllers, we will be touching widely reused code in this feature implementation.  Breaking encapsulation principles risks introducing unexpected behavior elsewhere in the application by giving context to an object in one place that does not exist elsewhere.

## Options

### Option 1: The “middle man”

Here we address the SCC by creating an isolated context in which to make the controller level data available to an object that is capable of initiating model level actions. 

<img width="743" alt="Screen Shot 2023-07-10 at 11 35 04 AM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/15328092/1164fc12-5def-4ad5-846d-0703a8173f89">

#### Pros
- Shared context without breaking coupling
- Reusable
- Relies on established OOD pattern (Service Object)
#### Cons
- Would require a wider refactor of how we call the 3PIs from within the model.  In order to call form.upload_method, ‘upload_method needs to be publicly available on the instance of FormClass.  This would be a relatively simple refactor, except that FormClass is part of an inheritance chain that wraps our ‘upload_method’ in other methods.  Breaking out the upload_method would require changing the way all FormObjects (not just in 526) work.  That would be out of scope and dangerous.
#### Decision
Ultimately the refactor required on FormClass is too invasive to consider for this work.

### Option 2: The “Context Decorator”
In this option, we wrap the FormClass in a decorator at instantiation and pass the shared context to the decorator object, thus making it available to model without violating the models encapsulation.

<img width="681" alt="Screen Shot 2023-07-10 at 11 35 45 AM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/15328092/f11ac3e6-3f1f-49cb-ade8-ae6031b8f436">


#### Pros
- Model has no idea what’s changed
- No Model refactoring
#### Cons
- Requires refactoring and monkey patching of controller logic. Minimal but not ideal.  The controller is (like the model) using some shared logic, this time in the form of composition (FormAttachmentCreate module).  Here, in order to wrap the FormClass instantiation we would need to refactor the existing shared logic so the instantiation happened in a helper method.  Then we would need to monkey patch that helper method in the controller that leverages the FormAttachmentCreate logic in order to insert our decorated object.  
- Requires monkey patching of Model logic.  Once we have successfully wrapped our object in our decorator, we still need the decorator to overwrite the bit of the model logic that actually initializes the 3PI.  In order to do that we would again be refactoring the parent model’s 3PI into a helper method and overwriting that method in the wrapped object in order to insert before and after logging.  This is problematic because  Decorators in Rails (SimpleDelegator) don't support overwriting helper methods, and it would be an anti-pattern to boot. 
#### Variation
- I considered making this work with before and after hooks instead of monkey patching.  This would be (arguably) better in that we wouldn’t be rewriting code, but still an anti-pattern in that one object would be attempting to hook into the private workings of another.  Also, rails lifecycle hooks are not intended to work with private methods, which is a whole can of worms.
#### Decision
Same problem as before, where I’m getting too invasive, bending / breaking the rules of OOD, with not a ton of pay off.

### Option 3: Manual insertion of logging into the FormClass
In this option, we simply crack open the model an wrap our desired action in some logging.  

<img width="711" alt="Screen Shot 2023-07-10 at 11 36 27 AM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/15328092/087d9512-7bea-45ba-af56-c82e92cbf7ba">


#### Pros
- Easy to implement
- Easy to understand
#### Cons
- Breaks encapsulation.  We would need to pass controller level logging into the model.
- Would affect all form attachments.  This is a con-light, because really the added logging site wide would be kinda nice.  However, modifying shared code (remember that ‘FormClass’ is a hypothetical representation of a more complex inheritance model) feels dangerous, especially in light of the aforementioned encapsulation concerns.
- Not a reusable pattern.  One of our goals is to have something to point at and say “do this for each 3PI”.  This manual addition of start_logging and stop_logging methods all over the code would be unwieldy to maintain.
#### Variation
One promising solution to the 3rd con above (lack of reusability) would be to create a logging module that will dynamically monkey patch methods with start / stop logging calls.  E.G. 
- <img width="661" alt="Screen Shot 2023-07-10 at 11 37 05 AM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/15328092/f5bac293-b49b-4d2a-84ed-6424921ad685">
- <img width="545" alt="Screen Shot 2023-07-10 at 11 37 26 AM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/15328092/bbc7ca0e-2b68-44ab-868f-31dfaddd2efc">

#### Decision
There are some good and bad bits here.  This is a decent fallback if we need to ship something ASAP and can’t come up with something better.

### Option 4: Break Logging into smaller chunks
In this option we simply log controller level data from the controller action, then inside the model when we are actually calling the 3PI we add more logs around that more specific action.  We could possibly even skip the model level logging and just log from the controller, however i think the model level logs, even without context could be nice pointers for future debugging when we wonder “did we even make it to the 3PI before this broke?”

<img width="732" alt="Screen Shot 2023-07-10 at 11 37 47 AM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/15328092/d3f8e7de-db6a-488c-b6c9-c590f66a7e9f">

#### Pros
- Eliminates SCC!
- More info is… better?
- Easy to understand
- Easy to implement
#### Cons
- More info is… worse? Is it Kruft?  Duplication?
- Data separation. 
  - DataDog mitigates this by dynamically grouping process IDs (I think).  This means, theoretically if you are looking at one of these 4 logs, you should be able to easy and intuitively navigate to the other 3
- Lot’s of code duplication. 
- Would affect objects and actions beyond the scope of our Form, due to the inheritance / composition in our controller and model levels.
#### Variations
- Hybrid this with the composition based shared logging module. This may seem to be over engineering for a first pass, except that one of our stated goals with this POC work is to define a reusable pattern.  The subsequent tickets could be as easy as adding 2 - 4 lines of code per 3PI, which would make future proofing and iterating a breeze.
- Would remove code duplication.
- Composition mitigates (in the controller) unintended affectation of out of scope actions.
#### Decision
This feels like the “simple and clear” path, so despite its potential “krufty-ness” it is the path that I am currently pursuing.  Additionally, the variation with a reusable logging architecture, while slower to implement, will massively reduce code duplication, future development time, and possible points of failure.

### Option 5: Monkey Patch CarrierWave with Middleware logging
Including this for completeness. This was my first instinct, but upon further thought it breaks down so completely as to not really warrant much discussion, however, quickly…

#### Cons
- Hard to understand.
- Hard to maintain.
- Hard to debug.
- Hard to implement (context passing would be a nightmare, if even possible.)

### Next steps
Continue POC implementation of option 4, then refactor it into reusable pattern using the plug-and-play logging module pattern.
