// const number = 10;
// number = 19; //This is not possible
// console.log(number);
//----------------------------------------------//
// const array = [];
// array.push(20);
// array.push(23);
// array = []; // This is also not possible
// console.log(array);
//----------------------------------------------//
// var newNumber = 20;
// if (true) {
//   newNumber = 45;
//   console.log();
// }
// console.log(newNumber);
//----------------------------------------------//
// let newNumber = 2;
// if (1) {
//   let newNumber = 23;
//   console.log(newNumber);
// }
// console.log(newNumber);
//----------------------------------------------//

function demo() {
  {
    let x = 23; //if we use var it will be work
    {
      const x = 2;
      console.log(x);
      //not possible beacuse of const declaration
    }
    x = -20;
    console.log(x);
  }
  // console.log(x);  //undefined beacuse of this out of the block
}
demo();
