import React from 'react';

function Encuestas({ encuestas, respuestas, onRespuestaSeleccionada }) {
  return (
    <div>
      <h2>Encuestas Disponibles</h2>
      <ul>
        {encuestas.map(encuesta => (
          <li key={encuesta.id}>
            {encuesta.pregunta}
            <ul>
              {encuesta.opciones.map((opcion, index) => (
                <li key={index}>
                  <label>
                    <input
                      type="radio"
                      name={`encuesta${encuesta.id}`}
                      value={opcion}
                      onChange={() =>
                        onRespuestaSeleccionada(encuesta.id, opcion)
                      }
                    />
                    {opcion}
                  </label>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Encuestas;
