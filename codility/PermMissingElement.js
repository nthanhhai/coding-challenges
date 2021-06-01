function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
  
    // The idea to develop this algorithm is 
    // the sum of the elements in array will be larger than the sum of interger
    // [1,3,4,5] = 13
    // [1,2,3,4] = 10
    // the strategy is to do the loop and performing the sum of 2 arrays
    // the important point is for the sum of integer in the loop, if we just
    // do the sum according to the index, the last element will not be counted
    // as it's already exceeded the array and will produce error
    if (A.length == 0) return 1;
    var sumOfElements = 0;
    // the reason to set the default value is due to when we loop, we can't reach the last element of the array
    // will return NaN if accessing value of A[i] if i = A.length. The array index starts from 0.
    var expectedSum = A.length
    
    for (var i = 0; i < A.length; i++) {
        sumOfElements += A[i];
        expectedSum += (i+1);
    }
    // return value need to add 1 as the index start from 0, and is added to the sum
    return expectedSum - sumOfElements + 1;
}
