// Напиши скрипт управления формой логина.
// <form class="login-form">
// <label>
// Email
// <input type="email" name="email" />
// </label>
// <label>
// Password
// <input type="password" name="password" />
// </label>
// <button type="submit">Login</button>
// </form>
// Обработка отправки формы form.login-form должна быть по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
// Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя поля будет
// именем свойства, а значение поля - значением свойства.Для доступа к элементам формы используй свойство elements.
// Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.

const ref = {
    form: document.querySelector(".login-form")
}
ref.form.addEventListener("submit", onFormSubmit);
function onFormSubmit(evt) {
    evt.preventDefault();
    const email = evt.target.email.value;
    const password = evt.target.password.value;
    console.log(email === "" || password === "" ? alert("Заполните все поля!") : { email, password });
    ref.form.reset()
}




// const form = document.querySelector('.login-form');
// form.addEventListener("submit", sendTheForm);
// function sendTheForm(event) {
//     event.preventDefault();
 //     const { email, password } = event.currentTarget;
//     if (email.value === "" || password.value === "") {
//         return alert("Please fill in all the fields!")
//     } else (
//         console.log({ email: `${email.value}`, password: `${password.value}` })
//     )
   //     event.currentTarget.reset();
// }