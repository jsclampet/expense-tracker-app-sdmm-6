// FORM INPUTS
const paymentType = document.getElementById("paymentType");
const expenseName = document.getElementById("name");
const expenseDate = document.getElementById("date");
const expenseAmount = document.getElementById("amount");
//tested all EXCEPT "expenseDate" , everything checks out so far

let addButton = document.getElementById("add-button");
addButton.addEventListener("click", (e) => {
  e.preventDefault();
  formValidation();
  onFormSubmit();
});

const paymentIcons = {
  card: `<i class="fa-solid fa-credit-card"></i>`,
  cash: `<i class="fa-solid fa-dollar-sign"></i>`,
  cryptoCoin: `<i class="fa-brands fa-bitcoin"></i>`,
  other: `<i class="fa-solid fa-question"></i>`,
};

//TABLE CELLS
const tableBody = document.getElementById("table-body");

function onFormSubmit() {
  const tableRow = document.createElement("tr");
  tableRow.innerHTML = `
    <td>${paymentIcons[paymentType.value]}</td>
    <td>${expenseName.value}</td>
    <td>${expenseDate.value}</td>
    <td>${expenseAmount.value}</td>
  `;
  tableBody.append(tableRow);
}

function formValidation() {
  let error = document.getElementById("error");

  let nameVal = document.forms["expense-form"]["name"].value;
  let dateVal = document.forms["expense-form"]["date"].value;
  let amountVal = document.forms["expense-form"]["amount"].value;

  if (
    amountVal == "" ||
    amountVal == null ||
    dateVal == "" ||
    dateVal == null ||
    nameVal == "" ||
    nameVal == null
  ) {
    error.classList.remove("hidden");
  } else {
    error.classList.add("hidden");
  }
}
