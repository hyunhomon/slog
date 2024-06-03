import styled, { createGlobalStyle } from 'styled-components'
import { Outlet } from 'react-router-dom'

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
  }
`;

const AppContainer = styled.div`
  height: 100vh;
  margin: 0;
  box-sizing: border-box;
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Outlet />
      </AppContainer>
    </>
  );
};

export default App;