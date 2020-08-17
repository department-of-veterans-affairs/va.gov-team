# VAOS front end folder structure

To address the issue of the large containers and components folder, it is suggested that the project be organized by feature instead. The following structure is proposed:

- components
    - Address
    - Alerts
    - Breadcrumbs
    - Buttons
    - FormButtons
    - RadioButton
    - Tabs
    - TextArea
- appointment-list
    - components
    - redux
- new-appointment
    - components
    - redux
- express-care
    - components
    - redux
- utils
- services
- api
- tests

## Components folder
The top level components folder is intended to be used for reusable components. These should be components that are used across multiple features or are for generic VA data (like facilities).

## Feature folders
The 'appointments-list', 'new-appointments', and 'express-care' folders are intended to represent the major features of the VAOS application. Feature folders should contain everything required for a feature to work on its own, aside from app-wide components.

### Components folder
The components folder under each feature is intended to contain components specific to a feature. These components are not intended to be shared. They can be grouped into folders for complex pages that have multiple components.

### Redux folder
The redux folder under each feature is intended to contain redux specific artifacts such as actions and reducers.
