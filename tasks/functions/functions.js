/**
 * write function that will do sum for two numbers
 *
 */
function sum(a, b) {
	return a + b;
};
console.log(sum(1,2));

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
function getFullName(firstName, lastName ) {
	return firstName + " " + lastName;
};
const fullName = getFullName("John", "Dou");


/**
 * write fuction that checks if number is odd
 * true if odd, false if even
 */
function isOdd(n) {
	return n % 2 !== 0;
}
console.log(isOdd(4), isOdd(5));
/**
 * write function that return shortest of words in the given array
 * e.g ["one", "two", "three"] should return one
 */
function getShortest(wordArray) {

}

/**
 * write function that returns word google with given numbers of "o" symbols
 * e.g getGoogle(5) should return "gooooogle"
 */
function getGoogle(n) {

}

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
function getUser(firstName, lastName, age) {

}

/**
 * write function that calculates total path traveled.
 * path represended as array of objects with field distance and direction
 * e.g [{direction: "Kiyv - Minsk", distance: 567}, {direction: "Kiyv - Paris", distance: 2402}]
 */

function getTotalPath(path) {

}

/**
 * write a function that will calculate a discount considering the Amount
 * and the percentage (hint: you need to use the Closure here)
 * @param {percentage} num
 * @param {amount} num
 * e.g const discount10 = discountFunction(10);
 * discount10(90) should return 81
 * discount10(100) should return 90
 */

function discountFunction(percentage) {

	return function (amount) {
	};
}

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
		//write your code here
	},
	call() {
		//write your code here
	}

};

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
