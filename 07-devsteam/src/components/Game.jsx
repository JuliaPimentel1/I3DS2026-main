import jogo from "../assets/cs.png"

function Game(){

    return(
        <div className="game">

            <img src={jogo}/>

            <div className="game-info">

                <h2>COUNTER STRIKE: GLOBAL OFFENSIVE</h2>

                <p>
                    Ação, Estratégia, Multijogador
                </p>

                <h3>R$99,90</h3>

            </div>

            <button>
                ADICIONAR AO CARRINHO
            </button>

        </div>
    )

}

export default Game