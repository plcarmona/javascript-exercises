const reverseString = function(str) {
    let result=""
    for (i = 0; i < str.length; i++) {
        result=result+str.charAt(str.length-1-i)
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;
