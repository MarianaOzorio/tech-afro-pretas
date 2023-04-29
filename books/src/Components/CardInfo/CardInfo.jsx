import './CardInfo.css';

function CardInfo(info){
    return(
        <div className='card'>
            <p>{info.number}</p>
            <p>{info.txt}</p>
        </div>
    )
};

export default CardInfo;