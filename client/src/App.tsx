import Intro from './views/Intro/intro'
import Links from './views/Links/links'
import Projects from './views/Projects/projects'
import About from './views/About/about'
import { ParallaxProvider } from 'react-scroll-parallax'
import './App.css'

function App() {
    return (
        <ParallaxProvider>
            <Intro />
            <Projects />
            <Links />
            <About />
        </ParallaxProvider>
    )
}

export default App
