import AppRoutes from './routes/Routes'
import Header from './components/Header/Header'

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <AppRoutes />
    </div>
  );
}

export default App
