import '../App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { SessionStorageProvider } from '../components/SessionStorageProvider';

export default function Faq() {
  return (
    <div className="App">
      <SessionStorageProvider>
        <Header />
        <div className='content-container'>FAQ</div>
        <Footer />
      </SessionStorageProvider>
    </div>
  );
}