const crypto = require("crypto");

function findHashWithPrefix(prefix)
{
 let input = 0;
 while (true)
 {
 let inputStr = input.toString();
 let hash = crypto. createHash ('sha256'). update(inputStr) digest('hex');
 if(hash.startsWith(prefix))
 {
 return {input: input, hash: hash};
 }
 input++;
 }
}

const res = findHashWithPrefix('00000')
console. log (Input: $(res. input}'); 
console. log (*Hash: ${res.hash});
