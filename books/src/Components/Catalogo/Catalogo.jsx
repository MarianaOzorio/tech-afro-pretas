import './Catalogo.css';

import Livro from '../Livro/Livro';
import Avaliacao from '../Avaliacao/Avaliacao';

import cover1 from '../Livro/Images/livro-1.png';
import cover2 from '../Livro/Images/livro-2.png';
import cover3 from '../Livro/Images/livro-3.png';
import cover4 from '../Livro/Images/livro-4.png';
import cover5 from '../Livro/Images/livro-5.png';
import cover6 from '../Livro/Images/livro-6.png';
import cover7 from '../Livro/Images/livro-7.png';
import cover8 from '../Livro/Images/livro-8.png';
import cover9 from '../Livro/Images/livro-9.png';
import cover10 from '../Livro/Images/livro-10.png';

function Catalogo(){
    return(
        <div className='catalogo'>
            <div className='livroAvaliacao'>
                <Livro 
                    cover={cover1}
                />
                <Avaliacao />
            </div>
            <div className='livroAvaliacao'>
                <Livro 
                    cover={cover2}
                />
                <Avaliacao />
            </div>
            <div className='livroAvaliacao'>
                <Livro 
                    cover={cover3}
                />
                <Avaliacao />
            </div>
            <div className='livroAvaliacao'>
                <Livro 
                    cover={cover4}
                />
                <Avaliacao />
            </div>
            <div className='livroAvaliacao'>
                <Livro 
                    cover={cover5}
                />
                <Avaliacao />
            </div>
            <div className='livroAvaliacao'>
                <Livro 
                    cover={cover6}
                />
                <Avaliacao />
            </div>
            <div className='livroAvaliacao'>
                <Livro 
                    cover={cover7}
                />
                <Avaliacao />
            </div>
            <div className='livroAvaliacao'>
                <Livro 
                    cover={cover8}
                />
                <Avaliacao />
            </div>
            <div className='livroAvaliacao'>
                <Livro 
                    cover={cover9}
                />
                <Avaliacao />
            </div>
            <div className='livroAvaliacao'>
                <Livro 
                    cover={cover10}
                />
                <Avaliacao />
            </div>  
            <div className='livroAvaliacao'>
                <Livro 
                    cover={cover1}
                />
                <Avaliacao />
            </div>
            <div className='livroAvaliacao'>
                <Livro 
                    cover={cover2}
                />
                <Avaliacao />
            </div>       
        </div>
    )
};

export default Catalogo;