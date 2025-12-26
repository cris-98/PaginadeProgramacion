import React, { useEffect, useState } from 'react';
import { initDatabase, executeQuery } from '../utils/sqlDatabase';

export default function LearnSQL() {
  const [output, setOutput] = useState([]);

  useEffect(() => {
    initDatabase();
  }, []);

  const handleRun = () => {
    const result = executeQuery("SELECT * FROM usuarios;");
    setOutput(result);
  };

  return (
    <div>
      <h1>Aprende SQL</h1>
      <button onClick={handleRun}>Ejecutar consulta</button>
      <pre>{JSON.stringify(output, null, 2)}</pre>
    </div>
  );
}
