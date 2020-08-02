/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */
'use strict'
function ucFirst(str) {

  if (str) {
    let ret = str[0].toUpperCase();
    let rezultStr = str.slice(1, str.length + 1);
      return (`${ret}${rezultStr}`)
  } else {
      return ('')
  }
}
