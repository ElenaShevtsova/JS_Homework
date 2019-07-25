var button = document.getElementById('addRow');
var table = document.getElementsByTagName('table')[0];
var td = document.getElementsByTagName('td');
button.onclick = function () {
    table.insertAdjacentHTML("afterBegin", "<tr><td></td><td></td><td></td></tr>")
}

table.onclick = function (event) {
    var target = event.target;
    while (target != table) {
        if (target.tagName == 'TD' && target != button) {
            var textOfInput = target.innerHTML;
            target.innerHTML = '<input type="text">';
            var input = document.getElementsByTagName('input')[0];
            input.value = textOfInput;
            input.focus();
            input.onblur = changeFocus;
            return;
        }
        target = target.parentNode;
    }
}

function changeFocus() {
    var input = document.getElementsByTagName('input')[0];
    var textAfter = input.value;
    input.parentNode.innerHTML = textAfter;
}
