import gsap from 'gsap';
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
const App = () => {
    return (
        <main>
            <Navbar />
            <Hero />
        </main>
    );
};

export default App;
