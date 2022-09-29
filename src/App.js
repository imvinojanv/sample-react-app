import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Greet from './components/Greet'
// import { Greet } from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}

      {/* <Message /> */}

      <Greet name="Bruce Wyne" heroName="Batman">
        <p>This is a children props</p>
      </Greet>
      <Greet name="Clark" heroName="Superman">
        <button>Click me</button>
      </Greet>
      <Greet name="Diana" heroName="Wonder women" />

      {/* <Welcome name="Bruce Wyne" heroName="Batman" />
      <Welcome name="Clark" heroName="Superman" />
      <Welcome name="Diana" heroName="Wonder women" /> */}

      {/* <Hello /> */}
    </div>
  );
}

export default App;
