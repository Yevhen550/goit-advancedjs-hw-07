// Клас Key
class Key {
  private signature: number;

  constructor() {
    this.signature = Math.random();
  }

  public getSignature(): number {
    return this.signature;
  }
}

// Клас Person
class Person {
  private key: Key;

  constructor(key: Key) {
    this.key = key;
  }

  public getKey(): Key {
    return this.key;
  }
}

// Абстрактний клас House
abstract class House {
  protected door: boolean = false;
  protected key: Key;
  protected tenants: Person[] = [];

  constructor(key: Key) {
    this.key = key;
  }

  public comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
      console.log("Person has entered the house.");
    } else {
      console.log("The door is closed. Person can't come in.");
    }
  }

  public abstract openDoor(key: Key): void;
}

// Клас MyHouse
class MyHouse extends House {
  public openDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
      console.log("Door is opened.");
    } else {
      console.log("Wrong key. Door stays closed.");
    }
  }
}

// --- Сценарій життя ---
const key = new Key();                   // Створюємо ключ
const house = new MyHouse(key);         // Створюємо дім з цим ключем
const person = new Person(key);         // Створюємо людину з цим же ключем

house.openDoor(person.getKey());        // Людина відкриває двері своїм ключем
house.comeIn(person);                   // Людина заходить у дім

export {};
