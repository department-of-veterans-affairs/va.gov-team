--------
**Old → New File Mapping**

| Old Location                                      | New Location                                                     | Notes                                                       |
|--------------------------------------------------|------------------------------------------------------------------|-------------------------------------------------------------|
| `/Tools/SetFormData.md`                 | [tools-and-code/crawlers/set-form-data.md](./tools-and-code/crawlers/set-form-data.md)  | Tools grouped into `tools-and-code` subdirectories          |
| `/hooks/useDetectFieldChanges.md`        | [tools-and-code/hooks/useDetectFieldChanges.md](./tools-and-code/hooks/useDetectFieldChanges.md) | Hooks organized under `tools-and-code/hooks`               |
| `/other/andrews-perfect-world.md`        | [guides-and-howtos/andrews-perfect-world.md](./guides-and-howtos/andrews-perfect-world.md)     | General guides moved under `guides-and-howtos`             |
| `/FSR Urls and Pages CSV.csv`            | [reference/fsr-urls-and-pages.csv](./reference/fsr-urls-and-pages.csv)                        | Reference materials consolidated into `reference/`          |
| `/GMT yearly update.md`                  | [features/gmt-yearly-update.md](./features/gmt-yearly-update.md)                                | Feature-specific docs moved to `features/`                  |
| `/Transaction_Code_Mappings.md`          | [architecture/transaction-code-mappings.md](./architecture/transaction-code-mappings.md)        | Architectural references now in `architecture/`             |
| `/cdp-data-structure.md`                 | [architecture/cdp-data-structure.md](./architecture/cdp-data-structure.md)                      | Data structure docs placed under `architecture/`            |
| `/debt-diary-codes-error-handling.md`    | [features/debt-diary-codes-error-handling.md](./features/debt-diary-codes-error-handling.md)    | Feature-specific doc moved to `features/`                   |
| `/dev-digital-dispute-notes.md`          | [features/dev-digital-dispute-notes.md](./features/dev-digital-dispute-notes.md)               | Feature-specific doc moved to `features/`                   |
| `/fsr-data-structure.md`                 | [architecture/fsr-data-structure.md](./architecture/fsr-data-structure.md)                      | Data structure docs placed under `architecture/`            |
| `/honeydew.md`                           | [architecture/honey-dew.md](./architecture/honey-dew.md)                                         | Architectural doc renamed and moved under `architecture/`   |
| `/howto-local-gmt-db-update.md`          | [getting-started/howto-local-gmt-db-update.md](./getting-started/howto-local-gmt-db-update.md)  | Onboarding steps organized under `getting-started/`         |
| `/local-setup.md`                        | [getting-started/local-setup.md](./getting-started/local-setup.md)                              | Setup docs now live under `getting-started/`                |
| `/noteable-changes.md`                   | [features/noteable-changes.md](./features/noteable-changes.md)                                  | Relevant changes doc moved to `features/`                   |
| `/the-wrong-way.md`                      | [guides-and-howtos/the-wrong-way.md](./guides-and-howtos/the-wrong-way.md)                      | General how-to docs grouped under `guides-and-howtos/`      |
| `/readme.md`                             | [readme.md](./readme.md)                                                                         | The README stays at the root level                          |

---------
```
/front-end
  ├─ README.md              # High-level structure of the front-end codebase and docs index
  ├─ getting-started/       # Basics for new developers to ramp up
  │   ├─ local-setup.md     # Steps to set up local environment
  │   └─ howto-local-gmt-db-update.md  # Guide on local GMT DB updates
  │
  ├─ architecture/               # System design, data structures, and architecture-level docs
  │   ├─ cdp-data-structure.md
  │   ├─ fsr-data-structure.md
  │   ├─ transaction-code-mappings.md
  │   └─ honey-dew.md             
  │
  ├─ features/                   # Documentation focused on specific features or modules
  │   ├─ dev-digital-dispute-notes.md
  │   ├─ debt-diary-codes-error-handling.md
  │   └─ GMT yearly update.md
  │
  ├─ tools-and-hooks/            # Developer utilities, hooks, and other reusable components
  │   ├─ crawlers/
  │   │   └─ aria-crawler.md
  │   │   └─ element-crawler.md
  │   │   └─ event-crawler.md
  │   │   └─ set-form-data.md
  │   └─ fsr/
  │   │   └─ hooks/
  │   |   |  └─ useDetectFieldChanges.md
  │
  ├─ guides-and-howtos/          # How-to guides, best practices, and procedural docs
  │   ├─ noteable-changes.md
  │   ├─ the-wrong-way.md        # Might consider renaming to something more descriptive
  │   ├─ andrews-perfect-world.md
  │
  ├─ reference/                  # Reference materials, CSVs, or mapping files not directly architectural
  │   └─fsr-urls-and-pages.csv
  │
  └─ changelogs/                 # Keep track of changes over time, if needed
      └─ Readme.md (If you have version-based docs, put them here)
```
