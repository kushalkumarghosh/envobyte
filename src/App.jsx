import './App.css'
import Contact from './components/Contact'
import FAQSection from './components/FAQSection'
import Footer from './components/Footer'
import GetAnswers from './components/GetAnswers'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import OurProcess from './components/OurProcess'
import PreviousWork from './components/PreviousWork'
import Reviews from './components/Reviews'
import Services from './components/Services'
import TeamMembers from './components/TeamMembers'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <GetAnswers />
      <PreviousWork />
      <OurProcess />
      <Reviews />
      <TeamMembers />
      <FAQSection />
      <Contact />
      <Footer />
    </>
  )
}

export default App
