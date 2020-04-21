/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    while (s.length > 0) {
        if (s.includes("()") || s.includes("[]") || s.includes("{}")) {
            s = s.replace("()", "").replace("[]", "").replace("{}",""); 
        }
        else {
            return false;
        }
    }
    return true; 
};
