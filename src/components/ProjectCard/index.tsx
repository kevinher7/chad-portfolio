import firstPongSS from "../../assets/images/screenshots/first_pong.png";
import "./styles.css";

const ProjectCard = () => {
	return (
		<div className="project-card">
			<h3>First Pong</h3>
			<img src={firstPongSS} alt="" />
			<p className="project-card-descr">
				Pong Replica witten in <span className="tech-detail">C++</span>{" "}
				from scratch
			</p>
			<p className="project-card-tech">CMake, SDL2</p>
			<p className="project-card-link">
				Source Code in <span className="tech-detail">Github</span>
			</p>
		</div>
	);
};

export default ProjectCard;
