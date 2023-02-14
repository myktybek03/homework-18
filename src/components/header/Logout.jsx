import React from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { authActionTypes } from "../../store/register/registerReducer"

const Logout = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const logoutHandler = () => {
    dispatch({ type: authActionTypes.LOGOUT })
    navigate("/login")
  }
  return (
    <Header>
      <Button onClick={logoutHandler}>
        Logout
        <Img
          src="https://cdn-icons-png.flaticon.com/512/1286/1286853.png"
          alt=""
        />
      </Button>
    </Header>
  )
}

export default Logout

const Header = styled.div`
  width: 1440px;
  height: 80px;
  background-color: aqua;
  display: flex;
  justify-content: end;
`

const Button = styled.button`
  background-color: aqua;
  border: none;
  font-size: 30px;
`
const Img = styled.img`
  width: 50px;
  height: 50px;
`
