let _seed;
let validator = true;
let payload = {};
let numbers = [
  "0.3156106622882362",
  "0.5513213466665547",
  "0.3301843000590452",
  "0.04769233684601204",
  "0.4450511749319048",
  "0.8014283726497524",
  "0.6599671903586568",
  "0.39207733233979525",
  "0.9243979984480575"
];

export function seed(seed) {
  _seed = seed;
}

export function random() {
  const x = Math.sin(_seed++) * 10000;
  return x - Math.floor(x);
}

export function checkRandomNumber(array) {
  array.forEach((element) => {
    numbers.includes(toString(element))
      ? (validator = false)
      : console.log("equals");
  });

  validator
    ? (payload = JSON.parse('{ "status": "success"}'))
    : (payload = JSON.parse('{ "status": "error"}'));

  return payload;
}
