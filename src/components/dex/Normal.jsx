import React from 'react'
import Fundo from '../../assets/img/fundo.jpg'


function NormalPage(props) {
    return (
        <React.Fragment>
            <img src={props.img} alt="" className='imgPoke' />
            {/* <img src={Fundo} alt="" className='imgFundo' /> */}
            <div className="nomeFundo">
                <h2><span>{props.id} - </span>{props.nome}</h2>
            </div>

        </React.Fragment>
    );
}

export default NormalPage;