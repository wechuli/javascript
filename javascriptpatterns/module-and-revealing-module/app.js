//Basic structure

// (function(){

//     //Declare private vars and functions

//     return{
//         //Decalre public var and functions
//     }

// })();

//Below is an example of a closure

const UICtrl = (function() {
  let _text = "Hello World";

  const _changeText = function() {
    //we can't access this function directly
    const element = document.querySelector("h2");
    element.textContent = _text;
  };
  return {
    callChangeText: function() {
      _changeText();
      console.log(_text);
    }
  };
})();

UICtrl.callChangeText();

//Revealing module mappern

const ItemCtrl = (function() {
  let _data = [];
  function _add(item) {
    _data.push(item);
    console.log("Item added");
  }
  function _get(id) {
    return _data.find(item => item.id === id);
  }
  return {
    add:_add,
    get:_get
  };
})();

ItemCtrl.add({ id: 1, name: "John" });
ItemCtrl.add({ id: 2, name: "Joyce" });

console.log(ItemCtrl.get(1));
console.log(ItemCtrl.get(2));
