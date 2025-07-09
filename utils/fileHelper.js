const fs = require('fs');
const path = require('path');

function createFile(filename, content) {
  const filePath = path.join(__dirname, '..', filename);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`✅ File created at: ${filePath}`);
}

module.exports = { createFile };
