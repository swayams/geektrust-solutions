import '../utils/stringUtils'
import logger from '../utils/loggingUtils';
export default class Kingdom {
    

    constructor(symbol, name) {
        this.allies = []
        this.name = name.toUpperCase()
        this.symbol = symbol.toUpperCase()
    }

    _addAlly = (sender) => {
        this.allies.push(sender)
            sender.allies.push(this)
            logger.info(`Message is valid, ${sender.name.toUpperCase()} is now an ally of ${this.name.toUpperCase()}`)
    }

    _isAllied = ( kingdom ) => {
        return this.allies.filter( a => a.name == kingdom.name).length > 0
    }

    _isMessageValid = ( msg) => {
        return  msg.includesAllCharsOf(this.symbol)
    }

    processAlly = (sender, message) => { 
      if( !this._isAllied(sender) ) {
        if( this._isMessageValid(message) ) {
            this._addAlly(sender)
        } else {
            logger.info(`Message by ${sender.name.toUpperCase()} isn't valid`)
        }   
      } else {
          logger.info(`${sender.name.toUpperCase()} is already an ally of ${this.name.toUpperCase()}`)
      }
    }
}