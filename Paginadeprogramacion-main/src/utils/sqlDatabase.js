import initSqlJs from 'sql.js';

let db = null;

// Inicializa y crea la base de datos
export async function initDatabase() {
  const SQL = await initSqlJs({
    locateFile: file => `https://sql.js.org/dist/${file}`
  });

  db = new SQL.Database();

  // Crea una tabla de ejemplo
  db.run(`
    CREATE TABLE usuarios (id INTEGER PRIMARY KEY, nombre TEXT);
    INSERT INTO usuarios (nombre) VALUES ('Juan'), ('Ana'), ('Carlos');
  `);
}

// Ejecuta una consulta y devuelve resultados como array
export function executeQuery(query) {
  try {
    const res = db.exec(query);
    if (res.length === 0) return [];

    const cols = res[0].columns;
    const rows = res[0].values;

    return rows.map(row =>
      Object.fromEntries(row.map((val, i) => [cols[i], val]))
    );
  } catch (err) {
    return { error: err.message };
  }
}
