const campoTexto= document.querySelector("#textoEncriptado");
const campoMensaje= document.querySelector("#campoMensaje");

const matrizCode = [   
    ["e", "enter"], // indice 0
    ["i", "imes"], // indice 1
    ["a", "ai"], // indice 2
    ["o", "ober"], // indice 3
    ["u", "ufat"], // indice 4
 ];

 function btnEncriptar(){
    const texto= encriptar(campoTexto.value);
    console.log(texto);
    campoMensaje.value= texto;
 }

 function encriptar(fraseEncriptada){
    for (let i=0; i<matrizCode.length; i++){
        if(fraseEncriptada.includes(matrizCode[i][0])){
            fraseEncriptada= fraseEncriptada.replaceAll(
                matrizCode[i][0],
                matrizCode[i][1]
            )
        }
    }
    return fraseEncriptada;
 }

 function btnDesencriptar(){
    const texto= desencriptar(campoTexto.value);
    console.log(texto);
    campoMensaje.value= texto;
 }

 function desencriptar(fraseDesencriptada){
    for (let i=0; i<matrizCode.length; i++){
        if(fraseDesencriptada.includes(matrizCode[i][1])){
            fraseDesencriptada= fraseDesencriptada.replaceAll(
                matrizCode[i][1],
                matrizCode[i][0]
            )
        }
    }
    return fraseDesencriptada;
 }

 function btnCopiarTexto(){
    campoMensaje.select();
    document.execCommand("copy");
    mostrarMensaje();
    console.log("Texto copiado, procedo a limpiar campos");
    campoMensaje.value= "";
    campoTexto.value= "";
 }

 function mostrarMensaje() {
    
    var mensaje = document.createElement("div");
    mensaje.textContent = "¡Texto copiado!";
    mensaje.style.backgroundColor = "#f0f0f0"; // Estilo opcional para el fondo
    mensaje.style.padding = "10px"; // Estilo opcional para el espaciado interno
    mensaje.style.position = "fixed"; // Fija la posición del mensaje en la ventana
    mensaje.style.bottom = "20px"; // Ajusta la posición vertical
    mensaje.style.left = "50%"; // Centra horizontalmente
    mensaje.style.transform = "translateX(-50%)"; // Centra horizontalmente

    // Agrega el mensaje al cuerpo del documento
    document.body.appendChild(mensaje);

    // Desaparece el mensaje después de 3 segundos
    setTimeout(function () {
        document.body.removeChild(mensaje);
    }, 3000); // 3000 milisegundos (3 segundos)
}