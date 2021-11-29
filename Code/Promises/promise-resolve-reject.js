/**
 * This program shows the asynchronicity of a promise: when a Promise object is
 * created, it doesn't wait for the result of the producing code. Instead, it
 * moves on to the code after the creation (new Promise). The platform (Node.js)
 * waits until everything is finished and then quit.
 *
 * The output:
 *
 * > p state:  Promise { <pending> }
 * > The main program ends.
 * > p state:  Promise { 'Promise p resolved.' }
 * > p result: Promise p resolved.
 */

let p = new Promise((resolve, reject) => {
  console.log("Promise resolve: ", resolve)
  console.log("Promise reject: ", reject)
})
