/**
 * 1. Write a method to reverse a string; 
 * 2. The method should return the string 'This is not a string!' if trying to pass a number
 * @param {string} str
 * @return {string} reversed string
 * @example
 * console.log(reverseString('hello)) // 'olleh'
 * console.log(reverseString(123)) // 'This is not a string!'
 */
function reverseString(str) {
  if (typeof str !== 'string') {
    return 'This is not a string!';
  }
  return str.split("").reverse().join("");
}
console.log(reverseString("3"));

/**
 * Calculate a century by given year if a number is passed
* @param {number} year
* @return {num} century
* @example
* console.log(centuryFromYear(1705)) // 18
* console.log(centuryFromYear(1900)) // 19
* console.log(centuryFromYear(1601)) // 17
*/
function centuryFromYear(year) {
  if (typeof year !== "number") {
    return "Please pass parameter as a number";
  }
  let yearString = "" + year;
  let century = parseInt(yearString.substring(0,2));
  let rest = parseInt(yearString.substring(2));
  if (rest > 0){
    century++;
  }
  return century;

}
console.log(centuryFromYear(1705));
console.log(centuryFromYear(1900));
console.log(centuryFromYear(1601));
console.log(centuryFromYear("notNumber"));
/**
 * Calculate count of the provided char in the string
 * @param {string} str
 * @param {string} char
 * @return {num} number of occurences
 * @example
 * console.log(strCount('Hello', 'o')) // 1
 * console.log(strCount('Hello', 'l')) // 2
 * console.log(strCount('', 'z')) // 0
 */
function strCount(str, char) {
  if (typeof str !== 'string') {
    return 'Provided parameter is not a string'
  }
  let charsCount = 0;
for (let i = 0; i < str.length; i++){
if (str[i] === char){
  charsCount++;
}
}
return charsCount;
}

/**
 * Write a method to reduce the length of the string or truncate it if it is longer
 * than the given maximum length specified and add "..." to the end. 
 * If it is not that long then we keep it as is.
 * @param {string} str - the initial string
 * @param {num} num - by wht amount of chars it should be truncated
 * @return {string} truncated or the initial string
 * @example
 * console.log(truncateString('This is a long string', 6)) // 'This i...'
 * console.log(truncateString('This', 6)) // 'This'
 */
function truncateString(str, num) {

}

/**
 * replace 10 with 'ten' word
 * @param {string} text - input text
 * @return {string} - updated text
 * @example
 * console.log(replace10("231054")) // 23ten54
 */
function replace10(text) {
  if (typeof text !== "string") {
    return 'Provided parameter is not correct'
  }
  const updatedText = text.replace(10, 'ten');
  return updatedText;
}
console.log(replace10('231089'))

/**
 * replace value in square brackets with CONFIDENTIAL
 * @param text - input text
 * @return {string} - updated string
 * @example
 * console.log(replaceConfidential("lorem [ipsum] si dolor")) // lorem [CONFIDENTIAL] si dolor
 */
function replaceConfidential(text) {
  if (typeof text !== "string") {
    return 'Provided parameter should be a string'
  }
   const confidential = text.replace("[ipsum]", "[CONFIDENTIAL]");
    return confidential;
  }
  console.log(replaceConfidential("lorem [ipsum] si dolor"))

module.exports = {
  reverseString,
  centuryFromYear,
  strCount,
  truncateString,
  replace10,
  replaceConfidential
};
