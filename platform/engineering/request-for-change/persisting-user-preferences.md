# RFC: Persisting User Preferences

- Date: 2018-08-03

## Background
We want to allow users to personalize their experience on the site with preferences/settings. These preferences should persists across devices & sessions, so we need to store these choices in the database somehow.

These preferences would be accessed via the serialized user object:

`GET /v0/user/`
```
{
  "data": {
    "id": "string",
    "type": "string",
    "attributes": {
      "vet360_contact_information": { ... },
      "services": [...],
      "profile": { ... },
      "va_profile": { ... },
      "veteran_status": { ... },
      "preferences": {
          "show_gi_bill_widget": true,
          "some_other_pref": false,
      }
    }
  }
}
```

Presumably we'd add a new endpoint for updating preference:

`POST /v0/user/preferences`
```
{
    "preferences": {
        "show_gib_widget": true,
        "some_other_pref": false
    }
}
```

## Motivation
This is new functionality. There is not currently any such mechanism by which users can personalize their experience. The closest analog is beta_registrations, which solve a different problem in a way that is very similar to what we're proposing to do here.

## Design
We considered several options and quickly landed on Postgres as the most appropriate place to store user preferences. As for the specific structure of the table(s) we have two candidates.

### One Table Plan A

**Preferences** table

| column | type | example |
| --------| -----| -------- |
| id (primary) | int |     1    |
| user_uuid | uuid | 0732553f-...-e32d48e68b73 |
| key | string | show_gib_widget |
| value | string / bool? | 'true'? 1? |
| created | datetime | |
| modified | datetime | |

Indexes: user_uuid, user_uuid + key

This approach almost exactly matches the beta_registrations table. Retrieving user preferences is pretty straightforward...
`Preference.where(user_uuid: @current_user.uuid)`

The model would define the recognized preference keys with constants.

```
class Preferences < ActiveRecord::Base
    KEYS = [
        'show_gib_widget',
        'some_other_pref'
    ]
```
^ This could be fancier. The keys could be hashes which also define titles, etc

### Multi-Table plan

**PreferenceOptions** table

| column | type | example |
| --------| -----| -------- |
| id | int | 1 |
| slug | string | show_gib_widget |
| created | datetime | |
| modified | datetime | |

**PreferenceChoices** table

| column | type | example |
| --------| -----| -------- |
| id (primary) | int |     1    |
| preferenceoption_id | int | 1 |
| value | string / bool? | 'true'? 1? |
| created | datetime | |
| modified | datetime | |

In this approach the preferences are defined in one table, and the selections are in another... Presumably we'd query them together with a JOIN.

### One Table Plan B

One of the arguments for the previous plan is that the preference keys should live in the database instead of in code. The tradeoff is that every time we add one we'll need to run migrations. If we're leaning in that direction we might also consider a very simple table with a column for each preference.

**Preferences** table

| column | type | example |
| --------| -----| -------- |
| id (primary) | int |     1    |
| user_uuid | uuid | 0732553f-...-e32d48e68b73 |
| show_gib_widget | bool | true |
| some_other_pref | string | 'foobar' |
| ... | ... | ... |
| created | datetime | |
| modified | datetime | |

A normalized table like this has several important benefits:
* The database can set default values
* We can customize/constrain the data type for individual preferences
* We have much more ability for indexing.

## Risks
Vets.gov is not a system of record and doesn't want to be. We are not currently the authoritative source of any user data, aside from beta feature opt-ins. User preferences that personalize the site experience are not inconsistent with our goals. But as we add user-related data to our database, there is a theoretical risk of distracting us from our mandate, potentially cracking the door to becoming a system of record accidentally. This concern is generally applicable to any decision to store any data.

As for the implementation candidates described above, each has trade-offs. The multi-table approach introduces a bit more overhead from the outset that complicates the initial implementation and subsequent iterations. The single table approach is potentially too simple and might require refactoring later.

Whatever solution we land on, we should also consider localization.

## Alternatives
We briefly considered storing user preferences with the client in localstorage, but these preferences need to persist across devices. It would also be theoretically possible to store user preferences in Redis, but this use case isn't really what Redis was designed to do, and meanwhile we already have a Postgres DB (which _is_ designed for this use case).
