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
