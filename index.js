var first = [3,0,-5,1,44,-12,3,0,0,1,2,-3,-3,2,1,4,-2-3-1];
    second = [-1,-8,-2];
    third = [undefined, 1,7,3];
    fourth = [undefined, 1,undefined,3,5,-3];
    fifth = [undefined, 1,NaN,3,5,-3];
    sixth = [[], -5, []];
    seventh = [{}, 'sefs', -5, []];
    eighth = [null, 4, []];

var findMinMaxSum = function (array) {

    var sum = null;
        min = null;
        max = null;

    for(var key in array) {

        if (!isNaN(array[key]) && typeof (array[key]) === 'number') {
            sum += array[key];
            min = (array[key] < min || min === null) ? array[key] : min;
            max = (array[key] > max || max === null) ? array[key] : max;
        }
    }

    return {
        'max': max,
        'min': min,
        'sum': sum
    }
};

var findMinMaxSum2 = function (array) {

    var sum = null;
    min = null;
    max = null;

    for(var count = 0;count < array.length; count++) {

        if (!isNaN(array[count]) && typeof (array[count]) === 'number') {
            sum += array[count];
            min = (array[count] < min || min === null) ? array[count] : min;
            max = (array[count] > max || max === null) ? array[count] : max;
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
console.log(findMinMaxSum(sixth));
console.log(findMinMaxSum(seventh));
console.log(findMinMaxSum(eighth));
console.log('----------------');
console.log(findMinMaxSum2(first));
console.log(findMinMaxSum2(second));
console.log(findMinMaxSum2(third));
console.log(findMinMaxSum2(fourth));
console.log(findMinMaxSum2(fifth));
console.log(findMinMaxSum2(sixth));
console.log(findMinMaxSum2(seventh));
console.log(findMinMaxSum2(eighth));



