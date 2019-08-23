
import Kingdom from './../../src/entity/kingdom';

var assert = require('assert')
describe('Kingdom', function() {
  
   describe('Allies', function() {
    let k = new Kingdom('dummy', 'test')
     it( 'doesn\'t have any allies', function() {
         assert.equal(k.allies.length, 0)
     })
     it('validates message properly before adding an ally', function() {
         let sender = new Kingdom('dummy2', 'test')
         k.processAlly(sender, 'zzzdummydfa')
         assert.equals(k.allies.length,  1)
     })   
    })
})