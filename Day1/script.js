// // // Hello World

// // console.log("Hello Suyati!");

// // // END - Hello World



// // // The const Keyword

// // const a = 5;
// // // a = 10; // will throw error "TypeError: Assignment to constant variable"

// // // END: The const Keyword



// // // The let Keyword - Block Scope

// // var b1 = 5;

// // if (true) {
// //   var b1 = 10;
// //   console.log(b1);
// // }

// // console.log(b1);


// // let b2 = 5;

// // if (true) {
// //   let b2 = 10;

// //   console.log(b2);
// // }

// // console.log(b2);

// // // END: The let Keyword - Block Scope



// // // The let Keyword - Hoisting
// // console.log(c1);
// // var c1 = 5;


// // // console.log(c2);
// // // let c2 = 5; // ReferenceError: Cannot access 'c2' before initialization

// // // END: The let Keyword - Hoisting



// // // The let Keyword - A step towards closure

// // var div,
// //   container = document.getElementById("container");

// // for (var i = 0; i < 3; i++) {
// //   div = document.createElement("div");
// //   div.onclick = () => {
// //     alert("This is box #" + i);
// //   };
// //   container.appendChild(div);
// // }

// // for (let j = 3; j < 6; j++) {
// //   div = document.createElement("div");
// //   div.onclick = () => {
// //     alert("This is box #" + j);
// //   };
// //   container.appendChild(div);
// // }

// // // END: The let Keyword



// // Template Strings

// // const firstName = "Faiz";
// // const lastName = "Dani";
// // console.log(`Hey "${lastName}, ${firstName}"`)
// // // END: Template Strings



// // Default Parameters

// // function sayHi(entity = "World"){
// //   console.log(`Hi ${entity}!`);
// // }

// // sayHi("Faiz");
// // sayHi();
// // END: Default Parameters



// // Arrow Functions

// // const greet = entity => `Hello ${entity}!`;
// // console.log(greet("Suyati"));

// // const greet = inputParam => `Welcome ${inputParam}!`;
// // console.log(greet("Faiz"));

// // const customGreet = (param1, param2) => {
// //   if(!param1) {
// //     param1 = "Hi";
// //   }

// //   if(!param2) {
// //     param2 = "World";
// //   }

// //   return `${param1}, ${param2}`;
// // }

// // console.log(customGreet("Hey", "There!"));

// // const customGreet = (greet, entity) => {
// //   if (!greet) {
// //     greet = "Hello";
// //   }

// //   if (!entity) {
// //     entity = "World";
// //   }

// //   return `${greet}, ${entity}`;
// // };
// // console.log(customGreet("Hey", "Vaisakh"));

// // END: Arrow Functions



// // // Arrow Functions - A closure

// const triveni1 = {
//   rivers: ["Ganga", "Yamuna", "Saraswati"],
//   display: function(delay = 1000) {
//     setTimeout(function() {
//       console.log(this.rivers.join(", "));
//     }, delay);
//   }
// };

// triveni1.display(); // Uncaught TypeError: Cannot read property 'join' of undefined

// // const triveni2 = {
// //   rivers: ["Ganga", "Yamuna", "Saraswati"],
// //   display: function (delay = 1000) {
// //     setTimeout(() => {
// //       console.log(this.rivers.join(", "));
// //     }, delay);
// //   },
// // };

// // triveni2.display();

// // // END: Arrow Functions - A closure



// // // Destructuring Objects

// // const myAddress = {
// //   houseName: "LOPAMUDRA",
// //   street: "KOTTICHIRAPADAM",
// //   place: "N PARAVUR",
// //   district: "ERNAKULAM",
// //   state: "KERALA",
// //   country: "INDIA"
// // };

// // const { state, country } = myAddress;

// // console.log(state, country);


// // const printHouseName1 = (myAddress) => {
// //   console.log(`My house name is ${myAddress.houseName}`);
// // }
// // printHouseName1(myAddress);

// // // Personally, I don't prefer this
// // const printHouseName2 = ({ houseName }) => {
// //   console.log(`My house name is ${houseName}`);
// // }
// // printHouseName2(myAddress);

// // // END: Destructuring Objects



// // Destructuring Arrays

// const nicknames = ["Master Blaster", "God of the Off Side", "The Wall"];

// const [sachin] = nicknames;
// console.log(`Sachin's nickname is ${sachin}`);

// const [, sourav, ] = nicknames;
// console.log(`Sourav's nickname is ${sourav}`);

// // END: Destructuring Arrays



// // Object Literal Enhancement

// const houseName = "LOPAMUDRA",
//   street = "KOTTICHIRAPADAM",
//   place = "N PARAVUR",
//   district = "ERNAKULAM";

// const myAddress1 = {
//   houseName,
//   street,
//   place,
//   district,
//   printHouseName() {
//     console.log(`My house name is ${this.houseName}`);
//   },
// };

