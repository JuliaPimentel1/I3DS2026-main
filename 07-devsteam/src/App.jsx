import "./App.css"
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import Game from "./components/Game"
import jogo1 from "./assets/jogo1.png"
import jogo2 from "./assets/jogo2.png"
import jogo3 from "./assets/jogo3.png"

function App() {

  return(
    <div>

      <Navbar />

      <h1 className="titulo">
        PROMOÇÕES
      </h1>

      <div className="cards">

        <Card img={jogo1}/>
        <Card img={jogo2}/>
        <Card img={jogo3}/>
      </div>

      <h1 className="titulo">
        OUTROS JOGOS
      </h1>

      <div className="games">

        <Game />
        <Game />
        <Game />
        <Game />

      </div>

    </div>
  )

}

export default App