import { Link } from "react-router-dom";
import HTML from './../assets/html-icon.png';
import PYTHON from './../assets/python-icone.webp';
import C from './../assets/c-icon.png';

const Habilidades = () => {
    return (
        <section className="bg-gray-900 p-10">
            <div className="flex flex-col justify-center items-center gap-10">
                <h1 className="text-5xl font-bold text-yellow-400">Habilidades</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                    <div className="flex flex-col gap-4 items-center rounded-2xl text-center p-4 bg-gray-800 shadow-lg transition-transform transform hover:scale-105">
                        <img className="w-20 m-2" src={HTML} alt="HTML icon" />
                        <h2 className="text-2xl font-semibold">Front-end</h2>
                        <p className="text-gray-300 leading-snug">Tenho experiência em desenvolver interfaces de usuário com HTML, CSS e JavaScript. Gosto de criar layouts responsivos e interativos, sempre focado na melhor experiência para o usuário.</p>
                    </div>
                    <div className="flex flex-col gap-4 items-center rounded-2xl text-center p-4 bg-gray-800 shadow-lg transition-transform transform hover:scale-105">
                        <img className="w-20 m-2" src={PYTHON} alt="Python icon" />
                        <h2 className="text-2xl font-semibold">Python</h2>
                        <p className="text-gray-300 leading-snug">Utilizo Python para diversas tarefas, como automação e análise de dados. É uma linguagem que me dá muita flexibilidade para criar desde scripts simples até aplicações mais elaboradas.</p>
                    </div>
                    <div className="flex flex-col gap-4 items-center rounded-2xl text-center p-4 bg-gray-800 shadow-lg transition-transform transform hover:scale-105">
                        <img className="w-20 m-2" src={C} alt="C++ icon" />
                        <h2 className="text-2xl font-semibold">C++</h2>
                        <p className="text-gray-300 leading-snug">Uso C++ para projetos que exigem desempenho e controle detalhado dos recursos do sistema. É uma linguagem que me desafia a pensar de forma otimizada, ideal para desenvolvimento de sistemas e jogos.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Habilidades;
