import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { todoActionTypes } from "../../store/todo/todoReducer"
import Logout from "../header/Logout"
import TodoList from "../todo-lists/TodoList"
import styled from "styled-components"

const TodoForm = () => {
  const [value, setValue] = useState("")
  const todo = useSelector((state) => state.todo)
  const dispatch = useDispatch()

  const changeInputHandler = (e) => {
    setValue(e.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch({ type: todoActionTypes.ADD_TODO, payload: value })
    setValue("")
  }

  const removeAllTodo = () => {
    dispatch({ type: todoActionTypes.DELETE_ALL_TODO })
  }

  return (
    <Container>
      <Logout />
      <StyleTodo>
        <h1>Todo</h1>
        <Input value={value} type="text" onChange={changeInputHandler} />
        <Button onClick={submitHandler}>Add</Button>
        <Button onClick={removeAllTodo}>Delete All</Button>
      </StyleTodo>
      <UlStyle>
        {todo.todos.map((item) => (
          <TodoList key={item.id} todo={item} />
        ))}
      </UlStyle>
    </Container>
  )
}

export default TodoForm

const Container = styled.div`
  text-align: center;
`

const StyleTodo = styled.div`
  background-color: #f44336;
  padding: 30px 40px;
  color: white;
  text-align: center;
  :after {
    content: "";
    display: table;
    clear: both;
  }
`
const Input = styled.input`
  margin: 0;
  border: none;
  border-radius: 0;
  width: 75%;
  padding: 10px;
  float: left;
  font-size: 16px;
`

const UlStyle = styled.ul`
  list-style: none;
  display: grid;
  padding: 0;
`
const Button = styled.button`
  padding: 10px;
  width: 25%;
  background: #d9d9d9;
  color: #555;
  float: left;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;
  border-radius: 0;
`
