# Version management
**Note:** This document is not intended to be a replacement for [the platform docs](https://depo-platform-documentation.scrollhelp.site/getting-started/setting-up-va-gov-locally), but as a supplement to help simplify dealing with version management for Ruby and Node.js.

## Motivations
* The docs mention using `nvm` for node version management and `rvm` for managing your ruby version
* I would suggest using `asdf` to manage both. At the very least, I would avoid using `rvm` and pick `rbenv` instead, as whenever the supported version of ruby has changed for `vets-api` in the past, I've had to manually compile the new ruby version.
* **Note:** The instructions below assume that you chose to use `asdf`. Refer back to [the platform docs](https://depo-platform-documentation.scrollhelp.site/getting-started/setting-up-va-gov-locally) if you chose other version management packages

## Setting up asdf
[asdf documentation](https://asdf-vm.com)

If you decide to go the `asdf` route, the below should help:

### Installing asdf
#### Prerequisites
**Note:** I would highly recommend installing Homebrew and the Xode Command Line Tools before proceeding

[asdf installation docs](https://asdf-vm.com/guide/getting-started.html#community-supported-download-methods)

If you have done the above, you can run `brew install asdf` to install `asdf`.
```sh
brew install asdf

echo -e "\n. \"$(brew --prefix asdf)/libexec/asdf.sh\"" >> ~/.zshrc
echo -e "\n. \"$(brew --prefix asdf)/etc/bash_completion.d/asdf.bash\"" >> ~/.zshrc
```

### asdf Plugins
`asdf` relies on a plugin system, so adding compatibility for new languages is as simple as adding a new plugin. We will need the `nodejs` and `ruby` plugins
```sh
# nodejs
asdf plugin add nodejs

# ruby
asdf plugin add ruby
```

### Installing the required `nodejs` version
We have the needed plugins, but that doesn't get us the versions of Ruby or Node.js that we need. You can refer to [the platform docs](https://depo-platform-documentation.scrollhelp.site/developer-docs/setting-up-your-local-frontend-environment#Settingupyourlocalfrontendenvironment-Step1:SetupNode) to determine the exact versions of Node.js and Yarn that are required, but we are going to assume for our purposes that you want to install Node.js `v14.15.0` and Yarn `v1.19.0`.
#### Install `nodejs 14.15.0`
```sh
# This will also install `npm` for us
asdf install nodejs 14.15.0
```

#### Set the version
To set `14.15.0` as your global version (used system-wide), you can run the following:
```sh
asdf global nodejs 14.15.0
```

**Note:** In theory, `asdf` should be able to pick up the existing `.nvmrc` and `.ruby-version` files and automatically use the versions specified in each of them (the specified versions of `ruby` and `nodejs` need to be installed manually for this to work), but you can also choose to set them up manually by running:
```sh
asdf local nodejs 14.15.0
```

Keep in mind that this will add a file called `.tool-versions` to the directory you ran the above command in. **Important:** Make sure not to check `.tool-versions` into `git`.

#### Install `yarn 1.19.1`
We will also need to install `yarn` via `npm`
```sh
npm i -g yarn@1.19.1
```

### Installing the required `ruby` version
[Relevant vets-api docs](https://github.com/department-of-veterans-affairs/vets-api/blob/master/docs/setup/native.md#installing-rvm)  
Next, we need to get the required version of Ruby installed. You can refer to  [.ruby-version](https://github.com/department-of-veterans-affairs/vets-api/blob/master/.ruby-version) in the `vets-api` repository to get the exact version, but we are going to assume that you want to install version `3.2.2`:
```sh
asdf install ruby 3.2.2
```

The same comments from the last section in reference to configuring the version of `ruby` we just installed as either `local` or `global` still apply, but we are going to assume you want to install it globally:
```sh
asdf global ruby 3.2.2
```

### Installing new versions of `nodejs` or `ruby`
You should be able to reuse the instructions from above, but in general these are the commands you should run:
```sh
asdf install <plugin> <version>

asdf global <plugin> <version>
```

### Other helpful `asdf` commands
#### Get list of versions for all packages
```sh
asdf list
```

#### Get list of versions of a specific plugin
```sh
asdf list <plugin>
```

#### List installed plugins
```sh
asdf plugin list
```

#### Uninstall a version of a plugin
```sh
asdf uninstall <plugin> <version>
```
