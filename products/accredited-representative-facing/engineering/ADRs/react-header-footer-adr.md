# Benefits Accredited Representative Facing (ARF) Tools ADR for Including Header and Footer in React

## **Status**

- **In Review**

## **Context**

The Accredited Representative Portal (ARP) aims to provide a unique and distinct user experience for Veteran Service Officers (VSOs), ensuring they are confident they're accessing and impacting the correct Veteran Power of Attorney (POA) data. While the standard VA.gov header and footer provide a consistent look across the VA.gov platform, they include content and functionality irrelevant to ARP's target Representative users. Our objective is to tailor the ARP experience more closely to the needs and expectations of its specific user base.

See [this epic](https://app.zenhub.com/workspaces/accredited-representative-facing-team-65453a97a9cc36069a2ad1d6/issues/gh/department-of-veterans-affairs/va.gov-team/78055) for more details.

## **Decision**

ARF decided to migrate ARP's header and footer implementation from the content-build system to React components within the vets-website framework. ARF engineers made this decision to allow for greater flexibility and specificity in the presentation and functionality of ARP, aligning the user interface more closely with the unique needs of its users while making ARP easier to update from an engineering workflow perspective. To this end, we have:

- ARF will create custom React components (**`header.js`** and **`footer.js`**) to replace the existing content provided by the **`page-react.html`** layout and its child templates (**`src/site/includes/header.html`** and **`src/site/includes/footer.html`**).
- We ensured that all necessary functionality from the original header (e.g., navigation links relevant to the ARP users) is retained in the new React component without including unrelated templating or styling.
- Outside of `<!DOCTYPE html>`, and `meta` content, ARF engineers determined that no functionality from the original footer was required for ARP; hence, all footer templating and styling is handled entirely within the new React component. See [PR](https://github.com/department-of-veterans-affairs/content-build/pull/1989/files).
- We considered the layout requirements previously satisfied by **`page-react.html`** and incorporated necessary aspects into our vets-website **`SignedInViewLayout.js`** component, ensuring a seamless user experience between the header, content, and footer.

## **Consequences**

The shift to React-based header and footer components for the ARP brings several significant benefits and some challenges:

- **Benefits**:
  - **Customization**: This allows for a high degree of customization, enabling a user interface that accurately reflects ARP's unique needs and identity.
  - **Agility**: Facilitates quicker updates and iterations on the user interface, as changes can be made directly within the React components without navigating the broader content-build system.
  - **Isolation**: Reduces dependencies on the content-build's global templates and styles, minimizing the risk of unintended impacts from changes elsewhere on the VA.gov platform.
- **Challenges**:
  - **Consistency**: Requires careful consideration to maintain consistency with VA.gov's accessibility and design standards, ensuring that ARP users feel part of the broader VA ecosystem.
  - **Maintenance**: This introduces a separate maintenance track for these components within the vets website, requiring dedicated resources to ensure their continued functionality and alignment with VA web standards.

This decision represents a strategic move to enhance the ARP representative user experience, making it more tailored and relevant to its audience. It reflects a balance between customization for specific user groups and consistency within the broader VA.gov ecosystem.
