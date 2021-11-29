/**
 * This program shows the possible states of a promise. Unfortunately, there
 * is no standard API to get the state of the promise. The only way is to
 * print the promise object in `console.log` to show its state.
 *
 * The output:
 *
 * > p1 state:  Promise { <pending> }
 * > p2 state:  Promise { <pending> }
 * > p3 state:  Promise { <pending> }
 * > The main program ends.
 * > p2 state:  Promise { 'Promise p2 resolved.' }
 * > p2 result: Promise p2 resolved.
 * > p3 state:  Promise { <rejected> 'Promise p3 rejected.' }
 * > p3 result: Promise p3 rejected.
 */

let p1 = new Promise((resolve, reject) => {
  // Neither `resolve` nor `reject` is called.
})

console.log("p1 state: ", p1)

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise p2 resolved.")
  }, 1000)
})

console.log("p2 state: ", p2)

p2.then((msg) => {
  console.log("p2 state: ", p2)
  console.log("p2 result: " + msg)
})

let p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Promise p3 rejected.")
  }, 1000)
})

console.log("p3 state: ", p3)

p3.catch((err) => {
  console.log("p3 state: ", p3)
  console.log("p3 result: " + err)
})

console.log("The main program ends.")
