interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: any;
}

interface Directors extends Teacher {
    numberOfReports: number;
}
/*
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);
*/
function printTeacher(firstName: string, lastName: string){
    if (firstName.length > 0){
        return (firstName.charAt(0) + ". " + (lastName));
        //console.log(firstName.charAt(0) + ". " + (lastName));
    }
}

interface printTeacherFunction {
    (firstName: string,
    lastName: string): string;
}

//console.log(printTeacher("John", "Doe"));

