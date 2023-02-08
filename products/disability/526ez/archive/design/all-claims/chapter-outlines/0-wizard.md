| Wizard                                                       |
| ------------------------------------------------------------ |
| Change to wizard to accommodate inclusion of BDD claims. I think this makes most sense in the wizard. |

## Find Your Disability Claim Form 

Just answer a few questions, and we’ll show you where to find the form that’s right for you. { radio }

- I’ve never filed a disability claim before.
- I have a new condition, or a condition that’s gotten worse, to add to my rated disability claim.
- I want to appeal the VA decision on my disability claim.



{ if new or worse }

Are your conditions new, worse, or both? { checkboxes }

- I have a new condition to add to my rated disability claim.
- One or more of my rated disabilities has gotten worse. 

{ endif new or worse}



What is you last or anticipated date of discharge? { date }

{ also if new or worse }

{ if $date > 180 days in future }
{ error box }

>  You must be between 180 and 90 days from separation to apply for Disability Compensation. Come back after \$180date { calculated based on above data entry } but before $90date { calculated again } to submit your application.

{ endif 180+ }



{ if $date < 180 and > 90 days in future }

[ Start Your BDD Claim ] { button }

{ endif 180+ }



{ if $date < 90 days in future }

You will need to apply for benefits on eBen

{ endif 180+ }



{ endalsoif new or worse }