require('../../src/utils/stringUtils')
const assert =  require('assert')

describe('string utils', function() {
  describe('#includesAllCharsOf() ', function() {
    it('should return true when string has all the characters of provided string', function() {
      const strings = ['oaaawaala', 'owl']
      assert.equal(strings[0].includesAllCharsOf(strings[1]), true, "passes");
    });
    it('should return true when string has all the characters of provided string', function() {
      const strings = ['zmzmzmzaztzozh', 'mammoth']
      assert.equal(strings[0].includesAllCharsOf(strings[1]), true, "passes");
    });
    it('should return false when string is smaller than provided string', function() {
      const strings = ['p ', 'panda']
      assert.equal(strings[0].includesAllCharsOf(strings[1]), false, "passes");
    });
    it('should return false when string doesnt have all the characters of provided string', function() {
      const strings = ['a1d22n333a4444p ', 'pandaxg']
      assert.equal(strings[0].includesAllCharsOf(strings[1]), false, "passes");
    });
  });
 
});