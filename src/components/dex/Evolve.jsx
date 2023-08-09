import React, {useState} from 'react'
import './Evolve.css'


function EvolveModal(props) {

    //const [evol1, setEvol1] = useState('');
    const [evol2, setEvol2] = useState({display: props.sitEvol2});
    const [evol3, setEvol3] = useState({display: props.sitEvol3});
    
    const [isEevee, setisEevee] = useState(props.isEevee);
    
    
    
    const [imgEevee, setimgEevee] = useState(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/`);
    const [eev1, seteev1] = useState(`${imgEevee}133.gif`);
    const [eev2, seteev2] = useState(`${imgEevee}134.gif`);
    const [eev3, seteev3] = useState(`${imgEevee}135.gif`);
    const [eev4, seteev4] = useState(`${imgEevee}136.gif`);
    const [eev5, seteev5] = useState(`${imgEevee}196.gif`);
    const [eev6, seteev6] = useState(`${imgEevee}197.gif`);
    const [eev7, seteev7] = useState(`${imgEevee}470.gif`);
    const [eev8, seteev8] = useState(`${imgEevee}471.gif`);
    const [eev9, seteev9] = useState(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/700.png`);

    //verQuant(props.quantEvol)
    
    if (isEevee == false) {

        return (
            <React.Fragment>
                <div className='evolveModal'>
                    <div className="contentModal">

                        <h2>Linha Evolutiva</h2>
                        <div className="row">

                            <div className="poke1 col">
                                <img src={props.evolimg1} alt="" className='' />
                                <h4>{props.evol1}</h4>
                            </div>
                            <div className="poke2 col">
                                <img src={props.evolimg2} alt="" className='' />
                                <h4>{props.evol2}</h4>
                            </div>
                            <div className="poke3 col" style={evol3}>
                                <img src={props.evolimg3} alt="" className='' />
                                <h4>{props.evol3}</h4>
                            </div>
                        </div>
                    </div>
                    <div className="fundoModal"></div>

                </div>
            </React.Fragment>
        );
    } else {

        return (
            <React.Fragment>
                <div className='evolveModal'>

                        <h2>Evoluções Eevee</h2>
                        <div className="row">

                            <div className="poke1 col">
                                <img src={eev1} alt="" className='' />
                                <h4>Eevee</h4>
                            </div>
                            <div className="poke2 col">
                                <img src={eev2} alt="" className='' />
                                <h4>Vaporeon</h4>
                            </div>
                            <div className="poke3 col">
                                <img src={eev3} alt="" className='' />
                                <h4>Jolteon</h4>
                            </div>
                            <div className="poke4 col">
                                <img src={eev4} alt="" className='' />
                                <h4>Flareon</h4>
                            </div>
                            <div className="poke5 col">
                                <img src={eev5} alt="" className='' />
                                <h4>Espeon</h4>
                            </div>
                            <div className="poke6 col">
                                <img src={eev6} alt="" className='' />
                                <h4>Umbreon</h4>
                            </div>
                            <div className="poke7 col">
                                <img src={eev7} alt="" className='' />
                                <h4>Leafeon</h4>
                            </div>
                            <div className="poke8 col">
                                <img src={eev8} alt="" className='' />
                                <h4>Glaceon</h4>
                            </div>
                            {/* <div className="poke9 col">
                                <img src={eev9} alt="" className='' />
                                <h4>Sylveon</h4>
                            </div> */}
                        </div>
                    
                      
                </div>
            </React.Fragment>
        );
    }
}

export default EvolveModal;