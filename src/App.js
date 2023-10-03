import React, { useState } from 'react';
import './App.css';
import Encuestas from './components/Encuestas';

function App() {
  // Estado para rastrear las respuestas de los usuarios
  const [respuestas, setRespuestas] = useState([]);

  // Preguntas y opciones
  const encuestas = [
    {
      id: 1,
      pregunta: '¿Cuál es tu color favorito?',
      opciones: ['Rojo', 'Azul', 'Verde'],
    },
    {
      id: 2,
      pregunta: '¿Cuál es tu comida favorita?',
      opciones: ['Pizza', 'Hamburguesa', 'Sushi'],
    },
  ];

  // Función para manejar la selección de respuestas
  const handleRespuestaSeleccionada = (encuestaId, opcionSeleccionada) => {
    // Actualizar el estado de las respuestas
    setRespuestas(prevRespuestas => [
      ...prevRespuestas,
      { encuestaId, opcionSeleccionada },
    ]);
  };

  return (
    <div className="App">
      <h1>Aplicación de Encuestas</h1>
      {/* Renderizar el componente Encuestas y pasar las preguntas, opciones y la función de manejo */}
      <Encuestas
        encuestas={encuestas}
        respuestas={respuestas}
        onRespuestaSeleccionada={handleRespuestaSeleccionada}
      />
      {/* Aquí puedes mostrar las respuestas registradas */}
      <div>
        <h2>Respuestas Registradas</h2>
        <pre>{JSON.stringify(respuestas, null, 2)}</pre>
      </div>
    </div>
  );
}

export default App;
