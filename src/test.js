

var a = 0
var ad = 29

var f = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
function cbb_hu(e,b){
  for (var i =0; i < e.length; i++){
      for (var u=0;u < b % 10; u++){
          a = u;
      }
      if (ad + 1 === 1){
        ad = 29
      }
      cbb_prgnx()
      console.log(ad, e[i] +  (b % ad) *3, f[ad], ad)

      f[ad] =f[ad] +  e[i] +  (b % ad) *3
      cbb_prgunx()
      ad -= 1
  }
  return 90
}

function cbb_hu2(e,b){
  for (var i =0; i < e.length; i++){

      for (var u=0;u < b % 20; u++){
          a = u;
      }

      if (ad + 1 === 1){
        ad = 29
      }
      cbb_prgnx()
      console.log(ad, e[i] +  b % ad, f[ad], ad)

      f[ad] = f[ad] + e[i] +  b % ad
      cbb_prgunx()
      ad -= 1
  }
  return 90
}
function cbb_op(e,b){
  for (var i =0; i < e.length; i++){
      for (var u=0;u < b % 30; u++){
          a = u;
      }
      if (ad + 1 === 1){
        ad = 29
      }
      cbb_prgnx()
      console.log(29-ad, e[i] + ad + b, f[29 - ad], ad)
      f[29 - ad] = f[29 - ad] + e[i] + ad + b
      cbb_prgunx()
      ad -= 1
  }
  return 0
}

function sign(){
  var mm_ = "2833844911"
  var mm2_ = "udiaudisaoduas"
  var code_ = "565767"
  var mm = mm_.split('')
  for (var i =0; i< mm.length; i++){
    mm[i] = mm[i].charCodeAt(0)
  }
  var mm2 = mm2_.split('')
  for (i =0; i< mm2.length; i++){
    mm2[i] = mm2[i].charCodeAt(0)
  }
  var code = code_.split('')
  for (i =0; i< code.length; i++){
    code[i] = code[i].charCodeAt(0)
  }
    debugger
    var s = cbb_op(mm, 30);
    console.log("dadasd",s)
  cbb_prg(cbb_op(mm, 30), cbb_hu(mm2, 6786), cbb_hu2(code, 76))
  var dt = ''
  for (i = 0 ; i<30; i++){

    dt += f[i]
  }
    console.log(f)
  var s = {"zhaohao": mm_,"mima":mm2_,"code":code_,"sign":dt}

  return s
}
if (window){
    window.sign = sign;

}else {
    global.sign = sign;
}
var tw = sign()
debugger
console.log(tw)
console.log(JSON.stringify(tw))