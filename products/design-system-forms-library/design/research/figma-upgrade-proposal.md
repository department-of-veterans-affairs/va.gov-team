# VA Figma Workspace Upgrade Proposal

This document outlines a proposal for reorganizing the VA's Figma workspace. The recent upgrade from the Professional to the Organization tier offers new features that can significantly improve how teams manage their design projects.

**Key Change:** The upgrade introduces a clearer, multi-level structure, moving from a single Team limit to an Organization-level structure that can house multiple Teams.

## Understanding Figma's Key Terms

To avoid confusion, this document uses specific capitalization for Figma's structural elements:

* **Organization:** The highest level in the Figma hierarchy (our entire VA workspace).
* **Team:** A distinct group within the Organization (e.g., MyHealtheVet, Lighthouse).
* **Project:** A collection of related design files within a specific Team.

## Current Challenges with the Previous "Pro" Tier Setup

Under the Professional tier, VA was limited to a single Team, with which each actual team is a Project. The hierarchy is: 

**Team** ("VA.gov Platform")
  * Project A
      * File(s)
  * Project B
      * File(s)
  * Project C
      * File(s)
  * ...and so on for multiple Teams.

This setup caused several organizational challenges:

* **All VA teams were treated as Projects:** This meant that some teams who have multiple initiatives, like Mobile App, MyHealtheVet, Lighthouse, had their various initiatives grouped together at the same level with all the other teams/Projects, reducing clarity.
* **Inconsistent Project Naming:** Some Projects were created without clear team affiliation (e.g., "Contact us page," "Careers and Employment"), making it difficult to quickly find and understand their context and ownership.
* **Overwhelming Number of Shared Libraries:** With all work under one Team, any shared library created by one team became available to everyone. This resulted in 54 published libraries, many of which were likely team-specific, abandoned, poorly named (e.g., "Library," "Source of Truth SM"), or overshadowed essential multi-team libraries like the VADS Component Library.

## How the New "Organization" Tier Helps

The Organization tier offers a more sensible and flexible structure:

* **Organization** (Entire VA Workspace)
    * **Team 1** (e.g., MyHealtheVet)
        * Project A (e.g., New Feature Design)
            * File(s)
        * Project B (e.g., User Research)
            * File(s)
    * **Team 2** (e.g., Lighthouse)
        * Project A
            * File(s)
    * And so on for all VA teams.

This improved structure will:

* Enable individual VA teams to create and manage their own **Projects** for different initiatives.
* Let teams share design assets (like components or templates) just **within their Team**, reducing clutter for everyone else. (Sharing with the entire Organization remains an option when appropriate).
* Enable VA teams to be function as actual **Teams** within Figma.
* Provide better control over who can view or edit files within a specific **Team**.

## Proposed Guidelines for the New Structure

To get the most out of the Organization tier, the following guidelines are proposed:

1.  **One Figma Team for Each VA Team:** Every distinct VA team, including individual VFS teams, should have its own Team in Figma.
2.  **Central Team Creation:** To keep things consistent, VA leadership or a designated admin group should handle the creation of new Teams.
3.  **Clear Team Names:** Name Figma Teams using the official team name. Avoid using the product or service name unless it’s the same as the team name.
4.  **Project and File Flexibility for Teams:** Individual Teams can decide how to structure and name their own Projects and Files that best suits their specific workflows and project types.
5.  **Controlled Sharing:** Teams should coordinate with VA leadership before publishing Organization-wide libraries to ensure alignment that only broadly applicable assets are shared.

## Additional Considerations

* **Use Full Team Names (Avoid Acronyms):** To help searchability and onboarding for new members, use full names for Teams (e.g., "MyHealtheVet" instead of "MHV," "Lighthouse" instead of "LDX"). The only exception is "VA." Teams can still use acronyms for their internal Projects and Files if they wish.
* **Using 'va.gov' Email Addresses:**
    * Everyone will need to use a 'va.gov' email address for their Figma account.
    * If you don't have one, a new account will be needed.
    * Each team will need to transfer ownership and "edit" permissions for any existing files to their new 'va.gov' account. (Figma lets you switch between accounts easily.)
    * If anyone has designs in their "Drafts" folder that they want to keep working on, they will need to:
        1.  With your non-va.gov account, go to File > Save Local Copy... to download the file.
        2.  Then, import that file using your new 'va.gov' account.
    * Email notifications (for comments, permission requests, etc.) will go to their 'va.gov' email. However, Figma also shows all these notifications directly within the app.
* **Team Responsibilities:** Once a Team is created, it's up to that team to create its Projects and move its files into the new structure. This gives teams ownership of their workspace from the outset and allows them to organize their existing and future work according to their specific needs.
* **Renaming the Old Team:** The current "VA.gov Platform" Team (from the Pro tier) should be renamed to something like "VA.gov Archive" during setup to:
    * Prevent confusion with the new VA.gov Platform Organization
    * Identify files that need to be moved to a new Team
    * Identify files that are not currently active or maintained
* **Publicly Viewable Teams:** Unless there’s a compelling reason (e.g., sensitive projects), all Teams should default to be viewable by the full Organization to promote transparency and knowledge sharing. (This is an option during Team creation.) **Note:** Even if a Team is viewable by the Organization, Projects and Files within that Team will only be viewable (not editable) by people outside that specific Team.
