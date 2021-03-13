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
    
    totalProduction();
    //Milk produced per shed report
    
    //Weekly and yearly income report
    function incomeOverTime(buyingRate, time) {
    
        let weeklyIncome = buyingRate * time * dailyLtrsTotal;
        let yearlyIncome = dailyIncome * annualDays;
    
        let weeklyReport = `The daily income will be Ksh.${dailyIncome}
    The weekly income will be Ksh.${weeklyIncome}
    The yearly income will be Ksh.${yearlyIncome}`;
    
        document.getElementById('weekreportsoutput').innerText = weeklyReport;
    };
    
    incomeOverTime(45, 7);
    //Weekly and yearly income report
    
    
    let monthlyData = {
        january: 31,
        february: 29,
        march: 31,
        april: 30,
        may: 31,
        june: 30,
        july: 31,
        august: 31,
        sept: 30,
        oct: 31,
        nov: 30,
        dec: 31
    };



