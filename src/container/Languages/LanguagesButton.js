import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.div`
  border-radius: 50%;
  width: 100px;
`;

const LanguagesButton = () => {
  return (
    <Container>
      <Image>
        <img
          src="https://www.clipartmax.com/png/middle/470-4707396_javascript-icon-html-css-js-icons.png"
          alt="JavaScript"
        />
      </Image>
      <Image>
        <img
          src="https://www.pinclipart.com/picdir/middle/336-3363961_spring-boot-cloud-microservices-clipart.png"
          alt="Java"
        />
      </Image>
      <Image>
        <img
          src="https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png"
          alt="Python"
        />
      </Image>
    </Container>
  );
};

export default LanguagesButton;
