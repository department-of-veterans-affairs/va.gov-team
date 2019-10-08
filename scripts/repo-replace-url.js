const csvtojson = require('csvtojson');
const fs = require('fs');
const querystring = require('querystring');
const path = require('path');
const recursive = require("recursive-readdir");
const replace = require('replace-in-file');

const getRepoName = (url) => {
  const splitUrl = url.split('/');
  const indexOfRepoName = splitUrl.indexOf('department-of-veterans-affairs') + 1;

  return splitUrl[indexOfRepoName];
}

const addToLog = (message) => {
  fs.appendFile('repo-replace-url.log.csv', `${message} \n`, function (err) {
    if (err) return console.log(err);
  });
}

const removeLogFile = () => {
  if (fs.existsSync('repo-replace-url.log.csv')) {
    fs.unlink('repo-replace-url.log.csv', (err) => {
      if (err) throw err;
      console.log('repo-replace-url.log.csv was deleted');
    });
  }
};

const replaceUrlLink = async () => {
  removeLogFile();
  const json = await csvtojson().fromFile('repo-url-replace.csv');

  recursive("../", function (err, files) {
    files.forEach((file) => {
      json.forEach(async item => {
        try {
          const results = await replace({
            files: file,
            from: item.oldUrl,
            to: item.newUrl,
          });

          debugger
          console.log('Replacement results:', results);
        }
        catch (error) {
          debugger
          console.error('Error occurred:', error);
        }
      })
    });
  });
}

replaceUrlLink();
