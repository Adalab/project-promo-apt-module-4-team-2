// IMPORTAR BIBLIOTECAS
const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");
const path = require("path");

require("dotenv").config();

// CREAR VARIABLES
const server = express();
const port = 10000;
const host = "0.0.0.0";

// CONFIGURACIÓN
server.use(cors());
server.use(express.json({ limit: "25mb" }));
server.set("view engine", "ejs");

// CONFIGURACIÓN DE MYSQL
async function getConnection() {
  const connection = await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS,
    database: process.env.MYSQL_DDBB,
  });

  await connection.connect();

  console.log(
    `Conexión establecida con la base de datos (identificador=${connection.threadId})`
  );

  return connection;
}

// ARRANCAR EL SERVIDOR
server.listen(port, host, () => {
  console.log(`Servidor iniciado escuchando en http://${host}:${port}`);
});

// ENDPOINTS

// API listar proyectos
server.get("/projects/list", async (req, res) => {
  // 1. Conectar a la bbdd
  const conn = await getConnection();

  // 2. Lanzar un SELECT para recuperar todos los proy de la bbdd
  const queryGetProjects = `SELECT * FROM projects JOIN authors ON fkAuthor = idAuthor;`;

  const [results] = await conn.query(queryGetProjects);

  // 3. Cierro la conexión
  conn.close();

  // 4. Devuelvo un json con los resultados.
  res.json({ info: "Lista de proyectos", results: results });
});

// Crear proyectos
server.post("/api/projectCard", async (req, res) => {
  // 1. Conectar a la bbdd
  const conn = await getConnection();

  // 2. Insertar los datos de la autora Authors
  const insertAuthor = `
    INSERT authors (author, job, photo)
      VALUES (?, ?, ?)`;

  const [resultsInsertAuthor] = await conn.execute(insertAuthor, [
    req.body.autor,
    req.body.job,
    req.body.photo,
  ]);

  // 3. Recupero el id de Authors

  const fkAuthor = resultsInsertAuthor.insertId;

  // 4. Insertar el proyecto Projects(fkAuthors)
  const insertProject = `
    INSERT projects (name, slogan, repo, demo, technologies, description, image, fkAuthor)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?);`;

  const [resultsInsertProject] = await conn.execute(insertProject, [
    req.body.name,
    req.body.slogan,
    req.body.repo,
    req.body.demo,
    req.body.technologies,
    req.body.desc,
    req.body.image,
    fkAuthor,
  ]);

  // 5. Recupero el id de Projects
  const idProject = resultsInsertProject.insertId;

  // 6. Cierro al conexion
  conn.end();

  // 7. Devuelvo el json

  if (resultsInsertProject.affectedRows === 1) {
    res.json({
      success: true,
      cardURL: `/projectCard/${idProject}`,
    });
  }
  //else {
  //res.json({
  //success: false,
  //error: 'Ha ocurrido un error al crear el proyecto'
  //})
  //};
});

server.get("/healthcheck", (req, res) => {
  return res.json({ message: "OK" });
});

// Mostrar el detalle de un proyecto (serv. dinámicos)
server.get("/projectCard/:id", async (req, res) => {
  // Recibo el id del proyecto en un URL param

  // 1. Conectar a la bbdd
  const conn = await getConnection();
  // 2. Lanzar un SELECT para recuperar 1 proyecto con el id <- req.params
  const selectProjects = `
  SELECT *
    FROM authors a 
      JOIN projects p ON (a.idAuthor= p.fkAuthor)
    WHERE p.idProject = ?;`;
  const [results] = await conn.query(selectProjects, [req.params.id]);

  // 3. Hago un template (EJS)
  // 4. Cierro la conexión
  conn.end();
  // 5. res.render('plantilla', resultado)
  const data = results[0];

  res.render("details", data);
});

//DEFINIR SERVIDORES ESTÁTICOS
const staticServerPathWeb = "../public-react";
server.use(express.static(path.join(__dirname, staticServerPathWeb)));

//DEFINIR SERVIDORES ESTÁTICOS
const pathServerPublicStyles = "./src/public-css";
server.use(express.static(pathServerPublicStyles));
