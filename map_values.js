import { seed, random } from "./rng.js";

let map = new Map();
let _seed = seed(192837465)
   for (let i = 0; i <= 8; i++) {
       map.set(i, random(_seed));
}
console.log(map)