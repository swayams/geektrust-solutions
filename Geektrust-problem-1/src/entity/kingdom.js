import '../utils/stringUtils'
export default class Kingdom {
    

    constructor(symbol, name) {
        this.allies = []
        this.name = name
        this.symbol = symbol
    }

    processAlly = (sender, message) => {
       message.includeAllCharsOf(this.symbol) &&  
        this.allies.filter( a => a.name == sender.name) === -1 
        ? this.allies.push(sender) : console.log('sender is already an ally')
    }
}