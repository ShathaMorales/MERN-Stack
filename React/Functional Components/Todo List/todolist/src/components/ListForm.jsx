import React, { useState } from 'react'

const ListForm = (props) => {
    const [newTodo, setNewTodo] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addTodo(newTodo)
        setNewTodo("");
    }

    return (
        <div>
            <div className="container my-5">
                <form onSubmit={(e) => { handleSubmit(e) }}>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" value={newTodo} onChange={(e) => { setNewTodo(e.target.value) }} />
                        <button className="btn btn-primary" type="submit">Add</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ListForm