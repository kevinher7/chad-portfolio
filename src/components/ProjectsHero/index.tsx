import ProjectCard from "../ProjectCard";
import firstPongSS from "../../assets/images/screenshots/first_pong.png";
import "./styles.css";
import ProjectsHeroProps from "../../types/ProjectsHeroProps";

const ProjectsHero = (props: ProjectsHeroProps) => {
	return (
		<section className="projects-hero">
			<h2 className="project-hero-title">{props.heroTitle}</h2>
			<div className="project-cards">
				<ProjectCard
					projectName="First Pong"
					projectImage={firstPongSS}
					projectDesc="Pong Replica witten in C++ from scratch"
					projectTechs="C++ with CMake and SDL2"
					githubURL="a"
				/>
				{/* <ProjectCard />
				<ProjectCard />
				<ProjectCard /> */}
			</div>
		</section>
	);
};

export default ProjectsHero;
