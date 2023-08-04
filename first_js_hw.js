let Salary = prompt("Введіть розмір вашої зарплати")
const bonus = Salary * 0.15;
const total = Salary++ + bonus;
const tax = total *0.1;
const shop = 190;
const result = total - tax - shop;
alert(`Залишок: ${result} грн`);