const fs = require('fs');
const path = require('path');

function log(message) {
  const logPath = path.join(__dirname, '..', 'operations.log');
  const timestamp = new Date().toISOString();
  fs.appendFileSync(logPath, `[${timestamp}] ${message}\n`);
}

module.exports = { log };
