const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message")

console.log(cashGiven)

checkButton.addEventListener("click", function validateBillAndCashAmount() {
    hideMessage();
    if(billAmount.value > 0) {
        if(cashGiven.value >= billAmount.value) {
            const amountToBeReturned = cashGiven.value = billAmount.value;
            calculateChange(amountToBeReturned);
        } else {
            showMessage("Cash provided should be atleast equal to bill amount");
        }
    } else { 
        showMessage("Invalid Bill Amount")
    }

})

function hideMessage() {
    message.style.display = "none";
}

function showMessage(msg) {
    message.style.display = "block";
    message.innerText = msg;
}