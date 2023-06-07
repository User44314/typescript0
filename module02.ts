
// Введите следующий код, чтобы создать enum объект , представляющий наш сценарий:
enum ContractStatus {
  Permanent = 1,
  Temp,
  Apprentice
}
// Теперь объявите для нового сотрудника переменную с именем employeeStatus 
// типа ContractStatus и присвойте ей значение "Temp". Выведите результат в консоль.
let employeeStatus: ContractStatus = ContractStatus.Temp;
console.log(employeeStatus);


console.log(ContractStatus[employeeStatus]);