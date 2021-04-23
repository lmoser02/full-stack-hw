document.querySelector('#reverse').onclick = function () {
  // Add your code here validate that it is 8 digits 
  //put an error code for when it is not 
  let u_input = document.getElementById('input');
  let output = document.getElementById('message');

  let saved = u_input.value;

  if(saved.length != 8){
    output.className = 'text-danger';
    output.textContent = 'Error: Please enter an 8 digit number';
    return;
  }

  let reversed = u_input.value.split("").reverse().join("");
  output.className = 'text-success';
  output.textContent = saved + "-->" + reversed;

};
