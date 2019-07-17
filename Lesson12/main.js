/* Задание 1 */
var array = ['Vasya', 'Petya', 'Alex'];
var obj = array.map(function (item) {
    return {
        name: item
    }
})
console.log(obj);

/* Задание 2 */

var array = ['00', '13', '24']

var obj = array.reduce(function (previousValue, currentItem) {
    return previousValue + ' : ' + currentItem;

}, 'Текущее время')
console.log(obj);

/* Задание 3 */

var str = 'Трижды россияне побеждали в турнире, пять раз становились вторыми, семь раз — третьими.';
var vowels = ["а", "о", "и", "е", "ё", "э", "ы", "у", "ю", "я"];
var number = 0;
str = str.toLowerCase().split('');
var newStr = str.forEach(function (item) {
    var newVowels = vowels.forEach(function (j) {
        if (item === j) {
            number += 1;
        }
    })
})
console.log(number);

/* Задание 4 */

var str = 'JavaScript изначально создавался для того, чтобы сделать web - странички «живыми».Программы на этом языке называются скриптами.В браузере они подключаются напрямую к HTML и, как только загружается страничка – тут же выполняются.Программы на JavaScript – обычный текст.Они не требуют какой - то специальной подготовки.В этом плане JavaScript сильно отличается от другого языка, который называется Java.';

function getText(str) {
    var arr = str.split(/[\!\.\?]/);
    return arr.forEach(function (item, i) {
        var newArr = item.split('');
        var result = 0;
        for (var j = 0; j < newArr.length; j++) {
            if (newArr[j] === ' ' || newArr[j] === ',' || newArr[j] === ':' || newArr[j] === '-' || newArr[j] === '«' || newArr[j] === '»') continue;
            else result += 1;
        }
        console.log(arr[i] + ' ' + result);
    });
}

getText(str);