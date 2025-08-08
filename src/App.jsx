import gsap from 'gsap';
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Mocktails from "./components/Mocktails.jsx";
const App = () => {
    return (
        <main>
            <Navbar />
            <Hero />
            <Mocktails />
            <About />
        </main>
    );
};

export default App;
