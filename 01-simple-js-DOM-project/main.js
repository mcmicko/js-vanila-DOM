let form = document.getElementById("addForm");
let itemList = document.getElementById("items");
let filter = document.getElementById("filter");

//  FORM SUBMIT EVENT
form.addEventListener("submit", addItem);
// DELETE EVENT
itemList.addEventListener("click", removeItem);
// FILTER EVENT
filter.addEventListener("keyup", filterItems);

function addItem(e) {
  e.preventDefault();

  //GET INPUT VALUE
  let newItem = document.getElementById("item").value;

  // CREATE NEW LI ELEMENT
  let li = document.createElement("li");
  // ADD CLASS
  li.className = "list-group-item";
  //ADD TEXT NODE  WITH INPUT VALUE
  li.appendChild(document.createTextNode(newItem));
  // CREATE DEL BUTTON EL.
  let deleteBtn = document.createElement("button");

  deleteBtn.className = "btn btn-danger btn-sm float-right delete";
  deleteBtn.appendChild(document.createTextNode("X"));

  li.appendChild(deleteBtn);

  itemList.appendChild(li);
}

// REMOVE ITEM
function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("are you sure?")) {
      let li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// FILTER ITEMS
function filterItems(e) {
  // convert text to lowercase
  let text = e.target.value.toLowerCase();
  // get list
  let items = itemList.getElementsByTagName("li");
  // convert to an array
  Array.from(items).forEach(function (item) {
    let itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
