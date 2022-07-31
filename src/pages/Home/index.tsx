import React from 'react';

import './style.css'

function Home() {
    return (
        <div className='container'>
            <h1>Lista de Presença</h1>
            <input type="text" placeholder="Digite o nome..."></input>
            <button type="button">Adicionar</button>
        </div>
    )
}

export default Home;