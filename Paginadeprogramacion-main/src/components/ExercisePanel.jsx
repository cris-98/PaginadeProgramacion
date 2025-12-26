import React from 'react';

export default function ExercisePanel({ language }) {
  const exercises = {
    python: "Imprime 'Hola Mundo'",
    java: "Crea una clase con método main",
    javascript: "Declara una variable y muéstrala",
    c: "Imprime un número en C",
    php: "Crea una función que sume dos números",
    sql: "Escribe una consulta SELECT simple",
    ia: "Entrena un modelo simple con scikit-learn",
    chatbot: "Haz un bot que responda 'Hola'",
    html: "<h1>Título en HTML</h1>",
    // ... y así sucesivamente
  };

  return (
    <div style={{ marginBottom: "1rem", background: "#fffbe6", padding: "1rem", borderRadius: "8px" }}>
      <h3>Ejercicio</h3>
      <pre>{exercises[language] || "Ejercicio no disponible"}</pre>
    </div>
  );
}
