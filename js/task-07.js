// Напиши скрипт, который реагирует на изменение значения input#font - size - control(событие input)
// и изменяет инлайн - стиль span#text обновляя свойство font - size.В результате при перетаскивании ползунка
// будет меняться размер текста.
// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>

const ref = {
    inputSize: document.querySelector("#font-size-control"),
    spanText: document.querySelector("#text")
};
 
ref.inputSize.addEventListener("input", handleInputFontSize);

function handleInputFontSize(evt) {
ref.spanText.style.fontSize = evt.target.value + "px"
}