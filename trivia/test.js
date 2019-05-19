class ShoppingCart {
  constructor() {
    this.total = 0;
    this.items = {};
  }

  addItem(itemName, quantity, price) {
    let totalCost = quantity * price;
    this.total += totalCost;
    //there are no items yet
    if (!this.items[itemName]) {
      this.items[itemName] = quantity;
    } else {
      //add the quantity to the total
      this.items[itemName] += quantity;
    }
  }
  //if we change the price of an item - Chaos !
  removeItem(itemName, quantity, price) {
    //confirm that the item is actually in the cart
    if (!this.items[itemName]) {
      return "Item not found";
    } else {
      let deleteItemQuantity = this.items[itemName];
      if (quantity > deleteItemQuantity) {
        //remove the total price due to this item
        this.total -= deleteItemQuantity * price;
        delete this.items[itemName];
      } else {
        this.total -= quantity * price;
        this.items[itemName] -= quantity;
      }
    }
  }
  checkOut(cashPaid) {
    if (cashPaid >= this.total) {
      let balance = cashPaid - this.total;
      this.total = 0;
      this.items = {};
      return balance;
    } else {
      return "Cash paid is not enough";
    }
  }
}

class Shop extends ShoppingCart {
  constructor() {
    super();
    this.quantity = 100;
  }
  removeItem() {
    this.quantity--;
  }
}

const myShop = new ShoppingCart();
const Shopps = new Shop();

myShop.addItem("Mango", 3, 10);
myShop.addItem("Mango", 16, 10);

console.log(myShop.checkOut(25));
