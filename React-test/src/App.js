
import Header from './components/Header/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Main from './components/Main/Main';
import BuildPortfolio from './components/BuildPortfolio/buildPortfolio';
import Exchange from './components/Exchange/Exchange';
import Circle from './components/Circle/circle';
import NeedHelp from './components/NeedHelp/needHelp';
import Footer from './components/Footer/Footer';
import CryptocurrencySection from './components/CryptocurrencySection/CryptocurrencySection';
import { ThemeProvider } from '@mui/material/styles';
import theme from './components/Exchange/Exchange'

const App = () => {
  return (
    <>
      <ToastContainer style={{ marginTop: 170 }} />
      <Header />
      <Main />
      <CryptocurrencySection />
      <BuildPortfolio />
      <ThemeProvider theme={theme}>
        <Exchange />
      </ThemeProvider>
      <Circle />
      <NeedHelp />
      <Footer />
    </>
  );
};

export default App;