import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WebsiteCards from './components/WebsiteCards'
import './index.css'

function App() {
  return (
    <div className="w-full min-h-screen">
      <div className="education-notice">for educational purposes only</div>
      <Navbar />
      <Hero />
      <WebsiteCards />
    </div>
  )
}

export default App
