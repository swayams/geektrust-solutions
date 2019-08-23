"use strict";

var _kingdom = _interopRequireDefault(require("./src/entity/kingdom"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

console.log('index');
var kingdom = new _kingdom["default"]('panda', 'Earth');
var sender = new _kingdom["default"]('Owl', 'Air');
console.log(kingdom, sender);
kingdom.processAlly(sender, 'zzpzaznda');
console.log(kingdom);