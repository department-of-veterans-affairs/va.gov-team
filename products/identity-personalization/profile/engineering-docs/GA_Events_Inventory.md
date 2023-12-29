# GA events in personalization applications
- 221 references to `recordEvent` in 46 files
- This is approximate, because there are some abstracted functions that don't use the recordEvent function directly
	- `src/applications/personalization/dashboard/helpers.jsx` includes a `recordDashboardClick` helper function that does this kind of abstraction

## API Call events:

| Location                                                             | Count |
| -------------------------------------------------------------------- | ----- |
| src/applications/personalization/common/actions/notifications.js     | 6     |
| src/applications/personalization/common/actions/ratedDisabilities.js | 3     |
| src/applications/personalization/dashboard/actions/claims.jsx        | 2     |
| src/applications/personalization/dashboard/actions/debts.js          | 6     |

## Other Events

src/applications/personalization/components/IdentityNotVerified.jsx
`recordEvent({ event: AUTH_EVENTS.VERIFY })`event name is 'verify-link-clicked'

---

## Dashboard Events

src/applications/personalization/dashboard/components/benefit-application-drafts/ApplyForBenefits.jsx
```
recordEvent({
	event: 'dashboard-navigation',
	'dashboard-action': 'view-link',
	'dashboard-product': 'recommendations-health-care-apply-now',
});
```

```
recordEvent({
	event: 'dashboard-navigation',
	'dashboard-action': 'view-link',
	'dashboard-product': 'recommendations-disability-file-claim',
});
```

```
recordEvent({
	event: 'dashboard-navigation',
	'dashboard-action': 'view-link',
	'dashboard-product': 'recommendations-education-apply-now',
});
```

---

src/applications/personalization/dashboard/components/benefit-payments/BenefitPayments.jsx
```
recordEvent({
	event: 'nav-linkslist',
	'links-list-header': 'Manage your direct deposit',
	'links-list-section-header': 'Direct deposit',
});
```

```
recordEvent({
    event: 'nav-linkslist',
    'links-list-header': 'Review your payment history',
    'links-list-section-header': 'Benefit payments',
});
```

---

src/applications/personalization/dashboard/components/benefit-payments/PaymentsCard.jsx

```
recordEvent({
event: 'nav-linkslist',
'links-list-header': 'Review your payment history',
'links-list-section-header': 'Benefit payments',
});
```

---

src/applications/personalization/dashboard/components/claims-and-appeals/Claim.jsx

```
recordEvent({
event: 'dashboard-navigation',
'dashboard-action': 'view-button',
'dashboard-product': 'view-claim',
});
```

---

src/applications/personalization/dashboard/components/debts/CopaysCard.jsx

```
recordEvent({
event: 'dashboard-navigation',
'dashboard-action': 'view-link',
'dashboard-product': 'view-manage-va-bills',
})
```

---

src/applications/personalization/dashboard/components/debts/Debts.jsx

```
recordEvent({
event: 'nav-linkslist',
'links-list-header': 'Learn about VA debt',
'links-list-section-header': 'Learn about VA debt',
});
```

---

src/applications/personalization/dashboard/components/debts/DebtsCard.jsx

```
recordEvent({
event: 'dashboard-navigation',
'dashboard-action': 'view-link',
'dashboard-product': 'view-manage-va-debt',
})
```

---

src/applications/personalization/dashboard/components/education-and-training/EducationAndTraining.jsx

```
recordEvent({
event: 'nav-linkslist',
'links-list-header':
'Learn how to apply for VA education benefits',
'links-list-section-header': 'Education and training',
})
```

```
recordEvent({
event: 'nav-linkslist',
'links-list-header': 'Compare GI Bill benefits by school',
'links-list-section-header': 'Education and training',
})
```

```
recordEvent({
event: 'nav-linkslist',
'links-list-header':
'Check your Post-9/11 GI Bill benefits',
'links-list-section-header': 'Education and training',
})
```

---

src/applications/personalization/dashboard/components/health-care/AppointmentsCard.jsx

```
recordEvent({
event: 'nav-linkslist',
'links-list-header': 'Schedule and manage your appointments',
'links-list-section-header': 'Health care',
})
```

---

src/applications/personalization/dashboard/components/health-care/HealthCareContent.jsx

```
recordEvent({
                event: 'nav-linkslist',
                'links-list-header': 'Schedule and manage your appointments',
                'links-list-section-header': 'Health care',
              })
```

---

src/applications/personalization/dashboard/components/health-care/HealthCareCTA.jsx

```
recordEvent({
              event: 'nav-linkslist',
              'links-list-header': 'Apply for VA health care',
              'links-list-section-header': 'Health care',
            })
```

```
recordEvent({
                event: 'nav-linkslist',
                'links-list-header': 'Visit MHV on Va.gov',
                'links-list-section-header': 'Health care',
              })
```

```
 recordEvent({
                  event: 'nav-linkslist',
                  'links-list-header': 'View your messages',
                  'links-list-section-header': 'Health care',
                })
```

```
recordEvent({
                      event: 'nav-linkslist',
                      'links-list-header':
                        'Schedule and manage your appointments',
                      'links-list-section-header': 'Health care',
                    });
```

```
recordEvent({
  event: 'nav-linkslist',
  'links-list-header': 'Refill and track your prescriptions',
  'links-list-section-header': 'Health care',
});
```

```
recordEvent({
  event: 'nav-linkslist',
  'links-list-header': 'Request travel reimbursement"',
  'links-list-section-header': 'Health care',
});
```

```
recordEvent({
  event: 'nav-linkslist',
  'links-list-header': 'Get your VA medical records',
  'links-list-section-header': 'Health care',
});
```

---

src/applications/personalization/dashboard/components/notifications/DebtNotificationAlert.jsx

```
recordEvent({
  event: 'dashboard-navigation',
  'dashboard-action': 'view-link-from-notifications',
  'dashboard-product': 'view-manage-va-debt',
})
```

---

src/applications/personalization/dashboard/components/Dashboard.jsx

```
          recordEvent({
            event: 'dashboard-navigation',
            'dashboard-action': 'view-link',
            'dashboard-product': 'view-your-profile',
          });
```

---

src/applications/personalization/dashboard/covid-19.jsx

```
recordEvent({
  event: 'dashboard-navigation',
  'dashboard-action': 'view-link',
  'dashboard-product': 'learn-more-chat',
});
```

---

src/applications/personalization/dashboard/helpers.jsx

```
recordEvent({
event: 'dashboard-navigation',
'dashboard-action': actionType,
'dashboard-product': product,
});
```

---

Abstracted `recordDashboardClick` calls:
src/applications/personalization/dashboard/components/benefit-application-drafts/ApplicationInProgress.jsx
src/applications/personalization/dashboard/components/benefit-application-drafts/BenefitOfInterest.jsx - this is actually commented out, but its 3 years old so ???

## Profile Events

Coming soon...
