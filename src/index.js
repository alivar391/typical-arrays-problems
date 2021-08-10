
exports.min = function min(array) {
        if (array == undefined || array.length==0 ) return 0;
    else {
        let arr = array.sort((a, b)=> a - b);
        return arr[0];
    }
}

exports.max = function max (array) {
    
    if (array == undefined || array.length==0 ) return 0;
    else {
        let arr = array.sort((a, b)=> a - b);
        return arr[arr.length-1];
    }
    
}

exports.avg = function avg(array) {
    
    if (array == undefined || array.length==0 ) return 0;
    else {
        let result = array.reduce((sum, current) => sum + current, 0) / array.length;
        return result;
    }
}
