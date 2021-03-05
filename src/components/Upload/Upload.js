import axios from "axios";

import React, { useRef, useState } from "react";
import FileData from "../../container/Upload/FileData";

import styled from "styled-components";
import FileFormat from "../../container/Download/FileFormat";

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
  height: 25px;
`;

const Container = styled.div`
  width: 600px;
  border-radius: 20px;
  background: #f3f3f3;
  height: auto;
  display: grid;
  justify-content: center;
  align-items: center;
`;

const Upload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const hiddenFileInput = useRef(null);

  const onFileChange = (event) => {
    setSelectedFile({ selectedFile: event.target.files[0] });
  };

  const onFileUpload = () => {
    const formData = new FormData();

    formData.append("myFile", selectedFile, selectedFile.name);

    console.log(selectedFile);

    axios.post("api/uploadfile", formData);
  };

  const onFileChoose = (e) => {
    hiddenFileInput.current.click();
  };

  return (
    <Container>
      <h1>Safguar Converter</h1>
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

      <FileFormat />
      <FileData selectedFile={selectedFile} />
      <Button onClick={onFileUpload}>Convert!</Button>
    </Container>
  );
};

export default Upload;
