const test = require('ava')
const longestWord = require('./index')

test('Get a longest word of string', t => {
  t.is(longestWord('I love dogs'), 'love')
  t.is(longestWord('fun&!! time'), 'time')
  t.is(longestWord('O empreiteiro ontem porem a gente nao sabe se pode ou nao'), 'empreiteiro')
})