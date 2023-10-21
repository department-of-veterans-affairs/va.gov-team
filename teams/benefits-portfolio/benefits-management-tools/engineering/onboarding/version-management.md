# Version management
* The docs mention using `nvm` for node version management and `rvm` for managing your ruby version
* I would suggest using `asdf` to manage both. At the very least, I would avoid using `rvm` and pick `rbenv` instead, as whenever the supported version of ruby has changed for `vets-api`, I've had to manually compile the new ruby version. **Note:** The instructions below assume that you chose to use `asdf`. The platform documentation should prove helpful if you chose other version management packages

## Setting up asdf
If you decide to go the `asdf` route, the below should help:

### Installing asdf
#### Preliminary steps
**Note:** I would highly recommend installing Homebrew and the XCode Command Line Tools before proceeding

[asdf Docs](https://asdf-vm.com/guide/getting-started.html#community-supported-download-methods)

If you have done the above, you can run:
```sh
brew install asdf
```

### asdf Plugins
asdf relies on a plugin system, so adding compatibility for new languages is as simple as adding a new plugin. We will need the `nodejs` and `ruby` and ruby plugins
```sh
# nodejs
asdf add nodejs

# ruby
asdf add ruby
```

### Installing required `nodejs` version
We have the needed plugins, but that doesn't get us the versions of Ruby or Node.js that we want. You can refer to [the docs](https://depo-platform-documentation.scrollhelp.site/developer-docs/setting-up-your-local-frontend-environment#Settingupyourlocalfrontendenvironment-Step1:SetupNode) to determine the exact versions of Node.js and Yarn that you will need, but we are going to assume for our purposes that you will need Node.js `v14.15.0` and Yarn `v1.19.0`.
1. Install `nodejs 14.15.0`
```sh
# This will also install `npm` for us
asdf install nodejs 14.15.0
```

2. Set the version
To set version `14.15.0` as your global version, you can run the below:
```sh
asdf global nodejs 14.15.0
```
In theory `asdf` should be able to pick up the existing `.nvmrc` and `.ruby-version` files and automatically use the versions specified in each of those files, but you can also choose to set them up manually using the below instrucations
You can choose to not use 14.15.0 as your global version and only use it in the directory you are in currently by running:
```sh
asdf local nodejs 14.15.0
```
This will add a `.tool-versions` file to the directory you run the command above in. **Important:** Make sure not to check `.tool-versions` into `git`

3. Install `yarn 1.19.1`
We will also need to install `yarn`
```sh
npm i -g yarn@1.19.1
```

### Installing required `ruby` version
[Relevant vets-api docs](https://github.com/department-of-veterans-affairs/vets-api/blob/master/docs/setup/native.md#installing-rvm)  
Next we need to get the required version of Ruby installed. You can refer to  [.ruby-version](https://github.com/department-of-veterans-affairs/vets-api/blob/master/.ruby-version) in the `vets-api` repository to get the required version, we are going to assume that you want to install `v3.2.2`:
```sh
asdf install ruby 3.2.2
```
The same instructions in reference to configuring the version of ruby we just installed as either `local` or `global` from the last section still apply, we are going to assume you want to install it globally this time however:
```sh
asdf global ruby 3.2.2
```

### Installing new versions of Node.js or Ruby
You should be able to reuse the instructions from above, but in general these are the commands you should run:
```sh
asdf install <plugin> <version>

asdf global <plugin> <version>
```
