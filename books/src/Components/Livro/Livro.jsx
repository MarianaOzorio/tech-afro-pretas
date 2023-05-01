import './Livro.css';

function Livro(book){
    return(
        <div className='bookCover'>
            <img src={book.cover} alt="capa do livro" />
        </div>
    )
};

export default Livro;