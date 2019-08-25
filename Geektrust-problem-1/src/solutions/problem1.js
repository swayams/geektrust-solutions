import kingdoms from './init';
import input from './../config/messages';
import expressions from './../utils/mathUtils';
import logger from './../utils/loggingUtils';

const space = kingdoms.find(k => k.name == 'SPACE')


do {
    if(space.allies > 0) {
       
        logger.info(`${space.name} failed to get adequate allies,
        only ${space.allies.length} kingdoms supported
        trying again. `)
        s

    }
      


    kingdoms.forEach(k => {
        let randomIndex = expressions.random(input.length) 
        let msg = input[randomIndex]
        console.log( msg)
        k.processAlly(space, msg )
    })
} while(space.allies < 3) 

if( space.allies >= 3) {
    logger.info(`${space.name} is the new ruling faction of Southeros`  )
}