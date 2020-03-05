const prompt = require('prompt');

const classes = {
    properties: {
        Name: {
            name: 'name',
            pattern: /^[a-zA-Z]{0,99}[\s]{0,1}[a-zA-Z]{0,99}$/,
            message: 'First and Last name with letter characters only with one space in between',
            required: true,
        },
        CSC141: {
            name: 'csc141',
            pattern: /^[a-dfA-DF]{1,1}[\-\+]{0,1}$/,
            message: 'LowerCase or UpperCase A, B, C, D, F followed by one - or one +',
            required: true,
        },
        CSC142: {
            name: 'csc142',
            pattern: /^[a-dfA-DF]{1,1}[\-\+]{0,1}$/,
            message: 'LowerCase or UpperCase A, B, C, D, F followed by one - or one +',
            required: true,
        },
        CSC241: {
            name: 'csc241',
            pattern: /^[a-dfA-DF]{1,1}[\-\+]{0,1}$/,
            message: 'LowerCase or UpperCase A, B, C, D, F followed by one - or one +',
            required: true,
        },
        CSC242: {
            name: 'csc242',
            pattern: /^[a-dfA-DF]{1,1}[\-\+]{0,1}$/,
            message: 'LowerCase or UpperCase A, B, C, D, F followed by one - or one +',
            required: true,
        }
    }
};

getStudent();

function getStudent() {
    var grades = {
        'A': 4.0,
        'A+': 4.0,
        'A-': 3.67,
        'B+': 3.33,
        'B': 3.0,
        'B-': 2.67,
        'C+': 2.33,
        'C': 2.0,
        'C-': 1.67,
        'D+': 1.33,
        'D': 1.00,
        'D-': 0.67,
        'F+': 0,
        'F-': 0,
        'F': 0.0
    };

    prompt.start();
    

    console.log('Enter your letter grades for the following classes');


    prompt.get(classes, function (err, result) {
        if (err) {
            return onErr(err);
        }

        let gpa = 0.0;

        gpa = parseFloat(gpa + grades[result.CSC141.toUpperCase()]);
        gpa = parseFloat(gpa + grades[result.CSC142.toUpperCase()]);
        gpa = parseFloat(gpa + grades[result.CSC241.toUpperCase()]);
        gpa = parseFloat(gpa + grades[result.CSC242.toUpperCase()]);
        gpa = parseFloat(gpa / 4);

        console.log('Command-line input received:');
        console.log('  Name: ' + result.Name);
        console.log('  CSC141: ' + result.CSC141);
        console.log('  CSC142: ' + result.CSC142);
        console.log('  CSC241: ' + result.CSC241);
        console.log('  CSC242: ' + result.CSC242);
        console.log('  GPA: ' + gpa);
        if(gpa >= 2.5){
            console.log('Qualified');
        }else{
            console.log('Not Qualified');
        }
    });
  }


function onErr(err) {
    console.log(err);
    return 1;
}