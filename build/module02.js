"use strict";
// Введите следующий код, чтобы создать enum объект , представляющий наш сценарий:
var ContractStatus;
(function (ContractStatus) {
    ContractStatus[ContractStatus["Permanent"] = 1] = "Permanent";
    ContractStatus[ContractStatus["Temp"] = 2] = "Temp";
    ContractStatus[ContractStatus["Apprentice"] = 3] = "Apprentice";
})(ContractStatus || (ContractStatus = {}));
// Теперь объявите для нового сотрудника переменную с именем employeeStatus 
// типа ContractStatus и присвойте ей значение "Temp". Выведите результат в консоль.
let employeeStatus = ContractStatus.Temp;
console.log(employeeStatus);
console.log(ContractStatus[employeeStatus]);
let randomValue = 10;
randomValue = true;
randomValue = 'Mateo';
if (typeof randomValue === "string") {
    console.log(randomValue.toUpperCase()); //* Returns MATEO to the console.
}
else {
    console.log("Error - A string was expected here."); //* Returns an error message.
}
function add(x, y) {
    if (typeof x === 'number' && typeof y === 'number') {
        return x + y;
    }
    if (typeof x === 'string' && typeof y === 'string') {
        return x.concat(y);
    }
    throw new Error('Parameters must be numbers or strings');
}
console.log(add('one', 'two')); //* Returns "onetwo"
console.log(add(1, 2)); //* Returns 3
let newManager = {
    employeeID: 12345,
    age: 34,
    stockPlan: true
};
console.log(newManager);
let myResult;
myResult = "incomplete"; //* Valid
myResult = "pass"; //* Valid
let diceRoll;
diceRoll = 1; //* Valid
diceRoll = 2; //* Valid
// diceRoll = 7;    //* Invalid
let list = [1, 2, 3];
let list1 = [1, 2, 3];
console.log(list);
console.log(list1);
let person1 = ['Marcia', 35];
