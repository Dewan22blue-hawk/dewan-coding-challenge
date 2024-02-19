class Human {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }
}
class Man extends Human {
  constructor(name) {
    super(name, "male");
  }
}
class Woman extends Human {
  constructor(name) {
    super(name, "female");
  }
}

class God {
  /**
   * @returns Human[]
   */
  static create() {
    const Adam = new Man("Adam");
    const Eve = new Woman("Eve");
    return [Adam, Eve];
  }
}
const Humans = God.create();
console.log(Humans);
// code
