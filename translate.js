function translate(str){
  return str.split('').map(function(el){
    //el을 가지고 하나씩 조작합니다.
    var d = Hangul.disassemble(el);
    console.log(d);
    if(d[3] && Hangul.isVowel(d[1]) && Hangul.isVowel(d[2])){
        var tmp = d[2];
        d[2] = d[3];
        d[3] = tmp;
    }
    return Hangul.assemble(d);
  }).join('');
}
