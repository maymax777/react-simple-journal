import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import Container from '../../components/common/Container';
import { getMonthYear } from '../../utils';
import Journal from '../Journal';
import CardList from '../CardList';

function App() {
  const theme = useSelector((state) => state.Theme.currentTheme);
  const { selectedDate } = useSelector((state) => state.Journal);
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header />
        <Journal />
        <CardList />
        <Footer>{getMonthYear(selectedDate)}</Footer>
      </Container>
    </ThemeProvider>
  );
}

export default App;
