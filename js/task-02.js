// Напиши скрипт, который для каждого элемента массива ingredients:
// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

function createLIst(v) {
  const list = document.querySelector("#ingredients")
  v.map((i) => {
    const item = document.createElement("li");
    item.textContent = `${i}`;
    item.classList.add("item");
    list.append(item)
  })
return list
}

console.log(createLIst(ingredients))


// const list = document.querySelector("#ingredients")
// function createLIst(v) {
//   return v.map((i) => {
//     const item = document.createElement("li");
//     item.textContent = `${i}`;
//     item.classList.add("item");
//     return item
//   })
// }
// console.log(list)
// list.append(...createLIst(ingredients))


// const list = document.querySelector("#ingredients")
// const createLIst = (v) => v.map((i) => {
//   const item = document.createElement("li");
//   item.textContent = `${i}`;
//   item.classList.add("item");
//   return item
// })
// console.log(list)
// list.append(...createLIst(ingredients))



