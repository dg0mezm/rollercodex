import '../App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { SessionStorageProvider } from '../components/SessionStorageProvider';

export default function Calculator() {
  return (
    <div className="App">
      <SessionStorageProvider>
        <Header />
        <div>Calculator</div>
        <Footer />
      </SessionStorageProvider>
    </div>
  );
}