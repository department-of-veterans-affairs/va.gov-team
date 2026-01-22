# Evidence Request Content Migration

## Overview

This migration is about moving helpful content from the website to a shared backend system so that both the VA.gov website and the VA mobile app can display the same information to Veterans.

### What's changing:

- Currently: When Veterans view evidence requests (documents needed for their benefits claims), the website shows detailed descriptions, instructions, and helpful links. The mobile app doesn't have access to this same helpful content (see [Evidence Dictionary Current State](./evidence-dictionary-current-state.md)).
- After migration: Both the website and mobile app will pull from the same source, ensuring Veterans get consistent, detailed guidance no matter how they access VA services.

### Scope

- 40+ types of evidence requests will have their content moved (things like authorization forms, medical records requests, disability questionnaires, etc.)
- Content includes descriptions of what's needed, step-by-step instructions, links to relevant VA forms, and helpful context
- The information Veterans see will remain the same—it's just being reorganized behind the scenes

### Why it matters:

This creates a single source of truth for evidence request content, making it easier to maintain and ensuring Veterans using the mobile app get the same quality guidance as those using the website.

### Purpose

This document outlines the plan to migrate tracked item (evidence request) content overrides from the frontend (`vets-website`) to the backend (`vets-api`) to achieve feature parity between VA.gov and, eventually, the mobile application.

---

## Table of Contents

