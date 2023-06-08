
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



let randomValue: unknown = 10;

randomValue = true;
randomValue = 'Mateo';

if (typeof randomValue === "string") {
    console.log((randomValue as string).toUpperCase());    //* Returns MATEO to the console.
} else {
    console.log("Error - A string was expected here.");    //* Returns an error message.
}


function add(x: number | string, y: number | string) {
  if (typeof x === 'number' && typeof y === 'number') {
      return x + y;
  }
  if (typeof x === 'string' && typeof y === 'string') {
      return x.concat(y);
  }
  throw new Error('Parameters must be numbers or strings');
}
console.log(add('one', 'two'));  //* Returns "onetwo"
console.log(add(1, 2));          //* Returns 3
// console.log(add('one', 2));      //* Returns error


interface Employee {
  employeeID: number;
  age: number;
}
interface Manager {
  stockPlan: boolean;
}
type ManagementEmployee = Employee & Manager;
let newManager: ManagementEmployee = {
    employeeID: 12345,
    age: 34,
    stockPlan: true
};

console.log(newManager);


type testResult = "pass" | "fail" | "incomplete";
let myResult: testResult;
myResult = "incomplete";    //* Valid
myResult = "pass";          //* Valid
// myResult = "failure";       //* Invalid


type dice = 1 | 2 | 3 | 4 | 5 | 6;
let diceRoll: dice;
diceRoll = 1;    //* Valid
diceRoll = 2;    //* Valid
// diceRoll = 7;    //* Invalid


let list: number[] = [1, 2, 3];
let list1: Array<number> = [1, 2, 3];
console.log(list);
console.log(list1);

let person1: [string, number] = ['Marcia', 35];