/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  //[i]string, [O]number, [C] none, [E]lower&Upper case
  /* first pseudocode
turn string into lowercase
split the input
get last element
return length of last element
*/
  //split the string and pop last element
  var lastWord = s.split(' ').pop().length;
  //return length of last element
  return lastWord;
};
