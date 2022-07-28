# Prod DB Migration Approval Process

## Purpose:

This process document intends to outline the steps to be taken in order to obtain approval and subsequently run a rake task against the production database.

## Requirements:

- Any script based modifications which need to be made to the postgres server MUST be written as rake tasks to ensure that any unique rails data handling is correctly utilized when making changes to the data that rails interacts with.
- Team must have a devops engineer on the team with Prod SSM Vets-API Server access
    - If this isn’t possible it is suggested to coordinate with Platform leadership in order to obtain assistance with running the rake task in production.
- PR for rake task is approved by requesting teams engineering lead AND someone from the Console Services team
- All required documents are included in the PR prior to approval, approving authority confirms all documents (except prod change proof) are within the PR.
- Rake task created within the vets-api repo in the [production rake task folder](https://github.com/department-of-veterans-affairs/vets-api/tree/master/rakelib/prod) as a PR
- Ensure your rake task is Idempotent and transactional
    - Idempotent: Ensure we are able to run them over and over again and get to the same end state
    - Transactional: If it fails, the transaction is rolled back and no damage is done
- In the Rake Task PR:
    - Must answer the following in PR:
        - What could happen if this script does not go as expected?
        - What mitigating tasks will you perform to reduce the risk?
            - For example:
            - running a smaller subset of the larger task and validating results
            - ghost run the task so that any changes aren’t applied but can be validated
        - What is your backout plan?
            - Link to rake tasks, scripts, or add commands to reverse changes
    - Pointer to where in the logs the changes can be retrieved for audit purposes
    - Produce test results from a lower environment version of the rake task being run
    - Produce sample proof change occurred successfully (to be added after completed, not required before PR is approved and merged)

## Optional Components:

- specs for rake tasks (optional)
    - **Example**: write it as a class (instead of script) test the class
    - **Example**: artificially create some in progress forms and test the class
    - **Example**: report results

## Steps to follow:

1. Create Rake task in proper folder
2. Complete all rake task documentation such as answering required questions
3. Test rake task locally
    1. Document results of tests with proof of data output in PR
4. Run rake task in dev
    1. Document results of tests with proof of data output in PR
5. Obtain proper PR approvals
6. Run rake task in staging
    1. Document results of tests with proof of data output in PR
7. Schedule and announce prod database rake task in platform architecture slack channel
8. Devops engineer assigned to task logs into production SSM vets-api instance, runs rake task with assistance from creator of the task
9. Perform validations, report results in the PR
10. Announce in platform architecture slack channel the completion of the prod database change
