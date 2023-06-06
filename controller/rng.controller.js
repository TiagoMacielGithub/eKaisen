import { seed, random } from "../rng.js";

function rngseed(){
    let map = new Map();
    let _seed = seed(192837465)
    let i=0;
    var a = [];

    for (i = 0; i <= 8; i++) {
        map.set(i, random(_seed));
    }
    return a = Array.from(map.values())
}

export default rngseed;