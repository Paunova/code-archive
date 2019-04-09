// code from https://tylermcginnis.com/beginners-guide-to-javascript-prototype/

// Prototypal Instantiation
// prototype is just a property that every function in JS has and allows
// to share methods across all instances of a function.

function Animal (name, energy) {

    // Now regardless of if Animal is invoked with the new keyword, it’ll still work properly.
    if (this instanceof Animal === false) {
        return new Animal(name, energy);
    }

    // let animal = Object.create(Animal.prototype);
    this.name = name; // this instead of animal
    this.energy = energy;

    // return animal;
  }

  Animal.prototype.eat = function (amount) {
    console.log(`${this.name} is eating.`);
    this.energy += amount;
  }

  Animal.prototype.sleep = function (length) {
    console.log(`${this.name} is sleeping.`);
    this.energy += length;
  }

  Animal.prototype.play = function (length) {
    console.log(`${this.name} is playing.`);
    this.energy -= length;
  }

  const leo = new Animal('Leo', 7); // uncomment and remove new
  const snoop = new Animal('Snoop', 10);

  leo.eat(10)
  snoop.play(5)

  // ---------------------------------

  class Animal {

    constructor(name, energy) {
      this.name = name;
      this.energy = energy;
    }

    eat(amount) {
      console.log(`${this.name} is eating.`);
      this.energy += amount;
    }

    sleep(length) {
      console.log(`${this.name} is sleeping.`);
      this.energy += length;
    }

    play(length) {
      console.log(`${this.name} is playing.`);
      this.energy -= length;
    }

    // it lives on the Animal class itself (not its prototype) and can be accessed using Animal.nextToEat.
    static nextToEat(animals) {
        const sortedByLeastEnergy = animals.sort((a,b) => {
          return a.energy - b.energy
        });

        return sortedByLeastEnergy[0].name;
    }
  }

  const leo = new Animal('Leo', 7);
  const snoop = new Animal('Snoop', 10);
  console.log(Animal.nextToEat([leo, snoop])); // Leo

  const prototype = Object.getPrototypeOf(leo);
  console.log(prototype); // {constructor: ƒ, eat: ƒ, sleep: ƒ, play: ƒ}
  prototype === Animal.prototype; // true
  console.log(leo.constructor); // Logs the constructor function

  for(let key in leo) {
    if (leo.hasOwnProperty(key)) {
      console.log(`Key: ${key}. Value: ${leo[key]}`);
    }
  }

  function User () {}

  leo instanceof Animal // true
  leo instanceof User // false

  Object.create = function (objToDelegateTo) {
    function Fn() {}
    Fn.prototype = objToDelegateTo
    return new Fn()
  } // the official implementation supports a second, optional argument for adding more properties to the created object.

  const Animal = () => {}
  const leo = new Animal() // Error: Animal is not a constructor
  console.log(Animal.prototype) // undefined