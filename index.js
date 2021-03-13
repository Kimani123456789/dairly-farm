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
    //Leap year complete income report
function report(value) {

    let allOutPutFirstYear =
        `The income for January is Ksh.${monthlyData.january * value}
    The income for February is Ksh.${monthlyData.february * value}
    The income for March is Ksh.${monthlyData.march * value}
    The income for April is Ksh.${monthlyData.april * value}
    The income for May is Ksh.${monthlyData.may * value}
    The income for June is Ksh.${monthlyData.june * value}
    The income for July is Ksh.${monthlyData.july * value}
    The income for August is Ksh.${monthlyData.august * value}
    The income for September is Ksh.${monthlyData.sept * value}
    The income for October is Ksh.${monthlyData.oct * value}
    The income for November is Ksh.${monthlyData.nov * value}
    The income for December is Ksh.${monthlyData.dec * value}`;

    document.getElementById('leapreportsoutput').innerText = allOutPutFirstYear} ;

    //Income report with new buying rate
    function incomeComparisson(newbuyingRate) {


        let newdailyIncome = newbuyingRate * dailyLtrsTotal;

        let allData = [monthlyData.january * value, monthlyData.january * newdailyIncome,
        monthlyData.february * value, monthlyData.february * newdailyIncome,
        monthlyData.march * value, monthlyData.march * newdailyIncome,
        monthlyData.april * value, monthlyData.april * newdailyIncome,
        monthlyData.may * value, monthlyData.may * newdailyIncome,
        monthlyData.june * value, monthlyData.june * newdailyIncome,
        monthlyData.july * value, monthlyData.july * newdailyIncome,
        monthlyData.august * value, monthlyData.august * newdailyIncome,
        monthlyData.sept * value, monthlyData.sept * newdailyIncome,
        monthlyData.oct * value, monthlyData.oct * newdailyIncome,
        monthlyData.nov * value, monthlyData.nov * newdailyIncome,
        monthlyData.dec * value, monthlyData.dec * newdailyIncome,
        ];



        let firstYearTotal = (allData[0] + allData[2] + allData[4] + allData[6] + allData[8] + allData[10]
            + allData[12] + allData[14] + allData[16] + allData[18] + allData[20] + allData[22]);

        let secondYearTotal = (allData[1] + allData[3] + allData[5] + allData[7] + allData[9] + allData[11]
            + allData[13] + allData[15] + allData[17] + allData[19] + allData[21] + allData[23]);

        let bothYearsTotal = firstYearTotal + secondYearTotal;


        let allOutPutComparisson =
            `The income for January at rate Ksh.45 per litre is 
            Ksh.${allData[0]} and Ksh.${allData[1]}
            if rate is Ksh.49.60.

            The income for February at rate Ksh.45 per litre is 
            Ksh.${allData[2]} and Ksh.${allData[3]}
            if rate is Ksh.49.60.

            The income for March at rate Ksh.45 per litre is 
            Ksh.${allData[4]} and Ksh.${allData[5]}
            if rate is Ksh.49.60.

            The income for April at rate Ksh.45 per litre is 
            Ksh.${allData[6]} and Ksh.${allData[7]}
            if rate is Ksh.49.60.

            The income for May at rate Ksh.45 per litre is 
            Ksh.${allData[8]} and Ksh.${allData[9]}
            if rate is Ksh.49.60.

            The income for June at rate Ksh.45 per litre is 
            Ksh.${allData[10]} and Ksh.${allData[11]}
            if rate is Ksh.49.60.

            The income for July at rate Ksh.45 per litre is 
            Ksh.${allData[12]} and Ksh.${allData[13]}
            if rate is Ksh.49.60.

            The income for August at rate Ksh.45 per litre is 
            Ksh.${allData[14]} and Ksh.${allData[15]}
            if rate is Ksh.49.60.

            The income for September at rate Ksh.45 per litre is 
            Ksh.${allData[16]} and Ksh.${allData[17]}
            if rate is Ksh.49.60.

            The income for October at rate Ksh.45 per litre is 
            Ksh.${allData[18]} and Ksh.${allData[19]}
            if rate is Ksh.49.60.

            The income for November at rate Ksh.45 per litre is 
            Ksh.${allData[20]} and Ksh.${allData[21]}
            if rate is Ksh.49.60.

            The income for December at rate Ksh.45 per litre is 
            Ksh.${allData[22]} and Ksh.${allData[23]}
            if rate is Ksh.49.60.

            The income total for the first year at a rate of Ksh.45 is Ksh.${firstYearTotal}.
            The income total for the second year at a rate of Ksh.49.60 is Ksh.${secondYearTotal}.

            The total income for both years is Ksh.${bothYearsTotal}.`;

        document.getElementById('reportsoutput').innerText = allOutPutComparisson;

    };
    
