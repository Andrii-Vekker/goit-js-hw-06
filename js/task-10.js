// Напиши скрипт создания и очистки коллекции элементов.Пользователь вводит количество элементов в input и 
// нажимает кнопку Создать, после чего рендерится коллекция.При нажатии на кнопку Очистить, коллекция элементов
// очищается.
// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>
// <div id="boxes"></div>
// Создай функцию createBoxes(amount), которая принимает один параметр - число.Функция создает столько < div >,
// сколько указано в amount и добавляет их в div#boxes.
// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX.Используй готовую функцию getRandomHexColor 
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const ref = {
  controlsDiv: document.querySelector("#controls"),
  input: document.querySelector("input"),
  btnCreate: document.querySelector("[data-create]"),
  btnDestroy: document.querySelector("[data-destroy]"),
  divParent: document.querySelector("#boxes")
}
ref.btnCreate.addEventListener("click", (e) => createBoxes(+ref.input.value));
ref.btnDestroy.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    const item = document.createElement("div");
     
    item.style.background = getRandomHexColor()
    item.style.width =  `${30 + i * 10}px`;
    item.style.height =  `${30 + i * 10}px`;

    ref.divParent.append(item);
  }
 };

function destroyBoxes() {
  ref.divParent.innerHTML = ""
}