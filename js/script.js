'use strict';

let money = +prompt("Ваш бюджет?"),
    time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
    budjet: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = prompt("Во сколько обойдется?", '');

    if  ( typeof(a) === 'string' && typeof(b) === 'string' && typeof(a) != null && typeof(b) != null && a != '' && b != '' && a.length < 50) {
        console.log("done");
        appData.expenses[a] = b;
    } else {
        console.log("no result");
        i--;
    }
};

/* let i = 0;
while (i < 2) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
    b = prompt("Во сколько обойдется?", '');

if  ( typeof(a) === 'string' && typeof(b) === 'string' && typeof(a) != null && typeof(b) != null && a != '' && b != '' && a.length < 50) {
    console.log("done");
    appData.expenses[a] = b;
    i++
} else {
    console.log("no result");
}
}; */

/* let i = 0;
do {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
    b = prompt("Во сколько обойдется?", '');

if  ( typeof(a) === 'string' && typeof(b) === 'string' && typeof(a) != null && typeof(b) != null && a != '' && b != '' && a.length < 50) {
    console.log("done");
    appData.expenses[a] = b;
    i++
} else {
    console.log("no result");
}
}
while (i < 2); */

appData.moneyPerDay = appData.budjet / 30;

alert("Ваш бюджет на день " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("Низкий доход");
} else  if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний доход"); 
} else  if (appData.moneyPerDay > 2000) {
    console.log("Высокий доход"); 
};