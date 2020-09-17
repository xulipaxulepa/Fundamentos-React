import React from 'react'

export default props => {
    return (
        <div>
            <div>Filho</div>
            <button onClick={
                function () {
                    props.quandoClicar('Joao', 53, true)
                }
            }>Fornecer informações</button>
        </div>
    )
}