### Associated Research: 

**What even is elasticsearch?**
Elasticsearch is an open source JSON-Based Search engine that searches indexed data quickly. Elasticsearch documentation has been pretty helpful in evaluating the tool.

**Installing and running Elasticsearch:**
Different options exist for installation, including homebrew for mac which I used for general evaluation and exploration of the tool. Setup is pretty straightforward. Elasticsearch can be installed on Windows, Mac, or Linux.

**Elasticsearch gems**
For my evaluation of elasticsearch with a rails application, I used the: 
`elasticsearch-rails` & `elasticsearch-model` gems. 
Currently, our rails apps that we commonly use do not have either of these gems bundled with them, so if we chose to use elasticsearch with GIDS, they would need to be added to the `Gemfile`.

**Setting up Elasticsearch Indexes**
Once the Elasticsearch gems have been bundled we need to tell the models (the ones we want to index at least) that they are going to be indexed using elasticsearch.

Generically this looks something like:

```
class ModelName < ApplicationRecord
	Include Elasticsearch::Model
	Include Elasticsearch::Model::Callbacks
end
```

Where the ModelName is an application record, but also a model to elasticsearch. Additionally, the callbacks are added so that anytime an instance of that ModelName are modified/deleted, the indexed data gets updated along with it.

From there, indexes can be defined in the rails application on the fields we want to use as it makes sense to optimize our search result sets.

However, this research is mostly related to standing up a new instance of elasticsearch vs leveraging the instance that is currently being used for the main va.gov site search.


**Usage of Elasticsearch for the va.gov main site search.**

An elastisearch instance must be run somewhere in order for it to be used to quickly index search results.
Elasticsearch can be run locally or remotely on “Elastic cloud”. Additionally, it can be run as a docker container. The install includes several binaries including a CLI option. Currently an instance of elasticsearch is being run via search.gov for the main site search.

It would be beneficial to know if we have (or could get) permissions to modify the existing elasticsearch instance configuration to add additional indexes, I am operating under the assumption that this would be possible. If we cannot or are not allowed to use/modify the existing elasticsearch instance to accommodate our comparison tool indexing needs, then we will have to setup our own elasticsearch instance in a separate environment, assuming we wish to leverage elasticsearch. This would also mean that our usage of the new elasticsearch index would be limited to the comparison tool search and not the site wide search.


The main site search located at https://va.gov leverages https://search.gov, which is built using Elasticsearch and takes advantage of its indexing features. As indicated on the https://search.gov/blog/. The main site search hits a search.gov API to return results.
 
![image](https://user-images.githubusercontent.com/48804834/97908519-ce24c600-1d14-11eb-9303-e7e8cb8b27fb.png)



**Adding Results to a search.gov site**

By creating an account on search.gov and associating it with a site, in our case va.gov, a user is able to add and edit site search configurations using an "admin center" page after logging in to search.gov, which acts as a front end to add new sites to the search results.

The search configurations and indices are managed by the search.gov team and in order for us to include search results and optimize indexing for comparison tool institutions, we will first need to add our pages to be indexed via a pragmatic approach to the search.gov admin page. After the results are added to the main search, we would then have to coordinate with the search.gov team to optimize the indices and deploy the changes making our search content and any updates live.

There appears to be a way to add pages/subdomains in bulk via an [XML Sitemap](https://search.gov/manual/sitemaps.html), which would need to be generated to reflect each of the GIDS institution profile pages to be searched. This sitemap is limited to 50MB or 50,000 URLs, whichever comes first.

This may or may not prove to be a practical approach to adding results to the main site.
