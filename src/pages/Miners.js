import '../App.css';
import Header from '../components/Header';
import MinersTable from '../components/MinersTable';
import Footer from '../components/Footer';
import { SessionStorageProvider } from '../components/SessionStorageProvider';

export default function Miners() {
  return (
    <div className="App Miners">
      <SessionStorageProvider>
        <Header />
        <MinersTable />
        <Footer />
      </SessionStorageProvider>
    </div>
  );
}