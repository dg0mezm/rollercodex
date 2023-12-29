import '../App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { SessionStorageProvider } from '../components/SessionStorageProvider';
import WIP from '../components/WIP';

export default function Calculator() {
  return (
    <div className="App">
      <SessionStorageProvider>
        <Header />
        <WIP />
        <Footer />
      </SessionStorageProvider>
    </div>
  );
}