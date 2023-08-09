import React, { Component } from 'react'
import './Dex.css'
import Main from '../template/Main';
import Logo from '../template/Logo';
import Header from '../template/Header';
import Normal from './Normal'
import Advanced from './Advanced'

const initialState = {
    page: ['normal'],
    pokemon: { id: '', nome: '', tipo: '', hp: '', ataque: '', defesa: '', velocidade: '' },
    idBusca: ['25'],
    idForm: ['25'],
    nomeBusca: ['pikachu'],
    pokeNome: 'a',
    pokeId: ['25'],
    pokeImg: 'a',
    pokeTipo1: 'a',
    pokeTipo2: '',
    pokeHp: 1,
    pokeAtq: 1,
    pokeDef: 1,
    pokeAtqEsp: 1,
    pokeDefEsp: 1,
    pokeVel: 1
}

const baseUrl = 'https://pokeapi.co/api/v2/pokemon/25'

let searchPokemon = 1



export default class Dex extends Component {
    state = { ...initialState}

    

    async fetchPokemon(poke) {         
        
            const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`)
                 .then((response) => response.json())
                 .then((data) => {
                    const data2 = data
                    return data2
                })
                
                //const pokeNome = { ...this.state.pokeNome }

                this.setState({ pokeNome: data.name })
                this.setState({ pokeId: data.id })
                
                //this.setState({ idBusca: Object.values({ ...data.id }).join('') })
                
                //mudarBuscar(data.Id)
                //this.setState({ pokeId: data.id })
                this.setState({ pokeImg: data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'] })
                
                switch (data['types']['0']['type']['name']) {
                    case 'electric':
                        this.setState({ pokeTipo1: "Elétrico" })
                        break;
                    
                    case 'fire':
                        this.setState({ pokeTipo1: "Fogo" })
                        break;
                    
                    case 'water':
                        this.setState({ pokeTipo1: "Água" })
                        break;

                    case 'normal':
                        this.setState({ pokeTipo1: "Normal" })
                        break;
                    
                    case 'grass':
                        this.setState({ pokeTipo1: "Grama" })
                        break;
                    
                    case 'flying':
                        this.setState({ pokeTipo1: "Voador" })
                        break;
                    
                    case 'dragon':
                        this.setState({ pokeTipo1: "Dragão" })
                        break;

                    case 'fighting':
                        this.setState({ pokeTipo1: "Lutador" })
                        break;
                    
                    case 'poison':
                        this.setState({ pokeTipo1: "Veneno" })
                        break;
                    
                    case 'ground':
                        this.setState({ pokeTipo1: "Solo" })
                        break;
                    
                    case 'rock':
                        this.setState({ pokeTipo1: "Pedra" })
                        break;
                    
                    case 'psychic':
                        this.setState({ pokeTipo1: "Psíquico" })
                        break;

                    case 'ice':
                        this.setState({ pokeTipo1: "Gelo" })
                        break;

                    case 'bug':
                        this.setState({ pokeTipo1: "Inseto" })
                        break;

                    case 'ice':
                        this.setState({ pokeTipo1: "Gelo" })
                        break;

                    case 'ghost':
                        this.setState({ pokeTipo1: "Fantasma" })
                        break;

                    case 'steel':
                        this.setState({ pokeTipo1: "Aço" })
                        break;

                    case 'dark':
                        this.setState({ pokeTipo1: "Sombrio" })
                        break;

                    case 'fairy':
                        this.setState({ pokeTipo1: "Fada" })
                        break;

                    default:
                        this.setState({ pokeTipo1: "Erro!" })
                        break;
                }

                if (data['types']['1']) {
                    
                    
                    switch (data['types']['1']['type']['name']) {
                    case 'electric':
                        this.setState({ pokeTipo2: " / Elétrico" })
                        break;
                    
                    case 'fire':
                        this.setState({ pokeTipo2: " / Fogo" })
                        break;
                    
                    case 'water':
                        this.setState({ pokeTipo2: " / Água" })
                        break;

                    case 'normal':
                        this.setState({ pokeTipo2: " / Normal" })
                        break;
                    
                    case 'grass':
                        this.setState({ pokeTipo2: " / Grama" })
                        break;
                    
                    case 'flying':
                        this.setState({ pokeTipo2: " / Voador" })
                        break;
                    
                    case 'dragon':
                        this.setState({ pokeTipo2: " / Dragão" })
                        break;

                    case 'fighting':
                        this.setState({ pokeTipo2: " / Lutador" })
                        break;
                    
                    case 'poison':
                        this.setState({ pokeTipo2: " / Veneno" })
                        break;
                    
                    case 'ground':
                        this.setState({ pokeTipo2: " / Solo" })
                        break;
                    
                    case 'rock':
                        this.setState({ pokeTipo2: " / Pedra" })
                        break;
                    
                    case 'psychic':
                        this.setState({ pokeTipo2: " / Psíquico" })
                        break;

                    case 'ice':
                        this.setState({ pokeTipo2: " / Gelo" })
                        break;

                    case 'bug':
                        this.setState({ pokeTipo2: " / Inseto" })
                        break;

                    case 'ice':
                        this.setState({ pokeTipo2: " / Gelo" })
                        break;

                    case 'ghost':
                        this.setState({ pokeTipo2: " / Fantasma" })
                        break;

                    case 'steel':
                        this.setState({ pokeTipo2: " / Aço" })
                        break;

                    case 'dark':
                        this.setState({ pokeTipo2: " / Sombrio" })
                        break;

                    case 'fairy':
                        this.setState({ pokeTipo2: " / Fada" })
                        break;

                    default:
                        this.setState({ pokeTipo2: " / Erro!" })
                        break;
                    }
                } else {
                    this.setState({ pokeTipo2: "" })
                }
                    
                //console.log(data['types'])
                
                //this.setState({ pokeTipo1: data['types']['0']['type']['name'] })
                //this.setState({ pokeTipo2: data.name })

                this.setState({ pokeHp:  data['stats']['0']['base_stat'] })
                this.setState({ pokeAtq:  data['stats']['1']['base_stat'] })
                this.setState({ pokeDef:  data['stats']['2']['base_stat'] })
                this.setState({ pokeAtqEsp:  data['stats']['3']['base_stat'] })
                this.setState({ pokeDefEsp:  data['stats']['4']['base_stat'] })
                this.setState({ pokeVel:  data['stats']['5']['base_stat'] })

                //console.log({...data.id})
                //this.setState({ idBusca: data.id.toString() })

                // const id = {...this.state.pokeId}
                // const idBusca = {...this.state.idBusca}
        
                // switch (idBusca[0]) {
                //     case '0':
                        
                //         break;
                //     case '1':
                        
                //         break;
                //     case '2':
                        
                //         break;
                //     case '3':
                        
                //         break;
                //     case '4':
                        
                //         break;
                //     case '5':
                        
                //         break;
                //     case '6':
                        
                //         break;
                //     case '7':
                        
                //         break;
                //     case '8':
                        
                //         break;
                //     case '9':
                        
                //         break;
                
                //     default:
                //         this.setState({ idBusca: id })
                //         break;
                // }

                

    }

   

    justLast(array) {
        let num = array.length
        array[0] = array[num-1]
        array.length = 1
    }

    updateField(event) {
        //const pokeId = { ...this.state.pokeId }
        //pokeId[event.target.name] = event.target.value
        this.setState({ idForm: event.target.value })
        //console.log(pokeId)
    }

    buscar() {
        const idForm = {...this.state.idForm}
        //const idBusca = {...this.state.idBusca}
        //this.setState({ idForm: idBusca })

        this.setState({ idBusca: idForm })
    }


    idProx() {
        
        const id = parseInt(Object.values({ ...this.state.idBusca }).join(''))
        //const id = parseInt(Object.values({ ...this.state.idBusca }).join(''))
        
        //console.log(...this.state.idBusca)
        console.log(id)
        let addId = id + 1
        const newId = addId.toString()
        this.setState({ idBusca: newId })
    }

    idAnt() {
        const id = parseInt(Object.values({ ...this.state.idBusca }).join(''))
        console.log(id)
        let addId = id - 1
        const newId = addId.toString()
        this.setState({ idBusca: newId })
    }

    pageNormal() {
        this.setState({ page: 'normal' })
    }
    pageAdvanced() {
        this.setState({ page: 'advanced' })
    }

    render() {
        //console.log(...this.state.pokeId)

        
        //WTFFFF
        const idBusca = Object.values({ ...this.state.idBusca }).join('')
        
        this.fetchPokemon(idBusca)
        //const idText = ({...this.state.pokeId})
        //console.log(idText)

        if (this.state.page === "normal") {
            
            return (
                <React.Fragment>
                    <Logo />
                    <Header />
                    <Main icon="home" title=" Início" subtitle="Projetinho fellas">
                        <div className="normalMain">

                            <div className="dexForm">
                                <form action="">
                                    <input type="text" 
                                    name=''
                                    value={this.state.idForm}
                                    onChange={e => this.updateField(e)}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                            this.buscar()
                                        }
                                    }}
                                    />
                                </form>
                                <button onClick={e => this.buscar()}>Buscar</button>
                            </div>
                            
                        <Normal nome={this.state.pokeNome} img={this.state.pokeImg} id={this.state.pokeId} />
                        {/* <p> {this.state.pokemon}</p> */}
    
                        <div className="buttons">
                            <button className="btn"
                            onClick={e => this.pageNormal(e)}>
                                Normal
                            </button>
                            <button className="btn"
                            onClick={e => this.pageAdvanced(e)}>
                                Avançado
                            </button>
                        </div>

                    </div>
                    </Main>
                </React.Fragment>
            )

        } else {
            
            return (
                <React.Fragment>
                    <Logo />
                    <Header />
                    <Main icon="home" title=" Início" subtitle="Projetinho fellas">
                        <div className="advancedMain">

                            <div className="dexForm">
                                <form action="">
                                    <input type="text" 
                                    name=''
                                    value={this.state.idForm}
                                    onChange={e => this.updateField(e)}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                            this.buscar()
                                        }
                                    }}/>
                                </form>
                                <button onClick={e => this.buscar(e)}>Buscar</button>
                            </div>
                            
                        <Advanced nome={this.state.pokeNome} 
                        img={this.state.pokeImg} 
                        id={this.state.pokeId} 
                        tipo1={this.state.pokeTipo1}
                        tipo2={this.state.pokeTipo2}
                        hp={this.state.pokeHp} 
                        atq={this.state.pokeAtq}
                        def={this.state.pokeDef}
                        atqesp={this.state.pokeAtqEsp}
                        defesp={this.state.pokeDefEsp}
                        vel={this.state.pokeVel}>
                        </Advanced>
                        <div className="buttonId">
                            <button className=""
                                onClick={e => this.idAnt(e)}>Anterior</button>
                            <button className=""
                                onClick={e => this.idProx(e)}>Próximo</button>
                        </div>

    
                        <div className="buttons">
                            <button className="btn"
                            onClick={e => this.pageNormal(e)}>
                                Normal
                            </button>
                            <button className="btn"
                            onClick={e => this.pageAdvanced(e)}>
                                Avançado
                            </button>
                        </div>

                        </div>
                    </Main>
                </React.Fragment>
            )
        }
        
    }
}