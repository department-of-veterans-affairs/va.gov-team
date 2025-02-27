# Testing in vets-website
## How to get the vets-website test covergage report
1. Within vets-website open a terminal
2. Run the following...
   ```
   yarn test:coverage-app claims-status
   ```
3. This will run and open a new web window with the percentage of test coverage for all of `claims-status`. It also gives the abiltity to look into specific folders and files to see their percentage of test coverage
    ![Screenshot 2025-02-27 at 8 59 20 AM](https://github.com/user-attachments/assets/02b597e5-baeb-42d5-b858-d2b2171b3307)

## How to run a specific test in unit tests
1. In the code, go to the specific test that you want to run and add .only to it
   ```
   // Example
   it.only('test', () => {
   ```
3. Within vets-website open a terminal
4. Run the following...
   ```
   yarn test:unit <TEST_FILE_PATH> --log-level=error

   // Example:
   yarn test:unit src/applications/claims-status/**/*.unit.spec.jsx --log-level=error
   ```

## How to run a specific file in unit test
1. Within vets-website open a terminal
2. Run the following...
   ```
   yarn test:unit <TEST_FILE_PATH> --log-level=error

   // Example:
   yarn test:unit src/applications/claims-status/**/*.unit.spec.jsx --log-level=error
   ```

## How to run all unit tests
1. Within vets-website open a terminal
2. Run the following...
   ```
   yarn test:unit --app-folder claims-status --log-level=error
   ```

## How to run cypress tests
1. Within vets-website open a terminal
2. Run the following...
   ```
   // Use this command to run the tests in the terminal
   yarn cy:run --spec 'src/applications/claims-status/tests/e2e/*'

   // Use this commang to view the tests on a web browser
   yarn cy:open
   ```
