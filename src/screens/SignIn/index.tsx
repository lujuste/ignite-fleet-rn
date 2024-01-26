import React from 'react';
import backgroundImg from "../../assets/background.png"

import { Container, Slogan, Title } from './styles';

const SignIn: React.FC = () => {
  return (
  <Container source={backgroundImg} >
    <Title>Ignite fleet</Title>
    <Slogan>Gestao de uso de veiculos</Slogan>
  </Container>
  );
}

export default SignIn;