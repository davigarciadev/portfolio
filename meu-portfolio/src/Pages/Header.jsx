import { Link, useLocation } from 'react-router-dom';
import Foto from "./../assets/foto-perfil.jpeg";

const Header = () => {
    const location = useLocation();

    return (
        <header>
            <nav className="flex justify-between w-full bg-gray-950">
                <div className="flex w-full m-4">
                    <ul className="flex w-full justify-around items-center">
                        <Link to="/" className="flex font-bold text-xl">Portfólio</Link>
                        <div className="flex mr-10 gap-10 text-center text-base">
                            <Link to="/sobre" className={`hover:text-blue-500 ${location.pathname === '/sobre' ? 'text-blue-500 font-bold' : 'text-gray-500'}`}>
                                SOBRE MIM
                            </Link>
                            <Link to="/habilidades" className={`hover:text-blue-500 ${location.pathname === '/habilidades' ? 'text-blue-500 font-bold' : 'text-gray-500'}`}>
                                HABILIDADES
                            </Link>
                            <Link to="/projetos" className={`hover:text-blue-500 ${location.pathname === '/projetos' ? 'text-blue-500 font-bold' : 'text-gray-500'}`}>
                                PROJETOS
                            </Link>
                            <li className={`text-gray-500 ${location.pathname === '/contato' ? 'text-blue-500 font-bold' : ''}`}>
                                CONTATO
                            </li>
                        </div>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;
