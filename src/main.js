// const substitution = require("./substitution");

function substitution(input, alphabet, encode = true) {
  const standardAlphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  if (alphabet.length !== 26){
      return false;
  };
 const setAlphabet = new Set(alphabet.split(""));
 if (setAlphabet.size !== 26){
    return false
 };
 const substituteAlphabet = alphabet.split("");
 input = input.toLowerCase();
 const encodeKeyMap = standardAlphabet.reduce((obj, letter, i) => {
     obj[letter] = substituteAlphabet[i];
     return obj;
 }, {}); //{a:b}
 const decodeKeyMap = substituteAlphabet.reduce((obj, letter, i) => {
     obj[letter] = standardAlphabet[i];
     return obj;
 }, {});
 console.log(input.split('').map(char =>{
     if(encode){
       if (encodeKeyMap[char]){
         return encodeKeyMap[char];
      }else{
         return char;
      }}
      if(!encode){
          if(decodeKeyMap[char]){
              return decodeKeyMap[char]
          }else {
              return char;
          }
      }
 }).join(''));
}
substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");

