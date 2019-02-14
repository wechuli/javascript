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
      { id: 0, name: "Steak Dinner", calories: 1200 },
      { id: 1, name: "Cookie", calories: 700 },
      { id: 2, name: "Eggs", calories: 200 }
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
    itemCaloriesInput: "#item-calories"
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
    }
    e.preventDefault();
  };
  //Public methods
  return {
    init() {
      console.log("Initializing App");
      //Fetch items from data structure
      const items = ItemCtrl.getItems();

      //populate item list
      UICtrl.populateItemList(items);
      console.log(items);
      //Load event listeners
      loadEventListeners();
    }
  };
})(ItemCtrl, UICtrl);

//App initialization

App.init();
