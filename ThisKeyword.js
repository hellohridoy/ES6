const obj = {
  firstName: "Hridoy",
  lastName: "Hossain",
  age :23,
  fullName: function () {
    console.log(this.firstName + this.lastName);
  },
};

obj.fullName();
