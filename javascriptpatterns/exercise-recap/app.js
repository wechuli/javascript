//Storage Controller

//Item Controller
const ItemCtrl = (function() {
  //Item Constructor
  const Item = function(id, name, calories) {
    this.id = id;
    this.name = name;
    this.calories = calories;
  };

  //Data Structure /State
  const data = {
    items: [
      // { id: 0, name: "Steak Dinner", calories: 1200 },
      // { id: 1, name: "Cookie", calories: 700 },
      // { id: 2, name: "Eggs", calories: 200 }
    ],
    currentItem: null,
    totalCalories: 0
  };

  //return
  return {
    getItems() {
      return data.items;
    },
    logData() {
      return data;
    },
    getTotalCalories() {
      let total = 0;

      //loop through items and add calories
      data.items.forEach(item => {
        total += item.calories;
      });

      //set total calories in data structure
      data.totalCalories = total;
      return data.totalCalories;
    },
    addItem(name, calories) {
      let ID;
      //Create ID
      if (data.items.length > 0) {
        ID = data.items.length;
      } else {
        ID = 0;
      }
      //Calories to number
      calories = parseInt(calories);

      //create new item
      newItem = new Item(ID, name, calories);
      data.items.push(newItem);
      return newItem;
    },
    setCurrentItem(item) {
      data.currentItem = item;
    },
    getCurrentItem() {
      return data.currentItem;
    },
    updateItem(name, calories) {
      //Calories to number
      calories = parseFloat(calories);
      let found = null;
      data.items.forEach(item => {
        if (item.id === data.currentItem.id) {
          item.name = name;
          item.calories = calories;
          found = item;
        }
      });
      return found;
    },
    getItemById(id) {
      let found = null;
      //Loop through items
      data.items.forEach(item => {
        if (item.id === id) {
          found = item;
        }
      });
      return found;
    }
  };
})();

//UI Controller

const UICtrl = (function() {
  const UISelectors = {
    itemList: "#item-list",
    addBtn: ".add-btn",
    updateBtn: ".update-btn",
    deleteBtn: ".delete-btn",
    backBtn: ".back-btn",
    itemNameInput: "#item-name",
    itemCaloriesInput: "#item-calories",
    totalCalories: ".total-calories",
    listItems: "#item-list li"
  };
  return {
    populateItemList(items) {
      let html = "";
      items.forEach(item => {
        html += `<li class="collection-item" id="item-${item.id}">
              <b>${item.name}: </b> <em>${item.calories}Calories</em>
              <a href="#" class="secondary-content">
                <i class="edit-item fa fa-pen-square"> </i>
              </a>
            </li>`;
      });
      //Insert list items
      document.querySelector(UISelectors.itemList).innerHTML = html;
    },
    getItemInput() {
      return {
        name: document.querySelector(UISelectors.itemNameInput).value,
        calories: document.querySelector(UISelectors.itemCaloriesInput).value
      };
    },
    addListItem(item) {
      //Show the list
      document.querySelector(
        UISelectors.itemList
      ).getElementsByClassName.display = "block";
      // Create li element
      const li = document.createElement("li");
      //Add class
      li.className = "collection-item";
      //ADD ID
      li.id = `item-${item.id}`;
      //Add HTML
      li.innerHTML = `<b>${item.name}: </b> <em>${item.calories}Calories</em>
      <a href="#" class="secondary-content">
        <i id="edit-pen" class="edit-item fa fa-pen-square"> </i>
      </a>`;
      //Insert item
      document
        .querySelector(UISelectors.itemList)
        .insertAdjacentElement("beforeend", li);
    },
    updateListItem(item) {
      let listItems = document.querySelectorAll(UISelectors.listItems);
      //Turn Node list into array
      listItems = Array.from(listItems);
      listItems.forEach(listItem => {
        const itemID = listItem.getAttribute("id");
        if (itemID === `item-${item.id}`) {
          document.querySelector(`#${itemID}`).innerHTML = `<b>${
            item.name
          }: </b> <em>${item.calories}Calories</em>
          <a href="#" class="secondary-content">
            <i id="edit-pen" class="edit-item fa fa-pen-square"> </i>
          </a>`;
        }
      });
    },
    clearInput() {
      document.querySelector(UISelectors.itemNameInput).value = "";
      document.querySelector(UISelectors.itemCaloriesInput).value = "";
    },
    hideList() {
      document.querySelector(
        UISelectors.itemList
      ).getElementsByClassName.display = "none";
    },
    showTotalCalories(total) {
      document.querySelector(UISelectors.totalCalories).textContent = total;
    },
    clearEditState() {
      UICtrl.clearInput();
      document.querySelector(UISelectors.updateBtn).style.display = "none";
      document.querySelector(UISelectors.deleteBtn).style.display = "none";
      document.querySelector(UISelectors.backBtn).style.display = "none";
      document.querySelector(UISelectors.addBtn).style.display = "inline";
    },
    showEditState() {
      document.querySelector(UISelectors.updateBtn).style.display = "inline";
      document.querySelector(UISelectors.deleteBtn).style.display = "inline";
      document.querySelector(UISelectors.backBtn).style.display = "inline";
      document.querySelector(UISelectors.addBtn).style.display = "none";
    },
    addItemToForm() {
      document.querySelector(
        UISelectors.itemNameInput
      ).value = ItemCtrl.getCurrentItem().name;
      document.querySelector(
        UISelectors.itemCaloriesInput
      ).value = ItemCtrl.getCurrentItem().calories;
      UICtrl.showEditState();
    },
    getSelectors() {
      return UISelectors;
    }
  };
})();

