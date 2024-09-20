
import './App.css'

import React from 'react'


function App() {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
  return (
    <div>
      <Header courseName={course} />
      <Content  parts={parts}/>
      <Total parts={parts}/>
    </div>
  )
}

const Header = ({courseName}) => {
  return (
    <h1>{courseName}</h1>
  )
}

const Content = ({ parts }) => {
  return (

  <div>
    <Part partName={parts[0].name} exercises={parts[0].exercises}/>
    <Part partName={parts[1].name} exercises={parts[1].exercises}/>
    <Part partName={parts[2].name} exercises={parts[2].exercises}/>
  </div>

  )
}

const Part = ({partName, exercises}) => {
  return (
    <p>
      {partName} {exercises}
    </p>
  )
}

const Total = ({parts}) => {
  return (
    <p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
  )
}

export default App
