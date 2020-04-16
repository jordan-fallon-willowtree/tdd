// A Set is an unordered collection of unique values
// Restrictions:
// 1. Don't use the standard lib Set
// 2. If you use an array, pretend it doesn't have fancy methods like
//    filter, contains, some, every, etc.

class BetterSet {
  backingArray = []
  add(value) {
    if(!this.contains(value)) {
      this.backingArray.push(value)
    }
  }

  contains(value) {
    return this.indexOf(value) > -1
  }

  indexOf(value) {
    for(let i = 0; i < this.backingArray.length; i++) {
      if(Math.floor(this.backingArray[i]) === Math.floor(value)) return i
    }
    return -1
  }

  size() {
    return this.backingArray.length
  }

  remove(value) {
    const matchIndex = this.indexOf(value)
    if(matchIndex > -1) {
      this.backingArray.splice(matchIndex, 1)
    }
  }
}

module.exports = BetterSet
