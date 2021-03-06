import React, { useRef, useState } from "react";
import styled from "styled-components";

const TitleApp = styled.h1`
  text-align: center;
  font-size: 3em;
`;

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

const Upload = ({ setSelectedFile }) => {
  const hiddenFileInput = useRef(null);

  const handleChoose = (e) => {
    hiddenFileInput.current.click();
  };

  const handleChange = (e) => {
    const fileUploaded = e.target.files[0];
    setSelectedFile(() => fileUploaded);
    console.log(fileUploaded.type);
  };

  return (
    <>
      <TitleApp>Image Converter</TitleApp>
      <div style={{ display: "grid" }}>
        {/* <label htmlFor="File">Click Here!</label> */}
        <Button onClick={handleChoose}> Choose your File </Button>
        <input
          style={{ display: "none" }}
          type="file"
          ref={hiddenFileInput}
          onChange={handleChange}
        />
      </div>
    </>
  );
};

export default Upload;
