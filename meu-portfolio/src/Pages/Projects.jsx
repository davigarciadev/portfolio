import ProjectCard from '../components/ProjectCard';
import InsiderE from './../assets/insiderE.png'
import Formulario from './../assets/formulario.png'
import Airbnb from './../assets/Airbnb.png'

const projects = [
  { 
    id: 1, 
    title: "Airbnb", 
    description: "Este projeto é um clone da interface do Airbnb, criado para replicar a aparência e o layout do famoso site de hospedagens. O objetivo é proporcionar uma experiência visual semelhante, destacando as funcionalidades e o design do original.", 
    githubUrl: 'https://airbnb-cp1.vercel.app/',
    imageUrl: Airbnb
  },
  { 
    id: 2, 
    title: "Formulario", 
    description: "O projeto consiste em um formulário simples, desenvolvido com HTML e CSS, que apresenta uma interface bonita e responsiva. O design foi cuidadosamente elaborado para proporcionar uma experiência de usuário intuitiva e agradável.", 
    githubUrl: 'https://davigarciadev.github.io/Formulario/',
    imageUrl: Formulario
  },
  { 
    id: 3, 
    title: "InsiderE", 
    description: "InsiderE é um projeto inovador desenvolvido para aumentar a visibilidade da Fórmula E, a emocionante competição de automobilismo elétrico. O objetivo principal é engajar e expandir o público da Fórmula E por meio de interações gamificadas e informações detalhadas sobre os pilotos. ", 
    githubUrl: 'https://insider-e.vercel.app/',
    imageUrl: InsiderE 
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen p-10 flex flex-col p-10">
      <h1 className="text-4xl font-bold mb-4">Meus Projetos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
