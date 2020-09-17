import React from 'react'
import './Card.css'
export default (props) => {

    const cardStyle = {
        backgroundColor: props.color || "#F00",
        borderColor: props.color || "#F00"
    }

    const contentStyle = {
        backgroundImage: `url(${props.image})`,
        backgroundSize: "300px 300px",
        opacity: 0.8
    }

    return (
        <div className="Card" style={cardStyle}>
            <div className="Title">{props.titulo}</div>
    <div className="Content" style={contentStyle}>{props.children}</div>
        </div>
    )
}