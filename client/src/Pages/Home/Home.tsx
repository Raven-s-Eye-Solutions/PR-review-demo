import React, { FunctionComponent } from 'react';
import Header from '../../Components/Header';
import Calculator from '../../Components/Calculator';

import { Container } from '@material-ui/core';

export const Home: FunctionComponent = () => {
  return (
    <Container>
      <Header />
      <Calculator />
    </Container>
  )
}

export default Home;
