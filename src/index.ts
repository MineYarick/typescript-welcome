//const firstName: string = "Jonnie";
//const lastName: string = "Ivsnov";

//const pi: number = 3.14;

//console.log(`Hello, ${firstName} ${lastName}!`);
//console.log(`The value of pi is ${pi}.`);

// Вивести 10 консоль.логів у консоль

//for (let i = 0; i < 10; i++){
//    console.log(`Число з циклу for - ${i}`);
//}

// Вивести ліьки парні числа

//for (let i = 0; i < 10; i += 2){
//    console.log(`Число з циклу for - ${i}`);
//}

//for (let i = 0; i < 10; i++){
//    if (i % 2 === 0){
//        console.log(`Число з циклу for - ${i}`);
//    }
//}

//console.log(this.document);

// Задача: створити невеликий додаток, який може обчислити факторіал числа.
// Факторіал числа - добуток всіх цілих чисел від 1 до цього числа включно.
// 5! = 1 * 2 * 3 * 4 * 5 = 120
const form = document.querySelector('#factorial-form') as HTMLFormElement;
const stepsList = document.querySelector('#factorial-steps') as HTMLOListElement;

form.addEventListener('submit', (event) => {
    event.preventDefault();
    stepsList.textContent = '';
    // Отримати введене число
    const numberInput = document.querySelector('#number') as HTMLInputElement;
    const number: number = Number(numberInput.value);

    // Обчислюємо факторіал та додавання кожної ітерації до список
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial *= i;

        const listItem: HTMLLIElement = document.createElement('li');
        listItem.textContent = `${factorial}`;
        stepsList.appendChild(listItem);
    }
});