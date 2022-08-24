//exercise 1

let button = document.querySelector('#button');

button.onclick = function () {
    let dates = [document.querySelector('#lastName').value, document.querySelector('#firstName').value, document.querySelector('#patronymic').value];
    let arrTrim;
    let newArr = [];
    dates.forEach((items) => {
        arrTrim = items.trim();
        arrTrim = arrTrim.toLowerCase();
        arrTrim = arrTrim[0].toUpperCase() + arrTrim.slice(1);
        newArr.push(arrTrim);
        return newArr;
    });
    clearInput();
    console.log(newArr);
    document.querySelector('#lastDiv').innerHTML = `Фамилия: ${newArr[0]},<br> Имя: ${newArr[1]},<br> Отчество: ${newArr[2]}.`;
};

function clearInput() {
    let userNameInputs = [document.querySelector('#lastName'), document.querySelector('#firstName'), document.querySelector('#patronymic')]
    for(userNameInput of userNameInputs) {
        userNameInput.value = '';
    }
};

//exercise 3

function formatDate(date) {
    const diffMiliseconds = new Date() - date;
    const diffSeconds = Math.round(diffMiliseconds / 1000);
    let minutes = date.getMinutes();
    const diffMinutes = diffSeconds / 60;
    let hours = date.getHours();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    year = year.toString().slice(-2);
    month = month < 10 ? `0${month}` : month;
    day = day < 10 ? `0${day}` : day;
    hours = hours < 10 ? `0${hours}` : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;

    
    if(diffMiliseconds < 1000){
        return `Сейчас`;
    } else if(diffSeconds < 60) {
        return `${diffSeconds} сек. назад`;
    } else if(diffMinutes < 60) {
        return `${diffMinutes} мин. назад`;
    } else {
        return `${day}.${month}.${year}, ${hours}:${minutes}`;
    }
}
document.querySelector('#date').innerHTML = `${formatDate(new Date(new Date - 86400 * 1000))}`;

//exercise 4

let randomNumberButton = document.querySelector('#hi');
let numbers = [];
randomNumberButton.onclick = function getRandomNumber () {
    document.querySelector('#numbersArray').innerHTML = "";
    numbers = [];
for(i = 0; i < 10; i++) {
    numbers.push(Math.round(Math.random() * (10 - (-10)) + (-10)));
}

let resultMax = Math.max(...numbers);
let resultMin = Math.min(...numbers);

const summ = numbers.reduce(function(sum, elem) {
        return +sum + +elem;
});

let sum = 0;
for(let i=0; i<numbers.length; i++) {
    sum += numbers[i];
}

const middleSumm = summ / numbers.length;
const multi = numbers.reduce((a, b) => a * b);
document.querySelector('#numbersArray').innerHTML = `Случайные числа: ${numbers};<br> Максимальное: ${resultMax};<br> Минимальное: ${resultMin};<br> Сумма: ${summ};<br> Среднее арифметическое: ${middleSumm};<br> Произведение: ${multi}.`
};