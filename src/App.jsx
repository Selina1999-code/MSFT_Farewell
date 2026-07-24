import Background from './components/Background.jsx'
import ScrollProgress from './components/ScrollProgress.jsx'
import Hero from './components/Hero.jsx'
import PeopleGalaxy from './components/PeopleGalaxy.jsx'
import Timeline from './components/Timeline.jsx'
import Takeaways from './components/Takeaways.jsx'
import Closing from './components/Closing.jsx'
import './styles/components.css'

export default function App() {
  return (
    <>
      <a href="#constellation" className="visually-hidden">
        Skip to main content
      </a>
      <ScrollProgress />
      <Background />
      <main>
        <Hero />
        <PeopleGalaxy />
        <Timeline />
        <Takeaways />
        <Closing />
      </main>
    </>
  )
}
