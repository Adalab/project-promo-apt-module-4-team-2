import PropTypes from "prop-types";

import Create from "../Create";

function FormPage({
  changeData,
  data,
  updateAvatarAuthor,
  updateAvatarProject,
  onSubmit,
  fetchResponse,
}) {
  return (
    <div>
      <Create
        changeData={changeData}
        data={data}
        updateAvatarAuthor={updateAvatarAuthor}
        updateAvatarProject={updateAvatarProject}
        onSubmit={onSubmit}
        fetchResponse={fetchResponse}
      />
    </div>
  );
}

FormPage.propTypes = {
  changeData: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
  updateAvatarAuthor: PropTypes.func.isRequired,
  updateAvatarProject: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  fetchResponse: PropTypes.object,
};

export default FormPage;
