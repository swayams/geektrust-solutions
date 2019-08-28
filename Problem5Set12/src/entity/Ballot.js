import logger from '../utils/loggingUtils';
import expressions from '../utils/mathUtils';

const claimants = [], nonClaimants = []
let pollCount = 0

const _pickRandomMessage = (messages) => {
    let msgs = []
    do {
        let index = expressions.random(messages.length)
        let msg = messages[index]
        if(msgs.indexOf(msg) === -1 ) msgs.push(msg)
   }  while(msgs.length < nonClaimants.length)

   return msgs
    
}


const _processClaimants = (claimantNames, listOfkingdoms) => {
    listOfkingdoms.forEach( k => {
        
        if(claimantNames.indexOf(k.name.toLowerCase()) > -1 ) claimants.push(k)
        else nonClaimants.push(k)
    })
}

const _processMessages = (messages) => {
    claimants.forEach( c =>  {
        let msgList = _pickRandomMessage(messages, nonClaimants.length)
        _processMessagesForClaimant(c, msgList)
    })
}

const _processMessagesForClaimant = (sender, msgs) => {
    if(msgs.length === nonClaimants.length ) {
        nonClaimants.forEach( (kingdom, index) => {
            kingdom.processAlly(sender, msgs[index])
        })
    } else {
        logger.log('Message List count and non claimants list count differ. Something is really wrong with your code. Debug')
    }
}


const _checkTie = (voteCount) => {
    if( claimants.filter(c => c.allies.length == voteCount).length > 1)
        return true
    return false
}

const _declareRuler = (votesToWin) => {

    let winningVotes = votesToWin 
    let ruler = null

    claimants.forEach( kingdom => {
        if( kingdom.allies.length >= winningVotes) {
            ruler = kingdom
            winningVotes = kingdom.allies.length
        }
    })

    console.log('\n\n')

    if(ruler !== null && !_checkTie(winningVotes)) {
        logger.info(` Ruler has been selected. New Ruler is ${ruler.name} with ${winningVotes} votes`)
        return true
    } else if(_checkTie(winningVotes)) {
        logger.info(`
        More than one claimants have recieved the highest number of votes. Retrying
        `)
    } 
    
    else {
        logger.info(`
        ${pollCount++} Ruler can't be determined. Re-processing ballot 
        ${claimants[0].name} : ${claimants[0].allies.length} 
        ${claimants[1].name} : ${claimants[1].allies.length}
        votes to win : ${votesToWin}
        `)
        return false
    }
 
}


const performBallot = (messages, controls) => {

    console.log('\n\n Problem 2')
    _processClaimants(controls.claimants, controls.ListOfKingdoms)
    let id = setInterval( function() {
        if( !_declareRuler(controls.VotesToWin) ) {
            claimants.forEach( c => c.resetAlliances())
            nonClaimants.forEach( c=> c.resetAlliances())
            
            _processMessages(messages)
        } else {
            clearInterval(id)
        }
    }, 3000)
}

export default performBallot