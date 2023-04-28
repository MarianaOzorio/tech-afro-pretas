import Input from '../Input/Input';
import Button from '../Button/Button';
import './Forms.css';

function Forms(){
    return(
        <forms>
            <Input txt='O que estou pensando...' />
            <Button txt='Publicar' />
        </forms>        
    )
};

export default Forms;