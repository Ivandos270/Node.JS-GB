const boxen = require('boxen');

console.log(boxen('box1',
  {
    padding: 1,
    margin: 1,
    borderStyle: 'classic',
    borderColor: 'green',
      float: 'left'
}));

console.log(boxen('box2',
  {
    padding: 3,
    margin: 3,
    borderStyle: 'singleDouble',
    borderColor: 'red',
    float: 'right'
}));

console.log(boxen('box3',
  {
      padding: 2,
      margin: 2,
    borderStyle: 'bold',
    borderColor: 'magenta',
    float: 'center'
}));