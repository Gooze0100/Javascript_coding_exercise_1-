const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function requestInput(msg) {
  return new Promise((resolve, reject) => {
    rl.question(msg, (array) => {
      const arr = [];
      for (const value of array) {
        // if (/\s/.test(array)) {
        //   console.log("contain");
        // }
        if (value.indexOf(" ") < 0) {
          if (value.indexOf(",") < 0) {
            if (/\d/.test(value)) {
              if (typeof parseInt(value) === "number") {
                arr.push(parseInt(value));
              }
            }
          }
        }
      }
      resolve(arr);
    });
  });
}

async function printFrequency() {
  let array = await requestInput("Enter numbers: ");
  const max = Math.max(...array);
  const frequency = [];
  const number = [];
  let counter = 0;

  for (let i = 1; i <= max; i++) {
    for (const integer of array) {
      if (integer === i) {
        counter++;
      }
    }
    frequency.push(counter);
    number.push(i);
    counter = 0;
  }

  console.log("Frequency", frequency);
  console.log("Number:", number);
  return rl.close();
}
printFrequency();

const A = [1, 4, 1, 5, 8, 1, 3, 5, 1, 4, 1, 3, 7, 2];
