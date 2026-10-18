import { useTheme } from './hooks/useTheme'
import TopBar from './components/TopBar'
import Header from './components/Header'
import Hero from './components/Hero'
import PlatformPreview from './components/PlatformPreview'
import About from './components/About'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Team from './components/Team'

export default function App() {
  const { isDark, toggleTheme } = useTheme()

  return (
    <>
      <TopBar />

      <div className="relative overflow-x-hidden min-h-screen">
        <Header isDark={isDark} onToggleTheme={toggleTheme} />

        <main className="relative z-10">
          <Hero />
          <PlatformPreview />
        </main>
      </div>

      <div>
        <About />
        <Features />
        <HowItWorks />
        <Team />
      </div>
    </>
  )
}
