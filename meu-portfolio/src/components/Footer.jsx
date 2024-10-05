import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-950 text-gray-300 p-6 mt-10">
            <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-center md:text-left mb-4 md:mb-0">
                    &copy; {new Date().getFullYear()} Davi - Todos os direitos reservados.
                </p>
                <div className="flex gap-6">
                    <a 
                        href="https://github.com/davigarciadev" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-yellow-400 transition duration-300"
                    >
                        <FaGithub className="text-3xl hover:scale-110 transform transition duration-300" />
                    </a>
                    <a 
                        href="https://www.linkedin.com/in/davi-garcia-8aa255237?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-yellow-400 transition duration-300"
                    >
                        <FaLinkedin className="text-3xl hover:scale-110 transform transition duration-300" />
                    </a>
                    <a 
                        href="https://www.instagram.com/dg_reisss/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-yellow-400 transition duration-300"
                    >
                        <FaInstagram className="text-3xl hover:scale-110 transform transition duration-300" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
