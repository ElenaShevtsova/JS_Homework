var container = document.getElementById('container');

var firstPar = document.createElement('p'),
   secondPar = document.createElement('p');

firstPar.innerHTML = 'Hello, here are <a href="http://google.by">Link 1</a> and <a href="http://google.by">Link 2</a>';
secondPar.innerHTML = 'Hello, here are <a href="http://google.by">Link 3</a> and <a href="http://google.by">Link 4</a>';

container.appendChild(firstPar);
container.appendChild(secondPar);

var button = document.getElementsByTagName('button')[0];

var firstParagraph = container.childNodes[0];
var firstParagraphLinks = firstParagraph.getElementsByTagName('a');
document.getElementById('but').onclick = function () {
   for (var i = 0; i < firstParagraphLinks.length; i++) {
      firstParagraphLinks[i].classList.toggle('change-text');
   }
}
var secondParagraph = container.childNodes[1];
var secondParagraphLinks = secondParagraph.getElementsByTagName('a');
for (var j = 0; j < secondParagraphLinks.length; j++) {
   secondParagraphLinks[j].addEventListener('click', addText, false);
}
function addText(event) {
   event.preventDefault();
   alert(event.target.href);
}
