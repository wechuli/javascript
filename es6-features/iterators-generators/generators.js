//Generator Example

function* sayNames() {
  yield "Jack";
  yield "Jill";
  yield "John";
  yield "Paul";
}

const name = sayNames();
console.log(name.next());
console.log(name.next());
console.log(name.next());
console.log(name.next());
console.log(name.next());

//ID creator

function* createIds(){
    let index = 0;
    while(true){
        yield index++;
    }
}

const gen = createIds();

console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())