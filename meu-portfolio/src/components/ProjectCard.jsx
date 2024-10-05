import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
    return (
        <div className="p-4 border rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
            <Link to={`/projects/${project.id}`}>
                <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                />
                <h2 className="text-xl font-semibold mt-2">{project.title}</h2>
            </Link>
            <p className="text-gray-600">{project.description}</p>
        </div>
    );
};

export default ProjectCard;
