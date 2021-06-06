import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Button } from "react-bootstrap";
import useSmoothScrollTo from "hooks/useSmoothScrollTo";
import ImageCard from "components/ImageCard";

const Top = ({ frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { header, header1, subheader, imageFileName, jumpToAnchor, jumpToAnchorText } = frontmatter;
  // eslint-disable-next-line react-hooks/rules-of-hooks

  let extraInfoPart;
  if (jumpToAnchor && jumpToAnchorText) {
    extraInfoPart = (
      <Button
        size="xl"
        variant="primary"
        className="text-uppercase"
        href="https://forms.gle/uAhXxTktqtJm4SfZA"
        target="_blank"
      >
        {jumpToAnchorText}
      </Button>
    );
  }

  return (
    <ImageCard
      imageFileName={imageFileName}
      header={header}
      header1={header1}
      subheader={subheader}
      extraInfo={extraInfoPart}
    />
  );
};

Top.propTypes = {
  frontmatter: PropTypes.object,
};

Top.defaultProps = {
  frontmatter: null,
};

export default Top;
