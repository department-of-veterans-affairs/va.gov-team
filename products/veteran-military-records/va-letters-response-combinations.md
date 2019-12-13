# VA Letters “available and “having NoError” Combinations Currently in eBenefits   
*Ask Niranjan for clarification if needed.*

- `Available = false` and `havingNoError = true`
  - letter link not displayed 
- `Available = false` and `havingNoError = false` 
  - no letter link is displayed; message is displayed that letters are down
- `Available = true` and `havingNoError = true` 
  - letter link is displayed and user can view letter
- `Available = true` and `havingNoError = false` [scenario 1 - partner down]
  - letter link is displayed, however disabled, and message below the link is displayed that partner is down.
- `Available = true` and `havingNoError = false` [scenario 2 - code issue] 
  - list of letter link(s) are not displayed; message displayed on top of the VA letter that currently the VA letter is down. 
- `Available = true` and `havingNoError = false` [scenario 3 -  Data issue: user not in CORP/BIRLS] 
  - list of letter link(s) are not displayed; message displayed on top of the VA letter with Error Code YYYY
- `Available = True` and `havingNoError = false` [scenario 4 – Data issue: user missing Address in CORP] 
  - list of letter link(s) are not displayed; message displayed on top of the VA letter with Error Code XXXX
