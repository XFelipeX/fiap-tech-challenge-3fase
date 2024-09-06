import AppRoutes from './routes/Routes';
import Header from './components/Header/Header';
import SearchBox from './components/SearchBox/SearchBox';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <SearchBox />
      <AppRoutes />
    </div>
  );
}

export default App
