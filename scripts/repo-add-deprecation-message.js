const csvtojson = require('csvtojson');
const fs = require('fs');
const querystring = require('querystring');
const path = require('path');

const getRepoName = (url) => {
  const splitUrl = url.split('/');
  const indexOfRepoName = splitUrl.indexOf('department-of-veterans-affairs') + 1;

  return splitUrl[indexOfRepoName];
}

const addToLog = (message) => {
  fs.appendFile('repo-deprecation.log.csv', `${message} \n`, function (err) {
    if (err) return console.log(err);
  });
}

const removeLogFile = () => {
  if (fs.existsSync('repo-deprecation.log.csv')) {
    fs.unlink('repo-deprecation.log.csv', (err) => {
      if (err) throw err;
      console.log('repo-deprecation.log.csv was deleted');
    });
  }
};

const deprecateRepo = async () => {
  removeLogFile();
  addToLog('index, file, result');

  const json = await csvtojson().fromFile('repo-deprecation.csv');

  json.forEach((fileInfo, i) => {
    const repoName = getRepoName(fileInfo.url);
    const filePath = fileInfo.url.split('master/')[1];
    const convertQueryStringToPath = Object.keys(querystring.parse(filePath))[0];
    const fullFilePath = `../../${repoName}/${convertQueryStringToPath}`;

    if (fs.statSync(fullFilePath).isFile() && path.extname(fullFilePath) === '.md') {
      fs.writeFile(fullFilePath, `# ${fileInfo.messagingToBeAdded}`, (err) => {
        if(err) {
          return addToLog(`${i}, ${fullFilePath}: ${err}`);
        }

        addToLog(`${i}, ${fullFilePath}, has been modified`);
      });
    } else {
      addToLog(`${i}, ${fullFilePath}, does not exist or is not a markdown file`);
    }
  });
}

deprecateRepo();