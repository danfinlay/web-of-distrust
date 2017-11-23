class Trust {

  constructor ({ giver, receiver, fraction = 0 }) {
    if (!giver || !receiver) {
      throw new Error('A trust requires a giver and receiver.')
    }

    this.giver = giver
    this.receiver = receiver
    this.fraction = fraction

    giver.trusts(this)
    receiver.isTrusted(this)
  }

}

module.exports = Trust

