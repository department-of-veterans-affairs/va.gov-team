# URL structure for “list and loop” (multiple responses)

## What this is

Some form flows need the same set of questions repeated for multiple items—for example, collecting information about several dependents, addresses, or service periods. We call this the “list and loop” or “multiple responses” pattern. 

## How we represent “which item” in the URL

We include a folder-like path segment that holds the array index for the current item:

`/<form-root>/<section>/<array-name>/<index>/<question-slug>`

- `<index>` is zero-based: the first item is `/0/`, the second is `/1/`, and so on. This matches how arrays work in code. It keeps routing logic simple and predictable..
Example:
    - `/app-name/dependents/0/name` → first dependent
    - `/app-name/dependents/1/name` → second dependent

This structure lets the form deep-link to any item's questions. It also simplifies 'Back/Next' behavior within the loop. It also aligns with our “ask for multiple responses” pattern guidance, which gathers the same fields for each item. However, this currently goes against VA's [URL standards](https://design.va.gov/ia/url-standards/) in that two empty directories are created: one for the `array-name` and one for the `index`.

**Note for content/UI:** When showing labels to users refer to the arrays as the `itemName` for example, "Edit John Smith's information" instead of "Edit Dependent 1's information". 


## Why zero-based in the URL?
- **Matches data structures:** The system stores form data as arrays. Items are numbered 0, 1, 2….
- **Reduces off-by-one bugs:** Routes, validators, and UI state all point to the same index.
- **Easier deep links and error recovery:** a validation error can link directly to /…/2/… without translation.

## URL structure examples

### Collecting multiple employers
```
/app-name/employers/0/name-and-address
/app-name/employers/0/dates
/app-name/employers/1/name-and-address
/app-name/employers/1/dates
```

### Collecting multiple service periods

```
/app-name/service-history/0/branch-rank
/app-name/service-history/0/start-end-date
/app-name/service-history/1/branch-rank
/app-name/service-history/1/start-end-date
```

## Do’s and don’ts

### Do
- Keep the index in the path (not a query string) so each step is a clean, shareable route.
- Keep question slugs stable (/name, /start-date) across items to enable reuse of the same screen for each index.
- Use this pattern anytime you “loop” a single-response screen across items. 

### Don’t
- Don’t encode the index in the question slug (e.g., avoid /dependent-two-name).
- Don’t renumber indices in the URL when items are re-ordered in the UI; treat the index as the item’s position in the current array at render time.
- Don't refer to the arrays as `<array-name> 1` in visual presentation. 

### Edge cases and tips
- **Insertions and deletions:** If a user deletes item 1, the remaining items will shift (2 becomes 1). That’s expected—routes always reflect the current state of the array. If you need stable IDs for analytics, store a separate per-item UUID in data. Keep the URL index for navigation.
- **Validation links:** Error summaries should link straight to the indexed route (for example, the second dependent’s name error links to /…/dependent/1/name), which takes users to the correct screen for that item in the loop.
- **Accessibility notes:** Because every looped screen is a normal single-response screen, follow the standard single-response accessibility guidance (clear page heading, field labeling, focus management). The pattern simply repeats those screens for each array index. 


## Related guidance
- [Multiple responses pattern (when and how to use it)](https://design.va.gov/patterns/ask-users-for/multiple-responses)
- [Single response pattern (each loop step is just a single-response screen).](https://design.va.gov/patterns/ask-users-for/a-single-response)
- [URL standards (public-facing numbering guidance—1-based in labels).](https://design.va.gov/ia/url-standards/)
- [Form System - Multiple Responses / Array builder pattern](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/platform/forms-system/src/js/patterns/array-builder/README.md)
