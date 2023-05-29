function isInteger(number) {
    return Number.isInteger(number);
  }
  
  // Testing the function
  console.log(isInteger(5));    // true
  console.log(isInteger(3.14)); // false
  console.log(isInteger(-2));   // true
  console.log(isInteger("10")); // false
  