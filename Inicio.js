/* BOTONES FOTOS CARRUSEL*/

const BTNder = document.querySelector(".sig");
const BTNizq = document.querySelector(".ant");
const fotoscarru = document.querySelector(".fotosCarrusel");

BTNder.addEventListener("click", () =>{
    fotoscarru.scrollLeft +=300;
})

BTNizq.addEventListener("click", () =>{
    fotoscarru.scrollLeft -=300;
})

/* FIN JS BOTONES FOTOS CARRUSEL*/


/*MOSTRAR FORMULARIO CON BOTON DE FOOTER*/
function mostrarform(){
    const form =  document.getElementById("formulario").style.display;
   if( form==="flex"){
    document.getElementById("formulario").style.display="none";
   }else{
    document.getElementById("formulario").style.display="flex";
   }
}

const botonformu = document.getElementById("BTNsubmit");
const formu = document.getElementById("Sugerencia");

formu.addEventListener("submit", function(event){
    event.preventDeault();

    
    if(verificacion()){

    }

})





/* VERIFICACION FORMULARIO */
function verificacion(){
    let expresion = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    var email = document.getElementById("Email").value;
    const cartelErrores = document.getElementById("ERRORES");
    const cartelMensaje = document.getElementById("MENSAJE");
    let nombre = document.getElementById("nombrePers");

    let verifico = true;

    let mensaje = " GRACIAS POR TU SUGERENCIA! ";

    /* VERIFICACION EMAIL */

    if(expresion.test(email)){
        cartelErrores.innerHTML = "";
    }else{
        email.style.border = red;
        verifico = false;
    }




    return verifico;
}



