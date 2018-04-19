/*
  QUESTION

  Using the JavaScript language, have the function LetterChanges(str) take the str parameter
  being passed and modify it using the following algorithm. Replace every letter in the string
  with the letter following it in the alphabet (ie. c becomes d, z becomes a). Then capitalize 
  every vowel in this new string (a, e, i, o, u) and finally return this modified string

*/

const isVogal = (array, element) => array.indexOf(element) !== -1

const letterChanges = str => {
  const alfaet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  const vogais = ["a", "e", "i", "o", "u"]
  let strArray = str.split('');

  strArray.map( (curr, index) => {
    if( alfaet.indexOf(curr) !== -1 ) {
      let position = alfaet.indexOf(curr) + 1
      strArray[index] = alfaet[position]
    }
  })
  
  strArray.map( (curr, index) => {
    if( isVogal(vogais, curr) ) {
      strArray[index] = strArray[index].toUpperCase()
    }
  })

  return strArray.join(''); 
}


module.exports = letterChanges