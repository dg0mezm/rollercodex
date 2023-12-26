import '../App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { SessionStorageProvider } from '../components/SessionStorageProvider';

export default function Rgpd() {
  return (
    <div className="App">
      <SessionStorageProvider>
        <Header />
        <div>rgpd</div>
        <Footer />
      </SessionStorageProvider>
    </div>
  );
}