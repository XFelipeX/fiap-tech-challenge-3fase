import AppRoutes from './routes/Routes'
import Header from './components/Header/Header'
import {setupInterceptors} from './services/api'
import { AuthProvider } from './context/AuthContext'

setupInterceptors()

const App: React.FC = () => {
  return (
    <AuthProvider>
      <div className="App">
        <Header />
        <AppRoutes />
      </div>
    </AuthProvider>
  );
}

export default App
