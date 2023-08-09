import React, { useState } from 'react'
import './Dex.css'
import Main from '../template/Main';
import Logo from '../template/Logo';
import Header from '../template/Header';
import Normal from './Normal'
import Advanced from './Advanced'

function Dex(props) {

    const [tela, setTela] = useState('normal');
    const [idBusca, setIdBusca] = useState(props.busca);
    //console.log(idBusca)
    const [idForm, setIdForm] = useState('');
    const [idChange, setIdChange] = useState('');
    const [pokeNome, setPokeNome] = useState('Carregando...');
    const [pokeId, setPokeId] = useState('');
    const [pokeImg, setPokeImg] = useState('');
    const [pokeTipo1, setPokeTipo1] = useState('');
    const [pokeTipo2, setPokeTipo2] = useState('');
    const [pokeHp, setPokeHp] = useState(1);
    const [pokeAtq, setPokeAtq] = useState(1);
    const [pokeDef, setPokeDef] = useState(1);
    const [pokeAtqEsp, setPokeAtqEsp] = useState(1);
    const [pokeDefEsp, setPokeDefEsp] = useState(1);
    const [pokeVel, setPokeVel] = useState(1);
    const [fundoCor, setFundoCor] = useState({backgroundColor: '#054e8d47'});
    
    const [pokeEvol1, setPokeEvol1] = useState('');
    const [pokeEvol2, setPokeEvol2] = useState('');
    const [pokeEvol3, setPokeEvol3] = useState('');
    const [sitEvol2, setSitEvol2] = useState('');
    const [sitEvol3, setSitEvol3] = useState('');
    const [pokeEvolImg1, setPokeEvolImg1] = useState('');
    const [pokeEvolImg2, setPokeEvolImg2] = useState('');
    const [pokeEvolImg3, setPokeEvolImg3] = useState('');
    
    const [isEevee, setisEevee] = useState(false);

    async function fetchPokemon(poke) {
        //setPokeNome('Carregando...')
        //setPokeId('')
        const url = `https://pokeapi.co/api/v2/pokemon/${poke}`

        const data = await fetch(url)
            .then((response) => response.json())
            .then((data) => {
                const data2 = data
                return data2
            })
            .catch(err =>{
                console.log('erro')
                setPokeNome('Erro!')
                setPokeId('')
                setPokeImg('')
            })

        //console.log(url.status)
        

            
        setPokeNome(data.name)
        setPokeId(data.id)
            
        setIdChange(data.id)
        
        //console.log(idBusca)
        
        //console.log(pokeId)
        //console.log(idBusca)
        //console.log(idBusca)
        
        //setIdBusca(idBusca)
        
        setPokeImg(data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'])

        switch (data['types']['0']['type']['name']) {
            case 'electric':
                setPokeTipo1("Elétrico")
                setFundoCor({backgroundColor: '#fbfa49a8'})
                //console.log(fundoCor)
                break;
                
            case 'fire':
                setPokeTipo1("Fogo")
                setFundoCor({backgroundColor: '#ff2e2e54'})
            break;

            case 'water':
                setPokeTipo1("Água")
                setFundoCor({backgroundColor: '#2d68ff54'})
                break;

            case 'normal':
                setPokeTipo1("Normal")
                setFundoCor({backgroundColor: '#054e8d47'})
                break;

            case 'grass':
                setPokeTipo1("Grama")
                setFundoCor({backgroundColor: '#2dff5654'})
                break;

            case 'flying':
                setPokeTipo1("Voador")
                setFundoCor({backgroundColor: '#2dffb754'})
                break;

            case 'dragon':
                setPokeTipo1("Dragão")
                setFundoCor({backgroundColor: '#00bb7254'})
                break;

            case 'fighting':
                setPokeTipo1("Lutador")
                setFundoCor({backgroundColor: '#7e000054'})
                break;

            case 'poison':
                setPokeTipo1("Veneno")
                setFundoCor({backgroundColor: '#62007e54'})
                break;

            case 'ground':
                setPokeTipo1("Solo")
                setFundoCor({backgroundColor: '#d3b6699e'})
                break;

            case 'rock':
                setPokeTipo1("Pedra")
                setFundoCor({backgroundColor: '#cfcfcf82'})
                break;

            case 'psychic':
                setPokeTipo1("Psíquico")
                setFundoCor({backgroundColor: '#f2b5ff54'})
                break;

            case 'ice':
                setPokeTipo1("Gelo")
                setFundoCor({backgroundColor: '#b5efff6e'})
                break;

            case 'bug':
                setPokeTipo1("Inseto")
                setFundoCor({backgroundColor: '#39ff564f'})
                break;

            case 'ghost':
                setPokeTipo1("Fantasma")
                setFundoCor({backgroundColor: '#ffffff96'})
                break;

            case 'steel':
                setPokeTipo1("Aço")
                setFundoCor({backgroundColor: '#b0e4ff96'})
                break;

            case 'dark':
                setPokeTipo1("Sombrio")
                setFundoCor({backgroundColor: '#0021326e'})
                break;

            case 'fairy':
                setPokeTipo1("Fada")
                setFundoCor({backgroundColor: '#ea57ff6e'})
                break;

            default:
                setPokeTipo1("Erro!")
                setFundoCor({backgroundColor: '#054e8d47'})
                break;
        }

        if (data['types']['1']) {

            switch (data['types']['1']['type']['name']) {
                case 'electric':
                    setPokeTipo2(" / Elétrico")
                    break;

                case 'fire':
                    setPokeTipo2(" / Fogo")
                    break;

                case 'water':
                    setPokeTipo2(" / Água")
                    break;

                case 'normal':
                    setPokeTipo2(" / Normal")
                    break;

                case 'grass':
                    setPokeTipo2(" / Grama")
                    break;

                case 'flying':
                    setPokeTipo2(" / Voador")
                    break;

                case 'dragon':
                    setPokeTipo2(" / Dragão")
                    break;

                case 'fighting':
                    setPokeTipo2(" / Lutador")
                    break;

                case 'poison':
                    setPokeTipo2(" / Veneno")
                    break;

                case 'ground':
                    setPokeTipo2(" / Solo")
                    break;

                case 'rock':
                    setPokeTipo2(" / Pedra")
                    break;

                case 'psychic':
                    setPokeTipo2(" / Psíquico")
                    break;

                case 'ice':
                    setPokeTipo2(" / Gelo")
                    break;

                case 'bug':
                    setPokeTipo2(" / Inseto")
                    break;

                case 'ice':
                    setPokeTipo2(" / Gelo")
                    break;

                case 'ghost':
                    setPokeTipo2(" / Fantasma")
                    break;

                case 'steel':
                    setPokeTipo2(" / Aço")
                    break;

                case 'dark':
                    setPokeTipo2(" / Sombrio")
                    break;

                case 'fairy':
                    setPokeTipo2(" / Fada")
                    break;

                default:
                    setPokeTipo2(" / Erro!")
                    break;
            }
        } else {
            setPokeTipo2("")
        }

        setPokeHp(data['stats']['0']['base_stat'])
        setPokeAtq(data['stats']['1']['base_stat'])
        setPokeDef(data['stats']['2']['base_stat'])
        setPokeAtqEsp(data['stats']['3']['base_stat'])
        setPokeDefEsp(data['stats']['4']['base_stat'])
        setPokeVel(data['stats']['5']['base_stat'])


        
                    
            
        
            const species = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${poke}/`)
                .then((response) => response.json())
                .then((data) => {
                    const data2 = data
                    return data2
                })

            const data2 = await fetch(species['evolution_chain']['url'])
                .then((response) => response.json())
                .then((data) => {
                    const data2 = data
                    return data2
                })

            //VERIFICA SE É DA LINHA EVOLUTIVA DA EEVEE
            if (data2.id != 67) {
                setisEevee(false)

                //MONTA A LINHA EVOLUTIVA
                if (data2.chain['evolves_to'].length != 0) {
                    setSitEvol2('block')
                    if (data2.chain['evolves_to'].length === 2) {
                        setSitEvol3('diferente')
                    } else if (data2.chain['evolves_to']['0']['evolves_to'].length != 0) {
                        setSitEvol3('block')
                    } else {
                        setSitEvol3('none')
                    }
                } else {
                    setSitEvol2('none')
                    setSitEvol3('none')
                }

                setPokeEvol1(data2.chain['species']['name'])

                const evol1 = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeEvol1}`)
                    .then((response) => response.json())
                    .then((evol1) => {
                        const evol12 = evol1
                        return evol12
                    })

                if (sitEvol2 != 'none') {
                    setPokeEvol2(data2.chain['evolves_to']['0']['species']['name'])

                    const evol2 = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeEvol2}`)
                        .then((response) => response.json())
                        .then((evol2) => {
                            const evol22 = evol2
                            return evol22
                        })

                    setPokeEvolImg2(evol2['sprites']['versions']['generation-v']['black-white']['animated']['front_default'])


                    if (sitEvol3 != 'none') {
                        if (sitEvol3 != 'diferente') {

                            setPokeEvol3(data2.chain['evolves_to']['0']['evolves_to']['0']['species']['name'])

                            const evol3 = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeEvol3}`)
                                .then((response) => response.json())
                                .then((evol3) => {
                                    const evol32 = evol3
                                    return evol32
                                })

                            setPokeEvolImg3(evol3['sprites']['versions']['generation-v']['black-white']['animated']['front_default'])
                        } else {
                            setPokeEvol3(data2.chain['evolves_to']['1']['species']['name'])

                            const evol4 = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeEvol3}`)
                                .then((response) => response.json())
                                .then((evol4) => {
                                    const evol42 = evol4
                                    return evol42
                                })

                            setSitEvol3('block')
                            setPokeEvolImg3(evol4['sprites']['versions']['generation-v']['black-white']['animated']['front_default'])
                        }

                    } else {
                        setPokeEvol3('')
                        setPokeEvolImg3('')
                    }
                } else {
                    setPokeEvol2('')
                    setPokeEvolImg2('')
                    setPokeEvol3('')
                    setPokeEvolImg3('')
                }

                setPokeEvol1(data2.chain['species']['name'])

                //setPokeEvol3(data2.chain['evolves_to']['0']['evolves_to']['0']['species']['name'])

                setPokeEvolImg1(evol1['sprites']['versions']['generation-v']['black-white']['animated']['front_default'])

            // console.log(pokeEvol1)
            // console.log(pokeEvol2)
            // console.log(pokeEvol3)

            //console.log(sitEvol3)

            } else {
              setisEevee(true)
        }
    }

    function justLast(array) {
        let num = array.length
        array[0] = array[num - 1]
        array.length = 1
    }

    function updateField(event) {
        setIdForm(event.target.value) 
    }

    function buscar() {
        setIdBusca(idForm)
        setIdForm('')
    }


    function idProx() {
        const id = parseInt(Object.values({ idChange }).join(''))

        console.log(id)
        let addId = id + 1
        const newId = addId.toString()
        setIdBusca(newId)
        //setIdForm(idBusca)
    }

    function idAnt() {
        const id = parseInt(Object.values({ idChange }).join(''))

        console.log(id)
        let addId = id - 1
        const newId = addId.toString()
        setIdBusca(newId)
    }

    function pageNormal() {
        setTela('normal')
    }

    function pageAdvanced() {
        setTela('advanced')
    }
    
    //WTFFFF
    const poke = Object.values({ idBusca }).join('')

    fetchPokemon(poke.toLowerCase())

    if (tela === "normal") {

        return (
            <React.Fragment>
                
                <Main icon="home" title=" Início" subtitle="Projetinho fellas">
                    <div className="normalMain">
                        <div className="dexForm">
                            <form action="">
                                <input type="text"
                                    name=''
                                    placeholder='Nome ou ID...'
                                    value={idForm}
                                    onChange={updateField}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                            buscar()
                                        }
                                    }}
                                />
                            </form>
                            <button onClick={buscar}>Buscar</button>
                        </div>

                        <div className="normalDex"  style={fundoCor}>

                        <Normal nome={pokeNome} img={pokeImg} id={pokeId} color={fundoCor} />
                        {/* <p> {this.state.pokemon}</p> */}
                        <div className="buttonId">
                            <button className=""
                                onClick={idAnt}>Anterior</button>
                            <button className=""
                                onClick={idProx}>Próximo</button>
                        </div>
                        </div>


                    </div>
                        <div className="buttons">
                            <button className="btn"
                                onClick={pageNormal}>
                                Normal
                            </button>
                            <button className="btn"
                                onClick={pageAdvanced}>
                                Avançado
                            </button>
                        </div>
                </Main>
                {/* <div className="btn-volta">
                    <button onClick={() => voltarHome('home')}>Voltar</button>
                </div> */}
            </React.Fragment>
        )

    } else {

        return (
            <React.Fragment>
                {/* <Logo />
                <Header /> */}
                <Main icon="home" title=" Início" subtitle="Projetinho fellas">
                    <div className="advancedMain">

                        <div className="dexForm">
                            <form action="">
                                <input type="text"
                                    name=''
                                    placeholder='Nome ou ID...'
                                    value={idForm}
                                    onChange={updateField}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                            buscar()
                                        }
                                    }} />
                            </form>
                            <button onClick={buscar}>Buscar</button>
                        </div>
                        <div className='advancedDex' style={fundoCor}>
                        <div className="buttonId">
                            <button className=""
                                onClick={idAnt}>Anterior</button>
                            <button className=""
                                onClick={idProx}>Próximo</button>
                        </div>
                        <Advanced nome={pokeNome}
                            img={pokeImg}
                            id={pokeId}
                            tipo1={pokeTipo1}
                            tipo2={pokeTipo2}
                            hp={pokeHp}
                            atq={pokeAtq}
                            def={pokeDef}
                            atqesp={pokeAtqEsp}
                            defesp={pokeDefEsp}
                            vel={pokeVel}
                            evol1={pokeEvol1}
                            evol2={pokeEvol2}
                            evol3={pokeEvol3}
                            evolimg1={pokeEvolImg1}
                            evolimg2={pokeEvolImg2}
                            evolimg3={pokeEvolImg3}
                            sitEvol2={sitEvol2}
                            sitEvol3={sitEvol3}
                            fundoCor={fundoCor}
                            isEevee={isEevee}>
                        </Advanced>
                        
                        </div>



                    </div>
                        <div className="buttons">
                            <button className="btn"
                                onClick={pageNormal}>
                                Normal
                            </button>
                            <button className="btn"
                                onClick={pageAdvanced}>
                                Avançado
                            </button>
                        </div>
                </Main>
            </React.Fragment>
        )
    }

}

export default Dex;