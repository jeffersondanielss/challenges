const test = require('ava')
const LetterChanges = require('./index')

test('Get a reverse string', t => {
  t.is(LetterChanges('hello*3'), 'Ifmmp*3')
  t.is(LetterChanges('fun times!'), 'gvO Ujnft!')
})