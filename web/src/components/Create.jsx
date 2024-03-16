import Hero from "./Hero";
import Preview from "./Preview";
import Form from "./Form";
import "../scss/Create.scss";

import PropTypes from "prop-types";

function Create({
  changeData,
  data,
  updateAvatarAuthor,
  updateAvatarProject,
  onSubmit,
  fetchResponse,
}) {
  return (
    <main className="main">
      <Hero />
      <Preview data={data} />
      <Form
        changeData={changeData}
        data={data}
        updateAvatarAuthor={updateAvatarAuthor}
        updateAvatarProject={updateAvatarProject}
        onSubmit={onSubmit}
        fetchResponse={fetchResponse}
      />
    </main>
  );
}

Create.propTypes = {
  changeData: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
  updateAvatarAuthor: PropTypes.func.isRequired,
  updateAvatarProject: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  fetchResponse: PropTypes.object,
};

export default Create;
