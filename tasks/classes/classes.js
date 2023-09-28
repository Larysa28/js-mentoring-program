/**
 * implement class Person with:
 * 1) properties firstName and lastName
 * 2) constructor that pass firstName and lastName to the object
 * 3) method getFullName
 */
  class Person {
    constructor(firstName, lastName) {
        this.firstName = "Larysa";
        this.lastName = "Stupina";
    }

    getFullName() {
        return this.firstName + " " +this.lastName;
    }
}
const personio = new Person;

/**
 * implement class Student that extends Person with:
 * 1) property grade
 * 2) constructor that pass grade to the object
 * 3) method getGrade that returns property grade
 */

class Student extends Person {
    constructor(firstName, lastName, grade) {
        super(firstName, lastName);
        this.grade = "5";
    }

    getGrade() {
        return this.grade;
    }
}

const studio = new Student;

const person = ''; //create instance of class person
const student = ''; //create instance of class student

module.exports = {
    person,
    student
};
