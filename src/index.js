// IMPORTAR BIBLIOTECAS
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');
require('dotenv').config();

// CREAR VARIABLES
const server = express();
const port = 3000;

// CONFIGURACIÓN
server.use(cors());
server.use(express.json({ limit: '25mb' }));

// CONFIGURACIÓN DE MYSQL
async function getConnection() {
  const connection = await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS,
    database: process.env.MYSQL_DDBB
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

// SERVIDOR ESTÁTICOS
server.use(express.static('./public'));

// ENDPOINTS

// API listar proyectos
server.get('/projects/list', async (req, res) => {

  // 1. Conectar a la bbdd
  const conn = await getConnection();

  // 2. Lanzar un SELECT para recuperar todos los proy de la bbdd
  const queryGetProjects = `SELECT * FROM projects;`;

  const [results] = await conn.query(queryGetProjects);

  // 3. Cierro la conexión
  conn.close();

  // 4. Devuelvo un json con los resultados.
  res.json({ info: "Lista de proyectos", results: results });
});

// Crear proyectos
server.post('/api/projectCard', (req, res) => {

  // Datos vienen req.body

  // 1. Conectar a la bbdd
  // 2. Insertar los datos de la autora  Authors
  // 3. Recupero el id de Authors
  // 4. Insertar el proyecto Projects(fkAuthors)
  // 5. Recupero el id de Projects
  // 6. Cierro al conexion
  // 7. Devuelvo el json

});

// Mostrar el detalle de un proyecto (serv. dinámicos)
server.get('/projectCard/:id', (req, res) => {

  // Recibo el id del proyecto en un URL param

  // 1. Conectar a la bbdd
  // 2. Lanzar un SELECT para recuperar 1 proyecto con el id <- req.params
  // 3. Hago un template (EJS)
  // 4. Cierro la conexión
  // 5. res.render('plantilla', resultado)

});