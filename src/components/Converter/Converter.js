import axios from "axios";

import React, { useRef, useState } from "react";
import FileData from "../../container/Upload/FileData";

import styled from "styled-components";
import FileFormat from "../../container/Download/FileFormat";
import Upload from "../../container/Upload/Upload";

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

const Container = styled.div`
  width: 600px;
  border-radius: 20px;
  background: #f3f3f3;
  height: auto;
  display: grid;
  justify-content: center;
  align-items: center;
`;

const Converter = () => {
  const [dissableConvert, setDissableConvert] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const hiddenFileInput = useRef(null);

  const onFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
    e.preventDefault();
    console.log(e);
    console.log(selectedFile);
  };

  const onFileUpload = () => {
    const formData = new FormData();

    formData.append(selectedFile, selectedFile.type);

    console.log(selectedFile);

    axios.post("api/uploadfile", formData);
  };

  const onFileChoose = (e) => {
    e.preventDefault();
    hiddenFileInput.current.click();
  };

  return (
    <Container>
      <Upload
        onFileChoose={onFileChoose}
        onFileChange={onFileChange}
        hiddenFileInput={hiddenFileInput}
      />
      <FileFormat />
      <FileData selectedFile={selectedFile} />
      <Button onClick={onFileUpload}>Convert!</Button>
    </Container>
  );
};

export default Converter;
