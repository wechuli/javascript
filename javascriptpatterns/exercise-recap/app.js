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
    }
  };
})();

//UI Controller

const UICtrl = (function() {
    const UISelectors = {
        itemList:'#item-list'
    }
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
    }
  };
})();

//App Controller

const App = (function(ItemCtrl, UICtrl) {
  //Public methods
  return {
    init() {
      console.log("Initializing App");
      //Fetch items from data structure
      const items = ItemCtrl.getItems();

      //populate item list
      UICtrl.populateItemList(items);
      console.log(items);
    }
  };
})(ItemCtrl, UICtrl);

//App initialization

App.init();
