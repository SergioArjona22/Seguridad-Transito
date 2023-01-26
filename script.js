
let input = document.getElementById('placa-digito');
let msg1 = document.getElementById('show-1');
let msg2 = document.getElementById('show-2');
let msg3 = document.getElementById('show-3');
let msg4 = document.getElementById('show-4');
let msg5 = document.getElementById('show-5');

const ingresar = () => {   
   let cont1 = 0, cont2 = 0, cont3 = 0, cont4 = 0, cont5 = 0;
   if(input.value === '1' || input.value === '2'){
      cont1++;      
      msg1.innerText = cont1;          
   }else if(input.value === '3' || input.value === '4') {
      cont2++;
      msg2.innerText = cont2;
   }else if(input.value === '5' || input.value === '6') {
      cont3++;
      msg3.innerText = cont3;     
   }else if(input.value === '7' || input.value === '8') {
      cont4++;
      msg4.innerText = cont4;      
   }else if(input.value === '9' || input.value === '0') {
      cont5++;
      msg5.innerText = cont5;     
   }
      
   input.value = "";
   document.getElementById('show-1').style.display = 'none';
   document.getElementById('show-2').style.display = 'none';
   document.getElementById('show-3').style.display = 'none';
   document.getElementById('show-4').style.display = 'none';
   document.getElementById('show-5').style.display = 'none';      
}



const consultar = () => {   
   document.getElementById('show-1').style.display = 'block';
   document.getElementById('show-2').style.display = 'block';
   document.getElementById('show-3').style.display = 'block';
   document.getElementById('show-4').style.display = 'block';
   document.getElementById('show-5').style.display = 'block';      
}


