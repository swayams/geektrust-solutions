

class Election {
    constructor (universe, claimantNames, votesToWin) {
        this.kingdoms  = universe.kingdoms
        this.actors = _processClaimants(claimantNames)
        this.votesToWin = votesToWin
    }   

    _processClaimants = (claimantNames) => {
        let claimants, nonClaimants = []
        claimantNames.forEach( name => {
            if(this.kingdoms.filter( kingdom => kingdom.name ===  name.trim().toUpperCase()) > -1) {
                claimants.push(kingdom)
            } else {
                nonClaimants.push(kingdom)
            }
        })
    }

    performBallot = (messages) => {
        
    }
}


