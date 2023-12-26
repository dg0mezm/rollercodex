import '../App.css';

export default function Navbar() {

    return (
        <nav className='navbar'>
            <div className='container'>
                <div className='nav-elements'>
                    <ul>
                        <li>
                            <a href="/">Inicio</a>
                        </li>
                        <li>
                            <a href="/miners">Mineros</a>
                        </li>
                        <li>
                            <a href="/users">Usuarios</a>
                        </li>
                        <li>
                            <a href="/how-to-use">Cómo usar</a>
                        </li>
                        <li>
                            <a href="/calculator">Calculadora</a>
                        </li>
                        <li>
                            <a href="/contact">Contacto</a>
                        </li>
                        <li>
                            <a href="/faq">FAQ</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}