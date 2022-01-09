import React from 'react'

const course = 'Half Stack application development'
const partName = {
  part1: 'Fundamentals of React',
  part2: 'Using props to pass data',
  part3: 'State of a component'
}
const exercisesCount = {
  exercises1: 10,
  exercises2: 7,
  exercises3: 14
}

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.partData.part} {props.partData.exercises}
    </p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part partData={partData1}></Part>
      <Part partData={partData2}></Part>
      <Part partData={partData3}></Part>
    </div>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.exercisesCount.exercises1 + props.exercisesCount.exercises2 + props.exercisesCount.exercises3}</p>
  )
}

const App = () => {
  return (
    <div>
      <Header course={course}></Header>
      <Content partName={partName} exercisesCount={exercisesCount}></Content>
      <Total exercisesCount={exercisesCount}></Total>
    </div>
  )
}

export default App