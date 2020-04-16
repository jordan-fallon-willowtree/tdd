const BetterSet = require('../src/BetterSet.js')

// Features to build:
// 1. add
// 2. contains
// 3. size
// 4. uniqueness
// 5. remove

describe('BetterSet', () => {
  it('can have items added to it', () => {
    const set = new BetterSet()
    const rand = Math.random()
    set.add(rand)
    expect(set.contains(rand)).toBeTrue()
    expect(set.contains(5)).toBeFalse()
  })

  it('has a size', () => {
    const set = new BetterSet()
    expect(set.size()).toEqual(0)

    const set2 = new BetterSet()
    set2.add(4)
    expect(set2.size()).toEqual(1)
  })

  it('does not allow duplicates', () => {
    const set = new BetterSet()
    set.add(4)
    set.add(4)
    expect(set.size()).toEqual(1)
    set.add(4.5)
    expect(set.size()).toEqual(1)
  })

  it('can remove items', () => {
    const set = new BetterSet()
    set.add(4)
    set.add(5)
    set.remove(4.2)
    expect(set.size()).toEqual(1)
    expect(set.contains(4)).toBeFalse()
    expect(set.contains(5)).toBeTrue()
  })

  it('does not blow up if you remove an item that is not in the set', () => {
    const set = new BetterSet()
    expect(() => set.remove(5)).not.toThrow()
  })
})
