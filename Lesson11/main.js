/* Задание 1 */

var arr = [-1, 0, 2, 34, -2];
var newArr = arr.filter(function (i) {
    return i > 0;
});
console.log(newArr);

/* Задание 2 */

var arr = [-1, 1, 2, -5, -8, 9];
var foundNumber = arr.find(function (i) {
    return i > 0;
});
console.log(foundNumber);

/* Задание 3 */

function isPalindrome(name) {
    var word = name.toLowerCase();
    var newWord = word.split('').reverse().join('');

    if (word === newWord) {
        return true;
    } else {
        return false;
    }
}
isPalindrome('шалаШ');
isPalindrome('привет');

/* Задание 4 */

function areAnagrams(a, b) {
    var firstWord = a.toLowerCase();
    var secondWord = b.toLowerCase();

    if (firstWord.length !== secondWord.length) {
        return false;
    } else {
        firstWord = a.split('').sort().join('');
        secondWord = b.split('').sort().join('');

        if (firstWord === secondWord) {
            return true;
        } else {
            return false;
        }
    }
}
areAnagrams('кот', 'отк');
areAnagrams('кот', 'атк');
areAnagrams('кот', 'отко');

/* Задание 5 */

function divideArr(a, b) {
    var lengthArray = a.length;
    var newArray = [];
    var array;
    for (var i = 0; i < lengthArray; i += b) {
        array = a.slice(i, i + b);
        newArray.push(array);
    }
    return newArray;
}
divideArr([1, 2, 3, 4], 2);
divideArr([1, 2, 3, 4, 5, 6, 7, 8], 3); 