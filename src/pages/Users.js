import '../App.css';
import '../static/styles/Users.css'
import Header from '../components/Header';
import Footer from '../components/Footer';
import { SessionStorageProvider } from '../components/SessionStorageProvider';
import UserContent from '../components/UserContent';

export default function Users() {
  return (
    <div className="App">
      <SessionStorageProvider>
        <Header />
        <UserContent />
        <Footer />
      </SessionStorageProvider>
    </div>
  );
}