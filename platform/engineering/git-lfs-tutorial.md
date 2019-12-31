# Git LFS
* **Who** uses it?
* **What** is it? 
  * [Git Large File Storage (LFS)](https://git-lfs.github.com/) replaces large files with text pointers inside Git, while storing the file contents on a remote server like GitHub.com or GitHub Enterprise.
* **When** do we use it?
  * When a file extension matches one of the extensions specified in the [repo’s config file (`.gitattributes`)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/.gitattributes)
  * As of 2019-12-31, those extensions are:
    * `.m4v`
    * `.pdf`
    * `.sketch`
    * `.pptx`
    * `.psd`
    * `.ai`
* **Where** do we learn more about it?
  * [Git LFS Home Page](https://git-lfs.github.com/)
  * [Git LFS Docs](https://github.com/git-lfs/git-lfs/tree/master/docs?utm_source=gitlfs_site&utm_medium=docs_link&utm_campaign=gitlfs#git-lfs-documentation)
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
