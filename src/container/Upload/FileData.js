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
          <p>
            <strong> File Name: </strong>
            {selectedFile.name}
          </p>
          <p>
            <strong>File Type: </strong>
            {selectedFile.type}
          </p>
        </Container>
      )}
      {/* <Container>
        <h2>New File:</h2>
        <p>
          <strong> File Name: </strong>
          {selectedFile.name}
        </p>
        <p>
          <strong>File Type: </strong>
          {selectedFile.type}
        </p>
      </Container> */}
    </>
  );
};

export default FileData;
