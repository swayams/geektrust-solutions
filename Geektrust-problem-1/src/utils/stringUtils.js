
import logger from './loggingUtils';

String.prototype.includesAllCharsOf = function(seed)  {
    if( seed.length < this.length) {
        let thisArr = this.toLowerCase().split('')
        let arr =  seed.toLowerCase().split('')

        let isValid = true

        arr.forEach( ch => {
          
            let index = thisArr.indexOf(ch)
            if(index > -1) {
                thisArr.splice(index, 1)
            } else {
                
                isValid = false
                return
            }
        })

        return isValid

    } else {
        logger.warn('seed string is longer than this string')
        return false
    }
    
    
} 