
import Kingdom from './../../src/entity/kingdom';

var assert = require('assert')
describe('Kingdom', function() {  
   describe('Allies', function() {
        let k = new Kingdom('panda', 'land')
        let sender = new Kingdom('gorilla', 'space')

        it( '1. doesn\'t have any allies when created', function() {
            assert.equal(k.allies.length, 0)
        })

        it( '2. doesn\'t add when messages are invalid', function() {
            k.processAlly(sender, 'test')
            assert.equal(k.allies.length, 0)
        })

        it( '3. Adds ally for valid messages', function() {         
            k.processAlly(sender, 'a1d22n333a4444p')
            assert.equal(k.allies.length,  1)
        })   

        it( '4. Only adds unique ally', function() {
            k.processAlly(sender, 'asdf')
            assert.equal(k.allies.length,  1)
        })
    })
})