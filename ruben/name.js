'use strict';

const greet = module.exports = function() {
  return `HI ${process.argv[2] || 'Ruben'}`;
};

console.log(greet());
