# Expense Types

## Implementation Details
Prototyped in [travel-pay/prototype/expense-types](https://github.com/department-of-veterans-affairs/vets-api/tree/travel-pay/prototype/expense-types/modules/travel_pay/app/models/travel_pay/expenses)

## Class Diagram
```mermaid
classDiagram
  direction LR

  class Expense {
    -String claim_id
    -Receipt receipt
    -Date purchase_date
    -String description
    -Float costRequested
  }

  class Receipt {
    -File file
    -String description
  }

  class Spannable {
    <<module>>
    -Date from
    -Date to
    -is_ordered?()
    -is_in_range?()
  }

  class FlightExpense {
    -String vendor
    -TripType trip_type
    -String departure_location
    -String arrival_location
  }

  class TripType {
    <<Enumeration>>
    +ROUND_TRIP
    +ONE_WAY
  }

  class LodgingExpense {
    -String vendor
  }

  class CommonCarrierExpense {
    -String reason
    -CommonCarrierExplanation explanation
    -CommonCarrierType type
  }

  class CommonCarrierExplanation {
    <<Enumeration>>
    +PRIVATE_VEHICLE_UNAVAILABLE
    +MEDICALLY_INDICATED
    +OTHER
  }

  class CommonCarrierType {
    <<Enumeration>>
    +BUS
    +SUBWAY
    +TAXI
    +TRAIN
    +OTHER
  }

  class MealExpense {
    -String vendor
  }

  class TollExpense
  class Parking Expense

  Expense <|-- FlightExpense
  FlightExpense -- TripType
  FlightExpense -- Spannable

  Expense <|-- LodgingExpense
  LodgingExpense -- Spannable
  Expense <|-- CommonCarrierExpense
  CommonCarrierExpense -- CommonCarrierExplanation
  CommonCarrierExpense -- CommonCarrierType

  Expense <|-- MealExpense
  Expense <|-- TollExpense
  Expense <|-- ParkingExpense
  Receipt "1" --o "1" Expense
```
