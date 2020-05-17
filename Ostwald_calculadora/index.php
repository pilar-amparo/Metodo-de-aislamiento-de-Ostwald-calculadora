<!DOCTYPE html>
<html>
<head>
	<title>Ostwald_calculadora</title>
	<meta name="keywords" content="Ostwald, calculadora">
	<meta name="owner" content="Pilar Amparo">
    <meta name="author" content="pmorgadoaucar1995@gmail.com">
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js" type="text/javascript"></script>
	<link rel="stylesheet" type="text/css" href="css/icomoon.css">
<link rel="stylesheet" type="text/css" href="css/desing.css">
<link rel="stylesheet" type="text/css" href="css/desing_2.css">
</head>
<body>
	<header>	
		<div id="boton_siguiente" onclick="display_section('adelante')"> 
	      <div class="flecha"></div>       
	    </div>
	</header>
<style type="text/css">

h1{
text-align: center;	
}

</style>

<h1>Método de aislamiento de Ostwald calculadora</h1>

<p>
	Introduce número de reaccionantes(arreglar oracion preguntar Pilar)
</p>

<form> 
  <label for="count_reactants">numero de reaccionantes:</label>
	<input type="text" id="count_reactants" name="count_reactants"> 
	<input type="button" value="introducir" onClick="display_matrix()">
</form>

<div id="matrix">	
<form name="matrix">
  
  <!--
	A= 
	<BR> 
	<input type="text" size="3">

  <input type="text" size="3">

  <input type="text" size="3"><BR>

  <input type="text" size="3">

  <input type="text" size="3">

  <input type="text" size="3"><BR>

  <input type="text" size="3">

  <input type="text" size="3">     

  <input type="text" size="3">

  <input type="button" value="Calcular ecuación cinética" onClick="display_result()">

  -->

</form>
</div>

<div id="result">	
<form name="result">

	resultado=<BR> <input type="text" size="3">

    <BR>

    <input type="text" size="3">

    <BR>

    <input type="text" size="3">

</form>
</div>


<?php

$a1 = 0.30;
$a2 = 0.05;
$a3 = 0.05;
$a4 = 5.7 * 0.00001;

$b1 = 0.30;
$b2 = 0.10;
$b3 = 0.05;
$b4 = 5.7 * 0.00001;

$c1 = 0.30;
$c2 = 0.05;
$c3 = 0.10;
$c4 = 11.4 * 0.00001;

$d1 = 0.40;
$d2 = 0.05;
$d3 = 0.20;
$d4 = 30.4 * 0.00001;

$e1 = 0.40;
$e2 = 0.05;
$e3 = 0.05;
$e4 = 7.6 * 0.00001;

?>

<script type="text/javascript">

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

      /*Me quede por aca - extraer los datos de la matriz para procesar*/
      extract_value_matrix()
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


  } catch(e) {
    // statements
    console.log(e);
  }
  

 }

 function show_matrix(count_reactants){

      try {
        console.log('count_reactants', parseInt(count_reactants));
        console.log('if condition', Number.isInteger(count_reactants));

        var matrix_html = "<p id = matrix_declaration>";
        matrix_html += "la dimensión de la matriz es:";
        matrix_html += "</p>";

        matrix_html += "<p id = matrix_size>";
        matrix_html += count_reactants;
        matrix_html += "</p>";

        matrix_html += "B="; 
        for (var i = 1; i <= count_reactants; i++) {
          //console.log('i',i);
          matrix_html += "<BR>";
          
          for (var j = 1; j <= count_reactants; j++) {
            //console.log('j',j);
            matrix_html += "<input id=";
            matrix_html += i;
            matrix_html += j;
            matrix_html += " type='text' size='3'>";
          }
          
        }
        matrix_html += "<input type='button' value='Calcular ecuación cinética' onClick='display_result()'>";

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
        size_matrix = count_reactants_element.value;
        console.log("size_matrix", size_matrix);

      } catch(e) {
        // statements
        console.log(e);
      }
    }

</script>

</body>
</html>