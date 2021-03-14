//Calculating daily milk production

const dailyMilkProduction = function (cows, ltrs) {
    return cows * ltrs;
}

const shedADaily = dailyMilkProduction(34, 15);
const shedBDaily = dailyMilkProduction(11, 28);
const shedCDaily = dailyMilkProduction(27, 18);
const shedDDaily = dailyMilkProduction(52, 11);





//Calculating daily income

let dailyLtrsTotal = shedADaily +
    shedBDaily + shedCDaily + shedDDaily;

let dailyIncome = dailyLtrsTotal * 45;

// year variable 
let annualDays = 365;
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

//Weekly income report
// yearly income report
function incomeOverTime(buyingRate, time) {

    let weeklyIncome = buyingRate * time * dailyLtrsTotal;
    let yearlyIncome = dailyIncome * annualDays;

    let weeklyReport = `The daily income will be Ksh.${dailyIncome}
The weekly income will be Ksh.${weeklyIncome}
The yearly income will be Ksh.${yearlyIncome}`;

    document.getElementById('weekreportsoutput').innerText = weeklyReport;
};

incomeOverTime(45, 7);
//Weekly 
// yearly income report


let monthlyData = {
    january: 31,february: 29,march: 31, april: 30, may: 31, june: 30, july: 31, august: 31, sept: 30, oct: 31,nov: 30,dec: 31
};

//Leap year complete 
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

    document.getElementById('leapreportsoutput').innerText = allOutPutFirstYear;



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

    incomeComparisson(49.60);
    //Income report with new buying rate

};
report(dailyIncome);

function displayPrompt(select) {
    select = parseInt(prompt("Kindly input your rate here, e.g: 50 (for Ksh.50)"));

    let userInput = [
        monthlyData.january * dailyLtrsTotal * select, monthlyData.february * dailyLtrsTotal * select,
        monthlyData.march * dailyLtrsTotal * select, monthlyData.april * dailyLtrsTotal * select,
        monthlyData.may * dailyLtrsTotal * select, monthlyData.june * dailyLtrsTotal * select,
        monthlyData.july * dailyLtrsTotal * select, monthlyData.august * dailyLtrsTotal * select,
        monthlyData.sept * dailyLtrsTotal * select, monthlyData.oct * dailyLtrsTotal * select,
        monthlyData.nov * dailyLtrsTotal * select, monthlyData.dec * dailyLtrsTotal * select];


    let userInputDataTotal = (userInput[0] + userInput[1] + userInput[2]
        + userInput[3] + userInput[4] + userInput[5] + userInput[6] + userInput[7] + userInput[8]
        + userInput[9] + userInput[10] + userInput[11]);


    let userInputData =
        `Your income for January at a rate of Ksh.${select} 
    per litre will be Ksh.${userInput[0]}.
    Your income for February at a rate of Ksh.${select} 
    per litre will be Ksh.${userInput[1]}.
    Your income for March at a rate of Ksh.${select} 
    per litre will be Ksh.${userInput[2]}.
    Your income for April at a rate of Ksh.${select} 
    per litre will be Ksh.${userInput[3]}.
    Your income for May at a rate of Ksh.${select} 
    per litre will be Ksh.${userInput[4]}.
    Your income for June at a rate of Ksh.${select} 
    per litre will be Ksh.${userInput[5]}.
    Your income for July at a rate of Ksh.${select} 
    per litre will be Ksh.${userInput[6]}.
    Your income for August at a rate of Ksh.${select} 
    per litre will be Ksh.${userInput[7]}.
    Your income for September at a rate of Ksh.${select} 
    per litre will be Ksh.${userInput[8]}.
    Your income for October at a rate of Ksh.${select} 
    per litre will be Ksh.${userInput[9]}.
    Your income for November at a rate of Ksh.${select} 
    per litre will be Ksh.${userInput[10]}.
    Your income for December at a rate of Ksh.${select} 
    per litre will be Ksh.${userInput[11]}.
    Your annual income at Ksh.${select} is Ksh.${userInputDataTotal}.
    `;

    if ((select === null) || (!isNaN(select) === false)
        || (typeof select === "string")) {
        location.reload();
    };

    document.getElementById('displayselectedrate').innerText =
        `You've selected a Ksh.${select} buying rate.`;
    document.getElementById('displayselectedrate').style.display = 'block';
    document.getElementById('displayselectedrate').style.color = 'white';
    document.getElementById('displayselectedrate').style.backgroundColor = 'red';
    document.getElementById('selectedreportsoutput').innerText = userInputData;

};

//User rate input selection and report geneneration
//Switch Year Type
function switchToNormalYear() {
    monthlyData.february = 28;
    let displayYear = `You've selected a Normal Year! (365 days)`;
    document.getElementById('displaynormalyear').innerText = displayYear;
    document.getElementById('displaynormalyear').style.display = 'block';
    document.getElementById('yearselectioncontainer').style.color = 'white';
    document.getElementById('yearselectioncontainer').style.backgroundColor = 'red';
    document.getElementById('displayleapyear').style.display = 'none';

}

function switchToLeapYear() {
    monthlyData.february = 29;
    let displayYear = `You've selected a Leap Year! (366 days)`;
    document.getElementById('displayleapyear').innerText = displayYear;
    document.getElementById('displayleapyear').style.display = 'block';
    document.getElementById('yearselectioncontainer').style.color = 'white';
    document.getElementById('yearselectioncontainer').style.backgroundColor = 'red';
    document.getElementById('displaynormalyear').style.display = 'none';
}

//Switch Year Type