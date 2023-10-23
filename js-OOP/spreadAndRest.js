// Task 1

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const array3 = [...array1, ...array2];

console.log(array3);

//Task 2

function multiply(multiplier, ...arguments) {
  const result = arguments.map((item) => item * multiplier);
  return result;
}

const result = multiply(77, 2, 3, 6);
console.log(result);

//Task 3

class ProductClass {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  getTotalPrice() {
    return this.price * this.quantity;
  }

  purchase(quantity) {
    if (quantity <= this.quantity && quantity > 0) {
      this.quantity -= quantity;
      console.log(`Покупка ${quantity} одиниць товару "${this.name}" виконана.`);
    } else {
      console.log(`Неможливо виконати покупку для товару "${this.name}".`);
    }
  }
}

const tShirt = new ProductClass("Футболка", 50, 20);
const jeans = new ProductClass("Джинси", 90, 34);
const hat = new ProductClass("Кепка", 5, 130);

console.log(`Загальна вартість футболок: $${tShirt.getTotalPrice()}`);
console.log(`Загальна вартість джинсів: $${jeans.getTotalPrice()}`);
console.log(`Загальна вартість кепок: $${hat.getTotalPrice()}`);

tShirt.purchase(5);
console.log(`Залишок футболок на складі: ${tShirt.quantity}`);

jeans.purchase(10);
console.log(`Залишок джинсів на складі: ${jeans.quantity}`);

hat.purchase(20);
console.log(`Залишок кепок на складі: ${hat.quantity}`);

//Task 4

class CarClass {
  #speed;
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.#speed = 0;
  }

  accelerate(speed) {
    this.#speed += speed;
  }

  brake(speed) {
    this.#speed -= speed;
  }

  getCarInfo() {
    console.log(`Car Info: ${this.make} ${this.model} (${this.year})`);
  }
}

class AudiClass extends CarClass {
  #color;
  constructor(make, model, year, color) {
    super(make, model, year);
    this.#color = color;
  }

  getCarInfo() {
    console.log(`Car Info: ${this.make} ${this.model} (${this.year}), Color: ${this.color}`);
  }

  get myCurrentColor() {
    return this.color;
  }

  set myCurrentColor(color) {
    this.color = color;
  }
}

// Створення екземпляра класу AudiClass
const myAudi = new AudiClass("Audi", "A3", 2007, "Yellow");

myAudi.getCarInfo();

myAudi.accelerate(40);
myAudi.brake(20);

myAudi.myCurrentColor = "Black";
myAudi.getCarInfo();

//Task 5

class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
}

class PeopleRegistry {
  constructor() {
    this.people = [];
  }

  addPerson(person) {
    this.people.push(person);
  }

  removePerson(firstName, lastName) {
    this.people = this.people.filter((person) => person.firstName !== firstName || person.lastName !== lastName);
  }

  findPerson(firstName, lastName) {
    return this.people.find((person) => person.firstName === firstName && person.lastName === lastName);
  }

  listPeople() {
    this.people.forEach((person) => {
      console.log(`Name: ${person.firstName} ${person.lastName}, Age: ${person.age}`);
    });
  }
}

const registry = new PeopleRegistry();

const person1 = new Person("John", "Doe", 18);
const person2 = new Person("Roman", "Romanovich", 25);

registry.addPerson(person1);
registry.addPerson(person2);

console.log("Список всіх осіб в реєстрі:");
registry.listPeople();

const foundPerson = registry.findPerson("Roman", "Romanovich");
if (foundPerson) {
  console.log("Знайдена особа:", foundPerson);
} else {
  console.log("Особу не знайдено.");
}

registry.removePerson("John", "Doe");
console.log("Список осіб після видалення:");
registry.listPeople();
