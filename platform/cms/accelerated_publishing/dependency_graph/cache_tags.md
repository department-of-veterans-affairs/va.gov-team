> Discover and document whether related entities may be retrieved from Drupal's cache tags system

I spent some time working through the Cache API and here are my findings in relation to using them as a Dependency mgmt.

Verdict: Using the Drupal Cache API is impracticable to find dependcies.

There currently isn't an existing API to query cache tags and get the related items.  There is a path to build a new contrib module that could provide this service but it's mostly like a 5 point story as there is complication using different query backend (database vs memecache).

The current cache system uses a checksum pattern to invalidate tags.  This means it stores which tags are invalidated and when a cache item is loaded, it checked if it contains a tag that has been invlidated.  It's quite complex and very fast but it means there isn't an easy way to query which cache items contain which tags.

The reason I wanted to explore the cache tag options was due to an assumption there was a persistent tracking of cache items to cache tags but I found that assumption to be incorrect.

Even if we could query the cache item by cache tags, the list would be incomplete because there isn't always a cache item for every entity

