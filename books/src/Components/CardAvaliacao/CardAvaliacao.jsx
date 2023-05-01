import Avaliacao from '../Avaliacao/Avaliacao';

import './CardAvaliacao.css';

function CardAvaliacao(review){
    return(
        <div className='cardReview'>
            <div className='cardReviewImg'>
                <img src={review.cover} alt="capa do livro" />
                <Avaliacao />
            </div>
            <div>
                <p className='titleReview'>{review.title}</p>
                <p>{review.txt}</p>
            </div>
        </div>
    )
};

export default CardAvaliacao;