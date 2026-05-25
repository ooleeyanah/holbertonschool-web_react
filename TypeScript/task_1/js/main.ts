//task 1
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: any;
}
//task 2
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
//task 3
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
//task 4
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

class StudentClass implements StudentClassInterface {
  private firstName: string;

  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

const StudentCtor: StudentClassConstructor = StudentClass;
const student: StudentClassInterface = new StudentCtor('John', 'Doe');

student.workOnHomework();
student.displayName();
