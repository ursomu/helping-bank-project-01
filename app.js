let balance = 0;
let transactionType = '';

function checkBalance() {
    document.getElementById("result").innerHTML = `Your Current Balance is: ₹${balance.toFixed(2)}`;
}

// Toggle input form for Deposit or Withdraw based on the type
function toggleInput(type) {
    transactionType = type;
    document.getElementById("input-container").style.display = "block";
    document.getElementById("input-title").innerHTML = type === 'deposit' ? 'Enter Amount to Deposit:' : 'Enter Amount to Withdraw:';
}

function submitTransaction() {
    const amount = parseFloat(document.getElementById("amount-input").value);

    if (amount < 0 || isNaN(amount)) {
        document.getElementById("result").innerHTML = "Invalid amount!";
        return;
    }

    if (transactionType === 'deposit') {
        balance += amount;
        document.getElementById("result").innerHTML = `You Deposited ₹${amount.toFixed(2)}. Your New Balance is ₹${balance.toFixed(2)}`;
    } else if (transactionType === 'withdraw') {
        if (amount > balance) {
            document.getElementById("result").innerHTML = "Insufficient Balance!";
        } else {
            balance -= amount;
            document.getElementById("result").innerHTML = `You Withdrew ₹${amount.toFixed(2)}. Your Remaining Balance is ₹${balance.toFixed(2)}`;
        }
    }

    // Hide the input form after transaction
    document.getElementById("input-container").style.display = "none";
    document.getElementById("amount-input").value = '';  // Clear the input field
}

function exitApp() {
    alert("Thank you, have a good day!");
    document.getElementById("result").innerHTML = "Welcome to Helping Bank.co! Perform transactions above.";
}
