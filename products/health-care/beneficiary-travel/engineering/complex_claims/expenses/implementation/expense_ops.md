# Expense Operations

Requests from VA.gov to the Travel Pay API include:
1. vets-api request handling
2. TIC traversal
3. Travel Pay API request handling
4. Travel Pay API business logic (invoking plugins, etc)
5. TIC traversal
6. vets-api response handling (serialization, etc)

Even at 500ms each, this represents a 3-second end-to-end flow, and we often see 1+ second Travel Pay API business logic.

To mitigate, we will follow the open/closed principle to easily add asynchronous behavior in order to apply optimizations, like asynchronous request handling.

Idea: Understanding that Sidekiq is for long long running jobs or final submissions, with silent successes AND silent failures, can I just use Rails's ActiveJob for shorter-but-still-expensive calls to APIs? This would allow me to update the cached data as 'saved' for further processing

## TODO
- [ ] Verify "idiomaticism" - is this the "Ruby/Rails way"?
- [ ] Weigh complexity of approach with convenience/adherence to [Open/Closed Principle](https://en.wikipedia.org/wiki/Open%E2%80%93closed_principle).

## Class Diagram
```mermaid
classDiagram
  class ExpensesController {
    - expenses_service : ExpenseOperations
    - auth_manager
    + create()
    + edit()
    + delete()
    + show()
  }

  class AuthManager

  class ExpenseOperations {
    <<interface>>
    + get_expenses(String claim_id)
    + get_expense_by_id(String exp_id)
    + create_expense(Expense exp)
    + delete_expense(String exp_id)
    + edit_expense(Expense exp)
  }

  class ExpensesService {
    - auth_manager
    + initialize(auth_manager)
  }

  class AsyncExpensesService {
    - auth_manager
    + initialize(auth_manager)
  }
  note for AsyncExpensesService "prospective"

  ExpensesController o-- AuthManager
  ExpensesController *-- ExpenseOperations

  ExpenseOperations <|-- ExpensesService
  ExpenseOperations <|-- AsyncExpensesService
```
