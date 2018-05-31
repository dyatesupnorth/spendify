class Person {
  constructor(name = "Anonymous", age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `I am ${this.name}!`;
  }
  getDescription() {
    return `${this.name} is ${this.age} years old.`;
  }
}

class Student extends Person {
  constructor(name, age, degree) {
    super(name, age);
    this.degree = degree;
  }
  hasDegree() {
    return !!this.degree;
  }

  getDescription() {
    let description = super.getDescription();
    if (this.hasDegree()) {
      description += ` and his degree is in ${this.degree}`;
    }
    return description;
  }
}

class Traveller extends Person {
  constructor(name, age, homeLocation = "Nowhere") {
    super(name, age);
    this.homeLocation = homeLocation
  }
  getGreeting() {
      let greeting = super.getGreeting();
      if (this.homeLocation) {
        greeting += ` i'm visiting from ${this.homeLocation}`
      }
    return greeting
  }
}

const me = new Traveller("David Yates", 29, "Kirkwall");
console.log(me.getGreeting());

const other = new Traveller();
console.log(other.getGreeting());
