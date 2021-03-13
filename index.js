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