var first = [3,0,-5,1,44,-12,3,0,0,1,2,-3,-3,2,1,4,-2-3-1];
    second = [-1,-8,-2];
    third = [1,7,3];
    fourth = [1,undefined,3,5,-3];
    fifth = [1,NaN,3,5,-3];

var findMinMaxSum = function (array) {

    var sum = null;
        min = array[0];
        max = array[0];

    for(var key in array) {

        if (typeof (array[key]) === 'number' && !isNaN(array[key])) {
            sum += array[key];
            min = array[key] < min ? array[key] : min;
            max = array[key] > max ? array[key] : max;
        }
    }

    return {
        'max': max,
        'min': min,
        'sum': sum
    }
};


console.log(findMinMaxSum(first));
console.log(findMinMaxSum(second));
console.log(findMinMaxSum(third));
console.log(findMinMaxSum(fourth));
console.log(findMinMaxSum(fifth));



