function iterativeLog(array) {
  let index = 0
  array.forEach(element => {
    console.log(`${index}: ${element}`)
    index++
  })
}

function iterate(callback) {
  let array = [1,2]
  array.forEach(callback)
  return array
}

function doToArray(array, callback) {
  array.forEach(callback)
}
