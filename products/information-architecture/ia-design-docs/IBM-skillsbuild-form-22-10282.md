# IA Design for IBM SkillsBuild form digitization 

**STATUS: In progress**

**Team:** govcio-vebt

**People:** 
- Ariana Adili - product team UX
- Katherine handed off to Monica and A. - CAIA content
- Sam Walker - CAIA IA

**CAIA Intake ticket:** [87265](https://github.com/orgs/department-of-veterans-affairs/projects/929/views/70?pane=issue&itemId=69171351)

**IA Tracker:** [88619](https://github.com/orgs/department-of-veterans-affairs/projects/929/views/70?pane=issue&itemId=71290073)

**On this page:**
- [User/page flows](#flows)
- [Page structure](#map)
- [URLs and breadcrumbs](#url)
- [Entry points](#nav)
- [Redirects](#redirects)
- [Best Bets](#bestbets)
- [Staged Rollout](#stagedrollout)


## <a name="flows"></a>User/page flows <br>
See most up-to-date user flow in Mural [here](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1721776223889/18fdefd61696db7aa28191e3a54d8eb4b5ea599a?wid=0-1726073383280)
![ibm 1 4](https://github.com/user-attachments/assets/cd5d4815-0aa5-4f92-86c2-ba88acd2c22b)


## <a name="map"></a>Page structure<br>

<img width="382" alt="22-10282 sitemap" src="https://github.com/user-attachments/assets/2fcef6b5-6a56-4751-9388-509845015a02">

*Note about the content organization on this page: the 'Other VA education benefits' page currently has two H2 sections for organizing benefits. Each heading describes the benefits' relationship with the GI bill. Should we consider adding new H2 for the IBM Skillsbuild program, since this benefit does not have any dependancy/relationship with GI Bill at all?*

<img width="527" alt="ibm page placement screenshot" src="https://github.com/user-attachments/assets/38d01231-d70b-4d93-a378-e187095a64c7">



## <a name="url"></a>URLs and breadcrumbs

**1) Benefit Info page for IBM SkillsBuild - TBD H1 - New**
- URL: va.gov/education/other-va-education-benefits/ibm-skillsbuild-program/
- Breadcrumb: VA.gov home > Education and training > Other VA education benefits > IBM SkillsBuild program


**2) Form for IBM SkillsBuild - New**
- URL: va.gov/education/other-va-education-benefits/ibm-skillsbuild-program/apply-form-22-10282/
- Breadcrumb: VA.gov home > Education and training > Other VA education benefits > IBM SkillsBiuld program > Apply for the IBM SkillsBuild program

**3) About VA Form Form 22-10282 - New**
- URL: va.gov/find-forms/about-form-22-10282/
- Breadcrumb: VA.gov home > Find a VA Form > About VA Form 22-10282



## <a name="nav"></a>Entry points <br>

### Primary entry point

1. **Benefit Info (static Drupal page)** - Add
- Placement description: The 'Benefit Info page' can be reached from the left nav (see Secondary Entry Point > Left Nav, below). The page contains a description of the benefit (see draft content in the [Content Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1728998207284/c6a24447b96cefa10acf5138d27fdde8b07aca45?wid=0-1729001422687)), and a CTA to apply for the benefit.
- CTA Link label: Apply for the IBM SkillsBuild program
- Link destination: va.gov/education/other-va-education-benefits/ibm-skillsbuild-program/apply-form-22-10282/
<img width="461" alt="ibm 1 1" src="https://github.com/user-attachments/assets/103318d3-9c89-4675-8a74-dfb3205f5395">


### Secondary entry points

1. **Left Nav lists Benefit Info page** - Add
  - Placement description: In the left nav, under **Education and training > Get benefits > Other VA education benefits > IBM SkillsBuild program**
  - Left nav link label: IBM SkillsBuild program
  - Link destination: va.gov/education/other-va-education-benefits/ibm-skillsbuild-program/
<img width="437" alt="ibm 1 2" src="https://github.com/user-attachments/assets/c0c2242d-9c66-4292-a7d5-4d38b3453a58">


2. **'About' page for form** - Add
  - Note: Placement description: The 'Find a VA form' system's search result for this form should be updated with a link to the form, now that it can be filled out digitally.
  - Link label: Fill out VA form 22-10282 online
  - Link destination: va.gov/education/other-va-education-benefits/ibm-skillsbuild-program/apply-form-22-10282/
  - Note: Stakeholders want *only* the digital form, not the PDF, available. So we may remove the link to the PDF. 
<img width="605" alt="ibm 1 3" src="https://github.com/user-attachments/assets/67f9c598-d3ad-4f6b-86cf-94e9212074bf">




### Crosslinks
The three options below are more brainstorm than instructions. The 'more info' sections on some of these pages have a pretty narrowly topic focus, so I'd like to defer to Content's input on which of these options seem best.

1. [Careers > Employment resources for veterans](https://va.gov/careers-employment/veteran-resources/)  This page feels like a good subject-matter fit for a crosslink. But the 'More info' links at the bottom are v tightly scoped to Readiness & Employment topics.
<img width="606" alt="ibm crosslink 1" src="https://github.com/user-attachments/assets/7146df64-5ff6-44af-890d-ee93257b8312">


2. [Careers > Education and career counseling for familiy members](https://www.va.gov/family-and-caregiver-benefits/education-and-careers/educational-and-career-counseling/) Since the benefit is for family members as well, this might be an option. The 'more info' section on this page has a broader scope.
<img width="579" alt="ibm crosslink 2" src="https://github.com/user-attachments/assets/8b9f9d63-4f71-4976-aeeb-d435b4f33f90">


3. Maybe also [Resources and Support > Career resources for military and surviving spouses](https://www.va.gov/resources/career-resources-for-military-and-surviving-spouses/) It has a section at the foot of the page that's not *technically* a 'More' section, but seems to be serving a similar purpose.
<img width="602" alt="ibm crosslink 3" src="https://github.com/user-attachments/assets/a13fc583-fe73-43da-9962-695e9834b889">

## <a name="redirects"></a>Redirects <br>
*No redirects, since this is a newly digitized form and newly added pages.*


## <a name="bestbets"></a>Best Bets<br>
**Add** a best bet that direct to Benefit Info page. To URL: va.gov/education/other-va-education-benefits/[H1 - TBD by Content]/

<img width="659" alt="ibm best bets 2" src="https://github.com/user-attachments/assets/63953255-4920-42f4-9ec1-a2a5cafa447c">


## <a name="stagedrollout"></a>Staged Rollout<br>
No


