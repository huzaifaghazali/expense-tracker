import styled from 'styled-components';
import { MainLayout } from './styles/Layout';
import { useMemo } from 'react';
import Orb from './Components/Orb';

function App() {

  const orbMemo = useMemo(() => {
    return <Orb />
  }, [])
  return (
    <AppStyled>
     {orbMemo}
      <MainLayout>
         
        <main>
        </main>
      </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url('./bg.png');
  position: relative;
  main {
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #ffffff;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 0;
    }
  }
`;

export default App;
