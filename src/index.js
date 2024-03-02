// Nuestro servidor Express

// IMPORTAR BIBLIOTECAS

const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');

// CREAR VARIABLES

const server = express();
const port = 3000;        // 1025 - 65365

// http://   localhost : 3000  / path ...

// CONFIGURACIÓN

server.use( cors() );
server.use(express.json({ limit: '25mb' }));

// CONFIGURACIÓN DE MYSQL

async function getConnection() {

const connection = await mysql.createConnection({
    host: 'sql.freedb.tech',
    user: 'freedb_Team-2',
    password: '3HjXNYZ5BV&bmpp',
    database: 'freedb_Proyectos Molones'
});

await connection.connect();

console.log(
    `Conexión establecida con la base de datos (identificador=${connection.threadId})`
);

  return connection;
}


// ARRANCAR EL SERVIDOR

server.listen(port, () => {
  console.log(`Servidor iniciado escuchando en http://localhost:${port}`);
});

// ENDPOINTS

//   GET   http://localhost:3000   /api/pets

server.get('/api/projects', async (req, res) => {

  // Connectar con la base de datos

  const conn = await getConnection();

  // Lanzar un SELECT

  const queryGetProjects = `
    SELECT * FROM projects;
  `;

  const [results] = await conn.query(queryGetProjects);
 
  // Recuperar los datos
  
  console.log(results);

  // Cerramos la conexion

  conn.close();

  res.json({info:"nada", results: results});
});

// SERVIDOR ESTÁTICOS

server.use( express.static('./public') );