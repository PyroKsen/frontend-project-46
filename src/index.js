
const fs = require('fs');
const path = require('path');

const parseData = (filepath) => {
  const extension = path.extname(filepath);
  const content = fs.readFileSync(filepath, 'utf-8');

  switch (extension) {
    case '.json':
      return JSON.parse(content);
    default:
      throw new Error(`Неподдерживаемый формат файла: ${extension}`);
  }
};

module.exports = parseData;
