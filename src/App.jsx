import gsap from 'gsap';
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Mocktails from "./components/Mocktails.jsx";
import About from "./components/About.jsx";
import MenuPage from "./components/MenuPage.jsx";
import Contact from "./components/Contact.jsx";
const App = () => {
    return (
        <main>
            <Navbar />
            <Home />
            <Mocktails />
            <About />
            <MenuPage/>
            <Contact/>
        </main>
    );
};

export default App;
