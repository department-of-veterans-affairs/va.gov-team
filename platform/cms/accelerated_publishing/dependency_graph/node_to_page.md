> Create documentation on how to determine which content types do and don't map to pages on the front end is added to this issue

One of the first steps is trying to figure out which nodes represent a page in front end.

I found the following places which seem to imply.

## When the `EntityMetaDisplay` displays the URL

![image](https://user-images.githubusercontent.com/121603/115289251-5e6a9200-a120-11eb-95cc-b2fe3a652a3b.png)

This method pulls values from `exclusion_types_admin.settings.types_to_exclude` to act as what content types should not display the URL.  The logic is in `Drupal\va_gov_backend\Service\ExclusionTypes::getExcludedTypes()` which is a Drupal service.


`Drupal\va_gov_workflow_assignments\Plugin\Block\EntityMetaDisplay::vaGovUrlShouldBeDisplayed()`
```
  private function vaGovUrlShouldBeDisplayed(NodeInterface $node) : bool {
    if ($this->exclusionTypes->typeIsExcluded($node->bundle())) {
      return FALSE;
    }

    $latest_published_revision_id = $this->editorialWorkflowContentRepository->getLatestPublishedRevisionId($node);
    if (!$latest_published_revision_id) {
      return FALSE;
    }

    $latest_archived_revision_id = $this->editorialWorkflowContentRepository->getLatestArchivedRevisionId($node);
    if ($latest_archived_revision_id > $latest_published_revision_id) {
      return FALSE;
    }

    return TRUE;
  }
```

## The preview button shows

This logic is held in `va_gov_backend_preprocess_page`.  There is a hard code list of `$exclusion_types`, is not on an edit page and is not on the URL `/training-guide`

## The GraphQL query the front end generates

There is a initial query which gets counts of the different content types at `src/site/stages/build/drupal/graphql/CountEntityTypes.graphql.js`.  The entire query is hard coded.

The query itself is broken into several files at `src/site/stages/build/drupal/graphql/` and would need to be audited.
