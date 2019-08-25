import kingdoms from './init';
import {prob1Input} from './../config/messages';
import expressions from './../utils/mathUtils';
import logger from './../utils/loggingUtils';
import Kingdom from '../entity/kingdom';

const shansKingdom = new Kingdom('Gorilla', 'space')


prob1Input.forEach( set => {
    console.log(set[0].toUpperCase())
    let reciever = kingdoms.find(k => k.name == set[0].toUpperCase())
    reciever.processAlly(shansKingdom, set[1])
})

if(shansKingdom.allies.length >= 3) {
    logger.info(`\n\n Shan is the new King with ${shansKingdom.allies.length} allies`)
}