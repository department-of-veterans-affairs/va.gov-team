To execute the script, place the `EventCrawler.js` file in the root directory of the vets-website project. Then, in your terminal, specify the path to the project directory and an output filename as arguments like so:
```js
node EventCrawler.js src/applications/combined-debt-portal output.md
node EventCrawler.js src/applications/financial-status-report output.md
```
Alternatively, if you place the `EventCrawler.js` file inside a specific project directory, you can simply use a period (.) to represent the current directory instead of specifying the full path:

```js
node EventCrawler.js . output.md
```
Remember to replace `output.md` with your desired output file name. (markdown only)