- [Key Challenge](#key-challenge)
- [Proposed Solution](#proposed-solution)
  - [Content Format Strategy: Structured JSON](#content-format-strategy-structured-json)
  - [Example Content Schema](#example-content-schema)
    - [Full longDescription and nextSteps Example](#full-longdescription-and-nextsteps-example)
  - [Backend Implementation (Ruby)](#backend-implementation-ruby)
  - [Frontend Renderer (React)](#frontend-renderer-react)
- [Content Block Type Reference](#content-block-type-reference)
  - [Supported Block Types](#supported-block-types)
  - [Example: Paragraph with Inline Bold](#example-paragraph-with-inline-bold)
  - [Example: Nested Inline Elements (Bold Link)](#example-nested-inline-elements-bold-link)
- [Risks & Mitigations](#risks--mitigations)
  - [Fallback Strategy](#fallback-strategy)
- [Success Metrics](#success-metrics)
- [Implementation Phases](#implementation-phases)
  - [Phase 1: Data Modeling & API Design](#phase-1-data-modeling--api-design)
  - [Phase 2: Backend Implementation](#phase-2-backend-implementation)
  - [Phase 3: Frontend Migration](#phase-3-frontend-migration)
  - [Phase 4: Mobile Parity](#phase-4-mobile-parity)
  - [Phase 5: Validation & Rollout](#phase-5-validation--rollout)

---

## Key Challenge

The primary challenge is that the frontend `evidenceDictionary` contains **JSX/React components** with:

- HTML elements (`<p>`, `<ul>`, `<li>`)
- VA Design System components (`<va-link>`, `<va-telephone>`, `<va-icon>`)
- Dynamic content and formatting

This rich content cannot be stored directly in the Ruby backend and must be transformed into a format consumable by both web and mobile platforms.

---

## Proposed Solution

### Content Format Strategy: Structured JSON

We recommend storing content as **structured JSON** that both platforms can render appropriately. This approach:

- ✅ Preserves content structure and semantics
- ✅ Allows platform-specific rendering (React, React Native)
- ✅ Supports links, lists, and formatted text
- ✅ Is easily testable and maintainable
- ✅ Avoids HTML parsing security concerns

### Example Content Schema

The following shows the complete tracked item response. Fields marked with ✨ are **new** additions; others already exist in the current API.

```json
{
  "displayName": "21-4142/21-4142a",
  "friendlyName": "Authorization to disclose information",
  "shortDescription": "We need your permission to request your personal information from a non-VA source.",
  "activityDescription": "We need your permission to request your personal information from a non-VA source, like a private doctor or hospital.",
  "supportAliases": ["21-4142/21-4142a"],
  "canUploadFile": true,

  // These are NEW from frontend evidenceDictionary.jsx ⬇️
  "longDescription": { ... }, // see excerpt below
  "nextSteps": { ... }, // see excerpt below
  "noActionNeeded": false,
  "isDBQ": false,
  "isProperNoun": false,
  "isSensitive": false,
  "noProvidePrefix": false
}
```

**Existing fields** (already in API):

- `displayName`, `friendlyName`, `shortDescription`, `activityDescription`, `supportAliases`, `canUploadFile`

**New fields** (being added):

- `longDescription` - Structured JSON content (see full example below)
- `nextSteps` - Structured JSON content (see full example below)
- `noActionNeeded`, `isDBQ`, `isProperNoun`, `isSensitive`, `noProvidePrefix` - Boolean properties

#### Full `longDescription` and `nextSteps` Example (excerpt from above)

```json
{
  "longDescription": {
    "blocks": [
      {
        "type": "paragraph",
        "content": "For your benefits claim, we need your permission to request your personal information from a non-VA source, like a private doctor or hospital."
      },
      {
        "type": "paragraph",
        "content": "Personal information may include:"
      },
      {
        "type": "list",
        "style": "bullet",
        "items": [
          "Medical treatments",
          "Hospitalizations",
          "Psychotherapy",
          "Outpatient care"
        ]
      }
    ]
  },
  "nextSteps": {
    "blocks": [
      {
        "type": "paragraph",
        "content": "Use VA Form 21-4142 to give us permission to request your personal information."
      },
      {
        "type": "paragraph",
        "content": [
          "You can complete and sign this form online, or use a PDF version and upload or mail it.",
          { "type": "lineBreak" },
          {
            "type": "link",
            "text": "VA Form 21-4142",
            "href": "/find-forms/about-form-21-4142/",
            "style": "active"
          }
        ]
      }
    ]
  }
}
```

### Backend Implementation (Ruby)

The structured JSON content would be stored in a new Ruby module:

```ruby
# lib/lighthouse/benefits_claims/tracked_item_content.rb
module BenefitsClaims
  module TrackedItemContent
    CONTENT = {
      '21-4142/21-4142a' => {
        friendly_name: 'Authorization to disclose information',
        long_description: {
          blocks: [
            {
              type: 'paragraph',
              content: 'For your benefits claim, we need your permission to request your '\
                       'personal information from a non-VA source, like a private doctor or hospital.'
            },
            {
              type: 'paragraph',
              content: 'Personal information may include:'
            },
            {
              type: 'list',
              style: 'bullet',
              items: [
                'Medical treatments',
                'Hospitalizations',
                'Psychotherapy',
                'Outpatient care'
              ]
            }
          ]
        },
        next_steps: {
          blocks: [
            {
              type: 'paragraph',
              content: 'Use VA Form 21-4142 to give us permission to request your personal information.'
            },
            {
              type: 'paragraph',
              content: [
                'You can complete and sign this form online, or use a PDF version and upload or mail it.',
                { type: 'line_break' },
                {
                  type: 'link',
                  text: 'VA Form 21-4142',
                  href: '/find-forms/about-form-21-4142/',
                  style: 'active',
                  test_id: 'VA Form 21-4142'
                }
              ]
            }
          ]
        },
        no_action_needed: false,
        is_dbq: false,
        is_proper_noun: false,
        is_sensitive: false,
        no_provide_prefix: false
      },
      # Example with inline bold text
      'Unemployability - 21-8940 needed and 4192(s) requested' => {
        friendly_name: 'Work status information',
        long_description: {
          blocks: [
            {
              type: 'paragraph',
              content: 'For your benefits claim, we need more information about how your '\
                       'service-connected disabilities prevent you from working.'
            },
            {
              type: 'paragraph',
              content: 'We also need information from your most recent employer to tell us '\
                       'what your role was and the reasons why your employment ended.'
            }
          ]
        },
        next_steps: {
          blocks: [
            {
              type: 'paragraph',
              content: [
                'Use ',
                { type: 'bold', content: 'VA Form 21-8940' },
                ' to let us know what service-connected disabilities prevent you from working. '\
                'You can complete and sign this form online, or use a PDF version and upload or mail it.',
                { type: 'line_break' },
                {
                  type: 'link',
                  text: 'VA Form 21-8940',
                  href: '/find-forms/about-form-21-8940/',
                  style: 'active',
                  test_id: 'VA Form 21-8940'
                }
              ]
            },
            {
              type: 'paragraph',
              content: [
                'Give ',
                { type: 'bold', content: 'VA Form 21-4192' },
                ' to your most recent employer and ask them to mail us your employment information.',
                { type: 'line_break' },
                {
                  type: 'link',
                  text: 'VA Form 21-4192',
                  href: '/find-forms/about-form-21-4192/',
                  style: 'active',
                  test_id: 'VA Form 21-4192'
                }
              ]
            }
          ]
        },
        no_action_needed: false,
        is_dbq: false,
        is_proper_noun: false,
        is_sensitive: false,
        no_provide_prefix: false
      }
      # ... more tracked item content
    }.freeze

    def self.for(display_name)
      CONTENT[display_name]
    end
  end
end
```

### Frontend Renderer (React)

The frontend would use a set of renderers to convert the structured JSON back to React components:

```jsx
// components/TrackedItemContent/InlineRenderer.jsx
import React from "react";
import {
  VaLink,
  VaTelephone,
} from "@department-of-veterans-affairs/component-library/dist/react-bindings";

/**
 * Renders inline content (strings or inline elements like bold, italic, links)
 */
export const InlineRenderer = ({ content }) => {
  // Handle plain strings
  if (typeof content === "string") {
    return content;
  }

  // Handle arrays of mixed content
  if (Array.isArray(content)) {
    return content.map((item, idx) => (
      <InlineRenderer key={idx} content={item} />
    ));
  }

  // Handle inline element objects
  switch (content.type) {
    case "bold":
      return (
        <strong>
          <InlineRenderer content={content.content} />
        </strong>
      );
    case "italic":
      return (
        <em>
          <InlineRenderer content={content.content} />
        </em>
      );
    case "link":
      return (
        <VaLink
          active={content.style === "active"}
          text={content.text}
          href={content.href}
          data-testid={content.testId}
        />
      );
    case "telephone":
      return <VaTelephone contact={content.contact} tty={content.tty} />;
    case "lineBreak":
      return <br />;
    default:
      return null;
  }
};
```

```jsx
// components/TrackedItemContent/BlockRenderer.jsx
import React from "react";
import { InlineRenderer } from "./InlineRenderer";

/**
 * Renders block-level content (paragraphs, lists)
 */
export const BlockRenderer = ({ block }) => {
  switch (block.type) {
    case "paragraph":
      return (
        <p>
          <InlineRenderer content={block.content} />
        </p>
      );
    case "list": {
      const ListTag = block.style === "numbered" ? "ol" : "ul";
      return (
        <ListTag className={block.style === "bullet" ? "bullet-disc" : ""}>
          {block.items.map((item, idx) => (
            <li key={idx}>
              <InlineRenderer content={item} />
            </li>
          ))}
        </ListTag>
      );
    }
    case "lineBreak":
      return <br />;
    default:
      return null;
  }
};
```

```jsx
// components/TrackedItemContent/index.jsx
import React from "react";
import PropTypes from "prop-types";
import { BlockRenderer } from "./BlockRenderer";

/**
 * Renders structured content from the API
 * Supports paragraphs, lists, and inline formatting (bold, italic, links)
 */
export const TrackedItemContent = ({ content }) => {
  if (!content?.blocks) return null;

  return (
    <>
      {content.blocks.map((block, idx) => (
        <BlockRenderer key={idx} block={block} />
      ))}
    </>
  );
};

TrackedItemContent.propTypes = {
  content: PropTypes.shape({
    blocks: PropTypes.arrayOf(PropTypes.object),
  }),
};
```

---

## Content Block Type Reference

### Supported Block Types

#### Block-Level Elements

| Block Type | Properties | Description |
|------------|------------|-------------|
| `paragraph` | `type: "paragraph"`, `content: string \| array` | A paragraph of text. Content can be a plain string or an array of inline elements. |
| `list` | `type: "list"`, `style: "bullet" \| "numbered"`, `items: array` | A bulleted or numbered list. Items can be strings or arrays of inline elements. |
| `lineBreak` | `type: "lineBreak"` | A line break (`<br>`) within content. |

#### Inline Elements (used within paragraphs and list items)

| Element Type | Properties | Description |
|--------------|------------|-------------|
| `bold` | `type: "bold"`, `content: string \| array` | Bold text. Can contain nested inline elements. |
| `italic` | `type: "italic"`, `content: string \| array` | Italic text. Can contain nested inline elements. |
| `link` | `type: "link"`, `text: string`, `href: string`, `style?: "active" \| "external" \| "default"`, `testId?: string` | A hyperlink rendered as `<va-link>`. |
| `telephone` | `type: "telephone"`, `contact: string`, `tty?: boolean` | A phone number rendered as `<va-telephone>`. |
| `lineBreak` | `type: "lineBreak"` | A line break within inline content. |

### Example: Paragraph with Inline Bold

**Original JSX:**

```jsx
<p>
  Use <strong>VA Form 21-8940</strong> to let us know what service-connected
  disabilities prevent you from working.
</p>
```

**Structured JSON:**

```json
{
  "type": "paragraph",
  "content": [
    "Use ",
    { "type": "bold", "content": "VA Form 21-8940" },
    " to let us know what service-connected disabilities prevent you from working."
  ]
}
```

### Example: Nested Inline Elements (Bold Link)

**Original JSX:**

```jsx
<p>
  Learn more at{" "}
  <strong>
    <a href="/forms">VA Forms</a>
  </strong>
  .
</p>
```

**Structured JSON:**

```json
{
  "type": "paragraph",
  "content": [
    "Learn more at ",
    {
      "type": "bold",
      "content": [{ "type": "link", "text": "VA Forms", "href": "/forms" }]
    },
    "."
  ]
}
```

---

## Risks & Mitigations

| Risk                                            | Impact | Mitigation                                                                                          |
| ----------------------------------------------- | ------ | --------------------------------------------------------------------------------------------------- |
| Content rendering differences between platforms | Medium | Define strict schema, visual regression testing                                                     |
| Performance impact from larger API response     | Low    | negligible amount of data being added to the response                                               |
| Rollback complexity                             | Low    | Frontend always falls back to dictionary when API content is missing; backend flag controls rollout |
| Content parity validation                       | High   | Automated screenshot comparison, QA checklist                                                       |
| Mobile team availability                        | Medium | Early coordination, phased approach                                                                 |

### Fallback Strategy

The frontend `evidenceDictionary` will remain as a **permanent fallback** throughout the migration and will not be removed until:

1. All tracked item content has been migrated to the backend
2. The backend feature flag has been enabled for 100% of users
3. Migration has been validated with no regressions for a sufficient period
4. Both web and mobile teams confirm feature parity

**Why no separate frontend feature flag is needed:**

- The frontend code will use presence-based checks (e.g., `item.longDescription?.blocks` exists?)
- If API content is present, use it; otherwise, fall back to the dictionary
- The backend feature flag (`cst_tracked_item_content_api`) serves as the single control mechanism
- Turning off the backend flag automatically causes the frontend to use the dictionary
- This simplifies the codebase and reduces testing complexity

**Fallback chain for each field type:**

- **Structured content** (`longDescription`, `nextSteps`): API content → dictionary JSX → generic fallback UI
- **Boolean properties** (`isSensitive`, `noActionNeeded`, etc.): API value → dictionary value → `false`

---

## Success Metrics

1. **Feature parity:** 100% of tracked item content available via API
2. **Zero regressions:** No increase in error rates post-migration
3. **Mobile adoption:** Content is ready for mobile adoption
4. **Performance:** API response time remains less than 2s (p95)
5. **Maintainability:** Single source of truth for tracked item content
6. **Fallback usage:** 0% fallback to frontend dictionary (indicates full migration success)

---

## Implementation Phases

### Phase 1: Data Modeling & API Design

**Goal:** Define the data structure and API contract

**Tasks:**

1. [ ] Define JSON schema for tracked item content
2. [ ] Create content block types (paragraph, list, link, telephone, icon, lineBreak)
3. [ ] Design API response structure for tracked items
4. [ ] Document API contract for web and mobile teams
5. [ ] Create Ruby models

**Deliverables:**

- JSON Schema specification
- API documentation
- Ruby models

---

### Phase 2: Backend Implementation

**Goal:** Create backend infrastructure to serve tracked item content

**Tasks:**

#### 2.1 Create Content Storage

1. [ ] Create new module: `lib/lighthouse/benefits_claims/tracked_item_content.rb`
2. [ ] Define Ruby hash structure for all tracked item content
3. [ ] Migrate existing constants from `constants.rb` to new module
4. [ ] Convert frontend JSX content to structured JSON format
5. [ ] Add comprehensive unit tests

#### 2.2 Update Service Layer

1. [ ] Update `apply_friendlier_language` method in `service.rb` to use new content structure
2. [ ] Add new fields to tracked item response:
   - `longDescription` (structured content)
   - `nextSteps` (structured content)
   - `noActionNeeded` (boolean)
   - `isDBQ` (boolean)
   - `isProperNoun` (boolean)
   - `isSensitive` (boolean)
   - `noProvidePrefix` (boolean)
3. [ ] Ensure backward compatibility with existing fields

#### 2.3 Feature Flag

1. [ ] Create feature flag: `cst_tracked_item_content_api`
2. [ ] Initially disabled for gradual rollout
3. [ ] This is the **only** feature flag needed—no separate frontend flag required (see [Fallback Strategy](#fallback-strategy))

**File changes:**

- `lib/lighthouse/benefits_claims/tracked_item_content.rb` (new)
- `lib/lighthouse/benefits_claims/service.rb` (update)
- `lib/lighthouse/benefits_claims/constants.rb` (potentially deprecate some mappings)
- `spec/lib/lighthouse/benefits_claims/tracked_item_content_spec.rb` (new)
- `spec/lib/lighthouse/benefits_claims/service_spec.rb` (update)

---

### Phase 3: Frontend Migration

**Goal:** Update vets-website to consume API content instead of local dictionary

**Tasks:**

#### 3.1 Create Content Renderer

1. [ ] Create new component: `components/TrackedItemContent/index.jsx`
2. [ ] Implement block renderers for each content type:
   - Paragraph renderer
   - List renderer (bullet, numbered)
   - Link renderer (internal, external, active)
   - Telephone renderer
   - Icon renderer
3. [ ] Add unit tests for all renderers

#### 3.2 Update Consuming Components

1. [ ] Update `DefaultPage.jsx` to use API content with fallback to dictionary
2. [ ] Update `FilesNeeded.jsx` to use new boolean properties
3. [ ] Update `FilesOptional.jsx` to use new boolean properties
4. [ ] Update `RecentActivity.jsx` to use new boolean properties
5. [ ] Update `helpers.js` to use new boolean properties

#### 3.3 Fallback Integration (No Frontend Feature Flag Needed)

1. [ ] Implement presence-based checks for API content (e.g., `item.longDescription?.blocks`)
2. [ ] Use API content when present; fall back to `evidenceDictionary` when absent
3. [ ] For boolean properties, use nullish coalescing: `item.isSensitive ?? evidenceDictionary[item.displayName]?.isSensitive ?? false`
4. [ ] Add logging/monitoring for migration tracking (track when fallback is used vs. API content)

**Note:** A separate frontend feature flag is not required. The backend flag controls when new content is returned; the frontend simply uses whatever is available, with the dictionary as a permanent fallback.

#### 3.4 Cleanup (Post-Migration Validation)

**Important:** The `evidenceDictionary.jsx` should NOT be removed until the migration is fully validated.

**Prerequisites for removal:**

- [ ] Backend feature flag enabled for 100% of users
- [ ] All tracked item types confirmed to have API content
- [ ] No increase in error rates or user complaints
- [ ] Mobile team confirms feature parity (if applicable)
- [ ] Monitoring shows 0% fallback usage for a sustained period (e.g., 2-4 weeks)

**Cleanup steps (only after prerequisites are met):**

1. [ ] Mark `evidenceDictionary.jsx` as deprecated with removal date
2. [ ] Remove fallback logic from consuming components
3. [ ] Remove `evidenceDictionary.jsx` file
4. [ ] Remove backend feature flag (make new behavior permanent)

**File changes:**

- `components/TrackedItemContent/index.jsx` (new)
- `components/TrackedItemContent/BlockRenderer.jsx` (new)
- `components/TrackedItemContent/InlineRenderer.jsx` (new)
- `components/TrackedItemContent/index.unit.spec.jsx` (new)
- `components/claim-document-request-pages/DefaultPage.jsx` (update - add fallback logic)
- `components/claim-files-tab/FilesNeeded.jsx` (update - add fallback logic for boolean properties)
- `components/claim-files-tab/FilesOptional.jsx` (update - add fallback logic for boolean properties)
- `components/claim-status-tab/RecentActivity.jsx` (update - add fallback logic for boolean properties)
- `utils/helpers.js` (update - add fallback logic for boolean properties)
- `utils/evidenceDictionary.jsx` (keep as fallback until migration fully validated)

---

### Phase 4: Mobile Parity

**Goal:** Enable mobile app to use the same tracked item content

**Tasks:**

1. [ ] Mobile team implements content renderers
2. [ ] Mobile team consumes new API fields
3. [ ] Coordinate rollout with mobile team
4. [ ] Verify feature parity between platforms

**Note:** This phase requires coordination with the mobile team.

---

### Phase 5: Validation & Rollout

**Goal:** Gradually enable and validate the new system

**Tasks:**

#### 5.1 Staging Validation

1. [ ] Enable feature flag in staging
2. [ ] Manual QA testing of all tracked item types
3. [ ] Automated E2E test updates
4. [ ] Accessibility testing (WCAG compliance)

#### 5.2 Production Rollout

1. [ ] Enable for 10% of users
2. [ ] Monitor for errors and regressions
3. [ ] Gradually increase to 100%
4. [ ] Keep feature flag enabled and dictionary in place during validation period (see [Cleanup Prerequisites](#34-cleanup-post-migration-validation))

#### 5.3 Documentation

1. [ ] Update developer documentation
2. [ ] Create runbook for adding new tracked item types
3. [ ] Archive old implementation details
