// function menu() {
//   let menuamburgesa = document.getElementById("menuamburgesa");
//   let aside = document.getElementById("aside");

//   if ((menuamburgesa.style.display = "none")) {
//     aside.style.display = "block";
//   } else {
//     aside.style.display = "none";
//   }
// }
// let i=0;
// fetch("marquetacion.json")
//   .then((res) => res.json())
//   .then((data) => {
//     let heramientas = document.getElementById("heramientas");

//     data.forEach((dat) => {
      
//       heramientas.innerHTML += `<div class="pro">  <figure>
        
//         <img src="${dat.imagen2}" alt="" class="imagenes"> 
//           <figcaption>
//           <b><p> ${dat.titulo2}</p></b>
//             <br>
//             <button class="btncancelar" data-index="${i}">Leer</button> 
//             </figcaption>
//             </figure>  
//       </div>
//       `; 
//       i++;
//     });
//     const buttons = document.querySelectorAll('.btncancelar');

//     // Agrega un controlador de eventos de clic a cada botón
//     buttons.forEach((button) => {
//       button.addEventListener('click', () => {
//         // Obtiene el índice del objeto del atributo data-index del botón
//         const index = button.dataset.index;
//         // Obtiene la descripción del objeto correspondiente en el JSON
//         const description = data[index].descripcion;
        
        
//         // Muestra la descripción en un modal
//         // (Aquí debes usar la l  ibrería o el código que prefieras para crear modales)
//         let modal = document.getElementById('myModal');
       
//         modal.style.display="block";
//         document.querySelector('.mostrar').innerHTML = description;
//       });
//     });
//   });
//   let span= document.querySelector('.close');
//   span.addEventListener("click", function(){
//     document.getElementById('myModal').style.display = "none";
//   });
//   window.onclick = function(event) {
//     if (event.target == document.getElementById('myModal')) {
//       document.getElementById('myModal').style.display = "none";
//     }
//   }