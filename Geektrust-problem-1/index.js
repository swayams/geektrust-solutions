console.log('index')
import Kingdom from './src/entity/kingdom';

let kingdom = new Kingdom('panda', 'Earth')

let sender = new Kingdom('Owl', 'Air')

console.log(kingdom, sender)
kingdom.processAlly(sender, 'zzpzaznda')
console.log(kingdom)