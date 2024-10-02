import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <nav className="flex justify-between w-full bg-gray-950">
                <div className="flex w-full m-4">
                    <ul className="flex w-full justify-around items-center">
                        <h1 className="flex font-bold text-xl">Portfólio</h1>
                        <div className="flex mr-10 gap-10 text-center text-base ">
                            <li>SOBRE MIM</li>
                            <li className="text-gray-500">HABILIDADES</li>
                            <li className="text-gray-500">PROJETOS</li>
                            <li className="text-gray-500">CONTATO</li>
                        </div>
                    </ul>
                </div>
            </nav>

            <section className="flex w-full justify-center">
                <div className="w-full flex justify-center h-96 items-center  flex-col gap-8">
                    <p>Olá, Bem-bindo</p>
                    <h1>Eu sou o Davi</h1>
                    <p>Software Engineer</p>
                    <button ><a href="">Entre em contato</a></button>
                    <img src="" alt="" />
                </div>
            </section>
        </header>
    )
}



export default Header