# Vets Website Architecture

Welcome to the VA digital services platform front-end overview. The goal of this article is to provide a high level overview of our front end architecture to get you oriented with the [vets-website](https://github.com/department-of-veterans-affairs/vets-website) repository.

The overall architecture for Vets.gov is comprised of an API backend written in Ruby on Rails ([vets-api](https://github.com/department-of-veterans-affairs/vets-api)) and a static front-end, written in HTML, CSS, and Javascript (`vets-website`). There's no server-side rendering or processing for the front-end; the build process compiles everything into static resources which are served to users.

## Build process

The build process for this is controlled by a tool called [Metalsmith](http://www.metalsmith.io/), which is a pluggable Node.js static site generator. In general, everything in Metalsmith is a plugin, so if you're looking for specific parts of the build process, expect to check out a plugin or two. We use Metalsmith because it's flexible and because it's Javascript based, it's easy to integrate with the rest of our tools.

The build process has two primary kinds of functionality that it processes: static content pages and Javascript applications. Most of Vets.gov consists of content that lives in Markdown files and is converted into HTML by a Metalsmith plugin. There are shared templates and other enhancements to make this content easier to structure. This content lives in `content/pages`, which also provides the basic URL structure of the site.

## Javascript applications

Javascript applications are the other type of functionality in vets-website. These applications are written in [React](https://reactjs.org/) and [Redux](https://redux.js.org/) and live in `src/applications/` in `vets-website`. For each app you'll find a `manifest.json` file that contains application information. You'll find the root url of the application, which you can use to navigate to that application on the site. These applications also usually have client-side routes, so opening that root url may allow you to click to other pages that are fully client-side, and not based on pages in `content/pages`.

If you're a developer, most of your time will likely be spent working on a React application. We use React because it's widely used by front end developers and provides a good balance of performance and approachability. We also use Redux to manage application state, also because it's commonly used with React and fits most of the applications on Vets.gov well. We use [React Router](https://reacttraining.com/react-router/) for client-side routing and [Webpack](https://webpack.js.org/) as a build tool, both of which are the *de facto* standards in the Javascript world. For styles we use [Sass](https://sass-lang.com/) and for dependency management we use [Yarn](https://yarnpkg.com/en/).

## Design system

You will also find that our visual components and site-wide styles live in their own [design system](https://design.va.gov). This design system is based on the [US Web Design System](https://designsystem.digital.gov/), with some additional modifications by our team. As part of that design system, we provide a set of React components covering common patterns, which is [published to npm](https://www.npmjs.com/package/@department-of-veterans-affairs/formation). You'll likely use these components to make your apps accessible and consistent with the rest of Vets.gov.

## Further reading

The most helpful next place to start is probably the tutorials for building a basic React app and a content page.

<hr>

Back: [Vets Website Introduction](README.md)

Next: [Vets Website Development](development.md)
