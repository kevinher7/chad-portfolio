import Introduction from "../../components/Introduction";
import KevinStats from "../../components/KevinStats";
import ProjectsHero from "../../components/ProjectsHero";
import "./styles.css";

const LandingPage = () => {
	return (
		<>
			<header className="landing-header">
				<KevinStats />
				<Introduction />
			</header>
			<main className="landing-main">
				<ProjectsHero heroTitle="Game Dev🕹️" />
				<ProjectsHero heroTitle="WebDev 🗿" />
				<ProjectsHero heroTitle="AI 🗿" />
			</main>
		</>
	);
};

export default LandingPage;
