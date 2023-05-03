function actualizarHora() {
    const fechaActual = new Date();
  
    // Obtenemos los elementos del reloj
    const horas = document.getElementById('horas');
    const minutos = document.getElementById('minutos');
    const segundos = document.getElementById('segundos');
    const ampm = document.getElementById('ampm');
  
    // Obtenemos la hora actual en formato de 12 horas
    let horasActuales = fechaActual.getHours() % 12;
    horasActuales = horasActuales ? horasActuales : 12; // Si son las 12 en punto, lo cambiamos a 12
  
    // Actualizar los elementos del reloj
    horas.innerHTML = horasActuales < 10 ? '0' + horasActuales : horasActuales;
    minutos.innerHTML = fechaActual.getMinutes() < 10 ? '0' + fechaActual.getMinutes() : fechaActual.getMinutes();
    segundos.innerHTML = fechaActual.getSeconds() < 10 ? '0' + fechaActual.getSeconds() : fechaActual.getSeconds();
    ampm.innerHTML = fechaActual.getHours() < 12 ? 'AM' : 'PM';
  
    // Obtenemos los elementos de la fecha
    const diaSemana = document.getElementById('diaSemana');
    const dia = document.getElementById('dia');
    const mes = document.getElementById('mes');
    const year = document.getElementById('year');
  
    // Creamos un array con los días de la semana y los meses
    const diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  
    // Actualizamos los elementos de la fecha
    diaSemana.innerHTML = diasSemana[fechaActual.getDay()];
    dia.innerHTML = fechaActual.getDate();
    mes.innerHTML = meses[fechaActual.getMonth()];
    year.innerHTML = fechaActual.getFullYear();
  }
  
  // Llamamos a la función cada segundo para actualizar la hora y la fecha
  setInterval(actualizarHora, 1000);
  