//App Controller

const App = (function(ItemCtrl, UICtrl) {
  //Load event listeners
  const loadEventListeners = function() {
    const UISelectors = UICtrl.getSelectors();

    //Add item Event
    document
      .querySelector(UISelectors.addBtn)
      .addEventListener("click", itemAddSubmit);

    //Disable submit on enter
    document.addEventListener("keypress", function(e) {
      if (e.keyCode === 13 || e.which === 13) {
        e.preventDefault();
        return false;
      }
    });
    //Edit icon click event
    document
      .querySelector(UISelectors.itemList)
      .addEventListener("click", itemEditClick);

    //Update item event
    document
      .querySelector(UISelectors.updateBtn)
      .addEventListener("click", itemUpdateSubmit);
    // document
    //   .querySelector("#edit-pen")
    //   .addEventListener("click", itemEditClick);

    //Back button event
    document
    .querySelector(UISelectors.backBtn)
    .addEventListener("click", UICtrl.clearEditState);
  };

  //Add item submit
  const itemAddSubmit = function(e) {
    //Get form input from UI Controller
    const input = UICtrl.getItemInput();
    //Check for name and calorie input
    if (input.name && input.calories) {
      //Add item
      const newItem = ItemCtrl.addItem(input.name, input.calories);
      //Add item to UI list
      UICtrl.addListItem(newItem);

      //get total calories
      const totalCalories = ItemCtrl.getTotalCalories();
      //Add total calories to the UI
      UICtrl.showTotalCalories(totalCalories);

      //Clear fields
      UICtrl.clearInput();
    }
    e.preventDefault();
  };
  //Click edit item
  const itemEditClick = function(e) {
    if (e.target.classList.contains("edit-item")) {
      //Get list item id (item-0)
      const listId = e.target.parentNode.parentNode.id;

      //Break into an array
      const listIdArray = listId.split("-");

      //Get the actual id
      const id = parseInt(listIdArray[1]);

      //Get item
      const itemToEdit = ItemCtrl.getItemById(id);

      //set current item
      ItemCtrl.setCurrentItem(itemToEdit);

      //Add item to form
      UICtrl.addItemToForm();
    }
    e.preventDefault();
  };

  //Update item submit
  const itemUpdateSubmit = function(e) {
    e.preventDefault();
    //Get item input
    const input = UICtrl.getItemInput();

    //Update item
    const updatedItem = ItemCtrl.updateItem(input.name, input.calories);
    //Update UI
    UICtrl.updateListItem(updatedItem);

    //get total calories
    const totalCalories = ItemCtrl.getTotalCalories();
    //Add total calories to the UI
    UICtrl.showTotalCalories(totalCalories);
    UICtrl.clearEditState();
  };
  //Public methods
  return {
    init() {
      //Clear edit state, set initial state

      UICtrl.clearEditState();

      console.log("Initializing App");
      //Fetch items from data structure
      const items = ItemCtrl.getItems();

      //Check if any items
      if (items.length === 0) {
        UICtrl.hideList();
      } else {
        //populate item list
        UICtrl.populateItemList(items);
      }
      //get total calories
      const totalCalories = ItemCtrl.getTotalCalories();
      //Add total calories to the UI
      UICtrl.showTotalCalories(totalCalories);

      //Load event listeners
      loadEventListeners();
    }
  };
})(ItemCtrl, UICtrl);

//App initialization

App.init();
