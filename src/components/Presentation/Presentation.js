import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: block;
`;

const Image = styled.div`
  display: flex;
  justify-content: center;
  img {
    width: 320px;
    height: auto;
    justify-content: center;
    align-items: center;
  }
`;

const Button = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: auto;
  background-color: red;
  color: white;
  border-radius: 6px;
  text-decoration: none;
  height: 40px;
  margin-bottom: 60px;
`;

const Presentation = () => {
  return (
    <Container>
      <h1 style={{ color: "red", textAlign: "center", fontSize: "3em" }}>
        Image Converter
      </h1>
      <Image>
        <img
          src="https://ingsistemas.cloud.ufps.edu.co/rsc/img/logo_ingsistemas_vertical_invertido.png"
          alt="Ing-sistemas"
        />
      </Image>
      <Button to="/converter">Convert your Image</Button>
    </Container>
  );
};

export default Presentation;
