export default class Product () {
  construct(name, value) {
    this.name = name;
    this.value = value;
  }

  log = () => {
    console.log("alo!");
  }

};
