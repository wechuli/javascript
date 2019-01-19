const User = function() {
  this.name = name;
  this.chatroom = null;
};

User.prototype = {
  send: function(message, to) {
    this.chatroom.send(message, this, to);
  },
  receive: function(message, from) {
    console.log(`${from.name} to ${this.name}: ${message}`);
  }
};
const Chatroom = function() {
  let users = {}; //list of users
  return {
    register: function(user) {
      users[user.name] = user;
      user.chatroom = this;
    },
    send: function(message, from, to) {
      if (to) {
        //single user message
        to.receive(message, from);
      } else {
        //Broadcast message
        for (key in users) {
          if (users[key] !== from) {
            users[key].receive(message, from);
          }
        }
      }
    }
  };
};

const paul = new User("Paul");
const jeff = new User("Jeff");
const sara = new User("sara");

const chatroom = new Chatroom();

chatroom.register(paul);
chatroom.register(jeff);
chatroom.register(sara);

paul.send("Hello jef", jeff);
sara.send('Hello Paul, what is up?',paul);
jeff.send('Hello everyone')
