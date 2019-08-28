
import Kingdom from './Kingdom';

class Universe {
    constructor( KingdomList ) {
        this.kingdoms = _processKingdoms(KingdomList)    
        this.ruler = []
    }

    _processKingdoms = (kingdomList) => {
        let kingdoms = []
        kingdomList.forEach( k => 
            kingdoms.push( new Kingdom(k.symbol, k.name))
        )
        return kingdoms
    }

    setRuler = ( kingdom ) => {
        this.ruler = kingdom
    }

    resetAlliances = () => {
        this.kingdoms.forEach( kingdom => kingdom.allies = [])
    }
}

export default Universe