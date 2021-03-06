'use strict';

let money, time;

function start () {
    money = +prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD");

    while (isNaN(money) || money =="" || money == null) {
        money = +prompt("Ваш бюджет на месяц?");
    }
}
/* start(); */

let appData = {
    budjet: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
    chooseExpenses: function() {
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
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budjet / 30).toFixed();
        alert("Ваш бюджет на день " + appData.moneyPerDay);
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log("Низкий доход");
        } else  if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний доход"); 
        } else  if (appData.moneyPerDay > 2000) {
            console.log("Высокий доход"); 
        }
    },
    checkSavings: function() {
        let haveSavings = confirm("Есть сбережения");
        if (haveSavings) {
        appData.savings = true;
        }
        if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");
        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц с вашего депозита составляет " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        for (let i=1; i < 4; i++) {
            let questionOptExpenses = prompt("Статья необязательных расходов?", '');
            appData.optionalExpenses [i] = questionOptExpenses;
            console.log(appData.optionalExpenses);
        }
    },
    chooseIncome: function() {
        let i = 0;
        while (i < 1) {
            let items = prompt('Что принесет дополнительный доход? (перечислите через запятую)', ''); 
            if (typeof(items) === 'string' && items != '' && items != null) {
                i++;
                appData.income = items.split(', ');
                appData.income.push(prompt('Может что-то еще?'));
                appData.income.forEach(function (item, i) {
                    if (item === '') {
                        appData.income.splice(i, 1);
                    };
                });
                appData.income.sort();
            }
        };
        appData.income.forEach(function (item, i) {
            alert('Способы доп. заработка: ' + (i+1) + ' - ' + item);
        });

        for (let key in appData) {
            console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
        }
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


