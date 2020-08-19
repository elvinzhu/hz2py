const dict = require('./dict-raw');
const fs = require('fs');

const itemArr = dict.split(',');

console.log('Total words: ', dict.split(',').length); // 20850

const map = {},
  map2 = {};
itemArr.forEach((item) => {
  let character = item.substr(0, 1);
  let py = item.substr(1, item.length - 1);
  if (map[py]) {
    map[py] = map[py] + character;
  } else {
    map[py] = character;
  }
});

fs.writeFileSync('./dict.ts', '/* auto generated code. do not modify */ \n export default ' + JSON.stringify(map) + ' as { [key: string]: string }');
console.log('Transform completed: ');
