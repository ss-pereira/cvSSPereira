/*Funcion que desactiva el efecto*/



document.addEventListener("DOMContentLoaded", ()=> {
    const boton = document.querySelector(".boton button"); /*const boton = document.querySelector("#boton button"); 
    Aquí, se selecciona el botón que se encuentra dentro del elemento con el ID "boton". document.querySelector("#boton button") 
    busca un elemento <button> dentro del elemento con
     el ID "boton" y almacena este botón en la variable boton.*/


    const particlesJS = document.querySelector("#particles-js");

/*De manera similar, este código selecciona el elemento con el ID "particles-js" y lo almacena en la variable particlesJS. 
Este es el elemento al que deseas cambiar el z-index.*/
  
    boton.addEventListener("click", function () {
      if (particlesJS.style.zIndex === "1") {
        particlesJS.style.zIndex = "-1";
      } else {
        particlesJS.style.zIndex = "1";
      }
    });
  });
  

  document.addEventListener("DOMContentLoaded", ()=> {
    alert('¡Bienvenido a mi cv digital! Aún estoy mejorándolo a medida que adquiero mas habilidades. Espero que sea de tu agrado leerlo.');
});





