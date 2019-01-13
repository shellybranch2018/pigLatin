var args = process.argv.slice(2);

function pigLatin(str){

  var pigLatinWords = [];
  for( var i = 0; i < str.length; i++){
    pigLatinWords.push(str[i].slice(1,str[i].length) + str[i][0] + "ay");
  } console.log(pigLatinWords.join(' '));
}

pigLatin(args);
