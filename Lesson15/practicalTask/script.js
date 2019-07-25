var container = document.getElementById('container');

var firstPar = document.createElement('p'),
   secondPar = document.createElement('p');

firstPar.innerHTML = 'Hello, here are <a href="http://google.by">Link 1</a> and <a href="http://google.by">Link 2</a>';
secondPar.innerHTML = 'Hello, here are <a href="http://google.by">Link 3</a> and <a href="http://google.by">Link 4</a>';

container.appendChild(firstPar);
container.appendChild(secondPar);

var firstParagraph = container.childNodes[0];
var firstParagraphLinks = firstParagraph.getElementsByTagName('a');
document.getElementById('but').onclick = function () {
   for (var i = 0; i < firstParagraphLinks.length; i++) {
      firstParagraphLinks[i].classList.toggle('change-text');
   }

}
var secondParagraph = container.childNodes[1];
var secondParagraphLinks = secondParagraph.getElementsByTagName('a');
// for (var j = 0; j < secondParagraphLinks.length; j++) {
//    secondParagraphLinks[j].addEventListener('click', addText, false);
//     var path = localStorage.getItem('path');
//     if(path) {
//        alert('event.target.href');
//     } else {
//        alert('ok');
//     }

// }
// function addText(event) {
//    event.preventDefault();
//    alert(event.target.href);
// }

window.onload = function () {
   localStorage.clear();
}
secondParagraphLinks.onclick = function (event) {
   event.preventDefault();
   var 
   if (localStorage.getItem(event.target.innerText)) {
      return alert(event.target.innerText);
   }
   localStorage.setItem('event.target.innerText', event.target.getAttribute('href'));
   alert('Ссылка сохранена!');
}
