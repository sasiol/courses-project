
import React from 'react'

const Course = ({ course }) => {
    return (
      <div>
        <Header course={course} />
        <Contents course ={course} />
      
      </div>
    )
  }
  
  const Header = ({ course }) => {
    return (
      <h1>{course.name} </h1>
    )
  }
  const Total = ({ parts }) => {
    const exercise = parts.map((p) => p.exercises).reduce((total, nyt)=> total+nyt)
    return (
      <p>Total {exercise}</p>
    )
  }
  
  
  const Part = ({ part }) => {
    return (
      <li>{part.name} {part.exercises} </li>
  
  
    )
  }
  const Contents = ({ course }) => {
    return (
      <div>
      <ul> {course.parts.map(part => <Part key={part.id} part={part} />)}</ul>
      <Total parts={course.parts} />
      </div>
    )
  }
  export default Course