import { Link } from "react-router-dom";
import HTML from './../assets/html-icon.png'
import PYTHON from './../assets/python-icone.webp'
import C from './../assets/c-icon.png'
const Habilidades = () => {
    return (
        <section>
            <div className="flex flex-col m-10 justify-center gap-20" style={{ height: 600 }}>
                <div className="flex flex-start " style={{marginLeft: 350}}>
                    <h1 className="w-200 text-5xl font-bold items-start">Habilidades</h1>
                </div>
                <div className="w-full flex flex-row gap-10  justify-center">
                    <div className="flex flex-col gap-4 items-center rounded-2xl text-center p-2" style={{ backgroundColor: '#020617', width: 350, height: 300 }}>

                        <img className="w-10 m-2" src={HTML} alt="icon-html" />
                        <h1 className="text-2xl">Front-end</h1>
                        <p className="text-gray-500" style={{lineHeight: 1.5}}>Tenho experiência em desenvolver interfaces de usuário com HTML, CSS e JavaScript. <br /> Gosto de criar layouts responsivos e interativos, sempre focado na melhor experiência para o usuário.</p>

                    </div>
                    <div className="flex flex-col gap-4 items-center rounded-2xl text-center p-2" style={{ backgroundColor: '#020617', width: 350, height: 300 }}>

                        <img className="w-10 m-2" src={PYTHON} alt="python-icon" />
                        <h1 className="text-2xl">Python</h1>
                        <p className="text-gray-500" style={{lineHeight: 1.5}}>Utilizo Python para diversas tarefas, como automação e análise de dados. É uma linguagem que me dá muita flexibilidade para criar desde scripts simples até aplicações mais elaboradas.</p>

                    </div>
                    <div className="flex flex-col gap-4 items-center rounded-2xl text-center p-2" style={{ backgroundColor: '#020617', width: 350, height: 300 }}>

                        <img className="w-10 m-2" src={C} alt="c++ icon" />
                        <h1 className="text-2xl">C++</h1>
                        <p className="text-gray-500" style={{lineHeight: 1.5}}>Uso C++ para projetos que exigem desempenho e controle detalhado dos recursos do sistema. É uma linguagem que me desafia a pensar de forma otimizada, ideal para desenvolvimento de sistemas e jogos.</p>

                    </div>
                </div>

            </div>
        </section>
    )
}

export default Habilidades

