import { GlobalStyle } from 'assets/styles/globalStyles';
import Nav from 'components/Nav/Nav';
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import Clicker from 'components/containers/Clicker/Clicker';
import UpgradeContainer from 'components/UpgradeContainer/UpgradeContainer';
import { useWindowDimensions } from 'hooks/useWindowDimesions';
import Balance from 'components/Balance/Balance';
import { Provider } from 'react-redux';
import { store } from 'store/store';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  min-height: 100vh;
  background: linear-gradient(76.6deg, #c33764 0%, rgba(29, 38, 113) 100%);
`;

const App: React.FC = () => {
  const dimensions = useWindowDimensions();
  return (
    <Provider store={store}>
      <Router>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Wrapper>
            <Balance />
            {dimensions.width > 1200 ? <Nav /> : null}
            <Routes>
              <Route path="/" element={<Clicker dimensions={dimensions} />} />
              <Route path="/Upgrades" element={<UpgradeContainer />} />
            </Routes>
          </Wrapper>
        </ThemeProvider>
      </Router>
    </Provider>
  );
};

export default App;
