const obj = {
  name: "Hridoy Hossain",
  print: function () {
    setTimeout(function () {
      console.log(this.name);
    });
  },
};
obj.print();



const obj2 = {
  name: "Hridoy Hossain",
  print: function () {
    setTimeout(() => {
      console.log(this.name);
    });
  },
};
obj2.print();
