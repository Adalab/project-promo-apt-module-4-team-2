import PropTypes from "prop-types";
import Card from "./Card";
import "../scss/Preview.scss";

import defaultPhoto from "../images/ebook-example.jpg";

function Preview({ data }) {
  return (
    <section className="preview">
      <div
        className="projectImage"
        style={{ backgroundImage: `url(${data.image || defaultPhoto})` }}
      ></div>
      <Card data={data} />
    </section>
  );
}

Preview.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Preview;
