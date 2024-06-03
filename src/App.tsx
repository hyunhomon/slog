import styled from 'styled-components'
import { Outlet } from 'react-router-dom'

const AppContainer = styled.div`
  height: 100vh;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

const App = () => {
  return (
    <AppContainer>
      <Outlet />
    </AppContainer>
  );
};

export default App;