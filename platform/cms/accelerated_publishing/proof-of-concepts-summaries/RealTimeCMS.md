# Real-time CMS
Two proposed strategies revolve around the concept of exposing the CMS for real-time public access. This means that when a user navigates to a page on the website, the CMS will process that request in order for the page to be rendered.

## Tech summary
Currently, the website exists as a static website, meaning the website is essentially a directory of files that are served from our web host to the user. This type of hosting environment is very fast because no calculations are required. However, in order to produce the website as a static website, a processed we know as the Content Build needs to be run. The files that result from that Content Build then need to be uploaded to the web host. End to end, we refer to this process as a Content Release.

Although once a Content Release is complete all is well, it becomes very difficult to optimize this process efficiently enough as to serve the publishing demands of a large team of CMS editors. For instance, at any given minute a CMS editor may want to publish to the website; then, at the next minute, another editor may want to publish. 

A typical database-driven CMS instance does not have a Content Build - instead, a page's HTML is computed at the time of the request by querying the database. This would mean that when a CMS editor wants to publish their page, they simply publish it in the CMS, and the next time a user navigates to that page, the page will be rendered fresh from the database to reflect the CMS editor's published revisions.

### Coupled vs. Decoupled
As mentioned, two strategies have been proposed where real-time CMS access to central to both. This section distinguished between them. However, the approaches are similar enough to share the key pros and cons in the next section.

1. __"Coupled" Drupal__ - After a user navigates to a page on the website, the CMS itself renders HTML by processing that request, performing any required database operations, then uses Twig PHP templates to render the page for the user. A key advantage of this approach is that it is the most conventional way for a Drupal instance to operate.
2. __Decoupled/Headless Drupal__ - After a user navigates to a page on the website, the user lands on React application, which then fetches data from the CMS and uses the response data to render the page. A key advantage of this approach is that it leverages React, a proven and popular tool for front-end engineering.

## Time estimate
Many sprints!

## Pros
- Ensures real-time publishing by eliminating the front-end build
- Presents opportunity to simplify the CMS integration of the project
- As a bonus, presents opportunity for real-time search experiences of CMS data. This would be useful for apps like Find a VA Form and Resources

## Cons
- Very large architectural change and project refactor
- No longer a static website - we now have to worry about downtime, maintenance, latency, infrastructure, etc.
- Page renders will not be as fast as current website
- ATO

## Coupled Prood of Concept Findings
### Description
As discussed in #5138 , the aim of this task is to determine whether https://design.va.gov/ / Formation can be used (practically) in a coupled Drupal build system.

### Process
To make the above determination, I installed the following projects:

- https://www.drupal.org/project/uswds_base (base theme that uses the USWDS design system)
- https://www.drupal.org/project/components (allows for component based templating)
- https://www.drupal.org/project/simplify_menu (tool for outputting menus in twig templates)

After installing the above, I created a child theme of uswds_base (vagov_uswds), and used npm (in our new theme) to install the VA design system. The VA design system (Formation) allows for two usage methods:
1. Piecemeal (developer picks and chooses partials, and compiles as needed)
2. Distilled (minified Formation css file)

I chose the latter approach, as the minified file is still smaller than the primary css file va.gov uses, at present. I then created a gulpfile to help with development workflow:
- `copy-formation-css` : copies the minified Formation styles file from `node_modules` into theme (will make it easy to capture changes after npm updates
- `copy-formation-img` : copies Formation style system image from `node_modules` into theme
- `sass` : compiles scss files / partials into css files named in theme libraries file for frontend use.
- `watch` : provides real time compilaton of scss -> css

Next, I updated the `docroot/sites/development.services.yml` and `docroot/sites/default/settings/settings.lando.php` to prevent Twig caching (allows for templating changes to be viewed with out drush cr).

I then created the following components:

- `docroot/themes/custom/vagov_uswds/components/header`
-- Copied directly from va.gov page html - isn't part of VA design system, but helpful for creating VA.gov coupled implementation look and feel.
- `docroot/themes/custom/vagov_uswds/components/sidenav`
-- A very basic implementation of this pattern: https://design.va.gov/components/sidenav

### Takeaways
- We will need to plug in menu data to `sidenav` component / top level nav in `header` component
- We can grab navigation data for sidenav, et.al via [simplify_menu](https://www.drupal.org/project/simplify_menu) project:
```
{# Get menu items #}
{% set items = simplify_menu('main') %}

{# Iterate menu tree #}
<nav class="navigation__items">
  {% for menu_item in items.menu_tree %}
    <li class="navigation__item">
      <a href="{{ menu_item.url }}">{{ menu_item.text }}</a>
    </li>
  {% endfor %}
</nav>
```
- We will need to refine the workflow some more, integrating gulp commands in package.json, so we can do `npm run gulp -- watch` type stuff, and perhaps consider integrating theme level npm commands into project root package.json.
- Blocks / page actions menus are all accessible / clickable in our new theme.
- I only targeted a system level page for this test (e.g. `/pittsburgh-health-care`)

### Testing done
Visual

### Test environments
https://pr5168-gni0ie6qqhptaqjc8o8xfqe8qft5jga4.ci.cms.va.gov

https://cms-gni0ie6qqhptaqjc8o8xfqe8qft5jga4.ci.cms.va.gov

https://web-gni0ie6qqhptaqjc8o8xfqe8qft5jga4.ci.cms.va.gov

### Screenshots
![image](https://user-images.githubusercontent.com/2404547/116461033-c1051180-a835-11eb-9d14-d8f7793c1bb4.png)
![image](https://user-images.githubusercontent.com/2404547/116461468-48eb1b80-a836-11eb-8e76-2fb6218d8b95.png)
![image](https://user-images.githubusercontent.com/2404547/116461487-4e486600-a836-11eb-8f9d-3bb15bacb07a.png)
