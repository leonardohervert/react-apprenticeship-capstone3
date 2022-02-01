import React from "react";

const Image = ({ alt, ...props }) => {
  return (
    <React.Fragment>
      <div>
        <img alt="user" {...props} />
      </div>
    </React.Fragment>
  );
};

export default Image;
