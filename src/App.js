import './App.css';
import Cards from './components/Cards';
import Navbar from "./components/NavBar/Navbar.jsx";
import Main from "./components/Main/Main.jsx"
import Skills from "./components/Skills/Skills.jsx"

import Footer from './components/Footer/Footer';
import FormValidation from './components/Formulario/Formulario';



function App() {
  return (
    <div className="App">
      <Navbar />
    <Main />
        <Cards />
        <h1>SKILLS</h1>
        <Skills />
       <FormValidation />
       
        <Footer />
      
    </div>
  );
}

export default App;
