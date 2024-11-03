import ProjectCardsProps from "../../types/projectCardProps";
import "./styles.css";

const ProjectCard = (props: ProjectCardsProps) => {
	return (
		<div className="project-card">
			<h3>{props.projectName}</h3>
			<img
				style={{ borderRadius: 10, width: 250, alignSelf: "center" }}
				src={props.projectImage}
				alt="This should be a SS:("
			/>
			<p className="project-card-descr">{props.projectDesc}</p>
			<p className="project-card-tech">{props.projectTechs}</p>
			<p className="project-card-link">
				Source Code in{" "}
				<a href={props.githubURL} className="tech-detail">
					Github
				</a>
			</p>
		</div>
	);
};

export default ProjectCard;
