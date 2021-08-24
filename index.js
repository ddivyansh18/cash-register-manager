const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message")
const availableNotes = [2000, 500, 100, 20, 10, 5, 1]
const noOfNotes = document.querySelectorAll(".no-of-notes")

function isNumber(inputValue) {
    return !isNaN(inputValue) && !isNaN(parseFloat(inputValue));
}


checkButton.addEventListener("click", function validateBillAndCashAmount() {
    hideMessage();

    console.log("billAmountCheck ",!isNumber(billAmount.value))
    console.log("cashGivenCheck ",!isNumber(cashGiven.value))

    if(!isNumber(billAmount.value) || !isNumber(cashGiven.value)) {
        console.log("Returning")
        showMessage("Input should be a valid integer");
    } else {
        hideMessage();
    }
    
    if(billAmount.value > 0) {
        if(parseInt(cashGiven.value) >= parseInt(billAmount.value)) {
            console.log("Entered here")
            const amountToBeReturned = parseInt(cashGiven.value) - parseInt(billAmount.value);
            calculateChange(amountToBeReturned);
        } else {
            showMessage("Cash provided should be atleast equal to bill amount");
        }
    } else { 
        showMessage("Invalid Bill Amount")
    }

})

function calculateChange(amountToBeReturned) {
    for(let i = 0; i < availableNotes.length; i++) {
        const numberOfNotes = Math.trunc(amountToBeReturned/availableNotes[i]); 
        amountToBeReturned %= availableNotes[i]; 
        noOfNotes[i].innerText = numberOfNotes;
    }
}

function hideMessage() {
    message.style.display = "none";
}

function showMessage(msg) {
    message.style.display = "block";
    message.innerText = msg;
}