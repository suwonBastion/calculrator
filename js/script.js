let bts = document.querySelectorAll('.button');
let d = document.querySelector('.on');
for(let i=0;i<bts.length;i++){
  bts[i].addEventListener('click',function(){
    if(this.innerHTML=='C'){
      d.value='';
    }else{
      if(this.innerHTML=='='){
        d.value=eval(d.value);
      }else{
        if(d.value[0]==0){
          d.value='';
        }else{        
      d.value +=  this.innerHTML;      
        }
      }
    }
  });
}