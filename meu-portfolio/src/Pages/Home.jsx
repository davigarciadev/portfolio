import { Link } from "react-router-dom";
import Foto from "./../assets/foto-perfil.jpeg";

const Home = () => {
    return (
        <section className="flex flex-col items-center justify-center h-screen">
            <div className="flex flex-col md:flex-row items-center w-full max-w-4xl mx-auto p-4">
                <div className="flex flex-col justify-center h-96 gap-4 text-center md:text-left md:w-1/2">
                    <p className="text-yellow-400 text-lg">Olá, Bem-vindo</p>
                    <h1 className="text-5xl font-bold">Eu sou o Davi</h1>
                    <p className="text-gray-500 text-lg">Software Engineer</p>
                    
                    <Link to="/sobre" className="transition-transform transform hover:scale-105 hover:shadow-xl duration-300 w-40 p-2 rounded-lg bg-yellow-400 text-black flex justify-center items-center text-lg">
                        Sobre mim
                    </Link>
                </div>
                <div className="flex justify-center md:w-1/2">
                    <img className="rounded-full h-96" src={Foto} alt="Foto-Perfil" />
                </div>
            </div>
        </section>
    );
};

export default Home;
