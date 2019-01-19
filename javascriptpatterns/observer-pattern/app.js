function EventObserver() {
  this.observers = [];
}

EventObserver.prototype = {
  subscribe: function(fn) {
    this.observers.push(fn);
    console.log(`You are now subscribed to ${fn.name}`);
  },
  unsubscribe: function(fn) {
    //Filter out from the list whatever matches the callback function,
    //If the is no match, the callback gets to stay on the list.The filter returns a new list
    //and reassigns the list of observers
    this.observers = this.observers.filter(observer => {
      return observer !== fn;
    });
    console.log(`You are now unsubscribed from the ${fn.name}`);
  },
  fire: function() {
    this.observers.forEach(function(item) {
      item.call();
    });
  }
};

const click = new EventObserver();
//Event listeners
document.getElementById("sub-ms").addEventListener("click", function() {
  click.subscribe(getCurMilliseconds);
});

document.getElementById("unsub-ms").addEventListener("click", function() {
  click.unsubscribe(getCurMilliseconds);
});

document.getElementById("sub-s").addEventListener("click", function() {
  click.subscribe(getCurSeconds);
});

document.getElementById("unsub-s").addEventListener("click", function() {
  click.unsubscribe(getCurSeconds);
});

document.getElementById("fire").addEventListener("click", function() {
  click.fire();
});

//Click Handler
const getCurMilliseconds = function() {
  console.log(`Current Milliseconds: ${new Date().getMilliseconds()}`);
};

const getCurSeconds = function() {
  console.log(`Current Seconds: ${new Date().getSeconds()}`);
};
