/*
 * @Author: your name
 * @Date: 2021-11-14 22:20:59
 * @LastEditTime: 2022-01-09 15:39:47
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \全栈课程作业\part1\src\App.js
 */
import React from 'react'

const course = {
  name: 'Half Stack application development',
  part: [
    {
      part: 'Fundamentals of React',
      exercises: 10
    },
    {
      part: 'Using props to pass data',
      exercises: 7
    },
    {
      part: 'State of a component',
      exercises: 14
    }
  ]
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
      {
        props.parts.map((item, index) => 
          <Part key={index} partData={item}></Part>
        )
      }
    </div>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.parts.reduce((accumulator, currentValue) => accumulator + currentValue.exercises, 0)}</p>
  )
}

const App = () => {
  return (
    <div>
      <Header course={course.name}></Header>
      <Content parts={course.part}></Content>
      <Total parts={course.part}></Total>
    </div>
  )
}

export default App