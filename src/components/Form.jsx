import React, { useState } from 'react';

function Form({ onAddCita }) {
  const [nombreMascota, setNombreMascota] = useState('');
  const [nombreDueno, setNombreDueno] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [aclaracion, setAclaracion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevaCita = {
      nombreMascota,
      nombreDueno,
      fecha,
      hora,
      aclaracion
    }
    onAddCita(nuevaCita);
  };

  return (
    <div class='form'>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre-mascota">Nombre de la Mascota:</label><br />
        <input
          type="text"
          id="nombre-mascota"
          value={nombreMascota}
          onChange={(e) => setNombreMascota(e.target.value)}
          required
        /><br /><br />

        <label htmlFor="nombre-dueno">Nombre del Dueño:</label><br />
        <input
          type="text"
          id="nombre-dueno"
          value={nombreDueno}
          onChange={(e) => setNombreDueno(e.target.value)}
          required
        /><br /><br />

        <label htmlFor="fecha">Fecha:</label><br />
        <input
          type="date"
          id="fecha"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
          required
        /><br /><br />

        <label htmlFor="hora">Hora:</label><br />
        <input
          type="time"
          id="hora"
          value={hora}
          onChange={(e) => setHora(e.target.value)}
          required
        /><br /><br />

        <label htmlFor="aclaracion">Aclaración:</label><br />
        <textarea
          id="aclaracion"
          value={aclaracion}
          onChange={(e) => setAclaracion(e.target.value)}
          rows="4"
          cols="50"
        /><br /><br />

        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
}

export default Form;
