import { useEffect, useState } from "react"
export default function Todo() {
    const [todos, setTodos] = useState()
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/')
            .then(response => response.json())
            .then(json => setTodos(json))
    }, [])

    return todos ? <div>
        {todos.map((item) => {
            return <div>{item.title}</div>
        })}
    </div> : null;
}