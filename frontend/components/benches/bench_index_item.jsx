import React from "react";

const BenchIndexItem = props => {
  const { description, lat, lng } = props.bench;
  return <li>{description}</li>;
};

export default BenchIndexItem;
