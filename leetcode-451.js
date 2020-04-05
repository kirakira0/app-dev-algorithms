/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    letter_freq = new Map();    
    //iterate through the string and keep track of letter frequency 
    for (letter of s) { 
        if (letter_freq.has(letter)) {
            letter_freq.set(letter, letter_freq.get(letter) + 1)
        } 
        else {
            letter_freq.set(letter, 1)
        }
    }
        
    contents = Array.from(letter_freq.entries());
    contents.sort((a, b) => b[1] - a[1]); //this line sorts in descending order
    //reference: https://www.freecodecamp.org/forum/t/arr-sort-a-b-a-b-explanation/167677/2
  
    result = '';     
    for (const [letter, times] of contents) {
        result += letter.repeat(times); 
        //reference: https://www.geeksforgeeks.org/javascript-string-repeat/
    }
    return result;     
};
