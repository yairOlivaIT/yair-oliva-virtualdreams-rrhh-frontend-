const formulario = document.querySelector('#formulario');
const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');

formulario.addEventListener('submit', validarFormulario);


const expresiones = {
    nombre : /^[a-zA-ZÀ-ÖØ-öø-ÿ\s]+$/,
    email : /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
}


function validarFormulario(e){

    e.preventDefault();

    const nombreValue = nombre.value;
    const emailValue = email.value;
    const asuntoValue = asunto.value;
    const mensajeValue =mensaje.value;
    

    if(nombreValue.trim() === ''){
        imprimirAlerta(nombre,'Por favor, complete este campo.');
        return;
    }
    else if(!expresiones.nombre.test(nombreValue)) {
        imprimirAlerta(nombre, 'Solo se acepta minuscula , mayuscula y acentos.');
        return;
    }
    
    if(emailValue.trim() === ''){
        imprimirAlerta(email,'Por favor, complete este campo.');
        return;
    }
    else if(!expresiones.email.test(emailValue)){
        imprimirAlerta(email, 'Por favor, ingrese un email válido.');
        return;
    }

    if(asuntoValue.trim() === ''){
        imprimirAlerta(asunto,'Por favor, complete este campo.');
        return;
    }
    
    if(mensajeValue.trim() === ''){
        imprimirAlerta(mensaje,'Por favor, complete este campo.');
        return;
    }


    //Sino hay errores se envia el formulario
    emailSuccess();

    
}

function imprimirAlerta(input,mensaje){
    const formControl = input.parentElement;
    const divMensaje = formControl.querySelector('small');
    divMensaje.classList.add('error');
    divMensaje.textContent = mensaje;
  
    setTimeout(() => {
        divMensaje.classList.remove('error');
        divMensaje.textContent = '';
    },3000);

}


function emailSuccess() { 
    $('#myModal').modal('show');
        setTimeout(function(){
            $('#myModal').modal('hide');
            resetFormulario();
    },2000);
}


function resetFormulario(){
    formulario.reset();
}
