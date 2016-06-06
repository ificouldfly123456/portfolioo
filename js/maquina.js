//for (var i = 0; i < cadena.length; i++) {
  // console.log(cadena.charAt(i));
 //}
 
 /*     var element = $('#test'); */
 var element = document.querySelector('#test');
 var cadena = 'Dariana Patiño';
var i = 0;
 //element.text(cadena.charAt(i));
 var intervalo = window.setInterval(function() {
   console.log('ejecutandose');
   if (i === cadena.length) {
     //remover el intervalo;
     clearInterval(intervalo);
   } else {
     /*      var textoAnterior = element.text() */
     var textoAnterior = element.innerText;
     /*      element.text(textoAnterior + cadena.charAt(i)); */
     element.innerText = textoAnterior + cadena.charAt(i);
     i++;
   }
 }, 500);
 
 
 //window.setInterval(function () {
   //var textoAnterior = element.text();
  // element.text(textoAnterior + );
 //}, 500)
 /*  console.log(element.text()) */