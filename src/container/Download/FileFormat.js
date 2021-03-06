import React from "react";
import { formats } from "../../constants/formats";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Buttons = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 10px;

  :hover {
    background: #e3e3e3;
  }
`;

const FileFormat = ({ selectedFile, setExt }) => {
  const handleClick = (e) => {
    e.preventDefault();
    setExt(() => e.target.name);
    console.log(e.target.name);
  };

  return (
    <>
      {selectedFile ? (
        <Container>
          {formats
            .filter((item) => "image/" + item.name !== selectedFile.type)
            .map(({ id, name, img }) => (
              <Buttons onClick={handleClick} key={id}>
                <img src={img} name={name} alt={name} width="100" />
              </Buttons>
            ))}
        </Container>
      ) : (
        <Container>
          {formats.map(({ id, name, img }) => (
            <Buttons onClick={handleClick} key={id}>
              <img src={img} name={name} alt={name} width="100" />
            </Buttons>
          ))}
        </Container>
      )}
    </>
  );
};

export default FileFormat;