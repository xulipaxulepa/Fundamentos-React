import React from 'react'
import alunos from '../../data/alunos'

export default props => {

    const alunisLi = alunos.map((aluno) => {
        return (
            <li key={aluno.id}>
                {aluno.id}) {aluno.nome} -> {aluno.nota}
            </li>
        )
    })

    return (
        <div>
            <ul>
                {alunisLi}
            </ul>
        </div>
    )
}