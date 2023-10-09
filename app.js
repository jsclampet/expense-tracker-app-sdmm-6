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
});
//TABLE CELLS
// testing
const tableBody = document.getElementById("table-body");
const tableRow = document.createElement("tr");
tableRow.innerHTML = `
  <td>test</td>
  <td>asdfasdf asdfasdf asf asfd </td>
  <td>test</td>
  <td>123123</td>
`;
tableBody.append(tableRow);

function formValidation() {
  let error = document.getElementById("error");

  let nameVal = document.forms["expense-form"]["name"].value;
  let dateVal = document.forms["expense-form"]["date"].value;
  let amountVal = document.forms["expense-form"]["amount"].value;

  if (amountVal == "" || amountVal == null) {
    error.classList.remove("hidden");
  } else {
    error.classList.add("hidden");
  }
}
