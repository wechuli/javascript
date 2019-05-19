class ShoppingCart {
  constructor() {
    this.total = 0;
    this.items = [];
  }

  addItem(itemName, quantity, price) {
    let totalCost = quantity * price;
    this.total += totalCost;
    //there are no items yet
    if (this.items.length === 0) {
      this.items.push({ [itemName]: quantity });
    } else {
      // find if the name exists
      for (let i = 0; i < this.items.length; i++) {
        if (Object.keys(this.items[i])[0] == itemName) {
          this.items[i][itemName] += quantity;
          break;
        } else {
          this.items.push({ [itemName]: quantity });
          break;
        }
      }
    }
  }
}

const myShop = new ShoppingCart();
myShop.addItem("apple", 2, 10);
myShop.addItem("apple", 2, 10);
myShop.addItem("apple", 2, 10);
myShop.addItem("appl", 2, 10);
myShop.addItem("appl", 2, 10);
myShop.addItem("apple", 3, 100);
myShop.addItem("acar", 2, 10);
myShop.addItem("acar", 2, 10);

console.log(myShop);
