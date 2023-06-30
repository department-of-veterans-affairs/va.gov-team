# Exposing Q&A on New Content Types

## Front End Instructions

### Pre-Existing Setup
1. `src/site/paragraphs/q_a_group.drupal.liquid`
    This template consumes the Drupal entity data for a single Q&A on the content type and uses the `src/site/paragraphs/rich_text_char_limit_1000.drupal.liquid` template to display the contents of the Q&A answer.

2. `src/site/stages/build/drupal/graphql/paragraph-fragments/qaGroup.paragraph.graphql.js`: 
    This GraphQL query has been modified to consume the new data structure for a Q&A answer coming from Drupal. We received the query snippet (contained within `fieldAnswer`, ending before `targetId`, lines 16-24) from a Drupal developer to facilitate connecting the data from Drupal.

### Implementing a New Content Type
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