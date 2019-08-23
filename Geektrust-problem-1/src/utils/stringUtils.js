
import logger from './loggingUtils';

String.prototype.includeAllCharsOf = function(seed)  {
    if( seed.length < this.length) {
        let thisArr = this.split('')
        let arr =  seed.split('')

        let isvalid = true

        arr.forEach( ch => {
            let index = thisArr.indexOf(ch)
            if(index > -1) {
                thisArr.pop(index)
            } else {
                isvalid = false
                return
            }
        })

        return isvalid

    } else {
        logger.warn('seed string is longer than this string')
    }
    
    return true
} 