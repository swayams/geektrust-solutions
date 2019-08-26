import logger from './../utils/loggingUtils';

const claimants = [], nonClaimants = []
const _pickRandomMessage = () => {
   
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
    if(msgs.length === nonClaimantList.length ) {
        nonClaimants.forEach( (kingdom, index) => {
            kingdom.processAlly(sender, msgs[index])
        })
    } else {
        logger.log('Message List count and non claimants list count differ. Something is really wrong with your code. Debug')
    }
}

const _declareRuler = (votesToWin) => {

    let winningVotes = votesToWin 
    let ruler = null

    claimants.forEach( kingdom => {
        if( kingdom.allies.length > winningVotes) {
            ruler = kingdom
            winningVotes = kingdom.allies.length
        }
    })

    if(ruler !== null) {
        logger.info(`Ruler has been selected. New Ruler is ${ruler.name} with ${winningVotes} votes`)
        return true
    } else {
        logger.info(`ruler can't be determined. Re-processing ballot`)
        return false
    }

}

const performBallot = (messages, controls) => {
    _processClaimants()
    do { setInterval(_processMessages(messages), 300) } 
    while(_declareRuler(controls.votesToWin))
}

export default performBallot