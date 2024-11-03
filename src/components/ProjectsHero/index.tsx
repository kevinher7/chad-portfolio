import ProjectCard from "../ProjectCard";
import "./styles.css";

const ProjectsHero = () => {
	return (
		<section>
			<h2 className="project-hero-title">Project Hero</h2>
			<div className="project-cards">
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
			</div>
		</section>
	);
};

export default ProjectsHero;
