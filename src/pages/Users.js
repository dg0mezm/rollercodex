import '../App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { SessionStorageProvider } from '../components/SessionStorageProvider';

export default function Users() {
  return (
    <div className="App">
      <SessionStorageProvider>
        <Header />
        <div>Users</div>
        <Footer />
      </SessionStorageProvider>
    </div>
  );
}