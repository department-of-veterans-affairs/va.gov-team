# [Git Large File Storage (LFS)](https://git-lfs.github.com/)
* **Who** uses it?
* **What** is it? 
  * Git Large File Storage (LFS) replaces large files with text [pointers](https://github.com/git-lfs/git-lfs/blob/master/docs/spec.md#the-pointer) inside Git, while storing the file contents on a remote server like GitHub.com or GitHub Enterprise.
    * Example pointer:
      ```
      version https://git-lfs.github.com/spec/v1
      oid sha256:7db207c488a5957f0b88aec97489a60e73f2b8d310586c2502f3388af7f76091
      size 42
      ```
* **When** do we use it?
  * When a file extension matches one of the extensions specified in the [repo’s config file (`.gitattributes`)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/.gitattributes)
  * As of 2019-12-31, the file types tracked by Git LFS in the `va.gov-team` repo are:
    * `.m4v`
    * `.pdf`
    * `.sketch`
    * `.pptx`
    * `.psd`
    * `.ai`
* **Where** do we learn more about it?
  * [Git LFS Home Page](https://git-lfs.github.com/)
  * [Git LFS Docs](https://github.com/git-lfs/git-lfs/tree/master/docs?utm_source=gitlfs_site&utm_medium=docs_link&utm_campaign=gitlfs#git-lfs-documentation)
  * [Git LFS Tutorial](https://github.com/git-lfs/git-lfs/wiki/Tutorial)
  * [Configuring Git Large File Storage](https://help.github.com/en/github/managing-large-files/configuring-git-large-file-storage)
* **Why** do we use it? 
  * >[We recommend repositories be kept under 1GB each. - GitHub](https://help.github.com/en/github/managing-large-files/what-is-my-disk-quota#file-and-repository-size-limitations)
  * >[Repositories have a hard limit of 100GB. - GitHub](https://help.github.com/en/github/managing-large-files/what-is-my-disk-quota#file-and-repository-size-limitations)
    * As of 2019-12-31, the [`vets.gov-team` repo](https://github.com/department-of-veterans-affairs/vets.gov-team) is ~23 GB.
    * As of 2019-12-31, the [`va.gov-team` repo](https://github.com/department-of-veterans-affairs/va.gov-team) is ~12 GB.
  * There’s a [strict limit of files exceeding 100 MB in size](https://help.github.com/en/github/managing-large-files/what-is-my-disk-quota#file-and-repository-size-limitations) (or 25 MB if uploaded via the browser). 
  * According to [Netflix](https://help.netflix.com/en/node/87), "Watching TV shows or movies on Netflix uses about 1 GB of data per hour for each stream of standard definition video, and up to 3 GB per hour for each stream of HD video." That means that downloading the `vets.gov-team` repo uses more data than streaming a 3-hour HD movie. 
  * There is a direct relationship between how big the repo is and how long it takes to download.
  * The larger the repo, the less feasible it is to clone the repo over a slower network (coffee shop/hotspot/EDGE/etc).
  * The larger the repo, the more likely you are to need to delete files/folders from your computer to make room for the repo.
* **How** do we use it? 
  1. Run `git lfs install` to install Git LFS in the repo
  1. Specify which file types you'd like to track
     * Option 1: Run `git lfs track "*.{EXTENSION}"` (for example: `git lfs track "*.psd"`)
     * Option 2: Directly edit the `.gitattributes` file
     * Note: Run `git add .gitattributes` to make sure `.gitattributes` is tracked by Git
  1. There is no step three. Just commit and push to GitHub as you normally would.
     * Example workflow:
       ```
       git add file.psd
       git commit -m "Add design file"
       git push origin master
       ```

### :warning: Warnings :warning:
#### Files uploaded via the GitHub website will not be uploaded as LFS files. When those files are pulled from GitHub to your local machine, you may notice an error that looks like this:
  ```
  Encountered 1 file(s) that should have been pointers, but weren't:
          designs/mock.psd
  ```
  ![github-direct-upload-of-pdf-file](https://user-images.githubusercontent.com/6130520/71635188-f79e2e00-2be7-11ea-9545-a379a225b514.gif)
#### You may have trouble migrating LFS files from one repo to another because the pointer may not work in the new repo. 
#### Different repos might have different LFS configs, so the same file might be an LFS file in one repo, and a normal file in another. 
* For example, in the [`vets.gov-team` config](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/.gitattributes), `*.mp4` files are LFS files, but in the [`va.gov-team` config](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/.gitattributes), `*.mp4` files are not LFS files.
#### It's possible for the LFS config to change over time
* That means an existing file that was uploaded as an LFS file may remain an LFS file, but new files of that type would not be LFS files. 
