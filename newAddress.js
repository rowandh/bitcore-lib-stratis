const bitcore = require('./');
var privateKey = new bitcore.PrivateKey();

var address = privateKey.toAddress();

console.log(address.toString());