const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

const li = document.createElement("li");
const deleteButton = document.createElement("button");

li.textContent = input.value;
button.textContent = "❌";
li.append(deleteButton);
list.append(li);
