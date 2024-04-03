function commonPrefix (list = []) {
  let result = ''

  // loop as maximum length of string
  for (let i = 0; i < 200; i++) {
    const chars = list.map(str => str[i])

    // some of string is random of chat
    // some of string is not equal at index i
    if (chars.some(ch => ch === undefined) || !chars.every(ch => ch === chars[0])) {
      break
    }

    result += chars[0]
  }
  return result
}

console.log(commonPrefix(['flower', 'flow', 'flight']))
console.log(commonPrefix(['dog', 'racecar', 'car']))
