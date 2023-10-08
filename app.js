// FORM INPUTS
const paymentType = document.getElementById("paymentType");
const expenseName = document.getElementById("name");
const expenseDate = document.getElementById("date");
const expenseAmount = document.getElementById("amount");
//tested all EXCEPT "expenseDate" , everything checks out so far

//TABLE CELLS
// testing
const tableBody = document.getElementById("table-body");
const tableRow = document.createElement("tr");
tableRow.innerHTML = `
  <td>test</td>
  <td>asdfasdf asdfasdf asf asfd </td>
  <td>test</td>
  <td>test</td>
`;
tableBody.append(tableRow);
