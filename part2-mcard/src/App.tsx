import React from 'react'
import logo from './logo.svg'
import './App.css'
import { css } from '@emotion/react'
import styled from '@emotion/styled'

const bold = css`
  font-weight: bold;
`

const containerStyles = css`
  background-color: pink;
  ${bold};
`

const Button = styled.button`
  width: 200px;
  height: 100px;
  ${bold};
`

function App() {
  return (
    <div className="App" css={containerStyles}>
      <Button>Click me</Button>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
