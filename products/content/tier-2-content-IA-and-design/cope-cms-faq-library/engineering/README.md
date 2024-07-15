# Exposing Q&A on New Content Types
Currently implemented on Resources and Support, you may view the configuration of the "Main content" (`field_content_block`) for an example.

For existing content types, edit the field_content_block field (Main content) if it exists on the content type, select to add the Q&A paragraph type, then save. (See steps below.)

Now when editors want to add an existing reusable Q&A they will see it as one of the options for adding main content. 

## CMS Instructions: Reusable Q&A Implementation Runbook
### Utilizing an existing Entity Reference Revisions field, e.g. as "Main content" block
1. In the Drupal UI > Structure > Content types, click "Manage fields" for your content type.
2. Edit the chosen Entity Reference Revisions field.
3. For Paragraph types, select "Reusable Q&A Group" and save.

### To create a new field

1. In the Drupal UI > Structure > Content types, click "Manage fields" for your content type.
2. Add a new field, and select field type Paragraph under Reference Revisions and continue.
3. Select "Paragraph" for "Type of item to reference" and select "Unlimited" for the allowed number of values.
4. For Paragraph types, select the following to enable:
- Reusable Q&A Group
- Rich Text
- Table
- Accordion Group
- React Widget
5. Go to the form display settings and select "Paragraphs Browser - Experimental" for the field widget.
   For the other field settings (gear symbol) chose the following and save:
- Title: Content block (if keeping with existing pattern)
- Plural title: Content blocks (if keeping with existing pattern)
- Edit mode: Closed
- Form display mode: default
- Default paragraph type: none
- Paragraphs browser: Main content
- Features: Collapse / Edit all

## Front End Instructions

### Pre-Existing Setup
1. `src/site/paragraphs/q_a_group_content.drupal.liquid`
    This template consumes the Drupal entity data for the QA group and displays the entire QA with answers.

2. `src/site/stages/build/drupal/graphql/paragraph-fragments/qaGroup.paragraph.graphql.js`: 
    This GraphQL query has been modified to consume the new data structure for a Q&A answer coming from Drupal. We received the query snippet (contained within `fieldAnswer`, ending before `targetId`, lines 16-24) from a Drupal developer to facilitate connecting the data from Drupal.

### Implementing Reusable QA Group Template to Content Blocks loops
In the content block loop we will include the first file referenced under **Pre-Existing Setup** to correctly reference the QA Group template if QAs are present among the content blocks. 

1. In the looping of content blocks we will add a conditonal to determine if the `entityBundle` on that content block is `q_a_group`.

```
{% if block.entity.entityBundle == "q_a_group"  %}
```

2. If so, add in the template via `include`, passing in the `block.entity`.

```
{% include "src/site/paragraphs/q_a_group_content.drupal.liquid" with entity = block.entity %}
```

### Implementing a New Content Type inside `src/site/paragraphs/q_a_group_content.drupal.liquid`
The two files referenced under **Pre-Existing Setup** are used to fetch the Drupal data for Q&As of the type `q_a_group` and render the Q&A answers. The steps below demonstrate how to optionally render a `fieldSectionHeader` if it exists, then loop through the Q&As, display the question, then create the template name for displaying the Q&A answer.

1. Loop through the content blocks coming from Drupal. 
```
{% for contentBlock in fieldContentBlock %}
```

2. Determine if the `entityBundle` on that content block is `q_a_group`.

```
{% if contentBlock.entity.entityBundle === "q_a_group"  %}
```

3. If so, assign a variable to represent the Q&A entities:

```
{% assign fieldQAs = contentBlock.entity.queryFieldQAs.entities %}
```

4. Conditionally render the `fieldSectionHeader` as an `<h2>` if it exists.

```              
<!-- Optional section header -->
    {% if contentBlock.entity.fieldSectionHeader %}
        <h2>{{ contentBlock.entity.fieldSectionHeader }}</h2>
    {% endif %}
```

5. 
    a. If the `fieldSectionHeader` does exist, render the Q&A question as an `<h3>`
    b. If the `fieldSectionHeader` does **not** exist, render the Q&A question as an `<h2>`.
```
{% assign fieldSectionHeaderTag = 'h2' %}
    {% if contentBlock.entity.fieldSectionHeader %}
    {% assign fieldSectionHeaderTag = 'h3' %}
{% endif %}
```

5. Loop through the Q&As
    a. Use the `fieldAnswer.entity.entityBundle` to create the name for the template that will be used to render Q&A answers. i.e. `src/site/paragraphs/q_a_group.drupal.liquid`.
    b. Add in the template via `include`, passing in the `fieldAnswer.entity`.

```
{% for fieldQA in fieldQAs %}
    <{{ fieldSectionHeaderTag }}>{{ fieldQA.entityLabel }}</{{ fieldSectionHeaderTag }}>
    {% if fieldQA.fieldAnswer %}
        {% assign fieldAnswer = fieldQA.fieldAnswer %}
        {% assign bundleComponent = "src/site/paragraphs/" | append: fieldAnswer.entity.entityBundle %}
        {% assign bundleComponentWithExtension = bundleComponent | append: ".drupal.liquid" %}
         {% include {{ bundleComponentWithExtension }} with entity = fieldAnswer.entity %}
    {% endif %}
    </ul>
{% endfor %}
```
