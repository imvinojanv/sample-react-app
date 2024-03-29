import React, { Component } from 'react'
import logo from './logo.svg'

import './App.css'
import './appStyles.css'
import styles from './appStyles.module.css'       // import the module stylesheet

// import { Greet } from './components/Greet'
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent'
import UserGreeting from './components/UserGreeting'
import NameList from './components/NameList'
import Stylesheet from './components/Stylesheet'
import Inline from './components/Inline'
import Form from './components/Form'
import LifecycleA from './components/LifecycleA'

function App() {
  return (
    <div className="App">
      <LifecycleA />

      {/* <Form /> */}

      {/* <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1> */}
      {/* <Inline /> */}
      {/* <Stylesheet primary={true} /> */}

      {/* <NameList /> */}

      {/* <UserGreeting /> */}

      {/* <ParentComponent /> */}

      {/* <EventBind /> */}

      {/* <ClassClick />
      <FunctionClick /> */}

      {/* <Counter /> */}

      {/* <Message /> */}

      {/* <Greet name="Bruce Wyne" heroName="Batman">
        <p>This is a children props</p>
      </Greet>
      <Greet name="Clark" heroName="Superman">
        <button>Click me</button>
      </Greet>
      <Greet name="Diana" heroName="Wonder women" /> */}

      {/* <Welcome name="Bruce Wyne" heroName="Batman" />
      <Welcome name="Clark" heroName="Superman" />
      <Welcome name="Diana" heroName="Wonder women" /> */}

      {/* <Hello /> */}
    </div>
  );
}

export default App;
