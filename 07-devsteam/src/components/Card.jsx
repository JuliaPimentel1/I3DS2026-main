import jogo1 from "../assets/jogo1.png"
import jogo2 from "../assets/jogo2.png"
import jogo3 from "../assets/jogo3.png"

function Card(props){

    return(
        <div className="card">

            <img src={props.img} width="100%"/>

            <h2>OFERTA EXCLUSIVA</h2>

            <div className="preco">

                <h3>-50%</h3>

                <div>

                    <p>R$199,90</p>

                    <h4>R$99,90</h4>

                </div>

            </div>

            <button>
                ADICIONAR AO CARRINHO
            </button>

        </div>
    )

}

export default Card