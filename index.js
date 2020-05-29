const fs = require('fs');
const path = require('path');
const basePath = './assets/';

function cb(err, data, index, max) {
  if (err) throw err;
  console.log(data, '\n');
  return start(index + 1, max);
}

console.log('Begin\n');

start(1, 4);

function start(index, max) {
  if (index > max) return console.log('End');
  fs.readFile(path.resolve(basePath, `s${index}.txt`), { encoding: 'utf-8' }, (err, data) => cb(err, data, index, max));
}