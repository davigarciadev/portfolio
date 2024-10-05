import { useParams, useNavigate, Link } from 'react-router-dom';
import InsiderE from './../assets/insiderE.png';
import Formulario from './../assets/formulario.png';
import Airbnb from './../assets/Airbnb.png';

const projectData = {
  1: {
    title: "Airbnb",
    description: "Este projeto é um clone da interface do Airbnb, criado para replicar a aparência e o layout do famoso site de hospedagens. O objetivo é proporcionar uma experiência visual semelhante, destacando as funcionalidades e o design do original.",
    techStack: "React, Vite",
    imageUrl: Airbnb,
    githubUrl: 'https://airbnb-cp1.vercel.app/',
  },
  2: {
    title: "Formulario",
    description: "O projeto consiste em um formulário simples, desenvolvido com HTML e CSS, que apresenta uma interface bonita e responsiva. O design foi cuidadosamente elaborado para proporcionar uma experiência de usuário intuitiva e agradável.",
    techStack: "HTML, CSS",
    imageUrl: Formulario,
    githubUrl: 'https://davigarciadev.github.io/Formulario/',
  },
  3: {
    title: "InsiderE",
    description: "InsiderE é um projeto inovador desenvolvido para aumentar a visibilidade da Fórmula E, a emocionante competição de automobilismo elétrico. O objetivo principal é engajar e expandir o público da Fórmula E por meio de interações gamificadas e informações detalhadas sobre os pilotos.",
    techStack: "React, Node.js",
    imageUrl: InsiderE,
    githubUrl: 'https://insider-e.vercel.app/',
  },
};

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectData[id];

  if (!project) {
    return <h2 className="text-red-500 text-2xl">Projeto não encontrado!</h2>;
  }

  return (
    <div className="min-h-screen bg-gray-900 gap-2 flex flex-col items-center p-10">
      <button
        onClick={() => navigate('/projects')}
        className="mb-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-lg transition duration-300 font-semibold text-lg transform hover:scale-105"
      >
        Voltar para Projetos
      </button>
      <h1 className="text-5xl font-extrabold text-gray-100 mb-6 text-center border-b-2 border-blue-500 pb-2">{project.title}</h1>
      <Link to={project.githubUrl} target="_blank" rel="noopener noreferrer">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="h-96 object-cover rounded-lg mt-4 transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer shadow-lg"
        />
      </Link>
      <div className='flex justify-center items-center mt-6'>
        <p className="text-gray-200 text-lg text-center px-6 py-4 bg-gray-800 rounded-lg shadow-md">
          {project.description}
        </p>
      </div>
      <p className="mt-4 text-gray-400 text-lg"><strong className='text-yellow-400'>Tecnologias:</strong> {project.techStack}</p>
    </div>
  );
};

export default ProjectDetail;
