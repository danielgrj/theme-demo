import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Button from './components/Button';
import Menu from './components/Menu';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const ThemeButton = styled.button`
  padding: 5px 10px;
  border-radius: 5px;
`;

const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const App = () => {
  const [mode, setMode] = useState('bTheme');

  const changeTheme = () => {
    if (mode === 'bTheme') return setMode('nTheme');
    setMode('bTheme');
  };

  return (
    <>
      <ThemeProvider theme={{ mode }}>
        <Wrapper>
          <Menu />
          <Button />
        </Wrapper>
      </ThemeProvider>
      <Container>
        <div>{mode}</div>
        <ThemeButton onClick={changeTheme}>Change theme</ThemeButton>
      </Container>
    </>
  );
};

export default App;
