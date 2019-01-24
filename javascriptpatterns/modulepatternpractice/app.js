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
      { id: 1, name: "Cookie", calories: 400 },
      { id: 0, name: "Eggs", calories: 300 }
    ],
    currentItem: null,
    totalCalories: 0
  };
  //public methods

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
    itemList: "#item-list"
  };
  //Public methods
  return {
    populateItemList(items) {
      let html = "";
      items.forEach(item => {
        html += `<li class="collection-item" id="item-${item.id}">
            <b>${item.name}: </b> <em>${item.calories} Calories</em>
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
      //fetch items from data structure
      const items = ItemCtrl.getItems();
      //Populate list with items
      UICtrl.populateItemList(items);
    }
  };
})(ItemCtrl, UICtrl);

App.init();
