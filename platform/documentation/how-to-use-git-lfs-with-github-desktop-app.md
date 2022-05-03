# How To Use Git LFS With GitHub Desktop App 

A Git LFS tutorial for non-technical users.

## Download GitHub Desktop App 

Visit the [GitHub Desktop site](https://desktop.github.com/) and download for macOS or Windows.

Install the application on your computer.

## Access the va.gov-team repository 

1. Select **Clone a repository from the internet**
1. In the popup window that appears (`Clone a repository`), select **GitHub.com > Sign In**
1. Sign in with your GitHub username and password
1. Using the search bar within GitHub desktop app, look for the `va.gov-team` repository. It will be under the `department-of-veterans-afairs` organization (full name `department-of-veterans-affairs/va.gov-team`). 
Note: If you are not seeing the `department-of-veterans-affairs` organization, you may need to confirm that you are in fact [a member of the org](https://github.com/orgs/department-of-veterans-affairs/people) _you don't actually need to be a member of the org to access and clone the va.gov-team repo; it is a public repo_
1. Select the blue button that says **Clone `department-of-veterans-affairs/va.gov-team`**
1. Choose where you want the files from the repo to save on your computer (**Local Path**) and select **Clone**
1. Wait for the repo to clone to your computer — it's big! It's going to take a while! That's why we use Git LFS to cut down on the size of the repo as much as we can.

## Initialize Git LFS 

1. Once the repo is cloned you should see a pop up that says `Initialize Git LFS`
1. Select `Initialize Git LFS`

## Make sure your clone of the repo is up to date 

- In GitHub Desktop app, select `Fetch origin` (in the top dark gray bar of the application) 
- If your clone of the repo is out of sync, a blue shaded alert will appear — for example if it is out of sync by 1 commit it will say "Pull 1 commit from the origin remote: The current branch (main) has a commit on GitHub that does not exist on your machine"
- Select the blue button `Pull origin` 

## Upload your file 

- Make sure you have your file named properly (lower-case-with-dashes), and drag it into the folder on your desktop where you want it to be in GitHub (open your desktop version of the `va.gov-team` repo and navigate through the repo to the appropriate folder on your desktop. The repo is located on your computer wherever you told GitHub Desktop app you wanted to save it.) 
- In GitHub desktop app, if you made this change while "Current Branch" was set to "main", you should see the following message: "Push commits to the origin remote - You have 1 local commit waiting to be pushed to GitHub"
- Click the blue "Push origin" button 

## More info 

- [Repo guidelines](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/orientation/repo-guidelines.md)
- Further explanation of [how and why we use Git LFS](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/orientation/repo-guidelines.md#file-storage-and-large-files)
