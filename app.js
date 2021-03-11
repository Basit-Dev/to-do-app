// Global variables
const inputEl = document.getElementById("input-field");
const btnEl = document.getElementById("input-btn");
const ulEl = document.getElementById("list-ul");

// This function gets the input value, creates a new li element inserts this new li inside the parent ul element and adds a class name.
const createLi = function () {
  const displayInput = inputEl.value;
  const newLi = document.createElement("LI");
  ulEl.appendChild(newLi).textContent = displayInput;
  newLi.classList.add("list__dynamic");
};

// createLi function gets invoked when btn clicked.
btnEl.addEventListener("click", createLi);
