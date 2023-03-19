let input = document.getElementById('placa-digito');
const msg = [
  document.getElementById('show-1'),
  document.getElementById('show-2'),
  document.getElementById('show-3'),
  document.getElementById('show-4'),
  document.getElementById('show-5')
];

const ingresar = () => {   
  let conts = [0, 0, 0, 0, 0];
  let index = -1;
  //revision del numero de la placa asociada
  if(input.value === '1' || input.value === '2') index = 0
  else if(input.value === '3' || input.value === '4') index = 1
  else if(input.value === '5' || input.value === '6') index = 2
  else if(input.value === '7' || input.value === '8') index = 3
  else if(input.value === '9' || input.value === '0') index = 4
  else {
    swal("Error", "Datos erroneos!", "error");
    input.value = "";    
  }
  conts[index]++;
  msg[index].innerText = conts[index];
  swal("Ingresado", "con exito!", "success");
  input.value = "";
  msg.forEach(element => {
    element.style.display = 'none';
  });        
}

const consultar = () => {   
  msg.forEach(element => {
    element.style.display = 'block';
  });
  swal("Consulta", "Tipos de placas", "info");      
}


