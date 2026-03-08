import GithubLanguages from "./components/GitHubLanguages";
import Header from "./components/Header";
import TechJourney from "./components/TechJourney";
import Sobre from "./components/Sobre";
import Contato from "./components/Contatos";
import Footer from "./components/Footer";
 


function App() {
  return (
    <>
      <Header 
        nome="JOHN LIMA"
        sobre="Sobre"
        projeto="Projetos"
        contato="Contato" 
        /> 

      <main>
        <TechJourney />
        <Sobre/>
        <GithubLanguages/>
        <Contato/>
        <Footer/>
      </main>
    </>
  )
}

export default App;