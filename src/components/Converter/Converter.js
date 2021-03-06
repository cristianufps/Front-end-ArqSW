import React, { useState } from "react";

import FileData from "../../container/Upload/FileData";
import Upload from "../../container/Upload/Upload";
import FileFormat from "../../container/Download/FileFormat";
import ConvertButton from "../../container/Download/ConvertButton";

import styled from "styled-components";

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
  // const [dissableConvert, setDissableConvert] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [ext, setExt] = useState("");

  return (
    <Container>
      <Upload setSelectedFile={setSelectedFile} />
      <FileFormat selectedFile={selectedFile} setExt={setExt} />
      <FileData selectedFile={selectedFile} />
      <ConvertButton selectedFile={selectedFile} ext={ext} />
    </Container>
  );
};

export default Converter;
