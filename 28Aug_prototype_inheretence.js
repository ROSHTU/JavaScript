let animal = {
  eat: true,
  walk() {
    console.log("Animal walks");
  },
};

let dog = {
  voice: "woof",
  __proto__: animal,
  about() {
    console.log("I am a dog");
  },
};

let cat = {
  voice: "meow",
  __proto__: dog, // double underscore
  about() {
    console.log("I am a cat");
  },
};

console.log(cat.voice);
animal.walk();
cat.walk();

// create a new object with animal as a prototype
let rabbit = Object.create(animal); // same as {__proto__: animal}

alert(rabbit.eats); // true

alert(Object.getPrototypeOf(rabbit) === animal); // true

Object.setPrototypeOf(rabbit, {}); // change the prototype of rabbit to {}
