# Metalsmith local JSON cache decision

In [#22861](https://app.zenhub.com/workspaces/vsp---frontend-tools-5fc9325744944e0015ed1861/issues/department-of-veterans-affairs/va.gov-team/22861) we investigated two approaches to increasing the local GraphQL cache size beyond 500mb. One method is to continue storing everything in a single JSON file, but write and read it incrementally instead of as a single chunk. The other is to store each page in a separate JSON file. The size limit of either method is much higher.

### All pages in single cache file (streaming)
To put 1gb of data into a single JSON file I opted to write each page (nodeQuery entity) to the file, one at a time. The other queries are smaller so we can stringify each query in one chunk.

```
function saveCacheFile(cacheFilePath, pages) {
  const outputStream = fs.createWriteStream(cacheFilePath);
  outputStream.write('{\n  "data": {\n');

  const queries = Object.keys(pages.data);
  queries.forEach((query, queryIndex) => {
    const props = pages.data[query];

    outputStream.write(`"${query}": `);
    if (query === 'nodeQuery') {
      // Write each entity separately to avoid 500mb string length limit
      outputStream.write('{\n"entities": [\n');
      props.entities.forEach((entity, entityIndex) => {
        outputStream.write(JSON.stringify(entity, null, 2));
        if (entityIndex < props.entities.length - 1) outputStream.write(',');
        outputStream.write('\n');
      });
      outputStream.write(']\n},\n');
    } else {
      // These queries are smaller so we can just stringify them for simplicity
      outputStream.write(JSON.stringify(props, null, 2));
      if (queryIndex < queries.length - 1) outputStream.write(',');
      outputStream.write('\n');
    }
  });

  outputStream.write('}\n}\n');
  outputStream.end();
}
```

When it comes to reading the 1gb JSON file, I found that the [JSONStream](https://www.npmjs.com/package/JSONStream) module handles it well:
```
async function loadCacheFile(cacheFilePath) {
  return new Promise(resolve => {
    const stream = fs.createReadStream(cacheFilePath, { encoding: 'utf8' });
    const parser = JSONStream.parse('*').on('data', data => {
      resolve({ data });
    });
    stream.pipe(parser);
  });
}
```

### Each page in separate cache file

For comparison, here's the implementation to store each page in a separate JSON file:

```
function createJSONCacheFiles(cacheDir, drupalPages) {
  const pageCachePath = path.join(cacheDir, DRUPAL_PAGE_CACHE_DIR);
  const otherCachePath = path.join(cacheDir, DRUPAL_OTHER_CACHE_DIR);
  fs.emptyDirSync(cacheDir);

  // Store each nodeQuery entity in a separate file to avoid hitting size limit
  drupalPages.data.nodeQuery.entities.forEach(page => {
    const fullPath = path.join(pageCachePath, page.entityId);
    fs.outputJsonSync(fullPath, page, { spaces: 2 });
  });

  // The other queries are smaller so we can store the entire query in a file
  Object.keys(drupalPages.data)
    .filter(queryName => queryName !== 'nodeQuery')
    .forEach(queryName => {
      const fullPath = path.join(otherCachePath, queryName);
      fs.outputJsonSync(fullPath, drupalPages.data[queryName], { spaces: 2 });
    });
}
```

And here's the code to load the individual JSON cache files into memory:

```
function loadJSONCacheFiles(cacheDir) {
  const pageCachePath = path.join(cacheDir, DRUPAL_PAGE_CACHE_DIR);
  const otherCachePath = path.join(cacheDir, DRUPAL_OTHER_CACHE_DIR);
  const result = { data: { nodeQuery: { entities: [] } } };

  // Load page query cache, one file per page
  const files = fs.readdirSync(pageCachePath);
  files.forEach(file => {
    const contents = fs.readJsonSync(path.join(pageCachePath, file));
    result.data.nodeQuery.entities.push(contents);
  });

  // Load other query caches, one file per query
  const otherFiles = fs.readdirSync(otherCachePath);
  otherFiles.forEach(file => {
    const contents = fs.readJsonSync(path.join(otherCachePath, file));
    result.data[file] = contents;
  });

  return result;
}
```

## JSON cache benchmarks (48k nodes, 1gb cache size, average of 5 runs)

See implementation for both methods above.

### Single cache file for all pages (streaming)
Read: 26 seconds
Write: 11 seconds

### Separate cache file for each page
Read: 9 seconds
Write: 14 seconds

### Summary and recommendations
Based on these local benchmarks, the single file JSON caching approach reduces write time by 3 seconds but increases read time by 15 seconds when compared to the multiple file approach. The time difference between the two approaches is negligible in the context of the entire content build, which takes about 40 minutes with 48k nodes.

It's possible that as the cache grows we could eventually run into the maximum file size. Most likely this is at least 2tb which is well beyond the amount of data we will ever have in the cache. Here is [some discussion](https://dsva.slack.com/archives/CBU0KDSB1/p1619113584334000) on this topic.

The single file method is what we use currently so there are fewer code changes required. Also, for operations like clearing the cache or checking cache state, the single file is simpler. For those reasons I favor the **single file approach**.

### Potential improvements
Both methods write and read files synchronously. There are potential speed improvements to be had with an async approach. Also, I haven't benchmarked other JSON streaming read approaches beyond the JSONStream module. It's possible a different approach would be faster.

However, since the total execution time is low for both methods, I recommend focusing optimization effort on other parts of the build process first. Notably the "Apply layouts" step takes about 16 minutes and the "Parse a virtual DOM from every .html file" step takes about 10 minutes.

Another useful optimization would be to add a `--drupal-no-local-cache` option to disable the local cache entirely (see [discussion with Nick's suggestion](https://dsva.slack.com/archives/CBU0KDSB1/p1619113584334000)). While the cache is useful for local testing, it's not needed during Jenkins builds. These builds only run once and can take care of everything in memory without writing or reading from the filesystem cache. I created [a ticket](https://app.zenhub.com/workspaces/vsp---frontend-tools-5fc9325744944e0015ed1861/issues/department-of-veterans-affairs/va.gov-team/23645) to add this option.