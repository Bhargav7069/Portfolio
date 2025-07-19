
import './App.css'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import Journey from './Components/Journey/Journey'
import Skills from './Components/Skills/Skills'

function App() {

  return (
    <>
     <Header/>
     <main className="main">
      <Home/>
      <About/>
      <Skills/>
      <Journey/>
      <Contact/>
      <Footer/>
     </main>
    </>
  )
}

export default App
