import React from "react";
import { Icon } from "semantic-ui-react";

export const NoMatch = () => {
  return (
    <>
      <Icon name="minus circle" size="big" />
      <strong>Page not found!</strong>
    </>
  );
};

export default NoMatch;
