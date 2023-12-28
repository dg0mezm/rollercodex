import '../App.css';
import '../static/styles/Users.css'
import Header from '../components/Header';
import Footer from '../components/Footer';
import { SessionStorageProvider } from '../components/SessionStorageProvider';

export default function Users() {
  return (
    <div className="App">
      <SessionStorageProvider>
        <Header />
        <div className='content-container'>Users</div>
        <Footer />
      </SessionStorageProvider>
    </div>
  );
}