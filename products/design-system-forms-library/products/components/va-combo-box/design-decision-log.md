# va-combo-box Design Decisions
Last updated: 06-05-2025

- [ADR: 001 - Importing the native mobile combo box](#ADR-001---Importing-the-native-mobile-combo-box)

## ADR: 001 - Importing the native mobile combo box

- Date issue raised: 05-15-2025
- Decision date: 06-04-2025

## Context

We have an initiative to combine the Mobile Design System with the VA Design System (VADS). One of the components that needs to be migrated to VADS is the combo box. The Mobile Design System has already built this component. For the initial design, we will use the existing Mobile team’s version. 

However, there are some notable differences between the desktop combo box and the native mobile combo box:

| Feature | Web-Based Combo Box | Native Mobile Combo Box |
|--------|----------------------|--------------------------|
| **Initial input design** | Select component with a visible clear button, a divider, and a chevron-down icon | Select component with no visible clear button, no divider, and uses the default select icon |
| **Input with an option selected** | Displays selected option in the input with a visible clear button, a divider, and a chevron icon | Displays selected option with a visible clear button, no divider, and the default select component icon |
| **Text wrapping behavior** | No text wrapping | Text wraps and the input expands vertically to accommodate content |
| **Initial click behavior** | Opens dropdown | Opens modal with a close button |
| **Dropdown design** | List of options | Label with a search input and a list of options below |
| **Search behavior** | Typing filters the list, reducing visible options | Typing filters the list, reducing visible options |
| **Filter behavior** | Options are reduced as you type the first letter | Not sure |
| **Options behavior** | No change to the text as you type | Matching text is underlined and bolded |
| **Selection behavior** | Tabbing or clicking highlights the focused option | No visual change |
| **New selection behavior** | Clicking opens dropdown showing all options; the selected option is in an active state | Original search remains visible; selected option in the list has no visual change |
| **Clear selection behavior** | Close icon clears selection | Close icon clears selection (not present in modal search input) |
| **No results** | Dropdown shows “No results found” | Not sure |

## Decision

We will be importing the combo box design **as-is**. The Mobile team’s version is already in production, and making design changes now could be disruptive. However, there are some refinements to consider in future iterations:

1. **Select Combo Box Component Design**  
   The select components for combo boxes for desktop and native mobile differ. Aligning them would help create a more consistent experience.

2. **Modal/Sheet Design for Native Mobile**  
   The mobile combo box uses a sheet that looks different from both modals used elsewhere in the native app. Aligning these sheet styles would improve consistency.

3. **Text Highlighting Behavior**  
   The combo box on desktop, native mobile, and search input with typeahead all handle text highlighting differently. These behaviors should be unified for a more predictable user experience.

## Consequences

The VADS is in the early stages of aligning mobile components with the existing system. As we establish initial processes, it’s likely there will be learning curves and potential missteps moving the components to the VADS. Since this combo box is one of the first components to be migrated, we can expect iterations and bugs that will need to be addressed as we refine our integration process.
