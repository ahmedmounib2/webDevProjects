/* import animals, { useAnimals } from "./data";

//console.log(animals);
// destructuring an array
const [cat, d] = animals;
//console.log(c);

//console.log(useAnimals(cat));
const [animal, makeSound] = useAnimals(cat);
//console.log(animal);
makeSound(); */

// destructuring an object, the name has to match the object's properties names while destructuring
/* const { name, sound } = cat;
console.log(sound); */
// giving a different name to these variables when destructuirng an object ex:
/* const { name: catName, sound: catSound } = cat;
console.log(catName); */

// giving a default value to our properties
// if the object didnt have a name property then it will be set to name= fluffy, if it did however it will be updated to fluffy
/* const { name = "Fluffy", sound = "purr" } = cat;
console.log(name); */

/* // destructuring a nested object through extensive destructuring
const {
  name,
  sound,
  feedingRequirements: { food, water },
} = cat;
//console.log(feedingRequirements.food);

console.log(food); */

// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";

// console.log(cars);
// const [honda, tesla] = cars;

// const {
//   model: hondaModel,
//   coloursByPopularity: [hondaTopColor, hondaSecondColor],
//   speedStats: { topSpeed: hondaTopSpeed, zeroToSixty: hondaZeroToSixty },
// } = honda;

// const {
//   model: teslaModel,
//   coloursByPopularity: [teslaTopColor, teslaSecondColor],
//   speedStats: { topSpeed: teslaTopSpeed, zeroToSixty: teslaZeroToSixty },
// } = tesla;

// console.log(hondaZeroToSixty);

// CHALLENGE: uncomment the code below and see the car stats rendered

const [honda, tesla] = cars;

const {
  speedStats: { topSpeed: hondaTopSpeed },
} = honda;
const {
  speedStats: { topSpeed: teslaTopSpeed },
} = tesla;

const {
  coloursByPopularity: [hondaTopColour],
} = honda;
const {
  coloursByPopularity: [teslaTopColour],
} = tesla;

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
      <th>Top Colour</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
