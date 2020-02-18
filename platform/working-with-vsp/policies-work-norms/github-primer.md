# Github Primer

<hr/>

* [What is Github?](#what-is-github)
* [Github web interface tour](#github-web-interface-tour)
* [Basic Github workflow](#basic-github-workflow)
* [Common activities](#common-activities)
  * [Edit a file](#edit-a-file)
  * [Create a file](#create-a-file)
  * [Upload files](#upload-files)
  * [Create a folder](#create-a-folder)
  * [Delete a file](#delete-a-file)
  * [Delete a folder](#delete-a-folder)
  * [Create a pull request](#create-a-pull-request)

<hr/>

## What is Github?

* Github is a version control system for files and documents, notably for code. But we also use it store and share other project documents. And we use it to manage our agile workflow.


## Github web interface tour

[Visit this page](https://github.com/department-of-veterans-affairs/va.gov-team) to see the UI features below:

* **Branch dropdown**
  * The master branch is always the source of truth for your product folder.
  * Make sure you're on the master branch. Switch if you're not.
* **Create new file button** - add a new file
* **Upload files button** - upload files
* **Folder files and sub-folders**
  * Folders have to contain at least one file.
  * README.md files are automatically displayed at the root of each folder. If you don't have a README.md file in a folder, the screen will just show the list of files and sub-folders.

[Visit this page](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/orientation) to see the UI features below:

* **Find file button** - an alternate way to search
* **History button** - Shows the history of the folder or file you're currently viewing


## Basic Github workflow

1. You make a commit, which means adding, editing, or deleting one or more files.
1. Github creates a new branch for you.
1. You create a pull request (PR) asking to merge your new branch into the master branch.
1. Another team member reviews and approves your PR.
1. Your commit is merged into the master branch and is visible to everyone.

    * A **commit** is a set of changes from the previous version of the repository.
    * A **branch** is a way to isolate a set of commits you want to make to the repository.
    * A **pull request** allows for review and approval of a branch before it is merged into the master branch of the repository.


## Common activities

### Edit a file

1. Navigate to file.
1. Select the file.
1. Click the pencil icon to start editing.
1. Make a change using [Markdown](https://guides.github.com/features/mastering-markdown/).
    * Click **Preview** to see what the content will look like.
1. To save your file, scroll to the bottom of the screen to start [creating a pull request](#create-a-pull-request).


### Create a file

1. If you like writing on your computer, do it there and then [upload the file](#upload-files).
1. Or write in the Github interface by click **Create new file**.
1. Name your file.
    * Use lowercase names and dashes between words.
1. Write your content using [Markdown](https://guides.github.com/features/mastering-markdown/).
1. To save your file, scroll to the bottom of the screen to start [creating a pull request](#create-a-pull-request).


### Upload files

1. Click **Upload files**.
1. Drag files into the box (or click **choose your files**).
    * **Note**: be sure the files are named correctly before uploading them.
1. To upload the file(s), scroll to the bottom of the screen to start [creating a pull request](#create-a-pull-request).


### Create a folder

Let's say you want to create a new subfolder called "mynewfolder" inside the existing "superbigfolder" folder. To create the folder, you'll create a README.md file first and tell it that it lives inside the "mynewfolder" folder.

1. Navigate to the "superbigfolder" folder.
1. Click **Create new file**.
1. In the name field, type
```mynewfolder/README.md```.
1. Add some content using [Markdown](https://guides.github.com/features/mastering-markdown/).
    * You can later delete this file if you don't need it (or you can modify it).
1. To save the file and create the new folder, scroll to the bottom of the screen to start [creating a pull request](#create-a-pull-request).
1. When the pull request is merged for you, you'll see the README file inside the new "mynewfolder" folder.


### Delete a file

1. Navigate to the file you want to delete.
1. Click the **trash can icon**
1. To delete the file, scroll to the bottom of the screen to start [creating a pull request](#create-a-pull-request).


### Delete a folder

To delete a folder, you first need to delete all the documents in it. Once you do that, the folder will disappear.

If you have to create a pull request for each file you want to delete, this could take a lot of time. It's easier to delete a folder and its contents via the command line. Ask a teammate for help using the command line.



### Create a pull request    
1. Create, edit, upload, or delete a file.
1. Scroll to the bottom of the screen to start creating a pull request.
1. Note that Github has automatically created a new branch name for you, e.g., ```ehuntdsva-patch-3```.
1. Add a title and (optional) comment to describe your change.
1. Click **Propose file change**.
1. Make sure you're comparing the master branch to your new branch. If it says you're comparing master to master or your branch to your branch, select the master branch from the 1st dropdown and the new branch Github created from the 2nd dropdown.
1. If the changes look good, click **Create pull request**.
1. Click **Create pull request** again.
1. Assign someone to review your pull request. Choice of reviewer depends on what you're trying to do. If you're not sure, ask a teammate.
1. Github will check that the file can be merged (has no conflicts) and then notifies your reviewer.
1. When your reviewer receives the Github notification, they'll accept your pull request.
1. After that, if you return to your pull request, it will show that it's been merged.
    * The pull request screen will ask if you want to delete the pull request branch. Do it - it's no longer needed.

*Notes*:
* DSVA team members, DSVA detailees, and Internal contractors have *the ability to save directly to the master branch.*
* To avoid potential conflicts with other people editing the same file, we recommend you create a pull request instead of saving directly to master.
* When the pull request tells you there are no conflicts, you can merge it yourself without asking for a reviewer.
