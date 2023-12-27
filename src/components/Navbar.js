import { Link } from "react-router-dom";
import '../App.css';

export default function Navbar() {

    return (
        <nav className='navbar'>
            <div className='container'>
                <div className='nav-elements'>
                    <ul>
                        <li>
                            <Link to="/">Inicio</Link>
                        </li>
                        <li>
                            <Link to="/miners">Mineros</Link>
                        </li>
                        <li>
                            <Link to="/users">Usuarios</Link>
                        </li>
                        <li>
                            <Link to="/how-to-use">Cómo usar</Link>
                        </li>
                        <li>
                            <Link to="/calculator">Calculadora</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contacto</Link>
                        </li>
                        <li>
                            <Link to="/faq">FAQ</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}