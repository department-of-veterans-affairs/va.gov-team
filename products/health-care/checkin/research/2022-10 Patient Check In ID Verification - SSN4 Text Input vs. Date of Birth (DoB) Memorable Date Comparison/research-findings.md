# Research Findings - 2022-10 Patient Check In ID Verification - SSN4 Text Input vs. Date of Birth (DoB) Memorable Date Comparison

## Key findings

From 10/11/2022 - 10/20/2022 in the PCI product, LoROTA with SSN4 (DSC: Text input) had an average of 98.29% success rate with Veterans, while LoROTA with DoB (DSC: Memorable date) had an average of 97.03% success rate with Veterans.

The point of diminishing return was realized rather quickly, and on 10/19/2022 the Modernized Check-In Experience Team decided to enable the LoROTA with DoB (DCS: Memorable date) feature to 100% of Veterans.

![197267759-8873dcdf-5796-49c2-86c6-6f05da838df4](https://github.com/user-attachments/assets/97b5f89f-b289-4dac-85af-6a38c9fb4ec0)

[PCI ID Verification SSN4 Text Input vs DoB Memorable Date Comparison.xlsx](https://github.com/user-attachments/files/16442775/PCI.ID.Verification.SSN4.Text.Input.vs.DoB.Memorable.Date.Comparison.xlsx)

While the LoROTA with DoB (DSC: Memorable date) feature's success rate with Veterans is slightly lower compared to its predecessor, it has 3 times as many more chances to fail than its predecessor. I.e., LoROTA with SSN4 (DSC: Text input) is one field, and LoROTA with DoB (DSC: Memorable date) is three fields. LoROTA with DoB (DSC: Memorable date) does have a slight upward trend line, and therefore it's possible it gets closer to its predecessor's 98.29% average success rate.

In addition, it's plausible that LoROTA with DoB (DSC: Memorable) has a lower success rate because it's not as easy for Veterans to recall compared to their last four of their Social Security Number. However, this finding is unproven.

LoROTA with DoB (DSC: Memorable date) did require a bug fix for an issue related to its error handling. ([Difficult to prevent form submission when component has error](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/1263).) For example, on 9/21/2022 the LoROTA with DoB (DSC: Memorable date) feature had a 83% success rate, and on 9/22/2022 a 51% success rate. The error handling issue was resolved locally in the PCI product on 10/11/2022 and re-enabled with 10% of Veterans. The error handling issue as of 10/21/2022 has not been resolved within the VA DSC library.
