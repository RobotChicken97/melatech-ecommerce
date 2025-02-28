import { Helmet } from "react-helmet";

import React from "react";

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name={"description"} content={description} />
      <meta keyword={"keywords"} content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Welcome to MelaTech Ecommerce",
  description: "We sell the best products for cheap",
  keywords: "electronics, buy electronics, cheap electronics",
};

export default Meta;
