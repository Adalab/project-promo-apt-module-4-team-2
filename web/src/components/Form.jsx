import "../scss/Form.scss";

import PropTypes from "prop-types";

import GetAvatar from "../components/GetAvatar";
import ButtonSave from "../components/ButtonSave";

function Form({
  changeData,
  data,
  updateAvatarAuthor,
  updateAvatarProject,
  onSubmit,
  fetchResponse,
}) {
  const handleChange = (event) => {
    const newValue = event.currentTarget.value;
    const attrIdOfInput = event.currentTarget.id;

    changeData(attrIdOfInput, newValue);
  };

  return (
    <>
      <form className="addForm">
        <h2 className="title">Información</h2>
        <fieldset className="addForm__group">
          <legend className="addForm__title">
            Cuéntanos sobre el proyecto
          </legend>
          <input
            className="addForm__input"
            type="text"
            name="name"
            id="name"
            placeholder="Nombre del proyecto"
            onInput={handleChange}
            value={data.name}
          />
          <input
            className="addForm__input"
            type="text"
            name="slogan"
            id="slogan"
            placeholder="Slogan"
            onInput={handleChange}
            value={data.slogan}
          />
          <div className="addForm__2col">
            <input
              className="addForm__input"
              type="url"
              name="repo"
              id="repo"
              placeholder="Repositorio"
              onInput={handleChange}
              value={data.repo}
            />
            <input
              className="addForm__input"
              type="url"
              name="demo"
              id="demo"
              placeholder="Demo"
              onInput={handleChange}
              value={data.demo}
            />
          </div>
          <input
            className="addForm__input"
            type="text"
            name="technologies"
            id="technologies"
            placeholder="Tecnologías"
            onInput={handleChange}
            value={data.technologies}
          />
          <textarea
            className="addForm__input"
            type="text"
            name="desc"
            id="desc"
            placeholder="Descripción"
            rows="5"
            onInput={handleChange}
            value={data.desc}
          ></textarea>
        </fieldset>

        <fieldset className="addForm__group">
          <legend className="addForm__title">Cuéntanos sobre la autora</legend>
          <input
            className="addForm__input"
            type="text"
            name="autor"
            id="autor"
            placeholder="Nombre"
            onInput={handleChange}
            value={data.autor}
          />
          <input
            className="addForm__input"
            type="text"
            name="job"
            id="job"
            placeholder="Trabajo"
            onInput={handleChange}
            value={data.job}
          />
        </fieldset>

        <fieldset className="addForm__group--upload">
          <GetAvatar
            updateAvatar={updateAvatarProject}
            text="Subir foto del proyecto"
          />
          <GetAvatar
            updateAvatar={updateAvatarAuthor}
            text="Subir foto de la autora"
          />
          <ButtonSave text="Guardar proyecto" onSubmit={onSubmit} />

          {fetchResponse !== undefined && fetchResponse.success && (
            <p className="submitOK">
              Tu proyecto ha sido creado en la siguiente dirección:&nbsp;
              <a className="url" href={fetchResponse.cardURL} target="_blank" rel="noopener noreferrer">
                {fetchResponse.cardURL}
              </a>
            </p>
          )}
          {fetchResponse !== undefined && !fetchResponse.success && (
            <p className="submitKO">
              Ha ocurrido un error: {fetchResponse.error}
            </p>
          )}
        </fieldset>
      </form>
    </>
  );
}

Form.propTypes = {
  changeData: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
  updateAvatarAuthor: PropTypes.func.isRequired,
  updateAvatarProject: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  fetchResponse: PropTypes.object,
};

export default Form;
