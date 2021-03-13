//Calculating daily milk production

const dailyMilkProduction = function (cows, ltrs) {
    return cows * ltrs;
}

const shedADaily = dailyMilkProduction(34, 15);
const shedBDaily = dailyMilkProduction(11, 28);
const shedCDaily = dailyMilkProduction(27, 18);
const shedDDaily = dailyMilkProduction(52, 11);

//Calculating daily milk production



//Calculating daily income

let dailyLtrsTotal = shedADaily +
    shedBDaily + shedCDaily + shedDDaily;

let dailyIncome = dailyLtrsTotal * 45;

//Calculating daily income

let dailyLtrsTotal = shedADaily +
    shedBDaily + shedCDaily + shedDDaily;

let dailyIncome = dailyLtrsTotal * 45;

//Calculating daily income


//Independent Variable
let annualDays = 365;
//Independent Variable

//Milk produced per shed report
function totalProduction() {
    let milkOutPut = `The production in Shed A is ${shedADaily} litres per day.
    The production in Shed B is ${shedBDaily} litres per day.
    The production in Shed C is ${shedCDaily} litres per day.
    The production in Shed D is ${shedDDaily} litres per day.
    The total milk production is ${dailyLtrsTotal} litres per day.`;
    document.getElementById('milkpershedoutput').innerText = milkOutPut;
};
