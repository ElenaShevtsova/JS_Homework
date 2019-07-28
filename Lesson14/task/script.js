var valueX = document.getElementById('first-field');
var valueY = document.getElementById('second-field');
var button = document.getElementsByTagName('button')[0];

valueX.onkeyup = disableButton;
valueY.onkeyup = disableButton;

function disableButton() {
    var x = valueX.value.trim();
    var y = valueY.value.trim();
    if (x == '' || y == '' || typeof Number(x) !== 'number' || typeof Number(y) !== 'number') {
        document.getElementById('but').setAttribute('disabled', 'disabled');
    } else {
        document.getElementById('but').removeAttribute('disabled');
    }
}

button.onclick = function () {
    if (valueX.value >= 1 && valueX.value <= 10 && valueY.value >= 1 && valueY.value <= 10) {
        var table = document.createElement('table');
        var body = document.body;
        table.classList.add('change-table-border');
        body.appendChild(table);
        for (var i = 0; i < valueY.value; i++) {
            var column = document.createElement('tr');
            column.classList.add('change-tr');
            table.appendChild(column);
            for (var j = 0; j < valueX.value; j++) {
                var row = document.createElement('td');
                row.classList.add('change-tr');
                column.appendChild(row);
                if (i % 2 == j % 2) {
                    row.classList.add('background-black');
                }
            }
        }
    } else {
        alert('Введите число от 1 до 10 включительно');
    }

    table.onclick = function (event) {
        var target = event.target;
        if (target.tagName == "TD") {
            var styleTdBlack = document.getElementsByClassName('background-black');
            var td = document.getElementsByTagName('td');
            if (styleTdBlack) {
                for (var a = 0; a < td.length; a++) {
                    td[a].classList.toggle('background-black');
                }
            }
        }
    }
}

