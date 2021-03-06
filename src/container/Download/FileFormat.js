import React from "react";
import { formats } from "../../constants/formats";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Buttons = styled.div`
  cursor: pointer;
  border: none;
  border-radius: 10px;
`;

const FileFormat = (format) => {

  return (
    <Container>
      {formats.map(({ id, name, img }) => (
        <Buttons key={id}>
          <img src={img} alt={name} width="100" />
        </Buttons>
      ))}
    </Container>
  );
};

export default FileFormat;
