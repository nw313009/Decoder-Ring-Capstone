// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  function caesar(input,shift,encode = true) {
    if(!shift || shift === 0 || shift < -25 || shift > 25){
      return false;
    }
    let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    let result = input.split('').map(charVar => {
      if (alphabet.includes(charVar.toLowerCase()) && encode){
        return String.fromCharCode(((charVar.toLowerCase().charCodeAt()+shift-97)%26+26)%26+97);
      }else if (alphabet.includes(charVar.toLowerCase()) && !encode){
        return String.fromCharCode(((charVar.toLowerCase().charCodeAt()-shift-97)%26+26)%26+97);
      }else {
        return charVar;
      }
    }).join('');
    return result;
  }

//   function caesar(input, shift, encode = true) {
//     if(shift === 0 || shift < -25|| shift > 25) return false;
//     !encode ? (shift = -shift) : null //encode/ urinary 

//     return input
//     .toLowerCase()
//     .split("")
//     .reduce((acc, char)=> {
//       let asciiCode = char.charCodeAt(0)
//       if(asciiCode > 96 && asciiCode < 123){
//         asciiCode += shift;
//         asciiCode > 122 ? (asciiCode = asciiCode -122 + 96): null;
//         asciiCode < 97 ? (asciiCode = asciiCode - 97 + 122):null;
//       }

//       return (acc += String.fromCharCode(asciiCode));
//     }, "");
//   }
// +
// //encoding specification sno decoding specification, 
   

  return {
    caesar,
  };

})();

module.exports = { caesar: caesarModule.caesar };
