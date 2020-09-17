import React, {Component} from 'react'
import Display from './Display'
import Botoes from './Botoes'

class Contador extends Component {

    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 5 
    }

    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo
        })
    }

    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo
        })
    }

    render() {
        return (
            <div>
                <Display numero={this.state.numero}/>
                <Botoes incrementar={this.inc} decrementar={this.dec}/>
            </div>
        )
    }
}

export default Contador