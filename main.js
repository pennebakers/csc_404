const prompt = require('prompt');

const properties = [
    {
        name: 'CSC141'
    },
    {
        name: 'CSC142'
    },
    {
        name: 'CSC241'
    },
    {
        name: 'CSC242'
    }
];

prompt.start();

console.log('Enter your numerical grades for the following classes');

prompt.get(properties, function (err, result) {
    if (err) {
        return onErr(err);
    }
    console.log('Command-line input received:');
    console.log('  CSC141: ' + result.grade);
    console.log('  CSC142: ' + result.csc142);
    console.log('  CSC241: ' + result.csc241);
    console.log('  CSC242: ' + result.csc242);
});

function onErr(err) {
    console.log(err);
    return 1;
}