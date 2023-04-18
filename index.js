

let addButton = document.getElementById("add");
let items = document.getElementById("items");

let listItems = [];

function updateStorage() {
    let state = [];
    for (let i = 0; i < listItems.length; ++i) {
        state.push(listItems[i].item.value);
    }
    localStorage.setItem("todo-list", JSON.stringify(state));
}
function addListItem() {
    let container = document.createElement("div");
    let item = document.createElement("input");
    let remove = document.createElement("button");

    remove.textContent = "\u274c"; // html code for a cross (X)
    item.type = "text";
    item.placeholder = "Todo";

    listItems.push({item: item});

    remove.addEventListener("click", () => {
        listItems.splice(listItems.find(a=>a.item==item), 1);
        container.remove();

        updateStorage();
    });
    item.addEventListener("blur", () => {
        updateStorage();
    });

    container.appendChild(item);
    container.appendChild(remove);
    items.appendChild(container);
    return item;
}

let savedState = localStorage.getItem("todo-list");
if (savedState) {
    savedState = JSON.parse(savedState);
    for (let i = 0; i < savedState.length; ++i) {
        let item = addListItem();
        item.value = savedState[i];
    }
}

addButton.addEventListener("click", () => {
    let item = addListItem();
    updateStorage();
    item.focus();
});