import { useTheme } from '../hooks/useTheme'
import TopBar from '../components/TopBar'
import Header from '../components/Header'
import Hero from '../components/Hero'
import PlatformPreview from '../components/PlatformPreview'
import About from '../components/About'
import Features from '../components/Features'
import HowItWorks from '../components/HowItWorks'
import Team from '../components/Team'
import Pricing from '../components/Pricing'
import Contact from '../components/Contact'
import CtaBanner from '../components/CtaBanner'
import Footer from '../components/Footer'

export default function LandingPage({ isDark: propIsDark, onToggleTheme: propToggleTheme }) {
  const theme = useTheme()
  const isDark = propIsDark !== undefined ? propIsDark : theme.isDark
  const toggleTheme = propToggleTheme || theme.toggleTheme

  return (
    <div className="min-h-screen bg-white text-[#01203d] dark:bg-[#002649] dark:text-white transition-colors duration-300">
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
        <Pricing />
        <Contact />
        <CtaBanner />
      </div>

      <Footer />
    </div>
  )
}
