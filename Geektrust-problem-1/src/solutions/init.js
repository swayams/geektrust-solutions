import { Emblems } from '../config/configuration';
import Kingdom from './../entity/kingdom';

let ListOfKingdoms = []
Emblems.forEach( k => ListOfKingdoms.push(new Kingdom(k.symbol, k.name)))

export default ListOfKingdoms
