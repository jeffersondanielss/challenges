/*

  QUESTION

  Have the function LongestWord(sen) take the sen parameter being
  passed and return the largest word in the string. If there are
  two or more words that are the same length, return the first 
  word from the string with that length. Ignore punctuation and
  assume sen will not be empty. 
  Use the Parameter Testing feature in the box below to test your
  code with different arguments.

*/


//First


function firstLongestWord(sen) {
  var newSen = sen.replace(/[^\w\s]/gi, '')
  var words = newSen.split(" ")
  var rightWord = ''
  
  var largeWord = words.map( (word) => {
    if(word.length > rightWord.length) { rightWord = word }
  })
  
  return rightWord
}



//Refactor


const longestWord = sen => {
  let words = sen.replace(/[^\w\s]/gi, '').split(' ')
  
  return words.reduce((prev, next) =>
    prev.length >= next.length
      ? prev
      : next
  )
}
 

module.exports = longestWord