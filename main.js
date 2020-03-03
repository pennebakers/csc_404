const prompt = require('prompt');

const classes = {
    properties: {
        Name: {
            name: 'name',
        },
        CSC141: {
            name: 'csc141',
        },
        CSC142: {
            name: 'csc142'
        },
        CSC241: {
            name: 'csc241'
        },
        CSC242: {
            name: 'csc242'
        }
    }
};

getStudent();

function getStudent() {
    var grades = {
        'A': 4.0,
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
        'F': 0.0
    };

    prompt.start();
    console.log('Enter your letter grades for the following classes');


    prompt.get(classes, function (err, result) {
        if (err) {
            return onErr(err);
        }
        let gpa = 0.0;

        gpa = gpa + grades[result.CSC141];
        gpa = gpa + grades[result.CSC142];
        gpa = gpa + grades[result.CSC241];
        gpa = parseFloat(gpa + grades[result.CSC242]);
        gpa = gpa / 4;

        console.log('Command-line input received:');
        console.log('  Name: ' + result.Name);
        console.log('  CSC141: ' + result.CSC141);
        console.log('  CSC142: ' + result.CSC142);
        console.log('  CSC241: ' + result.CSC241);
        console.log('  CSC242: ' + result.CSC242);
        console.log('  GPA: ' + gpa);
    });
}

function onErr(err) {
    console.log(err);
    return 1;
}