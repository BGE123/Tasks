//
const listContainer = document.getElementById("list-container");
const inputBox = document.getElementById("input-box");

function addTask() {
  if (inputBox.value === "") {
    alert("You must enter something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    saveData();
  }
  inputBox.value = "";
}

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});

document.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    let listItem = e.target.parentElement; // Get the parent <li>
    listItem.classList.add("hidden"); // Add the class to animate it
    // Wait for the animation to finish, then remove the element

    //Setitemout is a function that delays the execution of a function for a specified
    setTimeout(() => {
      listItem.remove();
      saveData();
    }, 500); // Adjust timing to match CSS animation duration
  }
});

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}
function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
