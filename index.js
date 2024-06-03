const information = require('./information');
const cowsay = require('cowsay');

console.log(cowsay.say({
    text: `Hi,my name is: ${information.name} and i come from the ${information.campus} campus`,
    e: "oO",
    T: "U "
}));