| HTTP TYPE | action | controller   | route                     | route type | description                           |
| --------- | ------ | ------------ | ------------------------- | ---------- | ------------------------------------- |
| GET       | index  | folders      | /folders                  | primary    | get all folders                       |
| GET       | show   | folders      | /folders/:id              | primary    | get a single folder                   |
| GET       | index  | messages     | /folders/:id/messages     | primary    | get messages for folder (no body)     |
| GET       | show   | messages     | /messages/:id             | primary    | get a specific message                |
| GET       | index  | messages     | /messages/:id/thread      | primary    | get the messages thread               |
| POST      | create | messages     | /messages                 | primary    | creates a new message                 |
| POST      | create | messages     | /messages/draft           | primary    | creates a new message draft           |
| GET       | index  | triage_teams | /recipients               | primary    | get all triage triage teams           |