// console.log(myAddress1);
// myAddress1.printHouseName();

// // END: Object Literal Enhancement



// // The Spread Operator

// const south = [
//   "Kerala",
//   "Andaman and Nicobar",
//   "Andhra Pradesh",
//   "Karnataka",
//   "Lakshadweep",
//   "Puducherry",
//   "Tamil Nadu",
//   "Telangana",
// ];
// const north = [
//   "Chandigarh",
//   "Delhi",
//   "Haryana",
//   "Himachal Pradesh",
//   "Jammu and Kashmir",
//   "Ladakh",
//   "Punjab",
//   "Rajasthan",
//   "Uttarakhand",
//   "Uttar Pradesh",
// ];

// const southAndNorth = [...south, ...north];
// console.log(`SouthNorth States: ${southAndNorth.join(", ")}`);

// const [ourState, ...others] = southAndNorth;
// console.log(`Our state: ${ourState}`);
// console.log(`Other states: ${others.join(", ")}`);

// const southOfKerala = (...districts) => {
//   const [southEast, ...rest] = districts;
//   console.log(`Southest district of Kerala is ${southEast}.`);
// }
// southOfKerala("Thiruvananthapuram", "Kollam", "Pathanamthitta");

// // END: The Spread Operator



// // XMLHttpRequest

// function onResponse() {
//   var data = JSON.parse(this.responseText);
//   console.log(`Response from XHR call: ${data}`);
// }

// function onError(error) {
//   console.log(error);
// }

// var xhrRequest = new XMLHttpRequest();
// xhrRequest.onload = onResponse;
// xhrRequest.onerror = onError;
// xhrRequest.open('get', 'https://randomuser.me/api/', true);
// xhrRequest.send();

// // END: XMLHttpRequest



// // jQuery Ajax

// $.ajax("https://randomuser.me/api/")
//   .then(function (data) {
//     console.log(`Response from AJAX call: ${data}`);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

// // END: jQuery Ajax



// // Fetch API

// fetch("https://randomuser.me/api/")
//   .then((response) => {
//     if (response.status !== 200) {
//       throw new Error(`Request failed with status - ${response.status}`);
//     }

//     // response is a stream
//     response.json().then((data) => {
//       console.log(`Response from Fetch call: ${data}`);
//     });
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// // END: Fetch API



// // Async/Await

// const getRandomUser = async () => {
//   const response = await fetch("https://randomuser.me/api/");
//   const user = await response.json();
//   console.log(`Response from async fn: ${user}`);
// }
// getRandomUser();

// // END: Async/Await



// // OOP prior to ES6

// function PersonClass2(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// PersonClass2.prototype.print = function () {
//   console.log(
//     `{ firstName: "${this.firstName}", lastName: "${this.lastName}" }`
//   );
// };

// const vaisakh2 = new PersonClass2("Vaisakh", "Babu");
// vaisakh2.print();

// // END: OOP prior to ES6



// // ES6 Classes

// class PersonClass1 {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }

//   print() {
//     console.log(
//       `{ firstName: "${this.firstName}", lastName: "${this.lastName}" }`
//     );
//   }
// }

// const vaisakh1 = new PersonClass1("Vaisakh", "Babu");
// vaisakh1.print();

// PersonClass1.prototype.greet = function () {
//   console.log(`Hey "${this.lastName}, ${this.firstName}"`);
// };
// vaisakh1.greet();

// END: Classes



// // ES6 Modules

// import { print } from "./modules/logger.js";
// print("We are done for the day!");

// // END: ES6 Modules



// // Evaluation Tasks

import {clone, deepClone} from "./modules/deepClone.js";

//define object
let triveni = {
  name: "Prayagraj Confluence",
  rivers: ["Ganga", "Yamuna", "Saraswati"]
};

//define list
let cities = ["Kochi", "Trivandrum", "Thrissur"];

//deep Copy list
let deepCopyList = Array.from(cities);

//deep Copy object
let deepCopyObject = deepClone(triveni);

//shallow copy list
let shallowCopyList = cities;

//shallow copy object
let shallowCopyObject = clone(triveni);

deepCopyList.push("Palakkad");
deepCopyObject.rivers.push("Periyar");
shallowCopyList.push("Alleppey");
shallowCopyObject.rivers.push("Nila");

console.log(`Original List: ${JSON.stringify(cities)}`);
console.log(`Deep Copy List: ${JSON.stringify(deepCopyList)}`);
console.log(`Shallow Copy List: ${JSON.stringify(shallowCopyList)}`);

console.log(`Original Object: ${JSON.stringify(triveni)}`);
console.log(`Deep Copy Object: ${JSON.stringify(deepCopyObject)}`);
console.log(`Shallow Copy Object: ${JSON.stringify(shallowCopyObject)}`);

//Is FetchAPI an ECMAScript feature?
//No, it is pat of the WHATG and W3C, the spec for it is present at https://fetch.spec.whatwg.org/
