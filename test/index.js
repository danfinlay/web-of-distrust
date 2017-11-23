const test = require('tape')
const Entity = require('../lib/entity')
const Trust = require('../lib/trust')

test('a person can spend their own max', function (t) {
  const personA = new Entity({
    id: 'A',
    contribution: 500,
  })
  const personB = new Entity({
    id: 'B',
    contribution: 500,
  })

  const trustAB = new Trust({
    giver: personA,
    receiver: personB,
    fraction: 0.2,
  })
  const trustBA = new Trust({
    giver: personB,
    receiver: personA,
    fraction: 0.8,
  })

  t.equal(personA.canSpend(), 900)
  t.equal(personB.canSpend(), 600)
  t.end()
})
