
let first_input = "";
let second_input = "";


function start() {
    let matrix_input1 = document.querySelector("#matrix_input1");
    let matrix_input2 = document.querySelector("#matrix_input2");
    let sum_input = document.querySelector("#sum_input");

    matrix_input1.innerHTML = "";
    matrix_input2.innerHTML = "";
    sum_input.innerHTML = "";

    first_input = document.querySelector("#first_input").value;
    second_input = document.querySelector("#second_input").value;

    if (first_input == "" || second_input == "") {
        alert("Please enter values");
        return;
    }

    if (isNaN(first_input) || isNaN(second_input)) {
        alert("Please enter numbers");
        return;
    }

    if (first_input != second_input) {
        alert("Please enter same number  of rows and columns");
        return;
    }

    if (first_input < 2 || first_input < 2) {
        alert("Please enter number greater than 1");
        return;
    }



    for(let i = 0; i < first_input; i++) {
        for(let j = 0; j < second_input; j++){

            matrix_input1.innerHTML += `<input type="number" class="matrix_input" id="matrix_input1_${i}_${j}" required value= "0" min = "0" max = "999">`;
            
            matrix_input2.innerHTML += `<input type="number" class="matrix_input" id="matrix_input2_${i}_${j}" required value= "0" min = "0" max = "999">` ;
        
            sum_input.innerHTML += `<input type="number" readonly class="matrix_input" id="sum_input_${i}_${j}" required placeholder ="0" >`;
        }

        matrix_input1.innerHTML += `<br>`;
        matrix_input2.innerHTML += `<br>`;
        sum_input.innerHTML += `<br>`;
    }

    document.querySelector("#input_form").classList.remove("form_input");
}


function sum(){

    for (let i=0; i<first_input; i++){
        for(let j=0; j< second_input; j++){
            
            document.querySelector(`#sum_input_${i}_${j}`).value =
            +document.querySelector(`#matrix_input1_${i}_${j}`).value
            +
            +document.querySelector(`#matrix_input2_${i}_${j}`).value
            
            
            
        }
    }


}







