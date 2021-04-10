import React from "react";
import PropTypes from "prop-types";

const Actor = ({ id, name, character, profile }) => {
  return (
    <li id={id}>
      <img src={profile} alt={name} />
      <p> {name}</p>
      <p>{character}</p>
    </li>
  );
};

Actor.defaultProp = {
  profile: "https://ik.imagekit.io/s2fpg15d4rx/No-photo-m_jpq4G-STh.png",
};

Actor.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
  profile: PropTypes.string,
};

export default Actor;
