import React from "react";
import axios from "axios";

import styled from "styled-components";

const Button = styled.button`
  border-radius: 10px;
  color: white;
  background: red;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 40px;
  height: 35px;
`;

const ConvertButton = ({ selectedFile, ext }) => {

  const onFileUpload = () => {
    const formData = new FormData();
    formData.append("image", selectedFile); // image/png, image/jpeg, image/gif, image/bmp
    formData.append("ext", ext); //

    console.log(selectedFile);
    axios
      .post("http://localhost:3030/converter", formData)  // py, java, node
      .then((resp) => console.log(resp));
  };

  return (
    <>
      {selectedFile && ext ? (
        <Button onClick={onFileUpload}>Convert!</Button>
      ) : (
        <Button onClick={onFileUpload} style={{ background: "gray" }} disabled>
          Convert!
        </Button>
      )}
    </>
  );
};

export default ConvertButton;
