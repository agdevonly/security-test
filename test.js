javascript:(function(){
  scrollTo(0,0);
  var ipt=document.getElementsByName('kw')[0]; ipt.value='alert("hello");'; 
  eval(ipt.value);
})()
