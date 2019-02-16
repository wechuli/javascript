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
    }
  };
})();

//UI Controller

const UICtrl = (function() {
  const UISelectors = {
    itemList: "#item-list",
    addBtn: ".add-btn",
    itemNameInput: "#item-name",
    itemCaloriesInput: "#item-calories",
    totalCalories: ".total-calories"
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
        <i class="edit-item fa fa-pen-square"> </i>
      </a>`;
      //Insert item
      document
        .querySelector(UISelectors.itemList)
        .insertAdjacentElement("beforeend", li);
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
  //Public methods
  return {
    init() {
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
