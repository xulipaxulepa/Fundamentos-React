import React from 'react'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/layout/Card'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import ListaAlunos from './components/repetição/ListaAlunos'
import TabelaProdutos from './components/repetição/TabelasProdutos'
import ParouImpar from './components/condicional/ParouImpar'
import UsuarioInfo from './components/condicional/UsuarioInfo'
import IndiretaPai from './components/comunicação/IndiretaPai'
import Input from './components/formulario/Input'
import Contador from './components/contador/Contador'
import './App.css'

export default () => {
        return (<div className="App">
            <h1>Fundamentos React</h1>

            <div className="Cards">
            <Card titulo="Contador" color="#ddd" 
            image="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80">
                <Contador numeroInicial={10} passoInicial={20}/>
            </Card>
            <Card titulo="Componente controlado" color="#E45F56" 
            image="https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixlib=rb-1.2.1&auto=format&fit=crop&w=1078&q=80">
                <Input />
            </Card>
            <Card titulo="Comunicação Indireta" color="#8BAD39" 
            image="https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjQzMzEwfQ&auto=format&fit=crop&w=1050&q=80">
                <IndiretaPai />
            </Card>
            <Card titulo="Renderização Condicional" color="#982395" 
            image="https://images.unsplash.com/photo-1511576661531-b34d7da5d0bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80">
                <ParouImpar numero={20}/>
                <UsuarioInfo usuario={{ nome: "Alexis"}}/>
            </Card>
            <Card titulo="Repetição 2" color="#3A9Ad9" 
            image="https://images.unsplash.com/photo-1433838552652-f9a46b332c40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80">
                <TabelaProdutos />
            </Card>
            <Card titulo="Repetição 1" color="#FF4C65" 
            image="https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjExMzk2fQ&auto=format&fit=crop&w=1050&q=80">
                <ListaAlunos />
            </Card>
            <Card titulo="Componente com filhos" color="#00C8F8" 
            image="https://images.unsplash.com/34/BA1yLjNnQCI1yisIZGEi_2013-07-16_1922_IMG_9873.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80">
                <Familia sobrenome="Pornstars">
                    <FamiliaMembro nome="Sunny"/>

                    <FamiliaMembro nome="Alexis"/>

                    <FamiliaMembro nome="Sasha" />
                </Familia>
            </Card>
            <Card titulo="Desafio Aleatorio" color="#080" 
            image="https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjExMjU4fQ&auto=format&fit=crop&w=1198&q=80">
                <Aleatorio min={1} max={60}/>
            </Card>

            <Card titulo="Com Parametro" color="#A569BD"
            image="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80">
            <ComParametro
                titulo="Áquilla"
                subtitulo="Dev" />
            </Card>
            <Card titulo="Primeiro" color="#2980B9"
            image="https://images.unsplash.com/photo-1511884642898-4c92249e20b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjF9&auto=format&fit=crop&w=1050&q=80">
            <Primeiro />
            </Card>
            </div>
            
            
        </div>
        )
}