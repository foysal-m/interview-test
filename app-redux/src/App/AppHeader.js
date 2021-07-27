import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from 'react-bootstrap'

function App() {
  return (
    <div>
      <Navbar fluid collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Tic-Tac-Toe</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
      </Navbar>
    </div>
  )
}

export default App
