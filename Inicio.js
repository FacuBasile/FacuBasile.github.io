

/* BOTONES FOTOS CARRUSEL*/

const BTNder = document.querySelector(".controlDer");
const BTNizq = document.querySelector(".control");
const fotoscarru = document.querySelector(".fotosCarrusel");

BTNder.addEventListener("click", () =>{
    fotoscarru.scrollLeft+=300;
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

/* EVITAR QUE SE RECARGUE LA PAGINA CON LOS BOTONES DEL FORMULARIO*/


const botonformu = document.getElementById("BTNsubmit");
const formu = document.getElementById("Sugerencia");

formu.addEventListener("submit", function(event){
    event.preventDeault();
})


botonformu.addEventListener("click", function(event){
    event.preventDefault();
})


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
// CARRUSEL CON ARRAY 
  
let index = 0;  

function cambiarFotoCarruselArray(){
    let arrImg = [];

    arrImg[0] = "./IMAGENES/cataratas.jpg";
    arrImg[1] = "./IMAGENES/cataratasglobal.jpg";
    arrImg[2] = "./IMAGENES/cataratasiguazu.jpg";
    let imgvista= new Image();
    
    
   let fotovisible = document.getElementById("fotoVISIBLE");

    
    

   
    if(index === arrImg.length-1){
     index = 0;
     
    }else{
     index++;
     
    }
      
    imgvista.src=arrImg[index];
    fotovisible.appendChild(imgvista);
}
