// GLOBAL VARIABLES
let futureValue;
let investment;
let rate;
let years;
let verification = false

// COLLECT VALUES FROM THE USER
investment = parseFloat(prompt('Enter investment amount as xxxx.xx'));
rate = parseFloat(prompt('Enter interest rate as xx.x'));
years = parseInt(prompt('Enter the number of years you want to invest for'));

//console.log (typeof(investment))

//VALIDATE ENTRIES

while (verification = false){
    while(true) {
        console.log (typeof(investment))
        if (typeof (investment) !== "number") {
            investment = parseFloat(prompt('Enter investment amount as xxxx.xx'))
        } else {
            break
        } 
    }
    while (true) {
        if (typeof (rate) !== "number" || (rate >= 0 && rate <= 6)){
            rate = parseFloat(prompt('Enter interest rate as xx.x'))
        } else {
            break
        }
    }
    while (true) {
        if (typeof (years) !== "number" || (years >= 1 && rate <= 30)) {
            years = parseInt(prompt('Enter the number of years you want to invest for'));
        } else {
            break
        }
    }
verification = true
}



// CALCULATE FUTURE VALUE
futureValue = investment;
for (let i = 0; i < years; i++) {
    futureValue = futureValue + (futureValue * rate / 100);
}

// DISPLAY RESULT
document.write(`Investment amount: $${investment.toFixed(2)}<br>`);
document.write(`Interest rate: ${rate.toFixed(2)}%<br>`);
document.write(`Years: ${years}<br>`);
document.write(`Future value: $${futureValue.toFixed(2)}`);