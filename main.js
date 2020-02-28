const prompt = require('prompt');

prompt.start();

console.log('Enter your numerical grades for the following classes');

prompt.get(['name', 'CSC141', 'CSC142', 'CSC241', 'CSC242'], function (err, result) {
    if (err) {
        return onErr(err);
    }
    console.log('Command-line input received:');
    console.log('  Name: ' + result.name);
    console.log('  CSC141: ' + result.CSC141);
    console.log('  CSC142: ' + result.CSC142);
    console.log('  CSC241: ' + result.CSC241);
    console.log('  CSC242: ' + result.CSC242);

    let x = parseInt(result.CSC141) + parseInt(result.CSC142) + parseInt(result.CSC241) + parseInt(result.CSC242);
    let gpa = parseFloat(x / 4).toFixed(1);
    console.log(' GPA: ' + gpa);
});

function onErr(err) {
    console.log(err);
    return 1;
}