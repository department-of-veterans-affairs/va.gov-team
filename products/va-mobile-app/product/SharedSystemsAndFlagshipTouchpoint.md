This meeting is to discuss and address any dependencies between the VA Mobile Shared Systems teams and the Flagship teams that are using their systems.

**Agenda/Notes**

01/23/24
* **Discuss implementation of Design System components into the Flagship app (Kelly)**
* **Discuss Flagship building new components for the DS - Personalization (Kelly)**
* **Governance between teams on accessibility requirements (Matt)**
* **Test account management and data prepping process (Adam)**
  * Baseline:
      * Mobile does not own test accounts as they are managed and owned by VA which includes creation and modification - Mobile reliance on VA 
      * Given Mobile is using Va.gov test users we know Va may modify their data without us knowing - which can break existing tests or delay new project testing
      * Test account management will require involving different VA areas and their processes (VAOS for Appts, Prescriptions for RX, etc) for new test accounts or requests to modify existing test accounts to meet Mobile's testing needs
      * QA can help identify what is reliant on the Team PM to coordinate with VA when needing test accounts / test data modification 
         * QA has no relationship with VA and unuaware of the process to accopmlish changes
         * Long Term QA Platform expectation is Test Account Management and Data prep would be done outside of QA 
      * Though Global is not working on specific H&B projects, Globals testing needs will involve test accounts with H&B needs like Personalization currently does 
  * Problem 
      *  Not owning our own test accounts or means to modify test data leads to Mobile's reliance to VA processes and timing for test account needs 
         * Need to know VA PO process to create test accounts
         * Need to konw VA PO process to modify test accounts
   * Proposal
      * Include in Step 2 test account / data conversations
      * Collaborate with main OCTO POs in documenting their area's test account creation and modification process 
      * Renew discussion with Rachel on getting our own test accounts and our own process to modify the data 
 

     


01/09/24
* Q1 Planning plan
