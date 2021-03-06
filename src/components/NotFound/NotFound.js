import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: block;
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
`;

const NotFound = () => {
  return (
    <Container>
      <h1>Oops! Missed Route</h1>
      <Button to="/home">Back to home</Button>
    </Container>
  );
};

export default NotFound;
