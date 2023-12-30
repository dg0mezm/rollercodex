import '../App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { SessionStorageProvider } from '../components/SessionStorageProvider';
import FaqContent from '../components/FaqContent';

export default function Faq() {
  return (
    <div className="App">
      <SessionStorageProvider>
        <Header />
        <FaqContent className='content-container'/>
        <Footer />
      </SessionStorageProvider>
    </div>
  );
}