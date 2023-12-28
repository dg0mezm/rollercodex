import '../App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { SessionStorageProvider } from '../components/SessionStorageProvider';

export default function Contact() {
  return (
    <div className="App">
      <SessionStorageProvider>
        <Header />
        <div className='content-container'>Contact</div>
        <Footer />
      </SessionStorageProvider>
    </div>
  );
}