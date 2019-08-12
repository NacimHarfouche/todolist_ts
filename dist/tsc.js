"use strict";
const entryElt = document.getElementById("entryWrite"), addButtonElt = document.getElementById("addButton"), listElt = document.getElementById("list"), clearAllButtonElt = document.getElementById("clearAllButton");
addButtonElt.addEventListener("click", () => {
    let li = document.createElement("li");
    li.textContent = `${entryElt.value} `;
    let buttonRemove = document.createElement("button");
    buttonRemove.type = "button";
    buttonRemove.classList.add("deleteButton");
    let iconElt = document.createElement("i");
    iconElt.classList.add("fas", "fa-times");
    buttonRemove.appendChild(iconElt);
    li.appendChild(buttonRemove);
    listElt.appendChild(li);
});
setInterval(() => {
    const deleteButtonElems = document.querySelectorAll("button.deleteButton");
    for (let button of deleteButtonElems) {
        button.addEventListener("click", function () {
            this.parentNode.remove();
        });
    }
}, 1000);
clearAllButtonElt.addEventListener("click", () => {
    listElt.innerHTML = "";
});