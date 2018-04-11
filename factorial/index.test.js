const test = require('ava')
const FirstFactorial = require('./index')

test('Get a factorial number', t => {
  t.is(FirstFactorial(4), 24)
  t.is(FirstFactorial(8), 40320)
})