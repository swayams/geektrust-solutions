import '../utils/stringUtils'
import logger from '../utils/loggingUtils';
export default class Kingdom {
    

    constructor(symbol, name) {
        this.allies = []
        this.name = name.toUpperCase()
        this.symbol = symbol.toUpperCase()
    }

    processAlly = (sender, message) => { 
      let isAlreadyAllied = this.allies.filter( a => a.name == sender.name).length > 0
      
      if( !isAlreadyAllied ) {
        let isMessageValid = message.includesAllCharsOf(this.symbol)
        if(isMessageValid) {
            this.allies.push(sender)
            sender.allies.push(this)
            logger.info(`Message is valid, ${sender.name.toUpperCase()} is now an ally of ${this.name.toUpperCase()}`)
        } else {
            logger.info(`Message by ${sender.name.toUpperCase()} isn't valid`)
        }   

      } else {
          logger.info(`${sender.name.toUpperCase()} is already an ally of ${this.name.toUpperCase()}`)
      }
        
    }
}