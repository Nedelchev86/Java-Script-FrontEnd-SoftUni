function solve(arr) {
  class Cat {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    meow() {
      console.log(`${this.name}, age ${this.age} says Meow`);
    }
  }

  const cats = [];

  for (const el of arr) {
    const [name, age] = el.split(" ");
    const cat = new Cat(name, age);
    cats.push(cat);
  }

  for (const cat of cats) {
    cat.meow();
  }
}

solve(["Mellow 2", "Tom 5"]);
