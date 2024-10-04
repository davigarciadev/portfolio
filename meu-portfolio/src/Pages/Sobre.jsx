import { Link } from "react-router-dom";
import Foto from './../assets/foto-perfil.jpeg'
import Avatar from './../assets/avatar.webp'

const Sobre = () => {
    return (
        <section className="w-full h-max flex items-center justify-center gap-10" style={{ backgroundColor: '#020617' }}>
            <div>
                <img src={Avatar} alt="Foto-Perfil" className=" h-96 " style={{ width: 600, height: 560 }} />
            </div>
            <div className="flex items-center m-14 " style={{height: 760}}>
                <div className="flex flex-col gap-12">
                    <div>
                        <h1 className="text-5xl	font-bold	">Sobre mim</h1>
                    </div>
                    <div className="flex flex-col gap-12">
                        <p className="text-gray-500 text-xl">Sou estudante de Engenharia de Software na FIAP e sou apaixonado por tecnologia. <br />
                            Estou sempre em busca de novos desafios e aprendizados na área de desenvolvimento <br /> de software, com foco em criar soluções inovadoras. <br />
                            Adoro explorar novas ferramentas e linguagens de programação, e estou sempre  <br /> atualizado nas tendências do mercado. <br />
                            Meu objetivo é transformar ideias em realidade e contribuir para projetos que impactem  <br />positivamente a vida das pessoas.</p>
                        <div>
                            <button className="w-40 p-2 rounded-lg bg-yellow-400" style={{ width: 200, height: 50 }}><a href="" className="text-black text-lg">Contate-me</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}




export default Sobre