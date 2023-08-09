import React, {useState} from 'react';
import Main from '../template/Main';
import Dex from '../dex/Dex';
import Logo from '../../assets/img/logo.png'
import { Link } from 'react-router-dom';
import Icon from '../../assets/icon/favicon-16x16.png'


// function voltarHome(page){
//     page('home')
// }

function Home() {
    const [page, setPage] = useState('home');
    const [form, setForm] = useState('');
    const [busca, setBusca] = useState('');

    const mudarPag = (event) => {
        setBusca(form)
        setPage('dex')
      };

    const voltarHome = () => {
        setPage('home')
      };

    const formChange = (event) => {
        setForm(event.target.value);
      };
    
    if (page == 'home') {
        
        return(
            <Main>
                <div className="home-text">
                    <img src={Logo} alt="" />
                    <h4>Bem Vindo ao ReactDéx</h4>
                    <p className="mb-0">Pokedéx desenvolvida em ReactJS.</p>
                    <input type="text" value={form} onChange={formChange} placeholder='Digite o nome ou id do pokémon...' />
                    <button onClick={mudarPag}>Buscar</button>
                </div>
            </Main>
        )
    } else {
        return(
            <div className='dex-text'>
                <Dex busca={busca} setPage={setPage} />
                 <div className="btn-volta">
                    <button onClick={voltarHome}>Voltar</button>
                </div> 
            </div>
        )
    }
}

export default Home;
// export function voltarHome;