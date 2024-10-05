## Helping Bank.co: A Simple Banking System
This project demonstrates the creation of a simple banking system, starting from Python and extending it to a fully functional web-based app using HTML, CSS, and JavaScript.

# 1. Python Version
Initially, the app was designed using Python, where users could interact with the terminal to perform basic banking transactions:

Check Balance: Display the current account balance.
Deposit Amount: Add a specific amount to the account.
Withdraw Amount: Withdraw an amount from the account (if funds are available).
Exit: Quit the app.
Here’s the basic Python code structure:

~~~
def show_balance(balance):
    print("-----------------------")
    print(f"Your Current Balance is : ₹{balance:.2f}")
    print("-----------------------")

def deposit():
    print("-----------------------")
    amount = float(input("Enter Amount To deposit: "))
    print("-----------------------")
    if amount < 0:
        print("Invalid amount")
        return 0
    else:
        print(f"Deposited: ₹{amount:.2f}")
        return amount

def withdraw(balance):
    print("-----------------------")
    amount = float(input("Enter Amount To withdraw: "))
    print("-----------------------")
    if amount > balance:
        print("Insufficient Balance")
        return 0
    elif amount < 0:
        print("Invalid amount")
        return 0
    else:
        print(f"Withdrawn: ₹{amount:.2f}")
        return amount

def main():
    balance = 0
    in_run = True

    while in_run:
        print("-----------------------")
        print("Helping Bank.co")
        print("-----------------------")
        print("1. Check Balance ₹")
        print("2. Deposit ₹")
        print("3. Withdraw ₹")
        print("4. Exit")
        print("-----------------------")
        choice = input("Enter your choice (1-4): ")

        if choice == '1':
            show_balance(balance)
        elif choice == '2':
            balance += deposit()
        elif choice == '3':
            balance -= withdraw(balance)
        elif choice == '4':
            in_run = False
        else:
            print("Unknown choice! Please choose again.")

if __name__ == '__main__':
    main()

~~~

This terminal-based app allows for basic banking operations and was the starting point for the web version of the app.

# 2. Web Version
Overview
After creating the Python version, I transformed the app into a web-based solution with an attractive and responsive user interface, using:

HTML: For the structure of the webpage.
CSS: For styling and responsive design.
JavaScript: To handle the banking logic (deposit, withdraw, check balance) directly on the web page.
  
Here’s a description of your project that you can use in your GitHub repository. It explains the original Python code and how it was converted into an interactive webpage using HTML, CSS, and JavaScript. Feel free to adjust it to match your personal style!

Helping Bank.co: A Simple Banking System
Description
This project demonstrates the creation of a simple banking system, starting from Python and extending it to a fully functional web-based app using HTML, CSS, and JavaScript.

1. Python Version
Initially, the app was designed using Python, where users could interact with the terminal to perform basic banking transactions:

Check Balance: Display the current account balance.
Deposit Amount: Add a specific amount to the account.
Withdraw Amount: Withdraw an amount from the account (if funds are available).
Exit: Quit the app.
Here’s the basic Python code structure:

python
Copy code
def show_balance(balance):
    print("-----------------------")
    print(f"Your Current Balance is : ₹{balance:.2f}")
    print("-----------------------")

def deposit():
    print("-----------------------")
    amount = float(input("Enter Amount To deposit: "))
    print("-----------------------")
    if amount < 0:
        print("Invalid amount")
        return 0
    else:
        print(f"Deposited: ₹{amount:.2f}")
        return amount

def withdraw(balance):
    print("-----------------------")
    amount = float(input("Enter Amount To withdraw: "))
    print("-----------------------")
    if amount > balance:
        print("Insufficient Balance")
        return 0
    elif amount < 0:
        print("Invalid amount")
        return 0
    else:
        print(f"Withdrawn: ₹{amount:.2f}")
        return amount

