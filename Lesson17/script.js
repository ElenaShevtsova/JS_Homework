var button = document.getElementById('button');
var container = document.getElementById('container');
var main = document.getElementById('main');
var mm = document.getElementById('mm');
var ss = document.getElementById('ss');
var ms = document.getElementById('ms');
button.onclick = function () {
    if (event.target.dataset.text == 'start' || event.target.dataset.text == 'run') {
        button.innerHTML = 'Stop';
        event.target.dataset.text = 'stop';

        button.addEventListener('click', function () {
            clearInterval(stopWatch);
        });
        var stopWatch = setInterval(function () {
            if (ms.innerHTML < 99) {
                ms.innerHTML = +ms.innerHTML + 1;
                if (ms.innerHTML <= 9) {
                    ms.innerHTML = '0' + +ms.innerHTML;
                }
                if (ms.innerHTML == 99) {
                    ss.innerHTML = +ss.innerHTML + 1;
                    ms.innerHTML = '00';
                    if (ss.innerHTML <= 9) {
                        ss.innerHTML = '0' + +ss.innerHTML;
                    }
                }
                if (ss.innerHTML == 59) {
                    mm.innerHTML = +mm.innerHTML + 1;
                    ss.innerHTML = '00';
                    if (mm.innerHTML <= 9) {
                        mm.innerHTML = '0' + +mm.innerHTML;
                    }
                }
                if (mm.innerHTML == 1) {
                    ms.innerHTML = '00';
                    ss.innerHTML = '00';
                    save.classList.add('display-none');
                }
            }
        }, 10)
    } else if (event.target.dataset.text == 'stop') {
        button.innerHTML = 'Run';
        event.target.dataset.text = 'run';
    }


    if (container.children.length < 2) {
        var reset = document.createElement('button');
        reset.innerHTML = 'Reset';
        reset.classList.add('button');
        container.appendChild(reset);
        var save = document.createElement('button');
        save.innerHTML = 'Save';
        save.classList.add('button');
        container.appendChild(save);

        reset.onclick = function () {
            ms.innerHTML = '00';
            ss.innerHTML = '00';
            mm.innerHTML = '00';
            clearInterval(stopWatch);
            localStorage.clear();
            container.innerHTML = '';
            button.dataset.text = 'start';
            button.innerHTML = 'Start';
        }
        save.onclick = function () {
            localStorage.setItem('ms', ms.innerHTML);
            localStorage.setItem('ss', ss.innerHTML);
            localStorage.setItem('mm', mm.innerHTML);
            var time = document.createElement('div');
            time.innerHTML = localStorage.getItem('mm') + ':' + localStorage.getItem('ss') + ':' + localStorage.getItem('ms');
            container.appendChild(time);
        }
    }
}







