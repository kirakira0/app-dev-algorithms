/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    t = s.trim().split(" ");
    return t[t.length - 1].length; 
};
