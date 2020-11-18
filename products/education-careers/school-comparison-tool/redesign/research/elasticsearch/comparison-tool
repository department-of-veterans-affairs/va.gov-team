### Research effort to leverage Elasticsearch for Comparison Tool Profile search Results

#### Elasticsearch Overview
Elasticsearch is an open source JSON-Based Search engine that searches indexed data quickly. It can be installed on Windows, Mac, or Linux and can be run as a Docker container. Elasticsearch can be configured to work with Ruby on rails applications relatively easily by using the `elasticsearch-rails` & `elasticsearch-model` gems. 


#### Using Elasticsearch for comparison tool searches
Although Elasticsearch is technically being used for the main site search of va.gov, we will not be able to leverage that instance of it for the comparison tool search since that instance is a part of the search.gov implementation being used. In order for us to take advantage of Elasticsearch within the comparison tool, we will need to install and host an instance of Elasticsearch somewhere. Elasticsearch is relatively easy to install and configure locally, but we would need to coordinate the hosting details for staging and production environments.


#### Setup
After bundling the Elasticsearch gems, we will have to slightly modify our ActiveRecord models by specifying that we want them to be Elasticsearch models where applicable. For those same models, we will also have to specify we want to use Elasticsearch callbacks so when one of these models is updated, the indexed data will be updated as well. Elasticsearch automatically defines indexes on the models we specify, but also gives the option for us to define our own against different attributes in the ActiveRecord model if we choose to on these models. 

#### Elasticsearch Queries
Given this flexibility in choosing which models we want to be indexed and how we want to index them, we should be able to define our searches to maintain and likely improve the current search functionality and performance. Initial performance testing using Elasticsearch proved it to be effective querying large data sets for specific information. When testing searches using a basic rails application with 45000 auto generated records to be searched, the results for the query which was matching against several fields were returned with no noticeable delay using both the auto generated indices and custom defined ones.


#### Elasticsearch Features
Elasticsearch searches can be defined in many ways. There are many types of queries available, the queries described above were matching a keyword against multiple rails fields using the Elasticsearch `multi_match` query. There are several types of queries we may want to use when defining our searches. Additionally, properties can be added to queries for further fine tuning of searches. For example, to handle minor typos the “fuzziness” property can be added to the Elasticsearch query. When searching that same data set of 45000 records, I was able to match records when querying with search terms that contained minor mistakes. There are many properties available which we would have to evaluate more closely as more specific requirements for the search update are available.


#### Example of an Elasticsearch query:

```
  def self.search_institution(query)
    self.search({
      query: {
        bool: {
          must: [
          {
            multi_match: {
              query: query,
              fields: [:institution, :location, :rating, :tags],
              fuzziness: "AUTO",
              prefix_length: 2
            }
          },
          {
            match: {
              open: true
            }
          }]
        }
      }
    })
  end
```
