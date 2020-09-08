# IntelliJ and RubyMine Setup
## Set up project to work with correct version of Ruby:

### IntelliJ Users:
1. Go to Project Structure (```Command + ;``` or ```File > Project Structure```)
2. Navigate to ```Module```
3. Delete vets-api as a module
4. Hit the plus sign to add new module
5. Select Ruby
6. Set your setting as
   - Module Name: ```vets-api```
   - Content Root: ```Path-to-project-directory/```
   - Module file location: Same as content root
7. Once that is created set the Ruby Version to the same as the project version (2.6.6)

### RubyMine Users:

Your Project should already be set up as a Ruby Project but to make sure you are using the right version of Ruby:
1. Go to ```Preferences``` (```Command + ,```)
2. Go to ```Languages & Frameworks > Ruby SDK and Gems```
3. Make sure Ruby version 2.6.6 is selected

## Set up RuboCop

RuboCop is a static code analyzer and formatter that is used in vets-api

1. Go to ```Preferences``` (```Command + ,```)
2. Navigate to ```Editor > Inspections```
3. Navigate to ```Ruby > Gems and gem management``` and make sure RuboCop is checked
4. In the RuboCop settings make sure `Use ‘standard’ gem` is unmarked

Now RuboCop should be highlighting errors and warnings as you make changes to the vets-api codebase

### Set up RuboCop Fix Layout keybinding

[IntelliJ Setup RuboCop as an external tool](https://www.jetbrains.com/help/idea/robocop.html#rubocop_external_tool):
1. Go to ```Preferences``` (```Command + ,```)
2. Navigate to ```Tools > External Tools```
3. Hit the plus icon to add new external tool
4. Set the options as
   - Name: Fix Layout
   - Group: RuboCop
   - Program: Path to RuboCop executable
     - (For Example: ```path-to-project-directory/vendor/cache/ruby/2.6.0/bin/rubocop``` 
     or where your ruby gems get downloaded)
   - Arguments: ```-c path-to-project-directory/.rubocop.yml -x $FilePath$```
   - Working Directory: ```$FileDir$```
5. Hit Okay and then Apply
6. Back in the ```Preferences``` navigate to ```Keymap```
7. Find the newly created external tool under ```External Tools > RuboCop > Fix Layout```
8. Click it and then select ```Add Keyboard Shortcut```
9. Set the keyboard shortcut (```Control + Option + L``` or could be whatever you want)
10. Hit Okay and Apply Changes

### RuboCop tips

Once IntelliJ is set up with RuboCop you should be able to format files by using your new keyboard shortcut

Others ways to run RuboCop is by
- ```right-clicking > select RuboCop > select Fix Layout```
- Use ```Command + Option + Shift + I``` too bring up the inspection menu then type RuboCop and either run it on a subset of files or the whole project
