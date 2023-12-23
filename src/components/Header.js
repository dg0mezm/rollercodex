import '../App.css';
import { useSessionStorageContext } from '../SessionStorageProvider';

export default function Header() {
  const { saveToSessionStorage } = useSessionStorageContext();
  
  const handleButton = (e) => {
    saveToSessionStorage(document.querySelector('#profileUrl').value);
  }

  return (
    <div className="Header">
        <div className='Logo'>
            <h1>RollerCodex</h1>
        </div>
        <div className='InputProfile'>
            <input id='profileUrl' type='text' placeholder='Introduzca URL de perfil público...'></input>
            <button onClick={handleButton}>Enviar</button>
        </div>
    </div>
  );
}
