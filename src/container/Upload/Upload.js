import React from "react";
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

const Upload = ({ onFileChoose, onFileChange, hiddenFileInput }) => {
  return (
    <>
      <TitleApp>Image Converter</TitleApp>
      <div style={{ display: "grid" }}>
        <label htmlFor="File">Choose your file</label>
        <Button onClick={onFileChoose}> Choose your File </Button>
        <input
          style={{ display: "none" }}
          type="file"
          ref={hiddenFileInput}
          onChange={onFileChange}
        />
      </div>
    </>
  );
};

export default Upload;
