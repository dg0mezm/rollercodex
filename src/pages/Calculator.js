import '../App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { SessionStorageProvider } from '../components/SessionStorageProvider';
import CalculatorContent from '../components/CalculatorContent';

export default function Calculator() {
  return (
    <div className="App">
      <SessionStorageProvider>
        <Header />
        <CalculatorContent />
        <Footer />
      </SessionStorageProvider>
    </div>
  );
}