import React from "react";
import PropTypes from "prop-types";

import Image from "components/Image";
import * as SocialIcons from "components/SocialIcons";

import "./TeamMember.scss";

const TeamMember = ({ header, subheader }) => {
  return (
    <div>
      <h4>{header}</h4>
      <p className="text-muted">{subheader}</p>
    </div>
  );
};

TeamMember.propTypes = {
  header: PropTypes.string,
  subheader: PropTypes.string,
};

TeamMember.defaultProps = {
  header: "",
  subheader: "",
};

export default TeamMember;
