# Tab Component Discovery

## [Related Issue](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/4638)

### Description:

Conduct discovery to determine if there are any technical, design, or functional constraints that would prevent the Claims Status tool from adopting the new Tabs component.

### Areas to Consider:

- The new Tabs component is not designed as navigation with distinct URLs (single-page tab switching rather than separate routes).
- Analytics events are built in. Evaluate if existing Claims Status analytics requirements align or if adjustments are needed.
- Compatibility with existing Claims Status tool layout and interaction patterns.
- Accessibility compliance in context of the tool.

### Outcome:

An assessment with recommendations on whether the new Tabs component can be integrated into the Claims Status tool and any necessary modifications to the new va-tabs component.

### Acceptance Criteria:

- Review technical feasibility of replacing current tab/segmented control solution with the new Tabs component.
- Identify potential issues or blockers.
- Document analytics considerations and impacts.

## Relevant Links

- [va-tabs Component Source](https://github.com/department-of-veterans-affairs/component-library/blob/main/packages/web-components/src/components/va-tabs/va-tabs.tsx)
- [va-tabs Documentation](https://design.va.gov/components/tabs)
- [va-sidenav Component Source](https://github.com/department-of-veterans-affairs/component-library/blob/main/packages/web-components/src/components/va-sidenav/va-sidenav.tsx)
- [va-sidenav Documentation](https://design.va.gov/components/sidenav)
- [Chromatic Storybook](https://3816-tabs-subcomponents--65a6e2ed2314f7b8f98609d8.chromatic.com/?path=/docs/components-va-tabs--docs)

## Discovery Findings

### 1. Navigation Design: Distinct URLs vs Single-URL Tab Switching

#### Current CST Implementation

- Each tab has a distinct URL (`/status`, `/files`, `/overview`)
- Uses React Router v5 with nested routes:
  ```javascript
  <Route path="your-claims/:id" element={<ClaimPage />}>
    <Route index element={<Navigate to="status" />} />
    <Route path="files" element={<FilesPage />} />
    <Route path="overview" element={<OverviewPage />} />
    <Route path="status" element={<ClaimStatusPage />} />
  </Route>
  ```
- Browser back/forward navigation works between tabs
- Users can bookmark specific tabs (e.g., `/your-claims/12345/files`)
- Direct links can be shared with VA staff or other veterans
- SEO and search engines can index individual tab pages

#### va-tabs Component

- Single URL for all tabs - no URL changes when switching
- Tab state managed via JavaScript `selected` attribute
- No browser history entries created for tab changes

#### Impact of Adopting va-tabs

- Lost functionality: No bookmarking of tabs, direct linking, or back/forward navigation
- User confusion: Browser back button would go to `/your-claims` instead of returning to previous tab
- Direct linking: User cannot share direct link to specific tabs
- SEO impact: Search engines cannot index individual tab content separately
- Accessibility: va-tabs uses proper ARIA attributes (`role="tab"`, `aria-selected`, `aria-controls`) which screen readers can interpret, but URL changes provide additional context that would be lost

### 2. Analytics Events

#### Current CST Implementation

- No analytics events currently tracked on tab clicks
- URL changes automatically tracked as page views in Google Analytics

#### va-tabs Component

- Component will emit tab item selected event

#### Impact of Adopting va-tabs

- URL-based page view analytics would need alternative approach
- User journey tracking would require different methodology

### 3. Compatibility with Claims Status Tool Layout

#### Current CST Implementation

- Tabs render as navigation with separate route-based content pages
- Content loaded on-demand when routes activate
- Each tab component manages its own data fetching

#### va-tabs Component

- Requires content to be wrapped in `va-tab-panel` elements
- All panels rendered but hidden/shown via JavaScript
- Single-page application pattern for tab content

#### Impact of Adopting va-tabs

- Would require restructuring of ClaimDetailLayout and AppealInfo containers
- Data fetching strategy would need to be reconsidered

### 4. Accessibility Compliance

#### Current CST Implementation

- ARIA labels and roles
- Keyboard shortcuts (Alt or Option + 1/2/3)
- Focus management
- URL changes provide page context

#### va-tabs Component

- Comprehensive ARIA implementation (`role="tab"`, `aria-selected`, `aria-controls`)
- Arrow key navigation following ARIA authoring practices
- Automatic focus management and scroll-into-view
- Consistent with VA Design System patterns

#### Impact of Adopting va-tabs

- The components have different interaction patterns, but both implement solid accessibility

## Technical Feasibility Assessment

### Current Implementation Architecture
- TabNav and TabItem components located at `src/applications/claims-status/components/`
- React Router v5 integration using NavLink for tab navigation
- Routes defined in `src/applications/claims-status/routes.jsx`
- Five distinct route-based components: ClaimStatusPage, FilesPage, OverviewPage, AppealsV2StatusPage, AppealsV2DetailPage

### va-tabs Integration Requirements
- All tab content would need to be wrapped in `va-tab-panel` elements
- Content must be pre-rendered rather than loaded on route change
- Tab state managed through JavaScript rather than URL
- No native React Router integration possible

### Technical Feasibility Conclusion
va-tabs adoption would require removing React Router integration and converting to single-page architecture. All tab content components would need restructuring from route-based to panel-based rendering.

## Identified Issues and Blockers

### Navigation Pattern Incompatibility
- CST uses tabs as navigation between distinct pages with URLs
- va-tabs designed for content panels within a single page
- Loss of URL-based navigation would break existing user workflows

### Data Loading and Performance
- Current implementation loads tab content on demand via route activation
- va-tabs requires all panel content to be available in the DOM
- Would need to load all claim data upfront or implement complex lazy loading

### User Workflow Disruption
- Veterans may currently bookmark specific tabs for quick access to claim files or status
- VA staff may share direct links to specific tab content

## Analytics Implementation Comparison

### Current Analytics Approach
- URL changes create automatic page view events in Google Analytics
- Each tab navigation is tracked as a separate page view
- User paths through tabs are visible in analytics dashboards

### va-tabs Analytics Requirements
- Page view tracking would be lost without URL changes
- User journey tracking would require new analytics architecture

### Analytics Migration
- Loss of URL-based tracking would reduce analytics visibility

## Alternative Component: va-sidenav

### va-sidenav Technical Capabilities
- Maintains URL-based routing (`href` attribute on each item)
- Automatic current-page tracking via mutation observer
- Compatible with React Router navigation

### CST Implementation with va-sidenav
- Replace horizontal tabs with vertical sidebar (desktop) or accordion (mobile)
- Update layout to accommodate left navigation
- Map current routes to va-sidenav-item elements:
  - `/your-claims/:id/status` → `<va-sidenav-item href="status">`
  - `/your-claims/:id/files` → `<va-sidenav-item href="files">`
  - `/your-claims/:id/overview` → `<va-sidenav-item href="overview">`
- No changes to route definitions or content components
- Analytics continue via URL changes

## Design System Guidance Alignment

### va-tabs (design.va.gov/components/tabs)
- Purpose: Organize content sections within single page
- CST use case: Navigational hierarchy between pages (not aligned)
- "Avoid when": Navigational hierarchy changes needed
- CST use case: Changes pages/URLs with each tab (not aligned)

### va-sidenav (design.va.gov/components/sidenav)
- Purpose: Display navigational hierarchy for related pages
- CST use case: Navigates between related claim pages (aligned)
- Recommended: 5+ pages
- CST use case: Has 3 pages per claim (below recommendation)
