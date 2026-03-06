import GithubLanguages from "./components/GitHubLanguages";
import Header from "./components/Header";
import Menu from "./components/Menu";
 


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
        <Menu />
        <GithubLanguages/>
      </main>
    </>
  )
}

export default App;