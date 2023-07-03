// CARRUSEL CON ARRAY 
  
let index = 0;  

function cambiarFotoCarruselArray(){
    let imagenes = [];
    imagenes[0]= document.getElementById("foto1").src;   
    imagenes[1]= document.getElementById("foto2").src;
    imagenes[2]= document.getElementById("foto3").src;
                
    if(index==3){
      index=0;
    }else{
     index++;
    }
                
    document.getElementById("fotoMostrada").src = imagenes[index];

}

/* VERIFICACION FORMULARIO */
function verificacion(){
    
    let expresion = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    var email = document.getElementById("Email");

    const cartelErrores = document.getElementById("ERRORES");
    const cartelMensaje = document.getElementById("MENSAJE");
    let nombre = document.getElementById("nombrePers");
    let provincia = document.getElementById("provinciaNombre");
    let paisaje = document.getElementById("paisajeNombre");
    let verifico = true;

    let mensaje = document.createElement("p");
    mensaje.innerHTML = nombre.value + "  GRACIAS POR SUGERIR " + paisaje.value;
    email.style.border="";
    paisaje.style.border="";
    nombre.style.border="";
    /* VERIFICACION EMAIL */
    
    if(expresion.test(email.value)){
        cartelErrores.innerHTML = "";
        email.style.border="";
    }else if(email.value.trim()==""){
        cartelErrores.innerHTML = "";
        let p = document.createElement("p");
        p.innerHTML = "FALTA UN EMAIL!";
        email.style.border="1px solid red";
        
        cartelErrores.appendChild(p);
        email.focus();
        verifico = false;
    }else{
        cartelErrores.innerHTML = "";
        let p = document.createElement("p");
        p.innerHTML = "EMAIL NO VALIDO!";
        email.style.border="1px solid red";
        
        cartelErrores.appendChild(p);
        email.focus();
        verifico = false;
    }

    // VERIFICAR PAISAJE

    if(paisaje.value.trim()==""){
        paisaje.style.border="2px solid red";
        let p = document.createElement("p");
        p.innerHTML = "FALTA UN PAISAJE!";
        cartelErrores.appendChild(p);

        verifico= false;
    }

    // VERIFICAR NOMBRE

    if(nombre.value.trim()==""){
        nombre.style.border="2px solid red";
        let p = document.createElement("p");
        p.innerHTML = "FALTA UN NOMBRE!";
        cartelErrores.appendChild(p);

        verifico= false;
    }












    if(verifico){
        cartelMensaje.innerHTML="";
       cartelMensaje.appendChild(mensaje);
    }
    
}

/* EVITAR QUE SE RECARGUE LA PAGINA CON LOS BOTONES DEL FORMULARIO*/


const botonformu = document.getElementById("BTNsubmit");
const formu = document.getElementById("Sugerencia");

formu.addEventListener("submit", function(event){
    event.preventDeault();
})


botonformu.addEventListener("click", function(event){
    event.preventDefault();
})


/*MOSTRAR FORMULARIO CON BOTON DE FOOTER*/
function mostrarform(){
    const form =  document.getElementById("formulario").style.display;
   if( form==="flex"){
    document.getElementById("formulario").style.display="none";
   }else{
    document.getElementById("formulario").style.display="flex";
   }
}