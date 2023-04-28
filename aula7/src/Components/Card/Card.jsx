import Button from '../Button/Button';
import './Card.css';

function Card(produto){
    return(
        <div className="cardProduto">
            <img src={produto.imagem} alt="imagem do produto" />
            <h2>{produto.nome}</h2>            
            <p>{produto.descricao}</p>
            <Button btn='pedir agora'/>
        </div>
    )
}

export default Card;