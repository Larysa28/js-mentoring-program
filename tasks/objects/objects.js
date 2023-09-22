/**
 * create object person with firstName and lastName properties
 * implement method getFullName that returns full name
 */
const person = {
	firstName: "Larysa",
	lastName: "Stupina",
	getFullName() {
		return this.firstName + " " + this.lastName;
	}
};
console.log(person.getFullName());

/**
 * create object student that has property grade and method getGrade
 * set person as prototype of student
 */
const student = {
	grade: 0,
	getGrade() {
		return this.grade;
	}
};
Object.setPrototypeOf(student,person);
console.log(student.getFullName());

/**
 * create new instance of student using Object.create
 */
const student2 = Object.create(student);

console.log(student2.getFullName()); 

//create a variable with all keys of person object
const person2 = Object.keys(person);
console.log(person2);

//create a variable with all values of person object
const person3 = Object.values(person);
console.log(person3);

//create a variable with all values and keys of person object

const person4 = {
	firstName: "Larysa",
	lastName: "Stupina",
  };
  
  for (const [key, value] of Object.entries(person4)) {
	console.log(`${key}: ${value}`);
  }

// using for ... in methode , save all keys to the array
const pers = {
	name: "Larysa",
	surname: "Stupina",
	age: "30"
  };
  const keysArray = [];
  for (let key in pers) {
	if (pers.hasOwnProperty(key)) {
	  keysArray.push(key);
	}
  }
  console.log(keysArray);

module.exports = {
	person,
	student,
	student2
};

