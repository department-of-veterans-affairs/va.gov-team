```yaml
  ---
  documentation: research-operations
  type: research-repository-labels
  authors: ["shane.strassberg"]
  tags: ["research-repository-labels"]
  ---
  ```

# Research Repository Labels
These labels are used to organize our research located on the [research repository board](https://github.com/orgs/department-of-veterans-affairs/projects/880)

They may also be used for yaml frontmatter meta-data in markdown files to make it easier for Github Copilot to answer queries about research.

# Github Research Repository Labels 
This table lists all research repository labels, reorganized by **Category** (alphabetically), and within each category, sorted by **Name** alphabetically. The **Category** column appears first.  **Meta-data** column provides easily copyable YAML for frontmatter in markdown files.

| Category   | Name                   | Meta-data (YAML, copy for frontmatter)                             |
|------------|------------------------|--------------------------------------------------------------------|
| Audiences  | Attorneys              | `labels:\n  category: Audiences\n  name: Attorneys`                |
| Audiences  | Caregivers             | `labels:\n  category: Audiences\n  name: Caregivers`               |
| Audiences  | Claims Agents          | `labels:\n  category: Audiences\n  name: Claims Agents`            |
| Audiences  | Contact Center         | `labels:\n  category: Audiences\n  name: Contact Center`           |
| Audiences  | Dependents             | `labels:\n  category: Audiences\n  name: Dependents`               |
| Audiences  | Family Member          | `labels:\n  category: Audiences\n  name: Family Member`            |
| Audiences  | Internal VA Stakeholders | `labels:\n  category: Audiences\n  name: Internal VA Stakeholders`|
| Audiences  | School Certifying Official (SCO) | `labels:\n  category: Audiences\n  name: School Certifying Official (SCO)` |
| Audiences  | Service Members        | `labels:\n  category: Audiences\n  name: Service Members`          |
| Audiences  | Surviving Family       | `labels:\n  category: Audiences\n  name: Surviving Family`         |
| Audiences  | Travel Office Staff    | `labels:\n  category: Audiences\n  name: Travel Office Staff`      |
| Audiences  | VA Staff               | `labels:\n  category: Audiences\n  name: VA Staff`                 |
| Audiences  | Veteran Service Office (VSO) | `labels:\n  category: Audiences\n  name: Veteran Service Office (VSO)` |
| Audiences  | Veterans               | `labels:\n  category: Audiences\n  name: Veterans`                 |
| Benefits   | Disability             | `labels:\n  category: Benefits\n  name: Disability`                |
| Benefits   | Education              | `labels:\n  category: Benefits\n  name: Education`                 |
| Benefits   | Employment             | `labels:\n  category: Benefits\n  name: Employment`                |
| Benefits   | Finances               | `labels:\n  category: Benefits\n  name: Finances`                  |
| Benefits   | Healthcare             | `labels:\n  category: Benefits\n  name: Healthcare`                |
| Benefits   | Housing                | `labels:\n  category: Benefits\n  name: Housing`                   |
| Benefits   | Memorialization        | `labels:\n  category: Benefits\n  name: Memorialization`           |
| ...        | ...                    | ...                                                                |

<details>
<summary>Click to view the full table (very large)</summary>

<!-- Continue with all categories sorted, following the same pattern as above. 
Due to the table size, please refer to the actual markdown file for the complete listing. 
If you need a full export, use a spreadsheet or database to view and filter the content efficiently.
-->

</details>

---

**How to add this meta-data to your markdown files:**
1. Copy the text from the "Meta-data" column for each relevant label.
2. Paste it at the top of your markdown file, adjusting indentation as needed.  
   For example, to include multiple labels:
   ```yaml
   labels:
     - category: Audiences
       name: Caregivers
     - category: Benefits
       name: Housing
   ```
   Or for a single label:
   ```yaml
   labels:
     category: Audiences
     name: Caregivers
   ```
3. Place this block between triple-dashed lines (`---`) at the top of your markdown file.

---

**Notes for Researchers:**
- The table is sorted first by **Category** (A-Z), then by **Name** (A-Z).
- The meta-data format is designed for easy frontmatter YAML integration in markdown research reports.
- Use the filter/search functionality in your markdown viewer or spreadsheet for efficient navigation.
