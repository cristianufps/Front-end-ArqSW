import React from "react";
import styled from "styled-components";

const Container = styled.div`
  font-size: 16px;
  line-height: 20px;
`;
const FileData = ({ selectedFile }) => {
  return (
    <>
      {selectedFile && (
        <Container>
          <h2>File Details:</h2>
          <p>File Name: {selectedFile.name}</p>
          <p>File Type: {selectedFile.type}</p>
        </Container>
      )}

      <Container>
        <h4>Choose before Pressing the Upload button</h4>
      </Container>
    </>
  );
};

export default FileData;
