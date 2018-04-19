const test = require('ava')
const firstReverse = require('./index')

test('Get a reverse string', t => {
  t.is(firstReverse('time'), 'emit')
  t.is(firstReverse('jefferson'), 'nosreffej')
  t.is(firstReverse('angular'), 'ralugna')
})