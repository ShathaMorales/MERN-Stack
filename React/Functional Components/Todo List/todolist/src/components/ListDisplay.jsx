import React from 'react'

const ListDisplay = (props) => {
    console.log(props.todos)
    return (
        <div>
            {props.todos.map((item, index) => {
                const style = { textDecoration: item.state ? "line-through" : "none" }
                return (<p style={style} key={index}>{item.newTodo} <input type="checkbox" value={item.state} onChange={() => props.checkTodo(index)} />
                    <button className="btn btn-primary" onClick={(id) => { props.removeTodo(id) }}>Delete</button></p>)
            })}
        </div>
    )
}

export default ListDisplay