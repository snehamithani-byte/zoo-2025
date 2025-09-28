// Base Animal class
class Animal {
  // Constructor with default properties
  constructor(breed = "Human", name = "Nobody", language = "silence") {
    this.breed = breed;
    this.name = name;
    this.language = language;
  }

  // Method for speaking
  talk() {
    console.log(this.language);
  }

  // Method for introducing
  expressYourself() {
    console.log(`Hello, I'm a ${this.breed} named ${this.name}.`);
  }
}

// Subclass: Bee
class Bee extends Animal {
  constructor(name, language = "buzz", color = "yellow") {
    super("Bee", name, language); // Call parent constructor
    this.color = color;
  }

  // Special Bee method
  makeHoney() {
    console.log(`${this.name} is making honey! 🍯`);
  }

  // Override expressYourself
  expressYourself() {
    console.log(`Hi, I'm a ${this.color} bee named ${this.name}. I say "${this.language}!"`);
  }
}

// Example usage
const human = new Animal("Human", "Alice", "Hello!");
human.expressYourself(); // Hello, I'm a Human named Alice.
human.talk();            // Hello!

const bee = new Bee("Buzzby");
bee.expressYourself();   // Hi, I'm a yellow bee named Buzzby. I say "buzz!"
bee.makeHoney();         // Buzzby is making honey! 🍯