def main():
    balance = 0
    in_run = True

    while in_run:
        print("-----------------------")
        print("Helping Bank.co")
        print("-----------------------")
        print("1. Check Balance ₹")
        print("2. Deposit ₹")
        print("3. Withdraw ₹")
        print("4. Exit")
        print("-----------------------")
        choice = input("Enter your choice (1-4): ")

        if choice == '1':
            show_balance(balance)
        elif choice == '2':
            balance += deposit()
        elif choice == '3':
            balance -= withdraw(balance)
        elif choice == '4':
            in_run = False
        else:
            print("Unknown choice! Please choose again.")

if __name__ == '__main__':
    main()
This terminal-based app allows for basic banking operations and was the starting point for the web version of the app.

2. Web Version
Overview
After creating the Python version, I transformed the app into a web-based solution with an attractive and responsive user interface, using:

HTML: For the structure of the webpage.
CSS: For styling and responsive design.
JavaScript: To handle the banking logic (deposit, withdraw, check balance) directly on the web page.
 # 2.1 HTML Structure
The index.html file provides the structure for the user interface, including buttons for different actions (checking balance, depositing, and withdrawing money), and an input section for entering amounts.

~~~
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Helping Bank.co</title>
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>

    <div id="app-container">
        <h1>Helping Bank.co</h1>

        <div id="options-container" class="box">
            <p class="title">Choose an option:</p>
            <button class="btn" onclick="checkBalance()">Check Balance ₹</button>
            <button class="btn" onclick="toggleInput('deposit')">Deposit Amount ₹</button>
            <button class="btn" onclick="toggleInput('withdraw')">Withdraw Amount ₹</button>
            <button class="btn exit-btn" onclick="exitApp()">Exit</button>
        </div>

        <div id="input-container" class="box" style="display: none;">
            <p class="title" id="input-title">Enter the Amount:</p>
            <input type="number" id="amount-input" placeholder="Enter Amount" />
            <button class="btn" onclick="submitTransaction()">Submit</button>
        </div>

        <div id="result-container" class="box">
            <p id="result">Welcome to Helping Bank.co! Perform transactions above.</p>
        </div>
    </div>

    <script src="js/app.js"></script>
</body>
</html>

~~~

# 2.2 CSS Styling
The styles.css file adds style and structure to the webpage, making it look professional and user-friendly. It also ensures the app is responsive across different devices, including mobile and tablet views.

~~~
/* General styles */
body {
    font-family: 'Poppins', sans-serif;
    background-color: #f0f2f5;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

/* Styling the App Container */
#app-container {
    width: 400px;
    padding: 30px;
    background-color: #fff;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
}

/* Box and button styles */
.box {
    margin-top: 20px;
    padding: 20px;
    border-radius: 10px;
    background-color: #e9f7ef;
    border: 2px solid #d4edda;
}

.btn {
    width: 100%;
    padding: 15px;
    background-color: #4CAF50;
    color: white;
    font-size: 1rem;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
}

/* Responsive Design */
@media (max-width: 768px) {
    #app-container {
        width: 90%;
    }
}

@media (max-width: 480px) {
    #app-container {
        width: 95%;
    }
}

~~~

2.3 JavaScript Logic
The app.js file handles the banking logic (like balance checking, deposit, and withdrawal), replicating the behavior from the Python app in a web environment.

~~~
let balance = 0;
let transactionType = '';

function checkBalance() {
    document.getElementById("result").innerHTML = `Your Current Balance is: ₹${balance.toFixed(2)}`;
}

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
    document.getElementById("input-container").style.display = "none";
    document.getElementById("amount-input").value = '';
}

function exitApp() {
    alert("Thank you, have a good day!");
    document.getElementById("result").innerHTML = "Application Closed";
}

~~~

3. Responsiveness
The web app is designed to be fully responsive and works well on various devices, including desktop, tablet, and mobile. The layout adjusts dynamically to screen size using media queries in the CSS, ensuring an optimal user experience regardless of the device.
# The ui looks like : 
![Screenshot 2024-10-05 101244](https://github.com/user-attachments/assets/ae466733-f9d8-4c00-b677-05f35f763a12)
# Responsive
![Screenshot 2024-10-05 101307](https://github.com/user-attachments/assets/cc141d29-e3fe-4c74-a4d3-61a600b4ea70)






