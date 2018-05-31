---
title: How to move a component into Fractal
---

As we transfer components from vets-website into the design system, we will need to make sure that component is completely moved over, functional, can be imported back into vets-website and renders correctly, and that automated tests are written for that component.

## Steps for moving a component into Fractal

1. Create a new folder under `src/components/` for the component if none already exists. The name of the folder must match the name of the config file and .njk file in order for Fractal to correctly render it (e.g., for a `SegmentedProgressBar` component, the folder is called `segmented_progress_bar`, the config file is called `segmented_progress_bar.config.yml`, and the .njk file is called `segmented_progress_bar.njk`).

2. Within that component folder, make sure you have the following files:
  - `component_name.config.yml` (config file for the component, used to specify the label, status, props, etc.)
  - `component_name.njk` (used to simply export the React component to render correctly)
  - `ComponentName.jsx` (the React component code)
  - `ComponentName.unit.spec.jsx` (unit tests for the React component)

3. Copy the React component code over from vets-website into the .jsx file.

4. Export the React component from the .njk file.

5. Specify the props in the config file.

6. Add some unit tests (those may also be able to be copied from vets-website if they exist). Be sure to follow the [accessibility guidelines](./Accessibility%20and%20508/README.md) for automated a11y tests as well. 

7. Run design-system locally and make sure that the component is rendered correctly

8. Run vets-website locally. Find a place where the component is used within vets-website, and instead test importing the component from design-system. Make sure it renders and functions correctly when testing vets-website locally.

9. Update any relevant paths in generator-vets-website.

10. Submit a PR!
