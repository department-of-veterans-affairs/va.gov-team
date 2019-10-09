const csvtojson = require('csvtojson');
const fs = require('fs');
const querystring = require('querystring');
const path = require('path');
const recursive = require("recursive-readdir");

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

const findAndReplaceUrl = (json, files) => {
  files.forEach((file) => {
    const fileContent = fs.readFileSync(file).toString();

    if (
      fileContent.includes(
        'https://github.com/department-of-veterans-affairs/vets.gov-team/'
      ) ||
      fileContent.includes(
        'https://github.com/department-of-veterans-affairs/va.gov-vfs-teams/'
      )
    ) {
      json.forEach(async item => {
        try {
          if (fileContent.includes(item.oldUrl)) {
            const replacedContent = fileContent.replace(new RegExp(item.oldUrl, 'g'), item.newUrl);

            fs.writeFileSync(file, replacedContent);

            addToLog(`${file}, ${item.oldUrl}, ${item.newUrl}, true, none`);
            console.log('Replacement results:', file, 'for ', item.newUrl);
          } else {
            addToLog(`${file}, ${item.oldUrl}, ${item.newUrl}, url doesn't exist in file, none`);
          }

        }
        catch (error) {
          addToLog(`${file}, ${item.oldUrl}, ${item.newUrl}, false, ${error}`);
          console.error('Error occurred:', error);
        }
      })
    }
  });
};

const replaceUrlLink = async () => {
  removeLogFile();
  addToLog('file, oldUrl, newUrl, result, error');

  const json = await csvtojson().fromFile('repo-url-replace.csv');
  const folders = ['../platform', '../products', '../docs', '../teams']

  folders.forEach(folderName => {
    recursive(folderName, function (err, files) {
      findAndReplaceUrl(json, files)
    });
  });
}

replaceUrlLink();
