import { Link } from "react-router-dom";
import Avatar from './../assets/avatar.webp';

const Sobre = () => {
    return (
        <section className="flex flex-col md:flex-row items-center justify-center gap-10 p-4 bg-gray-900 min-h-screen">
            <div className="flex justify-center mb-10 md:mb-0">
                <img src={Avatar} alt="Foto-Perfil" className="h-48 md:h-96 rounded-full shadow-lg" />
            </div>
            <div className="flex flex-col gap-8 max-w-xl text-center md:text-left">
                <h1 className="text-5xl font-bold text-yellow-400">Sobre mim</h1>
                <p className="text-gray-300 text-lg">
                    Sou estudante de Engenharia de Software na FIAP e sou apaixonado por tecnologia. 
                    Estou sempre em busca de novos desafios e aprendizados na área de desenvolvimento 
                    de software, com foco em criar soluções inovadoras. 
                    Adoro explorar novas ferramentas e linguagens de programação, e estou sempre 
                    atualizado nas tendências do mercado. 
                    Meu objetivo é transformar ideias em realidade e contribuir para projetos que impactem 
                    positivamente a vida das pessoas.
                </p>
                <div className="flex justify-center md:justify-start">
                    <Link to="/contato" className="w-40 p-2 rounded-lg bg-yellow-400 text-black text-lg hover:bg-yellow-500 transition duration-200 flex justify-center items-center">
                        Contate-me
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Sobre;
