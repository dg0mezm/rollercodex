import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { SessionStorageProvider } from './SessionStorageProvider';

export default function App() {
  return (
    <div className="App">
      <SessionStorageProvider>
        <Header />
        <Main />
        <Footer />
      </SessionStorageProvider>
    </div>
  );
}