import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header>
            <nav className="flex justify-between items-center w-full bg-gray-950 p-4">
                <Link to="/" className="font-bold text-xl shadow-lg transition-transform transform hover:scale-105">Portfólio</Link>
                
                
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
                        
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
                
                
                <div className="hidden md:flex mr-10 gap-10 text-center text-base">
                    <Link to="/sobre" className={`shadow-lg transition-transform transform hover:scale-105 hover:text-blue-500 ${location.pathname === '/sobre' ? 'text-blue-500 font-bold' : 'text-gray-500'}`}>
                        SOBRE MIM
                    </Link>
                    <Link to="/habilidades" className={`shadow-lg transition-transform transform hover:scale-105 hover:text-blue-500 ${location.pathname === '/habilidades' ? 'text-blue-500 font-bold' : 'text-gray-500'}`}>
                        HABILIDADES
                    </Link>
                    <Link to="/projects" className={`shadow-lg transition-transform transform hover:scale-105 hover:text-blue-500 ${location.pathname === '/projects' ? 'text-blue-500 font-bold' : 'text-gray-500'}`}>
                        PROJETOS
                    </Link>
                    <Link to="/contato" className={`shadow-lg transition-transform transform hover:scale-105 hover:text-blue-500 ${location.pathname === '/contato' ? 'text-blue-500 font-bold' : 'text-gray-500'}`}>
                        CONTATO
                    </Link>
                </div>
            </nav>

            <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden bg-gray-800 p-4 md:hidden`}>
                <Link to="/sobre" className={`block text-white py-2 hover:text-blue-500 ${location.pathname === '/sobre' ? 'font-bold' : ''}`}>
                    SOBRE MIM
                </Link>
                <Link to="/habilidades" className={`block text-white py-2 hover:text-blue-500 ${location.pathname === '/habilidades' ? 'font-bold' : ''}`}>
                    HABILIDADES
                </Link>
                <Link to="/projetos" className={`block text-white py-2 hover:text-blue-500 ${location.pathname === '/projetos' ? 'font-bold' : ''}`}>
                    PROJETOS
                </Link>
                <Link to="/contato" className={`block text-white py-2 hover:text-blue-500 ${location.pathname === '/contato' ? 'font-bold' : ''}`}>
                    CONTATO
                </Link>
            </div>
        </header>
    );
};

export default Header;
