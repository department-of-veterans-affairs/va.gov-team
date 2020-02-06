# MDT Thumbnail Mapping

## Iteration 4 - Sprint 14

For clarity, we included the authenticated and unauthenticated content pages into the flows and made some minor changes from our last iteration for demonstration.

![Option 1](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/medical-device-tool/design/thumbnail-mapping/thumbnail_mapping-v4-1.jpg "Iteration One")

## Iteration 3 - Sprint 13

In this iteration, our primary focus was on decoupling accessories from specific devices, as that is a set business/technical constraint that was reported to us by the DLC. Another piece of feedback we incorporated was combining mailing and email addresses into the same step of the flow.

### Order flow for individually gated product selection

This version attempts to reduce complexity of the form by introducing progressive disclosure on a product category level. This version poses the problem of adding additional clicks, something our stakeholders have requested we reduce.

![Order flow for individually gated product selection](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/medical-device-tool/design/thumbnail-mapping/thumbnail_mapping-v3-1.jpg "Iteration Three v1")

### Order flow for group gating

This version attempts to reduce those extra clicks and provide some wiggle room for scalability by creating a product gate near the beginning of the form. If we choose to incorporate future product additions into this form, this may be a good way to go. When selecting multiple products to order, each product group's product selection pages will be shown sequentially until the form is complete.

![Order flow for group gating](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/medical-device-tool/design/thumbnail-mapping/thumbnail_mapping-v3-2.jpg "Iteration Three v2")

## Outcomes and Feedback
For the second iteration, we introduced content page design variations in addition to the updated thumbnail mapping flows.  

### Presenting to the BAM2 team:

The design team presented the third iteration of the order flows to the BaM2 team for feedback. 

**Key takeaways:**
- The team erred on the side of the first version due to limited product offerings and more 'conversational' flow
- The team decided that more 'catalogue-like' functionality present in the second version can be explored further when a greater catalogue is being built.
- The edge case of a user having only rechargeable hearing aids on their profile was raised, which will be accounted for in a future design ticket.

### Presenting to DLC

The design team presented the third iteration of the order flows to the DLC for feedback. The full meeting notes can be found [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/medical-device-tool/meetings/20200130-DALC-thumbnail-mapping-review.md). 

**Key takeaways:**
- The DLC would like to remove the *Additional comments* feature from the order flow because any comments received will make it so orders can't be automatically fulfilled 
- The generic *Additional supplies* portion of the flow doesn't make sense because all supplies need to be listed as a specific item, similar to the domes and wax guard selection portion of the flow 



## Iteration 2 - Sprint 13

### Order Flow "Happy Paths" for Single & Multiple Selections
![Order Flow "Happy Paths" for Single & Multiple Selections](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/medical-device-tool/design/thumbnail-mapping/thumbnail_mapping-v2-1.jpg "Iteration Two, Single + Multiple Selections")

### Content Page Wireframes

Wireframes were created in place of thumbnails, as it was not as interaction-based and didn't make sense for the task.

![Content Page Wires](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/medical-device-tool/design/thumbnail-mapping/wires-content-v2-1.jpg "Iteration Two, Content Wires")

## Outcomes and Feedback
For the second iteration, we introduced content page design variations in addition to the updated thumbnail mapping flows.  

### Presenting to the BAM2 team:

- The design team presented both the order flow thumbnail mapping and the content page variations to the BaM2 team for feedback. The meeting notes can be found [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/medical-device-tool/meetings/20200122-BAM2-thumbnail-mapping-review.md). 

### Presenting to VSP 
- VSP Design Intent Checkin initiated several meetings with IA, Accessibility, Design, and Content. Suggestions and guidance can be found [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/medical-device-tool/meetings/20200121-VSP-design-intent-check-in.md).

### Presenting to DLC
- After presenting to the BaM2 team, the designers presented the 'Order flow "happy paths"' thumbnail mapping to multiple DLC stakeholders for feedback. The meeting notes can be found [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/medical-device-tool/meetings/20200124-DALC-thumbnail-mapping-review.md). 

## Iteration 1 - Sprint 12

### Maps
![Option 1 - Dashboard Concept](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/medical-device-tool/design/thumbnail-mapping/thumbnail_mapping-v1-1.jpg "Iteration One, Dashboard Concept")

![Option 2 - Content Page Actions 1](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/medical-device-tool/design/thumbnail-mapping/thumbnail_mapping-v1-2.jpg "Iteration Two, No Dashboard")

![Option 3 - Content Page Actions 2](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/medical-device-tool/design/thumbnail-mapping/thumbnail_mapping-v1-3.jpg "Iteration Three, No Dashboard")

### Outcomes & Feedback
As the design team worked, we uncovered some gaps in our knowledge that we needed answered.

#### Presenting to the BAM2 team:
- For the sake of consistency and technical simplicity, the team agreed to pursue concepts *without* dashboard-like functionality.
- Discussion was had around whether or not to have more generic content and single ordering form for all devices or to have distinct content pages and ordering forms for each product type. 

#### Presenting to the DLC:
- After presenting to the BaM2 team, the designers presented the third thumbnail mapping flow to Kevin Q for feedback. The meeting notes can be found [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/medical-device-tool/meetings/20200114-DALC-thumbnail-mapping-review.md). 

#### Check-in with VSP IA:
- It was recommended by the IA/Content team to split up the current DLC offerings of batteries/accessories and prosthetic socks into distinct pages to preserve information scent and SEO value.
- It was noted that a higher level content page may not be necessary with only two product lines being offered currently, but that this may be added in the future.
- Mikki's and Peggy's initial recommendations can be found [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/medical-device-tool/design/ia-recommendations-v1.png)
  - Follow up conversation in slack:
    - Rebecca: Thank you both for providing us some guidance! I was wondering if that guidance would change if the form was to be made more general to incorporate all DLC product lines (hearing aids, prostheses, (future items)) in a single form? Do you see any pitfalls with pursuing this path?
    - Mikki: We would see the two forms at the bottom of each structure merge into one order form.
    - Rebecca: So if we have a general reorder form, you'd still like to see product specific pages?
    - Mikki: There are 2 options, either we have individual content pages for the different products that converge onto a single order form, or we have a single "medical device" hub that describes the products and links to a single form (similar to structure 3).  It really depends on how much content we want/need to provide around each item.  If we can shore up the content, then we can condense those static pages into a single medical device page that links to a single ordering form.  I've added this as a 4th structure.
