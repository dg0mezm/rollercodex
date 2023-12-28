import '../App.css';
import Header from '../components/Header';
import MinersContent from '../components/MinersContent';
import Footer from '../components/Footer';
import { SessionStorageProvider } from '../components/SessionStorageProvider';

export default function Miners() {
  return (
    <div className="App">
      <SessionStorageProvider>
        <Header />
        <MinersContent className='content-container'/>
        <Footer />
      </SessionStorageProvider>
    </div>
  );
}