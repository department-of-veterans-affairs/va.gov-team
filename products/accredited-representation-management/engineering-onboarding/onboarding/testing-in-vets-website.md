# Testing in vets-website

## How to Get the vets-website Test Coverage Report for Our Different Services

1. Within vets-website, open a terminal
2. Run the following:
   ```
   yarn test:coverage-app <SERVICE_NAME>
   ```
3. <SERVICE_NAME> Example Inputs:

- representative-search (Find a Representative)
- accreditation (Form 21A)
- personalization/profile (VA Profile)
- accredited-representative-portal (Accredited Representative Portal)
- representative-form-upload (Representative Form Upload)
- representative-appoint (Appoint a Representative)

4. This will run and open a new web window with the percentage of test coverage for all of that given service. It also gives the ability to look into specific folders and files to see their percentage of test coverage.
   ![Screenshot 2025-02-27 at 8 59 20 AM](https://github.com/user-attachments/assets/02b597e5-baeb-42d5-b858-d2b2171b3307)

## How to Run a Specific Test in Unit Tests

1. In the code, go to the specific test that you want to run and add .only to it
   ```
   // Example
   it.only('test', () => {
   ```
2. Within vets-website, open a terminal
3. Run the following:

   ```
   yarn test:unit <TEST_FILE_PATH> --log-level=error

   // Example:
   yarn test:unit src/applications/representative-appoint/**/*.unit.spec.jsx --log-level=error
   ```

## How to Run a Specific File in Unit Tests

1. Within vets-website, open a terminal
2. Run the following:

   ```
   yarn test:unit <TEST_FILE_PATH> --log-level=error

   // Example:
   yarn test:unit src/applications/personalization/profile/tests/components/account-security/AccountSecurity.unit.spec.jsx --log-level=error
   ```

## How to Run All Unit Tests

1. Within vets-website, open a terminal
2. Run the following:
   ```
   yarn test:unit --app-folder representative-appoint --log-level=error
   ```

## How to Run Cypress Tests

1. Within vets-website, open a terminal
2. Run the following:

```
// Use this command to run the tests in the terminal
yarn cy:run --spec 'src/applications/<SERVICE_NAME>/tests/e2e/*'

// Example:
yarn cy:run --spec 'src/applications/representative-appoint/tests/e2e/*'

// Use this command to view the tests on a web browser
yarn cy:open
```
