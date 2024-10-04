import { Link } from "react-router-dom";
import Foto from "./../assets/foto-perfil.jpeg"; // ajuste o caminho se necessário

const Home = () => {
    return (
        <section className="flex w-full justify-center">
            <div className="flex mt-40">
                <div className="w-full flex justify-center h-96 flex-col gap-8">
                    <p className="text-yellow-400 text-lg">Olá, Bem-vindo</p>
                    <h1 className="text-5xl font-bold">Eu sou o Davi</h1>
                    <p className="text-gray-500 text-lg">Software Engineer</p>
                    <button className="w-40 p-2 rounded-lg bg-yellow-400" style={{ width: 200, height: 50 }}>
                        <Link to="/sobre" className="text-black text-lg">Sobre mim</Link>
                    </button>
                </div>
                <div>
                    <img className="rounded-full h-96" style={{ width: 1000, height: 540 }} src={Foto} alt="Foto-Perfil" />
                </div>
            </div>
        </section>
    );
};

export default Home;
