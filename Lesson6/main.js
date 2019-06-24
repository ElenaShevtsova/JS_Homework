function Cat() {
    var foodAmount = 50;
    var formatFoodAmount = function () {
        return (foodAmount + ' гр');
    }

    this.feed = function () {
        console.log('Насыпаем в миску ' + formatFoodAmount() + '  корма');
    }
}

var Vasya = new Cat();
Vasya.feed();





function Cat() {
    var foodAmount = 50;
    var formatFoodAmount = function () {
        return (foodAmount + ' гр');
    }

    this.dailyNorm = function (amount) {
        if (!arguments.length) {
            return formatFoodAmount();
        } else if (amount < 50) {
            console.log('Значение должно быть больше 50');

        } else if (amount > 500) {
            console.log('Значение должно быть меньше 500');
        } else {
            foodAmount = amount;
        }
    }
    
    this.feed = function () {
        console.log('Насыпаем в миску ' + formatFoodAmount() + ' корма');
    }
}
var vasya = new Cat();
vasya.dailyNorm(400);
console.log(vasya.feed());