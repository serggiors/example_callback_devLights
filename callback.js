function callback(mensajeDevLights) {
    console.log("Este es un callback:", mensajeDevLights);
  }
  function mensajeDevLights(){
    const mensaje = "Hola DevLights";
    return mensaje;
  }
  callback(mensajeDevLights());
