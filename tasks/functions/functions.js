/**
 * write function that will do sum for two numbers
 *
 */
//function sum(a, b) {
	//return a + b;
//};
//console.log(sum(1,2));

const sum2 = (a,b) => a + b;

function calcDiscount(ticketCost, discount ) {
	return ticketCost - discount;
}
ticket = calcDiscount(10,5);



/**
 * write function that return first and last name of a given object
 * properties are firstName and lastName
 * {
 *    firstName: "John"
 *    lastName: "Dou"
 * }
 */
//function getFullName(firstName, lastName ) {
//	return firstName + " " + lastName;
//};
//const fullName = getFullName("John", "Dou");

const getFullName = (firstName, lastName) => firstName + " " + lastName;
const fullName = getFullName("John", "Dou");
console.log(fullName);

/**
 * write fuction that checks if number is odd
 * true if odd, false if even
 */
//function isOdd(n) {
//	return n % 2 !== 0;
//}
//console.log(isOdd(4), isOdd(5));

const isOdd = n => n % 2 !== 0;

/**
 * write function that return shortest of words in the given array
 * e.g ["one", "two", "three"] should return one
 */
//const wordArray = ["one", "two", "three"];
//function getShortest(wordArray) { 
	//let shortestWord = wordArray[0];
	//for (let i = 0; i < wordArray.length; i++) { 
		
    	//let wordLength = wordArray[i].length;
		//if (wordLength < shortestWord.length) {
		//	shortestWord = wordArray[i];
		//}
	//} 
	//return shortestWord;
//}
//console.log(getShortest(wordArray));

const wordArray = ["one", "two", "three"];
const getShortest = (wordArray) => {
    let shortestWord = wordArray[0];
    for (let i = 0; i < wordArray.length; i++) {
        let wordLength = wordArray[i].length;
        if (wordLength < shortestWord.length) {
            shortestWord = wordArray[i];
        }
    }
    return shortestWord;
};

console.log(getShortest(wordArray));

/**
 * write function that returns word google with given numbers of "o" symbols
 * e.g getGoogle(5) should return "gooooogle"
 */



//function getGoogle(n) {
//	let google = "g";
//for (let i = 0; i < n; i++) {
//	 google += "o";
//}
//return google + "gle";
//}
//console.log(getGoogle(2));

const getGoogle = n => {
    let google = "g";
    for (let i = 0; i < n; i++) {
        google += "o";
    }
    return google + "gle";
};

console.log(getGoogle(2));


function getSum(n) {
	let sum = 0;
for (let i = 0; i <= n; i++) {
 sum += i;
}
	return sum;
}
console.log(getSum(3));

/**
 * write function that returns object based on the given information 
 * (params may be null, so, please use default params)
 * getUser("John", "Dou", 42) should return
 * {
 *    firstName: "John"
 *    lastName: "Dou"
 *    age: 42
 * }
 */
//function getUser(firstName = "John", lastName = "Dou", age = "42") {
//return {
	//firstName,
	//lastName,
	//age
//}
//};
//const user = getUser("John", "Dou", "42");
//console.log(user);


const getUser = (firstName = "John", lastName = "Dou", age = "42") => ({
    firstName,
    lastName,
    age
});
console.log(getUser());

/**
 * write function that calculates total path traveled.
 * path represended as array of objects with field distance and direction
 * e.g [{direction: "Kiyv - Minsk", distance: 567}, {direction: "Kiyv - Paris", distance: 2402}]
 */


//function calculateTotalPathDistance(path) {
   // let totalDistance = 0;

   // for (let i = 0; i < path.length; i++) {
   //     totalDistance += path[i].distance;
  //  }
  //  return totalDistance;
//}

//const path = [
   // { direction: "Kiyv - Minsk", distance: 567 },
   // { direction: "Kiyv - Paris", distance: 2402 }
//];
//const totalDistance = calculateTotalPathDistance(path);

const calculateTotalPathDistance = (path) => {
    let totalDistance = 0;

    for (let i = 0; i < path.length; i++) {
        totalDistance += path[i].distance;
    }
    return totalDistance;
};

const path = [
    { direction: "Kiyv - Minsk", distance: 567 },
    { direction: "Kiyv - Paris", distance: 2402 }
];
const totalDistance = calculateTotalPathDistance(path);
/**
 * write a function that will calculate a discount considering the Amount
 * and the percentage (hint: you need to use the Closure here)
 * @param {percentage} num
 * @param {amount} num
 * e.g const discount10 = discountFunction(10);
 * discount10(90) should return 81
 * discount10(100) should return 90
 */

//let amount = 100;
//function discountFunction(percentage) {

	//return function (amount) {
	//	return amount - (amount / 100 * percentage)
	//};
//}
//const discount10 = discountFunction(10);
//console.log(discount10(100));

let amount = 100;
const discountFunction = (percentage) => (amount) => {
		return amount - (amount / 100 * percentage)
	};
const discount10 = discountFunction(10);
console.log(discount10(100));
/**
 * Write the methods inside the given objects that:
 * 1. console logs keys of the given object (please use for..in cycle)
 * 2. returns the string 'My name is John Doe and I am 25 years old. My best friend is Daniel'
 * reffering to the data stored in the object. The string should be constructed using the properties from the object
 */

const myObject = {
	name: 'John',
	lastName: 'Doe',
	age: 25,
	friends: ['Mike', 'Alan', 'Daniel'],
	keys() {
		for (let key in this) { 
			console.log(key);
		  }		  
	},
	call() {
		return `My name is ${this.name} ${this.lastName} and I am ${this.age} years old. My best friend is ${this.friends[2]}`
	}

};
myObject.keys();
console.log(myObject.call());
  

module.exports = {
	sum,
	getFullName,
	isOdd,
	getShortest,
	getGoogle,
	getUser,
	getTotalPath,
	discountFunction,
	myObject
};
