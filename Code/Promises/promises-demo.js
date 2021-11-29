function fetch(uri, let_it_succeed) {
    console.log("Fetching " + uri)
    return new Promise(
        (resolve, reject) => {
            if (let_it_succeed) {
                setTimeout(() => {
                    resolve("Fetch succeeded")
                }, 2000)
            } else {
                setTimeout(() => {
                    reject(403)
                }, 1000)
            }
        }
    )
}

fetch("http://localhost", true)
  .then((msg) => {
    console.log(msg)
  })
  .catch(err => {
    console.log("Error: " + err)
  })

fetch("https://www.google.com", false)
  .then((msg) => {
    console.log(msg)
  })
  .catch(err => {
    console.log("Error: " + err)
  })

do_fetch_success = async () => {
  result = await fetch("http://localhost", true)
  console.log("Async: " + result)
}

do_fetch_error = async () => {
  result = await fetch("https://www.google.com", false)
  console.log("Async: " + result)
}

do_fetch_success()

do_fetch_error()
