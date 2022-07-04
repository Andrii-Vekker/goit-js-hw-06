// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.
// <div id="counter">
// <button type="button" data-action="decrement">-1</button>
// <span id="value">0</span>
// <button type="button" data-action="increment">+1</button>
// </div>
// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй
// её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

const refs = {
    buttonIncrement: document.querySelector("[data-action = increment]"),
    buttonDecrement: document.querySelector("[data-action = decrement]"),
    counter: document.querySelector("#value"),

};

refs.buttonIncrement.addEventListener("click", onClickIncrement);
refs.buttonDecrement.addEventListener("click", onClickDecrement);

let counterValue = 0

function onClickIncrement() {
    console.log(refs.counter.textContent = counterValue += 1);
}

function onClickDecrement() {
    console.log(refs.counter.textContent = counterValue -= 1);
}

//////////////////////////////refactoring////////////////////////////
// const getCount = () => {
// const counterEl = document.querySelectorAll("#counter button");
// const decrementBtn = counterEl[0];
// const encrement = counterEl[1];
// const countEl = document.querySelector("#value")
// let currentValue = 0;
// decrementBtn.addEventListener("click", () => {
//     currentValue -= 1;
//     countEl.textContent = currentValue;
// })
// encrement.addEventListener("click", () => {
//     currentValue += 1;
//     countEl.textContent = currentValue;
// })
// }
// getCount()