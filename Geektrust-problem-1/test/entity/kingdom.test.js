
import Kingdom from './../../src/entity/kingdom';

var assert = require('assert')
describe('Kingdom', function() {  
   describe('Allies', function() {
        let k = new Kingdom('dummy', 'kingdom')
        let sender = new Kingdom('dummy2', 'sender')

        it( '1. doesn\'t have any allies when created', function() {
            assert.equal(k.allies.length, 0)
        })

        it( '2. doesn\'t add when messages are invalid', function() {
            k.processAlly(sender, 'test')
            assert.equal(k.allies.length, 0)
        })

        it( '3. Adds ally for valid messages', function() {         
            k.processAlly(sender, 'zzzdummydfa')
            assert.equal(k.allies.length,  1)
        })   

        it( '4. Only adds unique ally', function() {
            k.processAlly(sender, 'asdf')
            assert.equal(k.allies.length,  1)
        })
    })
})