function Animal(name) {
    this._foodAmount = 50;
    this._name = name;

    this.name = name;
}
Animal.prototype._formatFoodAmount = function () {
    return this._foodAmount + 'гр.';
}

Animal.prototype.dailyNorm = function (amount) {
    if (!arguments.length) return this._formatFoodAmount();

    if (amount < 50 || amount > 500) {
        return 'Недопустимое количество корма.';
    }

    this._foodAmount = amount;
};

Animal.prototype.feed = function () {
    console.log('Насыпаем в миску ' + this.dailyNorm() + ' корма.');
};

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;


function Cat(name) {
    Animal.apply(this, arguments);
    this._name = name;
}

Cat.prototype.feed = function () {
    Animal.prototype.feed.apply(this, arguments);
    console.log('Кот доволен ^_^');
    return this;
};

Cat.prototype.stroke = function () {
    console.log('Гладим кота.');
    return this;
};

var barsik = new Cat('Барсик');

console.log(barsik.feed().stroke().stroke().feed());

barsik = null;