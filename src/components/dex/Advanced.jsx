import React, { useState } from 'react'
import EvolveModal from './Evolve';
import EvolveImg from '../../assets/img/evolve.png'


function AdvancedPage(props) {

    const [display, setDisplay] = useState({display: 'none'});
    const [evol2, setEvol2] = useState({display: props.sitEvol2});

    function chamarModal() {
        setDisplay({display: 'block'})
    }
    
    function sairModal() {
        setDisplay({display: 'none'})
    }
    

    return (
        <React.Fragment>
            <div style={display}>
                <EvolveModal 
                quantEvol='2'
                evol1={props.evol1}
                evol2={props.evol2}
                evol3={props.evol3}
                evolimg1={props.evolimg1}
                evolimg2={props.evolimg2}
                evolimg3={props.evolimg3}
                sitEvol2={props.sitEvol2}
                sitEvol3={props.sitEvol3}
                fundoCor={props.fundoCor}
                isEevee={props.isEevee} />
            </div>
            <div className="esquerda">
            <button className='buttonModal' style={evol2} onMouseEnter={chamarModal} onMouseLeave={sairModal}><img src={EvolveImg} alt="" /></button>

                <img src={props.img} alt="" className='imgPoke' />
                {/* <img src={Fundo} alt="" className='imgFundo' /> */}
                <div className="nomeFundo">
                    <h2><span>{props.id} - </span>{props.nome}</h2>
                </div>
            </div>
            <div className="linha"></div>
            <div className="dados">
                <p>ID: </p><span>{props.id}</span>
                <p>Tipo: </p><span>{props.tipo1}{props.tipo2}</span>
                <p>HP: </p><span>{props.hp}</span>
                <p>Ataque: </p><span>{props.atq}</span>
                <p>Defesa: </p><span>{props.def}</span>
                <p>Ataque Especial: </p><span>{props.atqesp}</span>
                <p>Defesa Especial: </p><span>{props.defesp}</span>
                <p>Velocidade: </p><span>{props.vel}</span>
            </div> 
        </React.Fragment>
    );
}

export default AdvancedPage;