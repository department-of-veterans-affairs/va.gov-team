## Statuses for Refill prescriptions tab (mobile version)

![rx data](https://cloud.githubusercontent.com/assets/13420618/18175141/241cdf58-703e-11e6-9b7b-5f463ab2cc01.png)


PDF is a little cleaner if you want to see a better version: [Rx [Rx Data.pdf](https://github.com/department-of-veterans-affairs/kudos-team/files/450193/Rx.Data.pdf)

_We currently don't have secure messaging built yet so until then, we will take away message my provider link and put provider's number instead_

## Rx History View

When you click on tracking number, you should redirect to carrier site. 
![rx mobile - rx history disclaimer](https://cloud.githubusercontent.com/assets/13420618/18174947/7e857686-703d-11e6-811e-583f173048c2.png)

## Rx Detail page
![rx mobile - detail page](https://cloud.githubusercontent.com/assets/13420618/18174934/6eac1648-703d-11e6-9b49-a3c1911ba35f.png)

## Rx Status Glossary
![rx mobile - glossary page](https://cloud.githubusercontent.com/assets/13420618/18175228/85357318-703e-11e6-8cae-fd96f573abfb.png)

## Status Logic
When `is-refillable === true`: Display Refill Prescription button

When `is-refillable === false && is-trackable === true`: Display 
Track package button

When `is-refillable === false && is-trackable === false` : Display Refill requested text

When `is-refillable === false and refills === 0`: Request renewal.

When `is-refillable === false && refillStatus === Suspended`: Display Call Provider.

When `is-refillable === false && refillStatus === On hold`: Display Call Provider.
