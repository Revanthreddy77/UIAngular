function findLargestNumber(arr) {
    var max = arr[0];
    
    for (var i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    
    return max;
  }
  
  // Example usage
  var arrMax = [10, 5, 8, 16, 3];
  var largestNumber = findLargestNumber(arrMax);
  console.log(largestNumber); // Output: 16
  