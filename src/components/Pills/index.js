import React from 'react';
import './style.scss'
import PropTypes from 'prop-types';

const Pills = ({ local, onClick, selected }) => {
    return(
        <div onClick={onClick} className={`pills__container ${ selected ? 
        'pills__container--active' : ''}`}>  {/**Se esse pill for selecionado ele vai adicionar essa class e vai mudar de cor */}
            { local } {/*//Testo que é o nome do local*/}
        </div>
    )
}

Pills.propType = {
    local: PropTypes.string.isRequired, //Texto recebido
    onClick: PropTypes.func,
    selected: PropTypes.bool
}

export default Pills