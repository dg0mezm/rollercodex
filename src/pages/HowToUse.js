import '../App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { SessionStorageProvider } from '../components/SessionStorageProvider';

export default function HowToUse() {
  return (
    <div className="App">
      <SessionStorageProvider>
        <Header />
        <div>How to use</div>
        <Footer />
      </SessionStorageProvider>
    </div>
  );
}