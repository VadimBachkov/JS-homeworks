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

        bgtValue.innerText = +Number(inputBgt.value) + Number(bgtValue.textContent);
        balance.innerText = +Number(inputBgt.value) + Number(balance.textContent);

    } else {
        alert("Add budget value.")
    }
})


addBtn.addEventListener("click", () => {

    newElement(purchasePrice.value,expTxt.value);
    newBalance(purchasePrice.value);
    lowBalance(balance);
    purchasePrice.value = "";

    //JSON ADD
    newExp = {
        name: expTxt.value,
        price: expPrice
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
    // purchase.style.display = "none";
    balance.innerText = bgtValue.textContent;
    purchase.innerHTML = + Number(purchase.textContent) - Number(expPrice);
})


function newElement(purchasePrice,expTxt) {
    const purchase = document.querySelector(".expense-value");

    if (purchasePrice!= 0 && expTxt !="") {
        let newItem = document.createElement("div");
        newItem.classList.add("expense-list");
        newItem.innerHTML = `
                <div class="item completed">
                <span>${"Exp: " + expTxt + ","}</span>
                <span>${expValue.value + " $"}</span>
                <div class="item-btn">
                    <i class="fa-solid fa-xmark"></i>
                </div>
        `
        expList.appendChild(newItem);
        expPrice = expValue.value;
        purchase.innerHTML = + purchasePrice + Number(purchase.textContent);
    } else {
        alert("Please, add information.");
    }
}

function newBalance(purchasePrice) {
    balance.innerText = Number(balance.textContent) - purchasePrice;
}

function lowBalance(balance) {
    if (Number(balance.textContent) < 0) {
        alert("You need more money.")
    }
}
