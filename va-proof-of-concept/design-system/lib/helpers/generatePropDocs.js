const fs = require('fs');
const path = require('path');

function formatType(type) {
  if (type.name === 'arrayOf') {
    return `[${formatType(type.value)}]`;
  }
  if (type.name === 'shape') {
    const propList = Object.keys(type.value).map((key) => {
      return `&nbsp;&nbsp;${key}: ${formatType(type.value[key])}`;
    }).join(',<br/> ');

    return `{ <br/>${propList} }`;
  }

  return type.name;
}

function formatProps(props) {
  return Object.keys(props).map((key) => {
    const val = props[key];

    return {
      name: key,
      description: val.description,
      required: val.required ? 'Yes' : 'No',
      type: formatType(val.type),
      defaultValue: val.defaultValue
    };
  });
}

function generateProps(entity) {
  if (entity.isComponent) {
    const srcPath = entity.variants().items()[0].context.componentSourcePath;
    if (srcPath) {
      const fullPath = path.join(path.dirname(entity.viewPath), srcPath);
      const reactDocs = require('react-docgen');

      return formatProps(reactDocs.parse(fs.readFileSync(fullPath)).props);
    }

    return {};
  }

  return {};
}

module.exports = generateProps;
