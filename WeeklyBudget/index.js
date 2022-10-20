const inputBgt = document.querySelector(".budget-input");
const btnBalance = document.querySelector(".btn-budget");
const addBtn = document.querySelector(".add-btn");
const purchasePrice = document.querySelector(".purchase-price");
const expList = document.querySelector(".expense-list");
const bgtValue = document.querySelector(".budget-value");
const balance = document.querySelector(".balance-value");
const purchase = document.querySelector(".expense-value");
const expTxt = document.querySelector(".expense-input__name");
const expValue = document.querySelector(".expense-input__value");

let expensesList = [];


btnBalance.addEventListener("click", () => {

    if (inputBgt.value > 0) {

        bgtValue.innerText = Number(inputBgt.value) + ", $";
        balance.innerText = Number(inputBgt.value) + ", $";

    } else {
        alert("Add budget value.")
    }
})


addBtn.addEventListener("click", () => {

    newElement(purchasePrice.value);
    newBalance(purchasePrice.value);
    lowBalance(balance.value,purchasePrice.value);
    purchasePrice.value = "";
    balance.value = "";

    //JSON ADD
    newExp = {
        name: expTxt.value,
        price: expValue.value
    }

    expensesList.push(newExp);
    console.log(expensesList);

    let json = JSON.stringify(expensesList);
    localStorage.setItem('expense', JSON.stringify(expensesList));

})

expList.addEventListener("click", (event) => {
    const purchase = document.querySelector(".expense-value");
    if (event.target.classList.contains("fa-xmark")) {
        event.target.parentElement.parentElement.remove();
    }
    purchase.style.display = "none";
    balance.innerHTML = inputBgt.value + ", $ ";
})

function newElement(purchasePrice) {
    const purchase = document.querySelector(".expense-value");

    if (purchasePrice.value != 0) {
        let newItem = document.createElement("div");
        newItem.classList.add("expense-list");
        newItem.innerHTML = `
                <div class="item completed">
                <span>${"Exp: " + expTxt.value + ","}</span>
                <span>${expValue.value + " $"}</span>
                <div class="item-btn">
                    <i class="fa-solid fa-xmark"></i>
                </div>
        `
        expList.appendChild(newItem);

        purchase.innerHTML += purchasePrice + ", $";
    } else {
        alert("Please, add information.");
    }
}

function newBalance(purchasePrice) {
    balance.innerText = (inputBgt.value - purchasePrice + ", $");
}

function lowBalance(balance,purchasePrice) {
    if (balance < purchasePrice && balance =="") {
        alert("You need more money.")
    }
}
