import React from 'react'

const Todos = ({todos, deleteTodo}) => {
  const todoList = todos.length 
  ? 
    (todos.map(todo =>{return (
      <div className="collection-item" key={todo.id}>
        <span onClick={()=> {deleteTodo(todo.id)}}>{todo.content}</span>
      </div>)})) 
  : (<h2 className="center">Congrats! Mission Completed!</h2>)

    return (
    <div className="Ninjatodos collection">
      {todoList}
    </div>
  )
}
export default Todos;