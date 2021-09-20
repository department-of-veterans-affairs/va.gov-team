## Content API Architecture

This document servces as an overall architecture for the Content API.  

All of the charts on this page are found [here](https://lucid.app/lucidchart/f1cefdcf-ce82-4098-b2dd-54dbfb88b629/edit?page=1m8~RFLkFJUx#)

## High Level

The following is a high-level diagram showing the flow of HTML, content, and assets between Drupal and the React Application.

![ContentAPI _ ContentApp - High Level](https://user-images.githubusercontent.com/121603/133799992-9f8975c1-be9c-4e63-ba51-0582e54b941c.png)

### API Gateway

The JSON response between Drupal and the React App will flow through an API Gateway. The API Gateway will be the only public exposure to the internet.  The API Gateway will provide a single entry point for any react applications and external systems integrating with the CMS.

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

![ContentAPI _ ContentApp - Content API (1)](https://user-images.githubusercontent.com/121603/133816575-e6873bc2-37f7-4045-93ed-fb89b78b24e8.png)

Option with a NodeJS layer between Drupal and the API Gateway.

![ContentAPI _ ContentApp - Content API](https://user-images.githubusercontent.com/121603/133816435-2dc6dee3-cc46-4dfe-920f-399dc1cbc284.png)

### Content Build

The [content_build](https://github.com/department-of-veterans-affairs/content-build) job requires an html page container for each route a React application owns.  An entry must be created in the [registry](https://github.com/department-of-veterans-affairs/content-build/blob/master/src/applications/registry.json) to publish the application.  

### React Build

The React application(s) structure is still to be determined.  An SDK will be created to abstract the API from the front-end developers.  A reference application will also be supplied showing best practice implementations of the Content API.

Possible structure of React applications.

![ContentAPI _ ContentApp - Possible Front End Architecture](https://user-images.githubusercontent.com/121603/133818504-097a5f48-18c6-4e9c-9f52-85b90752e9d2.png)

Here is a front-end architecture where a single React application is used for all content apps.

![ContentAPI _ ContentApp - Possible Front End Architecture](https://user-images.githubusercontent.com/121603/133818727-da9d4653-59f8-49a5-bbd0-3a756258d706.png)

Another architecture where each appliation is separate and uses a shared SDK and Components.

![ContentAPI _ ContentApp - Possible Front End Architecture](https://user-images.githubusercontent.com/121603/134020876-fd8667a5-0175-446d-a96e-a6c08e736d7a.png)


### CMS Assets

Drupal will send the file assets to a public S3 public.  File assets include Drupal media entities but not js/css.  

The asset file names will be versioned based upon the entity id and entity revision_id.  This will ensure uniqueness with files and allowing the editors to publish new files to s3 without updating existing images.

![ContentAPI _ ContentApp - CMS Assets](https://user-images.githubusercontent.com/121603/133815752-4dd4e520-d1e5-454a-8878-ee6c9c820752.png)

