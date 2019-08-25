
import { problem2 } from '../config/input'


const claimants = [], nonClaimants = []
const processedMessageList = []



const _pickRandomMessage = () => {
   
}

const _sortKingdomsIntoClaimantsAndNonClaimants = (claimantNames, listOfkingdoms) => {
    listOfkingdoms.forEach( k => {
        if(claimantNames.indexOf(k.name.toLowerCase()) > -1 ) claimants.push(k)
        else nonClaimants.push(k)
    })
}

const _processMessages = (messages) => {
    
}