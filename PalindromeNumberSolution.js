/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    return x == x.toString().split('').reverse().join('');
};

/*

- Convert the number to a string which will create a character array.
- Reverse it.
- Join that array back to a string.
- Check if both the string match.
- The function is using == because we want to check if both sides are equal regardless of thier type.

*/
