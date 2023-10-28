let name = "Hridoy";
let email = "ridoy.java@gmail.com";

const Cat = {
  name,
  email,
  print() {
    console.log(this.name, this.email);
  },
};
Cat.print();
