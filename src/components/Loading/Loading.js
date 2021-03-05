import React, { useEffect, useState } from "react";
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border: 5px solid;
  border-color: red;
`;

const Loading = () => {
  let [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      if (isLoading) {
        setIsLoading(false);
      }
    }, 2000);
  });

  return (
    <div className="" style={{ textAlign: "center", fontFamily: "fantasy" }}>
      <ClipLoader isLoading={isLoading} css={override} size={100} />
      <p>Loading File</p>
    </div>
  );
};

export default Loading;
