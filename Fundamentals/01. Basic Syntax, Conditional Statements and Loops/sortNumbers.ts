function sortNumberFromBiggestToSmallestNumber(num :number[]) {
    num.sort((a, b) => b - a);
    console.log(num);
}

function sortNumberFromSmallestToBiggestNumber(num :number[]) {
    num.sort((a, b) => a -b);
    console.log(num);
}

sortNumberFromBiggestToSmallestNumber([2, 6, 1, 7, 3, 9]);
sortNumberFromSmallestToBiggestNumber([2, 6, 1, 7, 3, 9]);