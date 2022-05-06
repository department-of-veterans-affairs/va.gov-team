# TestRail Test Plans

**[Work In Progress]**

## Who should read this?

- QA Engineer
- Anyone who's "deputized" to create Test Plans.

## Why create a Test Plan?

The only way to create cross-device/-browser Test Runs is to first create a Test Plan.  When you Add a Test Run into a Test Plan, you can select **Configurations** for the Run -- configurations are devices/browsers you define for your TestRail project.  For PTEMS projects, PTEMS-QA has already created Configurations.

## Getting started

### VSP basic procedure

The basic procedure for creating a Test Plan in TestRail is shown in [Platform's Create a Test Plan video](https://drive.google.com/file/d/1v5KIR3KJHkypfm7QJje0O7xo6aEtcCaC/view). That video shows you how to create an empty Test Plan.

## Usage Tips

A Test Plan can house 2 or more related Test Runs.  There's often a need to re-run some tests on the same product/feature.  Instead of filling out the same info every time you create a repeat Test Run, create a Test Plan to document the common info, then just Add a new Run to the Plan.

### Add related Test Runs

When you creating/editing a Test Plan, click **Add Test Run(s)** at the top of the right panel.  TestRail will add a Test Run on the left panel, below your Plan's Description field, ready for you to rename, select Test Cases, and assign.  No need to input Description/References unless this info differs from the Plan's Description.

![TestRail Test Plan Add Runs screenshot][tr-plan-add-run]

### Select Configurations for Test Runs

After adding a Test Run to your Test Plan, click **Configurations** next to the Test Run title, then select the devices/browsers you need for the Run.


[tr-plan-add-run]: ../images/tr-plan-add-run.png
