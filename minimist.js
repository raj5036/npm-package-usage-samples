let user_command=process.argv;

console.log("user_command is",user_command)

user_command.forEach(command => {
    if(command === 'fly'){
        console.log('fly')
    }
});

var argv = require('minimist')(process.argv.slice(2));
console.log(argv.age);

