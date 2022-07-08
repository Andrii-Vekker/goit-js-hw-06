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

// function offInputFocus(evt) {
//     const inputCurrentLength = evt.target.value.length;
// if (inputCurrentLength === inputLength) {
//     inputRef.classList.add("valid");
//     inputRef.classList.remove("invalid");
//     }
//    else if (inputRef.classList.contains("valid")) {
//         inputRef.classList.add("invalid");
//         inputRef.classList.remove("valid");
//    }
// };


function offInputFocus(evt) {
    const str = evt.target.value;
    console.log(str)

   const strFix = str.replace(/ +/g, "").trim();
    console.dir(strFix)
    const inputCurrentLength = strFix.length;
    console.log(strFix)

    console.log(inputCurrentLength)
if (inputCurrentLength === inputLength) {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
    }
   else if (inputRef.classList.contains("valid")) {
        inputRef.classList.add("invalid");
        inputRef.classList.remove("valid");
   }
};


// const input = document.querySelector('input');

// const toggleClass = (el, addClass, removeClass) => {
//     el.classList.add(addClass)
//     el.classList.remove(removeClass);
// }

// const validateInput = () => {
//     const trimStrLength = input.value.trim().length;
//     const lengthNumber = parseInt(input.getAttribute("data-length"));
//     trimStrLength === lengthNumber ? toggleClass(input, 'valid', 'invalid') : toggleClass(input, 'invalid', 'valid')
// }

// input.addEventListener("blur", validateInput);