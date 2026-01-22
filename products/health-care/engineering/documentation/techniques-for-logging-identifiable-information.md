# Logging Identifiable Information (without logging PII)

One of the challenges of operating in an environment that deals heavily with PHI/PII is logging data. While we are able to leverage PII logging via the `PersonalInformationLog`, it is a separate datastore and requires screensharing with platform in order to access the production console and query, and is mostly useful when extracting PII from specific log entries. It does not readily allow searching Datadog logs for incidents/data. And while data like the `session_id` or `user_id` is loggable and enables tracking specific user issues, other data (like care type, NPI) are also considered PII and cannot be logged.

Below is a non-exhaustive table of techniques that teams could leverage in order to store identifiable information in Datadog without compromising PHI/PII. All of the techniques are non-reversible (i.e. cannot be decrypted with the right secret) but each feature a number of pros and cons.

A recurring pattern you'll observe is that many of these techniques remove the **P** from PII. They take a deterministic value (`john@gmail.com`) and make it probabilistic (`j***@gmail.com`) which conceptually puts data into cohorts (for example, all emails that start with J). But depending on the scope, or the correlation with other data/cohorts (like email lengths of X characters) this could offer teams uniquely identifiable information for debugging & analytics purposes without compromising security.

## When To Log Non-Personal Identifiable Information?

Whenever possible, logging this kind of identifiable information:

- Should happen behind a **feature toggle** so we can turn it off and on as needed without a code deploy
- Should happen only as a **last resort**. There might already be systems in place that can log PII/PHI and we should look to leverage them first.

---

| Technique | Description | Notes |
|-----------|-------------|-------|
| **First/Last N Characters** | Keep only the last 3-4 characters. Example: `john.doe@gmail.com` → `***com`; `555-123-4567` → `***4567`; `192.168.1.45` → `***.45` | We have used this to log/show things like Claim numbers and prescription ids to Veterans. This requires knowledge of how the id is formed to not log PII info. |
| **Seeded Shuffle + Truncate** | Perform a deterministic shuffle of the value (Ruby `#shuffle` takes a random param to provide deterministic) then truncate. Example: `john.doe@gmail.com` → `ogl.ajmi`; `555-123-4567` → `152-76`; `192.168.1.45` → `284.11` | |
| **MD5 Hash** | Standard MD5 hash of full value. Example: `john.doe@gmail.com` → `a3f2b7c1d4e5...` | MD5 hashing is good for organizing data for users without knowing what that data is. We used this for targeting logs for debugging vaccine display issues. |
| **Truncated MD5** | MD5 hash but only keep first 8-12 characters. Example: `MD5("192.168.1.45")[:10]` → `e4d7f2a1b9` | |
| **Composite Fingerprint** | Hash multiple attributes together using MD5. Example: `MD5("John" + "4567")[:8]` → `b2c8f4a1` | |
| **Structure Pattern** | Replace characters with bucketed indicators: `a-m` → `a`, `n-z` → `n`, `0-4` → `0`, `5-9` → `5`, keep special characters. Example: `john.doe@gmail.com` → `anan.ana@aaaaa.ana`; `555-123-4567` → `555-000-0555`; `192.168.1.45` → `050.055.0.05` | Already an established pattern. We have used this on MHV to hide PII. |
| **HMAC-SHA256** | Hash PII with a secret key stored outside logs. Example: `HMAC(secret, "555-123-4567")` → `a3f8b2c1` | |

---

## Technique Guidance

Not all approaches to logging identifiable information are created equal. There are pros/cons to each and different types of data or scenarios may require certain approaches to be avoided. It is up to the developer to identify what offers the best combination of protection and utility, which can be at odds. Using **HMAC-SHA256** may be the strongest (and thus, is good to default to) but if you need to create dashboards or monitors that rely on surfacing and aggregating this data you'll need to reach for some of the more creative options.

It is important to consider what someone who has access to this data (either because they are unauthorized or because they are no longer authorized) in Datadog could glean. Techniques which require intimate knowledge of underlying data, the algorithm used, and/or access to secrets are strongest.

> **⚠️ Before implementing a solution, coordinate with a Federal Engineer and the platform team for latest security guidance/compliance.**

| Technique | Pros | Cons | Usage Guidance |
|-----------|------|------|----------------|
| **First/Last N Characters** | Very simple, human-readable, some searchability | Vulnerable for short inputs; not unique, can offer more deterministic identification for some types of values | A successful use of this is ambiguous in isolation when not paired with a specific dataset. I.e. for storing "Chiropractic", `C` or `CH` is better than `CHIRO`. |
| **Seeded Shuffle + Truncate** | Obscures original order, deterministic, searchable, retains character set of original | Shuffle algorithm must be consistent across systems | A more advanced form of the above, this allows larger string lengths to be stored while being irreversible. For example `ORCIP` might be the value for "Chiropractic". |
| **MD5 Hash** | Deterministic, searchable, simple | Vulnerable to rainbow tables; no secret involved, weak protection when known data can be easily reverse engineered | Use with caution, refer truncated MD5 or HMAC-SHA256. Use as a last resort when the use case requires determinism and a high level of specificity in find-ability, or enabling others to easily query for specific data. |
| **Truncated MD5** | Shorter log entries, searchable, simple, more secure than a full MD5 hash | Potential for collisions increases with truncation | This is stronger than a plain MD5 but depending on the data can still be a risk. For example "chiropractic" truncated MD5 is `a944505` which is ambiguous but still brute-forceable. |
| **Composite Fingerprint** | Harder to brute-force than single-field hash, requires knowledge of several related attributes, searchable, no key management | Requires multiple fields available at log time | This is stronger than a truncated MD5 as it is combinatory and requires knowledge of several pieces of data in order to generate, while still being truncated. It also allows for greater specificity (which may or may not be a good thing). For example "chiropractic" plus a zipcode truncated returns `e89f366c4`. |
| **Structure Pattern** | Shows structure with partial value hints, useful for debugging | Not searchable for specific records; format analysis only | In isolation this approach, depending on the underlying data, can be highly ambiguous; potentially almost useless in isolation if not paired with other data. For example "Chiropractic" would be `aaannnnaanaa`. |
| **HMAC-SHA256** | Cryptographically strong, searchable, resistant to rainbow tables, modern standard. Could use the current git hash as a secret for continual rotation, or a URL for more deterministic. | Requires secret management/definition | Conceptually it is an encrypted MD5, and this is among the strongest options available. Can use a secret stored in production, or for added security be combined with a key that naturally rotates (like the current git commit hash) which would require knowledge of the secret + knowledge of deployed commits + knowledge of the protected data in order to find relevant records. |
