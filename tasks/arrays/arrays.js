const chars = require("./characters.json")
/**
 * 
 * return an array of characters names
 * @param {Array} chars
 * @return {Array} - char names
 */
const getCharactersNames = chars => chars.map(item => item.name);
console.log (getCharactersNames(chars));


/**
 * print (console.log) names of all characters
 * @param {Array} chars
 */

chars.forEach(item => console.log(item.name));

 	
/**
 * return an array of non-human (species !== 'human') characters
 * @param {Array} chars
 * @return {Array} - non human characters
 */

const nonHuman = chars.filter(char => char.species !== "Human");
console.log(nonHuman);

/**
 * return info about character named 'Jerry Smith'
 * @param {Array} chars
 * @return {Object} - Jerry object
 */
function getJerryInfo(chars) {
return chars.filter ((char) => char.name === "Jerry Smith")
};
const Jerry = getJerryInfo(chars);
console.log(Jerry);

/**
 * check if all characters are human. return true if all, false if not
 * @param {Array} chars
 * @return {boolean}
 */
function isAllHuman(chars) {}

/**
 * check if there are any Fish-Person characters. return true if any, false if not
 * @param {Array} chars
 * @return {boolean}
 */
function isAnyFishPerson(chars) {}

/**
 * 1. Write a method to find an index of minimal item from an array;
 * @param {Array} arr
 * @return {number} - minimum element index
 * @example
 * console.log(minItem([2,5,6,3,1,8])) // 4
 */
function minItem(arr) {
	//PLACE YOUR CODE HERE
}

module.exports = {
	getCharactersNames,
	printCharacterNames,
	getNonHumanCharacters,
	getJerryInfo,
	isAllHuman,
	isAnyFishPerson,
	minItem
};