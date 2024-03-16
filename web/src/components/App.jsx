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
  const initialSavedData = JSON.parse(localStorage.getItem("savedData")) || {};
  const [savedData, setSavedData] = useState(initialSavedData);

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
    ...initialSavedData,
  });

  const [fetchResponse, setFetchResponse] = useState();

  useEffect(() => {
    localStorage.setItem("savedData", JSON.stringify(savedData));
  }, [savedData]);

  const changeData = (fieldName, inputValue) => {
    setData({ ...data, [fieldName]: inputValue });
    setSavedData({ ...data, [fieldName]: inputValue });
  };

  const updateAvatarAuthor = (image) => {
    const clonData = { ...data };
    clonData.photo = image;
    setData(clonData);
    setSavedData((data) => ({
      ...data,
      photo: image,
    }));
  };

  const updateAvatarProject = (image) => {
    const clonData = { ...data };
    clonData.image = image;
    setData(clonData);
    setSavedData((data) => ({
      ...data,
      image: image,
    }));
  };

  const handleFetchPost = () => {
    fetch("http://localhost:3000/api/projectCard", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((dataResponse) => {
        setFetchResponse(dataResponse);
        if (dataResponse.success) {
          setSavedData({});
          localStorage.removeItem("savedData");
        }
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
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/detail" element={<DetailPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
