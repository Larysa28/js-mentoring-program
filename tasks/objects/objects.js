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

//for (let key in student){
//	console.log(key)
//};


/**
 * create new instance of student using Object.create
 */
const student2 = Object.create(student);


//create a variable with all keys of person object
const person2 = Object.keys(person);

//create a variable with all values of person object
const person3 = Object.values(person);

//create a variable with all values and keys of person object

const person4 = Object.entries(person);

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


module.exports = {
	person,
	student,
	student2
};

