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
server.set('view engine', 'ejs');

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
server.post('/api/projectCard', async (req, res) => {

  // 1. Conectar a la bbdd
    const conn = await getConnection();

  // 2. Insertar los datos de la autora Authors
    const insertAuthor = `
    INSERT authors (name, job, photo)
      VALUES (?, ?, ?)`;

    const [resultsInsertAuthor] = await conn.execute(
      insertAuthor,
        [req.body.name, req.body.job, req.body.photo]);

  // 3. Recupero el id de Authors

  const fkAuthor = resultsInsertAuthor.insertId;

  // 4. Insertar el proyecto Projects(fkAuthors)
    const insertProject = `
    INSERT projects (name, slogan, repo, demo, technologies, description, image, fkAuthor)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?);`;
    
      const [resultsInsertProject] = await conn.execute(
        insertProject,
        [req.body.name, req.body.slogan, req.body.repo, req.body.demo, req.body.technologies, req.body.description, req.body.image, fkAuthor]
      );

  // 5. Recupero el id de Projects
  const idProject = resultsInsertProject.insertId;

  // 6. Cierro al conexion
  conn.end();

  // 7. Devuelvo el json

  if(resultsInsertProject.affectedRows === 1) {
    res.json({
      success: true,
      cardURL: `http://localhost:${port}/projectCard/${idProject}`
    })
    
  }
  //else {
    //res.json({
      //success: false,
      //error: 'Ha ocurrido un error al crear el proyecto'
    //})
  //};

  console.log (res);

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