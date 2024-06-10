import React from 'react';

function Cita({ mascota, dueno, fecha, hora, sintomas, onDelete}) {
  
  return (
    <div className="cita-card">
      <div className="cita">
        <p>Mascota: <span>{mascota}</span></p>
        <p>Dueño: <span>{dueno}</span></p>
        <p>Fecha: <span>{fecha}</span></p>
        <p>Hora: <span>{hora}</span></p>
        <p>Síntomas: <span>{sintomas}</span></p>
        <button className="boton-eliminar" onClick={onDelete}>Eliminar</button>
      </div>
    </div>
  );
}

export default Cita;