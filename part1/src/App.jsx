
import './App.css'

import React from 'react'


function App() {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  return (
    <div>
      <Header courseName={course} />
      <Content  part1={part1} part2={part2} part3={part3}/>
      <Total ex1={part1.exercises} ex2={part2.exercises} ex3={part3.exercises} />
    </div>
  )
}

const Header = ({courseName}) => {
  return (
    <h1>{courseName}</h1>
  )
}

const Content = ({ part1, exercises1, part2, exercises2, part3, exercises3 }) => {
  return (

  <div>
    <Part partName={part1.name} exercises={part1.exercises}/>
    <Part partName={part2.name} exercises={part2.exercises}/>
    <Part partName={part3.name} exercises={part3.exercises}/>
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

const Total = ({ex1 , ex2 , ex3}) => {
  return (
    <p>Number of exercises {ex1 + ex2 + ex3}</p>
  )
}

export default App
