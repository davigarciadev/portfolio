import { useParams } from 'react-router-dom';

const projectData = {
  1: { title: "Projeto 1", description: "Detalhes do Projeto 1", techStack: "React, Node.js" },
  2: { title: "Projeto 2", description: "Detalhes do Projeto 2", techStack: "Vue, Express" },
  3: { title: "Projeto 3", description: "Detalhes do Projeto 3", techStack: "Angular, Django" },
};

const ProjectDetail = () => {
  const { id } = useParams(); 
  const project = projectData[id]; 

  if (!project) {
    return <h2>Projeto não encontrado!</h2>; 
  }

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold">{project.title}</h1>
      <p className="mt-4">{project.description}</p>
      <p className="mt-2"><strong>Tecnologias:</strong> {project.techStack}</p>
    </div>
  );
};

export default ProjectDetail;
