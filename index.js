

let addButton = document.getElementById("add");
let items = document.getElementById("items");



addButton.addEventListener("click", () => {
    let container = document.createElement("div");
    let item = document.createElement("input");
    let remove = document.createElement("button");

    remove.innerHTML = "&#10060;"; // html code for a cross (X)
    item.type = "text";
    item.placeholder = "Todo";

    remove.addEventListener("click", () => {
        container.remove();
    });

    container.appendChild(item);
    container.appendChild(remove);
    items.appendChild(container);
    
    item.focus();
});