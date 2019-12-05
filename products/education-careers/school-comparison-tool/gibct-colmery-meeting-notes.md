Meeting Notes from 4-12-2018 

1. #9363 As a Purple Heart Veteran, I need to be able to see and select “Purple Heart Service” in the ‘Cumulative Post-9/11 active duty service’ drop down

   a. Confirmed that the requirement is to add “Purple Heart Service (100%)” to the “Cumulative Post-9/11 active duty service” drop-down and the value passed to API is 100%. 
   
   b. This item is ready to go. 

2. #9364 As a veteran, I should no longer have the option to select 40% and 50% benefit levels from the ‘Cumulative Post-9/11 active duty service’ drop down.

   a. Confirmed the effective date for this item is in 2020.
    
   b. Therefore, this ticket will be taken out of the scope and the ticket will be moved to the Icebox for monitoring and future implementation. 

3. #9369 As a user, I should be able to view closed schools and institutions in the GIBCT.

   a. This change requires a change to the GIBCT UI and to the GIBCT Data Dashboard.
   
   b. GIBCT UI Changes:
      i. The UI change requires an indicator to be added to GIBCT that a school is closing. The indicator can be similar to the current “Caution” labels. However, the Caution labels need to remain. 
	  
      ii. The idea of including the date of when the school would close was mentioned as a possibility, but Stephanie will determine whether we have the data to support including the date and whether she wants to include it 
	  
      iii. In addition to the “Closing” indicator, explanatory text will be included. Education services will supply the text for this item. 
	  
   c. GIBCT Data Dashboard Changes:
      i. Currently, the Data Dashboard only shows institutions that are approved. The dashboard will not show closed schools. In order to provide greater information to dashboard users, we will have to include non-approved institution, which will require the dashboard functionality to change. 
	  
      ii. The dashboard code will need to be updated to display non-approved schools
	  
      iii. A column will be added to the WEAMS data file to indicate whether a school is closing and the GIDS will need to support this new column.
	  
      iv. The following are existing Data Dashboard issues in the GIDS repos:
         a. #313 - Add Additional Key Data Points to the GIBCT Data Dashboards
         b. #314 - Display non-approved schools in GI Bill CT Data Dashboards

4. #9365 As a Veteran eligible for “Yellow Ribbon” status, I need the estimator tool to display the actual rate.

   a. The Colmery Act expands the Veterans eligible for the “Yellow Ribbon” program. The scope this issue is to display:
      i. If Yellow Ribbon is available at a school and program (i.e. law, medical, and etc.);
	  
      ii. The number of people who can receive the Yellow Ribbon benefit at the school; and
	  
      iii. The amount of the Yellow Ribbon Scholarship.
	  
   b. The Yellow Ribbon program information is in a spreadsheet that is not in the GIDS. We will have to include this information in GIDS. 
   
   c. The information to be displayed is the same that populates the Yellow Ribbon program page - https://www.benefits.va.gov/GIBILL/yellow_ribbon/yrp_list_2016.asp. See specific example for the State of Washington at https://www.benefits.va.gov/gibill/yellow_ribbon/2016/states/wa.asp. 

5. #9366 As a Purple Heart Service veteran, or FRY recipients, I need to be able to access the “Yellow Ribbon” feature in the Estimator.

   a. The initial requirement to add “Active Duty” service has been removed because that Colmery Act change does not take effect until 2022. A new issue will be created for the Active Duty requirement and put into the Icebox for monitoring and future implementation.
   
   b. The relevant scenario for the Purple Heart Service and Fry Recipient is as follows: 
      i. When a Veteran selects either Purple Heart Service or FRY recipient, in the “Cumulative Post-9/11 active duty service” drop-down,  to an institutions information page, and the institution offer the Yellow Ribbon benefit; then 
	  
      ii. The Estimator needs to display the Yellow Ribbon question. 
	  
   c. Will update the issues with the scenario.. 
      i. Note that the update for Purple Heart Service will require completion of issue #9363. 

6. #9370 As a GIBCT user, I should see an indicator whether a school or institution participates or offers a Veterans Tech program, Independent Study, and Priority Enrollment.

   a. Full implementation of the Veterans Tech program indicator is due January of 2019. This item will be moved into a new issue for further discovery and refinement.
   
      i. Note that these programs are new vendor type, like Microsoft Certification program, and will be different enough that a completed design review should be conducted.  
	  
   b. The Independent Study and Priority Enrollment data is in files contained in the GIDS.
   c. An indicator for Priority Enrollment needs to be added to the “Veterans Program” section on the search result page.
   d. An indicator for Independent Study needs to be added to the “Additional Information” section on the search result page. 
   e. The indicator will link to explanatory information provided by Education Services. 

7. #9371 As a GIBCT user, I should see an indicator whether a school or institution participates or offers a STEM program.

   a. This change will require a change to the GIBCT UI and changes to gather this information from the WEAMS data files in the GIDS. 
   
   b. UI Change
      i. A “STEM program” indicator needs to be added, most likely, to the “Additional Information” sections;
	  
      ii. The indicator will indicate that the school either has or does not have a STEM program.
	  
   c. Gathering information from WEAMS file
      i. The WEAMS file contain information on the programs offered by schools, which is includes STEM programs. 
	  
      ii. The data service will need to identify programs that fall under the STEM program category in order to allow the UI to indicate that the institution does offer a STEM program. 

8. #9368 As a user, I need to ability to edit the ZIP Code for a program I’m attending in order to calculate the housing benefit based on my ZIP Code and #9367 As a user, I need a Tool Tip to explain the basic allowance for housing (BAH) changes made by the Colmery Act.

   a. The Colmery Act changes the housing allowance such that when a Veteran enrolls in a program (like an internship) then the allowance is based on the location of the internship rather than the University. 
   
      i. For example, if the Veteran attends Colorado College in Colorado Springs working at an Internship program at the VA based in Washington DC, then the housing allowance calculation considers Washington DC as the location.
	  
   b. The change will require both a UI change and data service changes. 
      i. The UI change, at a minimum, will need to allow a Veteran to change, the ZIP Code or location, of the program for the housing allowance calculation. 
	  
      ii. The data service will require the addition of a new file that will provide the location information and the corresponding housing allowance information. 
	  
   c. The next steps here will be 
      i. Determine how best to implement these changes in the UI 
	  
      ii. Work to determine the best approach to implement the data change and get this information into the GIDS
