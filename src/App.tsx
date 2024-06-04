import styled from 'styled-components'
import { Outlet } from 'react-router-dom'

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
`;

const App = () => {
  return (
    <AppContainer>
      <Outlet />
    </AppContainer>
  );
};

export default App;