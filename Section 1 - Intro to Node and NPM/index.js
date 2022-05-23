const fs = require('fs');

const textInput = fs.readFileSync('./text.txt', 'utf8');
console.log(textInput);

const textOutput = `This is an example text output: ${textInput}.\nCreated on ${Date.now()}`;
fs.writeFileSync('./output.txt', textOutput);