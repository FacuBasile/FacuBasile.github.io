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

const botonformu = document.querySelector(".BTNsubmit");

botonformu.addEventListener("click", () =>{
    const form =  document.getElementById("formulario").style.display;
    
    form = "flex";

})




/* VERIFICACION FORMULARIO */
function verificacion(){
    let expresion = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    var email = document.getElementById("Email").value;
    const cartelVerificacion = document.getElementById("confirmacion");
    let nombre = document.getElementById("")

    let verifico = true;
    let mensaje = " GRACIAS POR TU SUGERENCIA! ";

    if(expresion.test(email)){
        cartelVerificacion.innerHTML(concat(nombre,mensaje));
    }else{
        email.style.border = red;
        verifico = false;
    }

}



