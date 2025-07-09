const readline = require('readline');
const os = require('os');
const { createFile } = require('./utils/fileHelper');
const { log } = require('./utils/logger');

// CLI interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Show system info
console.log('\n🔍 System Info:');
console.log(`Platform: ${os.platform()}`);
console.log(`Arch: ${os.arch()}`);
console.log(`Free Memory: ${os.freemem()} bytes`);
console.log(`Total Memory: ${os.totalmem()} bytes\n`);

// Ask for file name and content
rl.question('📄 Enter file name: ', (filename) => {
  rl.question('✍️ Enter content: ', (content) => {
    createFile(filename, content);
    log(`File "${filename}" created.`);
    rl.close();
  });
});
