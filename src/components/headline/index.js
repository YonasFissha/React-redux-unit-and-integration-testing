import React, { useEffect } from "react";

const Headline = ({ header, desc }) => {
  useEffect(() => {
    if (!header) {
      return null;
    }
  });
  return (
    <div data-test="headlineComponent">
      {header ? <h1 data-test="header">{header}</h1> : null}
      <p data-test="desc">{desc}</p>
    </div>
  );
};

export default Headline;
