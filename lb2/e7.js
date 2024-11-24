'use strict';

function fn() 
{
    const objConst = { name: "Constant Object" };
    let objVar = { name: "Variable Object" };
    objConst.name = "Updated Constant Object"; // Можна змінити поле об'єкта, навіть якщо він у константі
    objVar.name = "Updated Variable Object";  // Можна змінити поле об'єкта у змінній
    // objConst = { name: "New Constant Object" }; // Помилка! Неможливо переназначити константу
    objVar = { name: "New Variable Object" }; // Успішно, змінній можна присвоїти нове посилання
    return { objConst, objVar };
}

const result = fn();
console.log(result);

module.exports = { fn };