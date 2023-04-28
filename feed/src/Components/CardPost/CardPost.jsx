import Button from '../Button/Button';
import './CardPost.css';

function CardPost(post){
    return(
        <div className='card'>
            <img src={post.photo} alt="foto da pessoa usuária"/>
            <div className='postTxtButtonContainer'>
                <h2>{post.titulo}</h2>
                <p>{post.txt}</p>
                <div className='postButtonContainer'>
                    <Button txt='Curtir' />
                    <Button txt='Compartilhar' />
                </div>
            </div>            
        </div>
    )
};

export default CardPost;