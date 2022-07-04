// Напиши скрипт, который при потере фокуса на инпуте(событие blur), проверяет его содержимое на правильное 
// количество введённых символов.
// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.

const inputRef = document.querySelector("#validation-input");
const inputLength = parseInt(inputRef.getAttribute("data-length"));
console.log(inputLength)
inputRef.addEventListener("blur", offInputFocus);

function offInputFocus(evt) {
    const inputCurrentLength = evt.target.value.length;
    inputCurrentLength === inputLength ? inputRef.classList.add("valid") : inputRef.classList.add("invalid");
}

/////////////////////////////////////////////////////////
// const input = document.querySelector('input');

// input.addEventListener("click", () => {
//     input.focus();
// })

// input.addEventListener("blur", () => {
// input.value.length === 6 ? input.classList.add('valid') : input.classList.add('invalid')    
// }
// )