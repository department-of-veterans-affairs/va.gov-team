#  Ruby and Rails Version Norms

[`vets-api`](https://github.com/department-of-veterans-affairs/vets-api) and [`gids`](https://github.com/department-of-veterans-affairs/gibct-data-service/) depend on `ruby` and `rails`. The source of truth for current dependency versions can be found in the application's respective `Gemfile`.

### Major vs Minor versions

**Minor versions**

Typically, minor version upgrades are less impactful and require a simpler upgrade path than major versions.

We will always prioritize minor version updates as time allows, especially if they contain bugfixes pertinant to our platform.

**Major versions**

Major version upgrades should be considered carefully. In general, we will aim to keep our dependencies as close to the latest stable versions available for both [`ruby`](https://www.ruby-lang.org/en/downloads/) (currently `2.6.x`) and [`rails`](https://github.com/rails/rails/releases) (currently `6.0.x`), however it is considered preferable to maintain a lag time when upgrading to the absolute latest versions.

While we may not always be at the latest major versions but we will make every reasonable effort to plan and implement incremental updates immediately upon release.

When upgrading a dependency, applications should be thoroughly tested and edge cases considered.

## Security Patches
If a security patch is released, the VSP engineering teams will always prioritize work in order to update the vulnverable library. 

GitHub provides [automated security updates](https://help.github.com/en/github/managing-security-vulnerabilities/about-security-alerts-for-vulnerable-dependencies) which are very helpful to maintain awareness of existing vulnerabilities. 
