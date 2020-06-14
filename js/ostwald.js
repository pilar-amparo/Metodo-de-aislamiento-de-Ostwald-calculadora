/**
  * oswald.js
  */


var Menú_open= document.getElementById("matrix");
 display = Menú_open.style.display;
  Menú_open.style.display = "none";
var Menú_open= document.getElementById("result");
  display = Menú_open.style.display;
  Menú_open.style.display = "none";

 function display_matrix(){

  try {

    var count_reactants;
    var count_reactants_element = document.getElementById("count_reactants");
    count_reactants = parseInt(count_reactants_element.value);
    

    if((Number.isInteger(count_reactants)) && (count_reactants != 0))
    {
      var display;
      var Menú_open = document.getElementById("matrix");
      display = Menú_open.style.display;
      
      if (display == "none"){
        Menú_open.style.display = "block";
       }
      /*else{
        Menú_open.style.display = "none";
      }*/

      var matrix_div = document.getElementById('matrix');

      delete_inner_html(matrix_div);

      var text_matrix = show_matrix(count_reactants);

      matrix_div.insertAdjacentHTML('afterbegin', text_matrix);
      
    }
    else{
      alert("introdusca un número natural en el número de reaccionantes");
    }
  } catch (error) {
    console.error(error);
    alert("introdusca un número natural en el número de reaccionantes");
  }  
 }
 
 function display_result(){

  try {


    var display;
    var Menú_open= document.getElementById("result");
    display = Menú_open.style.display;
    console.log('test_display', display);
    if (display == "none"){
      Menú_open.style.display = "block";
     }/*
    else{
      Menú_open.style.display = "none";
    }
    */
    var matrix_array_input = extract_value_matrix();

    var matrix_array_output = calculate_result_ostwald(matrix_array_input);

    var div_result = document.getElementById('result');

    delete_inner_html(div_result);

    var text_result = show_result_ostwald(matrix_array_output);

    div_result.insertAdjacentHTML('afterbegin', text_result);

  } catch(e) {
    // statements
    console.log(e);
  }
 }

 function show_matrix(count_reactants){

    try {

      var matrix_size = count_reactants + 1;
      //console.log('matrix_size', parseInt(matrix_size));
      //console.log('if condition', Number.isInteger(matrix_size));

      var matrix_html = "<p id = matrix_declaration>";
      matrix_html += "la dimensión de la matriz es:";
      matrix_html += "</p>";

      matrix_html += "<p id = matrix_size>";
      matrix_html += matrix_size;
      matrix_html += "</p>";

      matrix_html += "<table class='matrix'>";
      
      matrix_html += "<tr>";
      
      for (var a = 1; a <= matrix_size; a++){

        
        matrix_html += "<td><label id='header' for='matrix_header_";
        matrix_html += a;
        matrix_html += "'>";
        if (a != matrix_size) {
          matrix_html += a;
          matrix_html += " reactante <br/> [mol * L<sup>-1</sup>]</label></td>";
        }
        else{
          matrix_html += "absorbancia <br/> [mol * s<sup>-1</sup>]</label></td></tr>";
        }
        
      }
      
      
      for (var i = 1; i <= matrix_size; i++) {
        //console.log('i',i);
        matrix_html += "<tr>";
        
        for (var j = 1; j <= matrix_size; j++) {
          //console.log('j',j);
          matrix_html += "<td><input name='matrix_box' id=";
          matrix_html += i;
          matrix_html += j;
          matrix_html += " type='text' size='3'></td>";
        }

        matrix_html += "</tr>";
        
      }
      
       matrix_html += "</table>";


      matrix_html += "<input type='button' value='Calcular ecuación cinética' onClick='display_result()'>";
      /*

      
      matrix_html += "B=";
      for (var a = 1; a <= matrix_size; a++){

        matrix_html += "<BR>";
        matrix_html += "<label id='header' for='matrix_header_";
        matrix_html += a;
        matrix_html += "'>";
        if (a != matrix_size) {
          matrix_html += a;
          matrix_html += " reactante (mol * L<sup>-1</sup>)</label>";
        }
        else{
          matrix_html += "absorbancia (mol * s<sup>-1</sup>)</label>)";
        }
        
       
        //result_html += "<label for='valor_de_k'>valor de k:</label>"
      }

      for (var i = 1; i <= matrix_size; i++) {
        //console.log('i',i);
        matrix_html += "<BR>";
        
        for (var j = 1; j <= matrix_size; j++) {
          //console.log('j',j);
          matrix_html += "<input name='matrix_box' id=";
          matrix_html += i;
          matrix_html += j;
          matrix_html += " type='text' size='3'>";
        }
        
      }
      matrix_html += "<input type='button' value='Calcular ecuación cinética' onClick='display_result()'>";
      */
      return matrix_html;

    } catch(e) {
      // statements
      console.log(e);
    }
    
  }

 function delete_inner_html(element){

    try {
      const content = element.innerHTML;

      element.innerHTML = "";
    } catch(e) {
      // statements
      console.log(e);
      alert(e);
    }
    
  }

 function extract_value_matrix(){

    try {
      var size_matrix_element= document.getElementById("matrix_size");

      size_matrix = size_matrix_element.innerHTML;
      console.log("size_matrix", size_matrix);

      var matrix_array= new Array(size_matrix);
      for (var i = 1; i <= size_matrix; i++) {
        
        matrix_array[i-1] = new Array(size_matrix);
        
        for (var j = 1; j <= size_matrix; j++) {

          var num = i * 10 + j;
          var matrix_position_string = num.toString();

          /*
          var matrix_element= document.getElementById(matrix_position_string);
          console.log("value_matrix", matrix_element.value);
          matrix_array[i-1][j-1] = matrix_element.value;
          */

          matrix_array[i-1][j-1] = extract_value_matrix_one(matrix_position_string);
          var error_input;
          if (isNaN(matrix_array[i-1][j-1])) {
            error_input += " escribe un numero en la posicion: " + matrix_position_string + " de la matriz de entrada";
            var error_output = "ok"; 
          }
          else if(matrix_array[i-1][j-1] < 0){
            error_input += " escribe un numero mayor que 0 en la posicion: " + matrix_position_string + " de la matriz de entrada";
            var error_output = "ok";
          }
          
          /*
          if ((typeof(matrix_array[i-1][j-1]) === 'number') && (!isNaN(matrix_value))) {
            var matrix_value_number = matrix_value
          }
          else{
            alert("escribe un numero en la posicion: " + matrix_position_string + " de la matriz de entrada");
          }
          */
        }  
      }

      if (error_output == "ok") {
        alert(error_input);
        return 0;
      }

      console.log("extract_value_matrix", matrix_array);

      return matrix_array;

    } catch(e) {
      // statements
      console.log(e);
    }
  }

  function extract_value_matrix_one(matrix_position_string){

    try {
      
      var matrix_element= document.getElementById(matrix_position_string);
      var matrix_value_number = parseFloat(matrix_element.value);     

      return matrix_value_number;
      
    } catch(e) {
      // statements
      console.log(e);
    }
  }

  function calculate_result_ostwald(matrix_array_input){


    var size_matrix = matrix_array_input.length;
    var matrix_1 = new Array(size_matrix);
    var matrix_ampliada = new Array(size_matrix);

    console.log('matrix_array_input', matrix_array_input);

    for(var m = 0;  m < size_matrix; m++){
      
      matrix_1[m] = new Array(size_matrix);
      for(var n = 0; n < size_matrix; n++){
        
        switch (n) {
          case 0:
            matrix_1[m][0] = 1;
            matrix_1[m][1] = Math.log10(matrix_array_input[m][n]);
            break;
          case size_matrix - 1:
            matrix_ampliada[m] = Math.log10(matrix_array_input[m][n]);
          break;
          default:
            matrix_1[m][n + 1] = Math.log10(matrix_array_input[m][n]);
            break;
        }
        
        /*
        if (j == 0) {
          A[i][0] = 1;
          A[i][j + 1] = Math.log10(matrix_array_input[i][j]);
        }
        else if(j == size_matrix - 1){

          x[i] = Math.log10(matrix_array_input[i][j]);
        }
        else{
          A[i][j + 1] = Math.log10(matrix_array_input[i][j]);
        }
        */
      }
    } 

    console.log('matrix_1', matrix_1);
    console.log('matrix_ampliada', matrix_ampliada);
    //console.log('matrix_array_input[i].length',matrix_array_input[i].length);

    var result_array = gauss(matrix_1, matrix_ampliada);
    console.log('result_array_without_logk', result_array);

    result_array[0] = Math.pow(10 , result_array[0]);
    console.log('result_array', result_array);

    return result_array;
  }

  function show_result_ostwald(matrix_array_output){

    try {

      var size_array_result = matrix_array_output.length;

      var result_html = "<p id = result_declaration>";
      result_html += "El resultado es:";
      result_html += "</p>";

      result_html += "resultado:"; 
      for (var i = 0; i < size_array_result; i++) {
        //console.log('i',i);
        result_html += "<BR>";
        
        if (i == 0) {

          result_html += "<label for='valor_de_k'>valor de k: ";   
          result_html += matrix_array_output[i];
          result_html += "</label>";

          //result_html += "<label for='valor_de_k'>valor de k:</label>"
        }  
        else {
          result_html += "<label for=valor_de_";
          result_html += i;
          result_html += " reaccionante>valor de ";
          result_html += i;
          result_html += " reaccionante: ";    
          result_html += matrix_array_output[i];
          result_html += "</label>";
        }    
        
      }

      return result_html;

    } catch(e) {
      // statements
      console.log(e);
    }
  }

