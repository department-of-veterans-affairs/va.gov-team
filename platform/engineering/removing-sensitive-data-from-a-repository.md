# Checklist for removing PII from a documentation repo
1. Back up repo
1. Identify all file(s) to be removed
1. Fetch everything from remote
1. Have an admin enable [**Require linear history**](https://help.github.com/en/github/administering-a-repository/requiring-a-linear-commit-history) setting on `master` branch so GitHub will prevent merge commits from being pushed to the protected branch. 
   * We enable linear history because the [GitHub help center page about removing sensitive info](https://help.github.com/en/github/authenticating-to-github/removing-sensitive-data-from-a-repository), it says, "Tell your collaborators to rebase, not merge, any branches they created off of your old (tainted) repository history."
1. Notify people about the upcoming purge and freezing of `master`
1. Freeze `master` branch so nobody introduces new changes to `master` while the repo is being cleaned
   * Have an admin [enable **Restrict who can push to matching branches** setting](https://help.github.com/en/github/administering-a-repository/enabling-branch-restrictions) on `master` branch while repo is being cleaned.
   * Note: The branch protection rules to freeze `master` will not apply to admins because admins can edit the branch protection rules, so it may be necessary to temporarily remove admin access for some people. 
1. **During off hours**, run `git filter-branch ...` to remove sensitive content from repo history
   * Syntax: `git filter-branch --force --index-filter "git rm --cached --ignore-unmatch ${FILE-1-PATH} ${FILE-2-PATH} etc" --prune-empty --tag-name-filter cat -- --all`
   * Example: `git filter-branch --force --index-filter "git rm --cached --ignore-unmatch foo/bar.md .env" --prune-empty --tag-name-filter cat -- --all`
   * Note: `git filter-branch` is reportedly slow, so running this during a night/weekend should cause the least disruption. As of 2020-01-17, it took ~30 minutes to complete for the `va.gov-team` repo
1. [Enable **Allow force pushes** setting](https://help.github.com/en/github/administering-a-repository/enabling-force-pushes-to-a-protected-branch) so the cleaned history can be pushed to Github
1. Unfreeze `master` branch so whoever ran `git filter-branch` can push up the cleaned repo
   * Have an admin [disable **Restrict who can push to matching branches** setting](https://help.github.com/en/github/administering-a-repository/enabling-branch-restrictions) on `master` branch while repo is being cleaned.
1. Run `git push origin --force --all` 
1. Have an admin disable **Allow force pushes** setting on `master` branch so nobody else force pushes the tainted history back into the repo.
1. Notify people that repo has been cleaned and `master` has been unfrozen
1. Update [purge log](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/platform/engineering/purge-log.md)
1. Contact GitHub support to permanently remove cached views and references to the sensitive data in pull requests

___

### 

[![image](https://user-images.githubusercontent.com/6130520/71724766-1c1c2500-2df7-11ea-805d-c0be983a0596.png)](https://help.github.com/en/github/authenticating-to-github/removing-sensitive-data-from-a-repository)
>**Warning: Once you have pushed a commit to GitHub, you should consider any data it contains to be compromised.** If you committed a password, change it! If you committed a key, generate a new one.

>This article tells you how to make commits with sensitive data unreachable from any branches or tags in your GitHub repository. However, it's important to note that those commits may still be accessible in any clones or forks of your repository, directly via their SHA-1 hashes in cached views on GitHub, and through any pull requests that reference them. You can't do anything about existing clones or forks of your repository, but you can permanently remove cached views and references to the sensitive data in pull requests on GitHub by contacting GitHub Support or GitHub Premium Support.


### :warning: Warning :warning:
* You have to contact [GitHub Support](https://support.github.com/contact) or [GitHub Premium Support](https://enterprise.githubsupport.com/hc/en-us) to permanently remove cached views and references to the sensitive data in pull requests on GitHub. - https://help.github.com/en/github/authenticating-to-github/removing-sensitive-data-from-a-repositor
* GitHub recommends merging or closing all open pull requests before removing files from a repository with `git filter-branch` or BFG Repo-Cleaner. - https://help.github.com/en/github/authenticating-to-github/removing-sensitive-data-from-a-repositor
* BFG Repo-Cleaner recommends making a backup of a repo before using the BFG Repo-Cleaner. - https://rtyley.github.io/bfg-repo-cleaner/#usage
* GitHub recommends telling collaborators to rebase, **not merge**, any branches they created off of the old (tainted) repository history because one merge commit could reintroduce some or all of the tainted history. - https://help.github.com/en/github/authenticating-to-github/removing-sensitive-data-from-a-repository#using-filter-branch
  * There is a [**Require linear history** branch setting](https://help.github.com/en/github/administering-a-repository/requiring-a-linear-commit-history) that can be used to prevent people from merging branches into the purged repo. 


##### Resources
* https://help.github.com/en/github/authenticating-to-github/removing-sensitive-data-from-a-repository
  * Using `git filter-branch`: https://help.github.com/en/github/authenticating-to-github/removing-sensitive-data-from-a-repository#using-filter-branch
  * Using BFG: https://help.github.com/en/github/authenticating-to-github/removing-sensitive-data-from-a-repository#using-the-bfg
* https://help.github.com/en/github/administering-a-repository/enabling-force-pushes-to-a-protected-branch
* https://help.github.com/en/github/administering-a-repository/requiring-a-linear-commit-history
* https://rtyley.github.io/bfg-repo-cleaner/
* https://git-scm.com/docs/git-filter-branch
* https://medium.com/@ersel_aker/deleting-sensitive-information-from-github-repository-acf0502e773b
* https://jorin.me/clean-git-history/
* https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/platform/engineering/purge-log.md
* https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/policies-work-norms/sensitive-guidance.md#documentation-of-va-systems-and-architecture
