import '../App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HomeContent from '../components/HomeContent';
import { SessionStorageProvider } from '../components/SessionStorageProvider';

export default function Home() {
  return (
    <div className="App">
      <SessionStorageProvider>
        <Header />
        <HomeContent />
        <Footer />
      </SessionStorageProvider>
    </div>
  );
}