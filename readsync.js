var fs = require('fs');
var content = fs.readFileSync('writetoconsole.js', 'utf-8');
console.log('File content is:');
console.log(content);
