function isEvenlyDivisible(number,num) {
  return number % num ===0
}

function halfSquare(number) {
  return number *number /2
}

function isLong(string) {
  return string.length >= 15
}

function exclaim(string) {
if(string.endsWith('!')){
  return string.slice(0, string.indexOf('!')+1)
}return string + '!'
}
exclaim('how are you !!!!')
function countWords(string) {
  let word = 1
  for (const words of string){
    if (words.includes(' ')){
      word += 1
    }
  }
return word
}
countWords('how do you turn this on')

function containsDigit(string) {
  let digit= '0123456789'
  for (const number of string)
  {
  if(digit.includes(number))
  {
    return true}
  }return false
}

function containsLowerCase(string) {
  let lowerCase= 'abcdefghijklmnopqrstuvwxyz'
  for (const letter of string){
    if (lowerCase.includes(letter))
    {return true

    }
  }return false
}

function containsUpperCase(string) {
  let upperCase= 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  for (const letter of string){
    if (upperCase.includes(letter))
    {return true

    }
  }return false
}

function containsNonAlphanumeric(string) {
  for(const letter of string){
    if (!containsDigit(letter) && !containsUpperCase(letter)&& !containsLowerCase(letter))
    return true
  }return false
}

function containsSpace(string) {
  for(const letter of string){
    if(letter.includes(' ')){
      return true
    }
  }return false
}

function digits(number) {
  let numbers= '0123456789'
  let stringNum = number.toString()
  let digit = []
  for (const num of stringNum){
    if(numbers.includes(num)){
      digit.push(Number(num))
    }
  }return digit
  
}

function truncate(string) {
  if (string.length>=15){
    return string.slice(0,8)+'...'
  }
  if (string.length<15)
  return string
}

function isValidPassword(password) {
return !containsSpace(password)&&containsDigit(password)&&containsLowerCase(password)&&containsUpperCase(password)&&containsNonAlphanumeric(password)
    
  }


function onlyPunchy(titles) {
  const exclaimTitle = []
  for(const title of titles){
    exclaimTitle.push(exclaim(title))
  }
  const punchyTitle = []
  for(const title of exclaimTitle){
    if(title.length < 15)
    {punchyTitle.push(title)}
  }return punchyTitle
}
onlyPunchy(['how are you', 'what do you want', 'nightmare','hello'])
// const exclamationPointTitles = [];

// for (const title of titles) {
//   exclamationPointTitles.push(exclaim(title));
// }

// const punchyTitles = [];

// for (const title of exclamationPointTitles) {
//   if (title.length < 15) {
//     punchyTitles.push(title);
//   }
// }

// return punchyTitles
// }


module.exports = {
  isEvenlyDivisible,
  halfSquare,
  exclaim,
  isLong,
  containsDigit,
  containsLowerCase,
  containsUpperCase,
  containsNonAlphanumeric,
  containsSpace,
  countWords,
  digits,
  truncate,
  isValidPassword,
  onlyPunchy,
}