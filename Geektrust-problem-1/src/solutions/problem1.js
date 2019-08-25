import ListOfKingdoms from './init';
import { problem1 } from '../config/input';
import logger from './../utils/loggingUtils';
import Kingdom from '../entity/kingdom';

const shansKingdom = new Kingdom('Gorilla', 'space')


problem1.forEach( set => {
    console.log(set[0].toUpperCase())
    let reciever = ListOfKingdoms.find(k => k.name == set[0].toUpperCase())
    reciever.processAlly(shansKingdom, set[1])
})

if(shansKingdom.allies.length >= 3) {
    logger.info(`\n\n Shan is the new King with ${shansKingdom.allies.length} allies`)
}