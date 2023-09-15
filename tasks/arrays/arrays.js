const chars = require("./characters.json")
/**
 * 
 * return an array of characters names
 * @param {Array} chars
 * @return {Array} - char names
 */
const getCharactersNames = chars => chars.map(item => item.name);



/**
 * print (console.log) names of all characters
 * @param {Array} chars
 */
function printCharacterNames (){
	chars.forEach(item => console.log(item.name));
}

 	
/**
 * return an array of non-human (species !== 'human') characters
 * @param {Array} chars
 * @return {Array} - non human characters
 */
function getNonHumanCharacters(){
return chars.filter(char => char.species !== "Human");
};


/**
 * return info about character named 'Jerry Smith'
 * @param {Array} chars
 * @return {Object} - Jerry object
 */
function getJerryInfo(chars) {
return chars.find ((char) => char.name === "Jerry Smith")
};
const jerry = getJerryInfo(chars);

/**
 * check if all characters are human. return true if all, false if not
 * @param {Array} chars
 * @return {boolean}
 */
function isAllHuman(chars) {
	return chars.every((char) => char.species === "Human")
};
const isHuman = isAllHuman(chars);


/**
 * check if there are any Fish-Person characters. return true if any, false if not
 * @param {Array} chars
 * @return {boolean}
 */
function isAnyFishPerson(chars) {
	return chars.some((char) => char.type === "Fish-Person");
};
const isFish = isAnyFishPerson(chars);

/**
 * 1. Write a method to find an index of minimal item from an array;
 * @param {Array} arr
 * @return {number} - minimum element index
 * @example
 * console.log(minItem([2,5,6,3,1,8])) // 4
 */

function minItem(arr) {
	let minIndex = 0;
	let firstElement = arr[0];
for (let i = 0; i < arr.length; i++) {
	if ( arr[i] < firstElement){
minIndex = i;
	}
}
return minIndex;
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