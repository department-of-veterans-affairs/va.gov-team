
# GA events in authenticated experience team owned code

- [Summary](#summary)
- [API Call Events](#api-call-events)
- [Other Events](#other-events)
- [My VA Events](#my-va-events)
- [Profile Events](#profile-events)
- [View Dependents Events](#view-dependents-events)
- [Platform shared code events](#platform-level-code-that-authenticated-experience-owns)
- [Conclusion/Takeaways](#takeaways)

## Summary
- 257 references to `recordEvent` across the applications and platform code
	- 88 of these references are in the `tests` folder, and so they will not need to be migrated per say, but any changed events will need to have tests updated where needed to have their event payloads match
- This number is approximate, because there are some abstracted functions that don't use the `recordEvent` function directly
	- Example: `src/applications/personalization/dashboard/helpers.jsx` includes a `recordDashboardClick` helper function that does this kind of abstraction
- *IMPORTANT*: there are is additional code within `src/platform/user/profile` of vets website that we also own. This is where 36 of the references to `recordEvent` calls are located, and they are [documented at the end of this document here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/engineering-docs/GA_Events_Inventory.md#platform-level-code-that-authenticated-experience-owns)
- Also note this is not exhaustive and I may have missed some calls as this is based on a best guess of where all this code is called, and really picking through things one file at a time may need to be done to fully cover any instances that are unique
  - One example of where this _might_ happen is if the `recordEvent` is imported as a different name, because well its a 'default export' from it's file so it can actually be imported as any name unfortunately. This is one reason that I personally try to avoid using default exports, and instead try to stick to named exports so that imports are explicitly referenced as such names.  

## API Call events:

| Location                                                                   | Count | Notes                                                                  |
| -------------------------------------------------------------------------- | ----- | ---------------------------------------------------------------------- |
| src/applications/personalization/common/actions/notifications.js           | 6     |                                                                        |
| src/applications/personalization/common/actions/ratedDisabilities.js       | 3     |                                                                        |
| src/applications/personalization/dashboard/actions/claims.jsx              | 2     |                                                                        |
| src/applications/personalization/dashboard/actions/debts.js                | 6     |                                                                        |
| src/applications/personalization/profile/actions/index.js                  | 3     |                                                                        |
| src/applications/personalization/profile/actions/paymentInformation.js     | 12    | Some of the events are custom for EDU api calls and should be migrated |
| src/applications/personalization/profile/actions/personalInformation.js    | 7     |                                                                        |
| src/applications/personalization/profile/ducks/communicationPreferences.js | 6     |                                                                        |
| src/applications/personalization/profile/util/direct-deposit.js            | 1     |                                                                        |
| --- --- --- --- ---                                                        |       |                                                                        |
| src/platform/user/profile/actions/index.js                                 | 1     |                                                                        |
| src/platform/user/profile/vap-svc/containers/AddressValidationModal.jsx    | 1     |                                                                        |
| src/platform/user/profile/vap-svc/containers/AddressValidationView.jsx     | 1      |                                                                        |

## Other Events

src/applications/personalization/components/IdentityNotVerified.jsx
`recordEvent({ event: AUTH_EVENTS.VERIFY })`event name is 'verify-link-clicked'

---

## My VA Events

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

---
## Profile Events

src/applications/personalization/profile/components/account-security/AccountSecurityTables.jsx

```
recordEvent({ event: AUTH_EVENTS.MFA });

AUTH_EVENTS.MFA = 'multifactor-link-clicked'
```

---
src/applications/personalization/profile/components/connected-apps/actions/index.js

```
recordEvent({ event: 'profile-get-connected-apps-started' });

recordEvent({
	event: 'profile-get-connected-apps-retrieved',
	'user-has-connected-apps': hasConnectedApps,
});

recordEvent({ event: 'profile-get-connected-apps-failed' });

recordEvent({ event: 'profile-disconnect-connected-app-started' });

recordEvent({
	event: 'profile-disconnect-connected-app-successful',
	'user-has-connected-apps': hasConnectedApps,
});

recordEvent({
	event: 'profile-disconnect-connected-app-failed',
	'error-key': `${errors?.[0]?.code}_${errors?.[0]?.status}`,
});

Note: these should probably be migrated to api call standard events
```

---
src/applications/personalization/profile/components/connected-apps/ConnectedApps.jsx

```
recordEvent({
	event: 'go-to-app-directory',
	'profile-action': 'view-link',
	'profile-section': 'connected-apps',
});

recordEvent({
	event: 'profile-navigation',
	'profile-action': 'view-link',
	'profile-section': 'vets-faqs',
});
```

---
src/applications/personalization/profile/components/direct-deposit/alerts/NotEligible.jsx

```
recordEvent({
	event: 'profile-navigation',
	'profile-action': 'view-link',
	'profile-section': `${benefitType}-benefits`,
});
```

---
src/applications/personalization/profile/components/direct-deposit/BankInfo.jsx

```
recordEvent({
	event: 'profile-navigation',
	'profile-action': 'edit-link',
	'profile-section': `${type.toLowerCase()}-direct-deposit-information`,
});

recordEvent({
	event: 'profile-navigation',
	'profile-action': 'add-link',
	'profile-section': 'cnp-direct-deposit-information',
});
```

---
src/applications/personalization/profile/components/direct-deposit/PaymentHistory.jsx

```
recordEvent({
	event: 'profile-navigation',
	'profile-action': 'view-link',
	'profile-section': 'view-payment-history',
})
```

---
src/applications/personalization/profile/components/notification-settings/NotificationChannel.jsx

```
// this is manually sent but is in the same structure as the standard checkbox GA event.
// done this way because our checkbox needs to show a loading indicator and therefore had to be custom and couldn't used the checkbox from the design system components
const eventPayload = {
	event: 'int-checkbox-group-option-click',
	'checkbox-group-optionLabel': `${label} - ${newValue}`,
	'checkbox-group-label': itemName,
	'checkbox-group-required': '-',
};
recordEvent(eventPayload);


// this event will be removed as soon as deprecated code is removed and radio buttons are removed
recordEvent({
	event: 'int-radio-button-option-click',
	'radio-button-label': itemName,
	'radio-button-optionLabel': `${
	channelTypes[channelType]
	} - ${newValue}`,
	'radio-button-required': false,
});
```

---
src/applications/personalization/profile/components/ProfileInformationEditView.jsx

```
recordEvent({
	event: 'profile-navigation',
	'profile-action': actionName,
	'profile-section': this.props.analyticsSectionName,
});
```

---
src/applications/personalization/profile/util/analytics/index.js

```
// this custom event was used to track custom modal interactions, mostly within the address change modal components

const recordCustomProfileEvent = ({
	event = 'profile_modal',
	title = 'no title',
	status = 'none',
	primaryButtonText = 'none',
}) => {
const payload = {
	event,
	'modal-title': title,
	'modal-status': status,
	'modal-primaryButtonText': primaryButtonText,
};

recordEvent(payload);
};
```

---
src/applications/personalization/profile/util/index.js

```
// not directly calling recordEvent but constructing an event payload object

// Helper that creates and returns an object to pass to the recordEvent()
// function when an error occurs while trying to save/update a user's direct
// deposit for compensation and pension payment information. The value of the
// `error-key` prop will change depending on the content of the `errors` array.
export const createCNPDirectDepositAnalyticsDataObject = ({
	errors = [],
	isEnrolling = false,
} = {}) => {

	const errorCode = getLighthouseErrorCode(errors);

	return cloneDeep({
		event: 'profile-edit-failure',
		'profile-action': 'save-failure',
		'profile-section': `cnp-direct-deposit-information`,
		'error-key': `${errorCode}${isEnrolling ? '-enroll' : '-update'}`,
	});
};
```

---

## View Dependents Events

src/applications/personalization/view-dependents/actions/index.js

```
// these should be moved to an standard api call event
recordEvent({
	event: `disability-view-dependents-load-failed`,
	'error-key': `${response.errors[0].status}_internal_error`,
});

recordEvent({ event: `disability-view-dependents-load-success` });
```

---
src/applications/personalization/view-dependents/components/ViewDependentsHeader/ViewDependentsHeader.jsx

```
recordEvent({
	event: 'cta-primary-button-click',
});
```

---

## Platform level code that authenticated experience owns

There is code within `src/platform/user/profile` of vets website that we also own. This includes 36 references to `recordEvent` calls

src/platform/user/profile/actions/hca.js

```
        recordEvent({
          event: `${DISABILITY_PREFIX}-combined-load-failed`,
          'error-key': `${errorCode} internal error`,
        });

        recordEvent({
          event: `${DISABILITY_PREFIX}-combined-load-failed`,
          'error-key': `${errorCode} no combined rating found`,
        });

		recordEvent({ event: `${DISABILITY_PREFIX}-combined-load-success` });

		DISIBILITY_PREFIX is a constant with the value 'disability-ratings' so events are constructed with that prefix
		these are basically api call events so should probably be moved to the standard api-call event format
```

---

src/platform/user/profile/vap-svc/actions/transactions.js
*these appear to be the main events that track when a user updates a part of their profile to track success and failures*

```
        recordEvent({
          event: 'profile-saved',
          'profile-action': 'save-success',
          'profile-section': analyticsSectionName,
        });

          recordEvent({
            event: 'profile-edit-failure',
            'profile-action': 'save-failure',
            'profile-section': analyticsSectionName,
            'error-key': `${errorCode}_${errorKey}-${analyticsSectionName}-save-failure`,
          });
          
          recordEvent({
            'error-key': undefined,
          });

      if (!fieldName.toLowerCase().includes('address')) {
        recordEvent({
          event:
            method === 'DELETE' ? 'profile-deleted' : 'profile-transaction',
          'profile-section': analyticsSectionName,
        });
      }

      recordEvent({
        event: 'profile-edit-failure',
        'profile-action': 'save-failure',
        'profile-section': profileSection,
        'error-key': `tx-creation-error-${profileSection}-${code}-${title}-${detail}`,
      });

      recordEvent({
        'error-key': undefined,
      });

    recordEvent({
      event: 'profile-navigation',
      'profile-action': 'update-button',
      'profile-section': analyticsSectionName,
      'profile-addressValidationAlertShown': showModal ? 'yes' : 'no',
      'profile-addressSuggestionProvided':
        showModal && confirmedSuggestions.length ? 'yes' : 'no',
    });

	recordEvent({
      event: 'profile-transaction',
      'profile-section': analyticsSectionName,
      'profile-addressSuggestionUsed': 'no',
    });
    
    recordEvent({
      event: 'profile-edit-failure',
      'profile-action': 'address-suggestion-failure',
      'profile-section': analyticsSectionName,
      'error-key': `${errorCode}_${errorStatus}-address-suggestion-failure`,
    });

	recordEvent({
      'error-key': undefined,
    })
```

---
src/platform/user/profile/vap-svc/components/base/VAPServiceEditModalActionButtons.jsx

```
  cancelDeleteAction = () => {
    this.setState({ deleteInitiated: false });
    recordEvent({
      event: 'profile-navigation',
      'profile-action': 'cancel-delete-button',
      'profile-section': this.props.analyticsSectionName,
    });
  };

confirmDeleteAction = e => {
    e.preventDefault();
    recordEvent({
      event: 'profile-navigation',
      'profile-action': 'confirm-delete-button',
      'profile-section': this.props.analyticsSectionName,
    });
    this.props.onDelete();
  };

  handleDeleteInitiated = () => {
    recordEvent({
      event: 'profile-navigation',
      'profile-action': 'delete-button',
      'profile-section': this.props.analyticsSectionName,
    });
    this.setState({ deleteInitiated: true });
  };
```

---

src/platform/user/profile/vap-svc/components/ProfileInformationFieldController.jsx

```
  cancelDeleteAction = () => {
    recordEvent({
      event: 'profile-navigation',
      'profile-action': 'cancel-delete-button',
      'profile-section': this.props.analyticsSectionName,
    });
    this.closeModal();
  };

  confirmDeleteAction = e => {
    e.preventDefault();
    recordEvent({
      event: 'profile-navigation',
      'profile-action': 'confirm-delete-button',
      'profile-section': this.props.analyticsSectionName,
    });
    this.onDelete();
  };

  // event names are 'cancel-button' or 'edit-link'
  captureEvent = actionName => {
    recordEvent({
      event: 'profile-navigation',
      'profile-action': actionName,
      'profile-section': this.props.analyticsSectionName,
    });
  };
  

  handleDeleteInitiated = () => {
    recordEvent({
      event: 'profile-navigation',
      'profile-action': 'delete-button',
      'profile-section': this.props.analyticsSectionName,
    });
    this.openRemoveModal();
  };

```

---

src/platform/user/profile/vap-svc/containers/AddressValidationModal.jsx

```
// these events are the same as the AddressValidationView listed in the next section, and I think the 'modal' component is no longer used, or should be removed if we indeed decide its deprecated (will required further investigation)

      recordEvent({
        event: 'profile-transaction',
        'profile-section': analyticsSectionName,
        'profile-addressSuggestionUsed': suggestedAddressSelected
          ? 'yes'
          : 'no',
      });

    recordEvent({
      event: 'profile-navigation',
      'profile-action': 'edit-link',
      'profile-section': analyticsSectionName,
    });
```

---

src/platform/user/profile/vap-svc/containers/AddressValidationView.jsx

```
recordEvent({
        event: 'profile-transaction',
        'profile-section': analyticsSectionName,
        'profile-addressSuggestionUsed': suggestedAddressSelected
          ? 'yes'
          : 'no',
      });

    recordEvent({
      event: 'profile-navigation',
      'profile-action': 'edit-link',
      'profile-section': analyticsSectionName,
    });
```

---

src/platform/user/profile/vap-svc/containers/VAPServiceProfileField.jsx

```
    recordEvent({
      event: 'profile-navigation',
      'profile-action': actionName,
      'profile-section': this.props.analyticsSectionName,
    });
```
## Takeaways

My VA product has only these two events:
- `dashboard-navigation`
- `nav-linkslist`
  
Profile has these events:
- Some events that could be migrated to the standard api-call event:
	- `profile-get-connected-apps-started` and similar prefixed -retrieved and -failed
	- `profile-disconnect-connected-app-started`  -successful and -failed

- `go-to-app-directory` could be a standard navigation/va-link based event?
- `profile-navigation` one of the main events for things like external navigation
- `int-checkbox-group-option-click` as long at this keeps a similar structure, then it _should not_ need to migrated I hope
- `int-radio-buitton-option-click` - will be removed soon
- `profile_modal` - we could probably removed this, as it was a way to have a custom event for a specific modal that has been fully rolled out (address update modal) or maybe we can replace it with some custom attributes better suited for GA4?
- `profile-edit-failure` - indicated that a profile editing transaction failed (maybe this should be an api-call event)

View Dependents App
- not really our app but has `disability-view-dependents-load-failed` , `disability-view-dependents-load-success` and `cta-primary-button-click` events that will need to be patched

Platform based code events
- `profile-navigation`
- `profile-transaction`
- `profile-saved`
- `profile-edit-failure`
- these are a bit messier because they have lots of conditional bits that get added to the events to track where the event is occuring and what was happening during that event (cancel button clicked, address validation confirmed, deleted a field, etc) not sure the best way to move these to something more standard

