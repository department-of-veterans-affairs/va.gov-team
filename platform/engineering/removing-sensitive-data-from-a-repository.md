[![image](https://user-images.githubusercontent.com/6130520/71724766-1c1c2500-2df7-11ea-805d-c0be983a0596.png)](https://help.github.com/en/github/authenticating-to-github/removing-sensitive-data-from-a-repository)
>**Warning: Once you have pushed a commit to GitHub, you should consider any data it contains to be compromised.** If you committed a password, change it! If you committed a key, generate a new one.

>This article tells you how to make commits with sensitive data unreachable from any branches or tags in your GitHub repository. However, it's important to note that those commits may still be accessible in any clones or forks of your repository, directly via their SHA-1 hashes in cached views on GitHub, and through any pull requests that reference them. You can't do anything about existing clones or forks of your repository, but you can permanently remove cached views and references to the sensitive data in pull requests on GitHub by contacting GitHub Support or GitHub Premium Support.

### Options

#### [Using BFG Repo-Cleaner](https://rtyley.github.io/bfg-repo-cleaner/)

#### [Using `git filter-branch`](https://help.github.com/en/github/authenticating-to-github/removing-sensitive-data-from-a-repository#using-filter-branch)
* The git filter-branch command and the BFG Repo-Cleaner rewrite your repository's history, which changes the SHAs for existing commits that you alter and any dependent commits. Changed commit SHAs may affect open pull requests in your repository. We recommend merging or closing all open pull requests before removing files from your repository. - https://help.github.com/en/github/authenticating-to-github/removing-sensitive-data-from-a-repository
* 

##### Resources
* https://help.github.com/en/github/authenticating-to-github/removing-sensitive-data-from-a-repository
