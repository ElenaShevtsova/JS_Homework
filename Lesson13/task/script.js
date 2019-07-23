var valueX = document.getElementById('first-field');
var valueY = document.getElementById('second-field');
var button = document.getElementsByTagName('button')[0];
valueX.onkeyup = function () {
    if (valueX.value !== ' ' && valueY.value !== ' ') {
        document.getElementById('but').removeAttribute('disabled');
    }
}


button.onclick = function () {
    if (typeof +valueX.value === 'number' && valueX.value >= 1 && valueX.value <= 10 &&
        typeof +valueY.value === 'number' && valueY.value >= 1 && valueY.value <= 10) {
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
                    row.classList.add('change-td');
                }
            }
        }
    } else {
        alert('Введите число от 1 до 10 включительно');
    }

    table.onclick = function (event) {
        var target = event.target;
        if (target.tagName == "TD") {
            table.classList.toggle('change-td');
            var changeStyleTd = document.getElementsByClassName('change-td');
            for (var a = 0; a < changeStyleTd.length; a++) {

                changeStyleTd[a].classList.toggle('change-td-white');
            }
        }
    }
}
