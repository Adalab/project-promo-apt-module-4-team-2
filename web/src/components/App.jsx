import "../scss/App.scss";
import Header from "./Header";
import Footer from "./Footer";

import LandingPage from "./pages/LandingPage";
import ProjectsPage from "./pages/ProjectsPage";
import FormPage from "./pages/FormPage";
import DetailPage from "./pages/DetailPage";

import { useState, useEffect } from "react";

import { Route, Routes } from "react-router-dom";

function App() {
  const [data, setData] = useState({
    name: "",
    slogan: "",
    technologies: "",
    repo: "",
    demo: "",
    desc: "",
    autor: "",
    job: "",
    photo: "",
    image: "",
  });

  const [projectsList, setProjectsList] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch("/projects/list");
      const data = await response.json();

      setProjectsList(data.results);
    };

    fetchProjects();
  }, []);

  const [fetchResponse, setFetchResponse] = useState();

  const changeData = (nameProp, newValue) => {
    const clonData = { ...data };

    clonData[nameProp] = newValue;

    setData(clonData);
  };

  const updateAvatarAuthor = (image) => {
    const clonData = { ...data };

    clonData.photo = image;

    setData(clonData);
  };

  const updateAvatarProject = (image) => {
    const clonData = { ...data };

    clonData.image = image;

    setData(clonData);
  };

  const handleFetchPost = () => {
    const data = {
      name: "", // Nombre del proyecto
      slogan: "", // Slogan del proyecto
      technologies: "", // Tecnologías
      repo: "", // Repo
      demo: "", // Demo
      desc: "", // Descripción
      autor: "", // Nombre de la autora
      job: "", // Trabajo de la autora
      photo: "", // Foto de la autora
      image: "", // Foto del proyecto
    };
    fetch("/api/projectCard", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((dataResponse) => {
        setFetchResponse(dataResponse);
      });
  };

  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/form"
            element={
              <FormPage
                changeData={changeData}
                data={data}
                updateAvatarAuthor={updateAvatarAuthor}
                updateAvatarProject={updateAvatarProject}
                onSubmit={handleFetchPost}
                fetchResponse={fetchResponse}
              />
            }
          />
          <Route
            path="/projects"
            element={<ProjectsPage data={data} projectsList={projectsList} />}
          />
          <Route path="/detail" element={<DetailPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
