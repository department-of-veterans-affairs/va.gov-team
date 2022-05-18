## Content API Architecture

This document servces as an overall architecture for the Content API.  

All of the charts on this page are found [here](https://lucid.app/lucidchart/f1cefdcf-ce82-4098-b2dd-54dbfb88b629/edit?page=1m8~RFLkFJUx#)

## High Level

The following is a high-level diagram showing the flow of HTML, content, and assets between Drupal and the React Application.

![ContentAPI _ ContentApp - High Level](https://user-images.githubusercontent.com/121603/134935807-36380213-ba3d-4715-a3b0-719615265f09.png)

This High level option include CloudFront as a CDN in front of the assets and CMS API

![ContentAPI _ ContentApp - High Level w CloudFront](https://user-images.githubusercontent.com/121603/134935935-e08fe667-b49e-42a4-b8ac-1144fd7b1a82.png)

Here is a possible design with combination Public API and Static Build / Incremental Build server.

![ContentAPI _ ContentApp - Incremental Builds with CloudFront](https://user-images.githubusercontent.com/121603/134936037-e9034d7d-daeb-413d-a19a-fb623141a01d.png)

### API Gateway

The JSON response between Drupal and the React App will flow through an API Gateway. The API Gateway will be the only public exposure to the internet.  The API Gateway will provide a single entry point for any react applications and external systems integrating with the CMS.  At this time, we are planning on using Lighthouse as the API Gateway to expose Drupal to the internet.

### JSON:API

The [JSON:API specification](https://jsonapi.org/) will be used to communicate between Drupal and any other system.  Drupal provides a JSON:API interface within core.  Other modules enhance the API by adding configuration and features.  

These modules include but are not limited to:
* [jsonapi_extras](https://www.drupal.org/project/jsonapi_extras)
* [jsonapi_includes](https://www.drupal.org/project/jsonapi_include)
* [jsonapi_resources](https://www.drupal.org/project/jsonapi_resources)

## Content API

The Content API architecture is in charge of providing a performant API.  This API will be broken into products to allow API consumers a logical interface.  

The exact architecture is still under evaluation, but the following options are being considered:

Option with serving the content directly from Drupal.

![ContentAPI _ ContentApp - Content API](https://user-images.githubusercontent.com/121603/133816575-e6873bc2-37f7-4045-93ed-fb89b78b24e8.png)

Option with a NodeJS layer between Drupal and the API Gateway.

![ContentAPI _ ContentApp - Content API](https://user-images.githubusercontent.com/121603/133816435-2dc6dee3-cc46-4dfe-920f-399dc1cbc284.png)

### Content Build

The [content_build](https://github.com/department-of-veterans-affairs/content-build) job requires an html page container for each route a React application owns.  An entry must be created in the [registry](https://github.com/department-of-veterans-affairs/content-build/blob/main/src/applications/registry.json) to publish the application.  

### React Build

The React application(s) structure is still to be determined.  An SDK will be created to abstract the API from the front-end developers.  A reference application will also be supplied showing best-practice implementations of the Content API.

Here is a possible front end architecture using and SDK and shared React components

![ContentAPI _ ContentApp - Possible Front End Architecture](https://user-images.githubusercontent.com/121603/134936253-8ac3a1b4-88bc-42dc-912f-1213ba9bcb44.png)

The Code organization could either be a single "Content App" repository where different pages would have their own routes, or each React app could be independant being either part of the vets-website codebase or it's own repository.

![ContentAPI _ ContentApp - Possible Front End Architecture (1)](https://user-images.githubusercontent.com/121603/134936829-139ef5f0-a85f-4b41-81ac-6f4c884a6aef.png)

![ContentAPI _ ContentApp - Possible Front End Architecture (2)](https://user-images.githubusercontent.com/121603/134936908-e2173163-5af6-42a9-8eca-d87f883b8d68.png)


### CMS Assets

Drupal will send the file assets to a public S3 bucket.  File assets include Drupal media entities but not js/css.  

The asset file names will be versioned based upon the entity id and entity revision_id.  This will ensure uniqueness with files and allowing the editors to publish new files to s3 without updating existing images.

![ContentAPI _ ContentApp - CMS Assets](https://user-images.githubusercontent.com/121603/133815752-4dd4e520-d1e5-454a-8878-ee6c9c820752.png)

