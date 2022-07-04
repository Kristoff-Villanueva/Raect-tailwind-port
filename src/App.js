import Home from "./components/Home";
import NavBar from "./components/NavBar";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Passion from "./components/Passion";

function App() {
	return (
		<div>
			<NavBar />
			<Home />
			<About />
			<Passion />
			<SocialLinks />
		</div>
	);
}

export default App;
