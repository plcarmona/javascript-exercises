const removeFromArray = function(arr, ...elements) {
       
            res = arr.filter(item => !elements.includes(item));
        
return res;
};

// Do not edit below this line
module.exports = removeFromArray;
