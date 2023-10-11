// FORM INPUTS
const paymentType = document.getElementById("paymentType");
const expenseName = document.getElementById("name");
const expenseDate = document.getElementById("date");
const expenseAmount = document.getElementById("amount");

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

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const expensesArray = [];
// { paymentIcon: paymentIcons[paymentType.value], expenseName: expenseName.value, data: reformattedDate()}

const tablePlaceholder = document.getElementById("table-placeholder");
const tableBody = document.getElementById("table-body");

function onFormSubmit() {
  tablePlaceholder.classList.add("hidden");

  const tableRow = document.createElement("tr");
  tableRow.classList.add("expense-row");
  tableRow.innerHTML = `
    <td><a href="#"><i class="fa-solid fa-x close-icon"></i></a>${
      paymentIcons[paymentType.value]
    }</td>
    <td>${expenseName.value}</td>
    <td>${reformattedDate()}</td>
    <td>$${expenseAmount.value}</td>
  `;
  tableBody.append(tableRow);

  expensesArray.push({
    icon: paymentIcons[paymentType.value],
    name: expenseName.value,
    date: reformattedDate(),
    amount: expenseAmount.value,
  });
  // clear form input values
  expenseName.value = "";
  expenseDate.value = "";
  expenseAmount.value = "";

  // remove expense
  const closeBtn = document.querySelectorAll(".close-icon");
  closeBtn.forEach((button, index) => {
    button.addEventListener("click", (e, i) => {
      let expenseRows = document.querySelectorAll(".expense-row");
      expenseRows[index].remove();
      // if no more expenses, display placeholder message
      if (expenseRows.length < 2) {
        tablePlaceholder.classList.remove("hidden");
      }
    });
  });
}

function reformattedDate() {
  let dateArray = expenseDate.value.split("-");
  dateArray.shift();
  let mappedDate = dateArray.map((item, i) =>
    i === 0 ? months[item - 1] : item
  );
  let month = mappedDate[0];
  let dayDigits = mappedDate[1].split("");
  console.log(dayDigits);
  let day = dayDigits[0] === "0" ? dayDigits[1] : dayDigits.join("");

  // add suffix
  switch (dayDigits[1]) {
    case "1":
      day = day + "st";
      break;
    case "2":
      day = day + "nd";
      break;
    case "3":
      day = day + "rd";
      break;
    default:
      day = day + "th";
  }

  return `${month} ${day}`;
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
