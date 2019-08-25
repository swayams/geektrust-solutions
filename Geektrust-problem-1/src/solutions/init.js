import list from './../config/kingdoms';
import Kingdom from './../entity/kingdom';



let kingdoms = []
list.forEach( k => kingdoms.push(new Kingdom(k.name, k.name)))


export default kingdoms
