/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
"use strict"
function factorial(n) {

  if (n==0){
    return (1)
  } else {
    let res=n;
    while (n>1) {
      n--
      res=res*n
      }
      return (res);
  }
}
