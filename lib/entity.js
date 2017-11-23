class Entity {

  constructor ({ contribution }) {
    this.contribution = contribution
    this.trustFrom = {}
    this.trustTo = {}
  }

  isTrusted(trust) {
    this.trustFrom[trust.giver.id] = trust
  }

  trusts (trust) {
    this.trustTo[trust.receiver.id] = trust
  }

  canSpend() {
    let canSpend = this.contribution

    for (let trustor in this.trustFrom) {
      const trust = this.trustFrom[trustor]
      canSpend += trust.giver.contribution * trust.fraction
    }

    return canSpend
  }

}

module.exports = Entity
