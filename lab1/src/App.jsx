import { useState } from 'react'
import Header from "./Header"
import Content from "./Content"
import Total from "./Total"
import Display from "./Display"
import Button from "./Button"
const App = () => {
  const [counter, setCounter] = useState(0)
  console.log('rendering with counter value', counter)
  
  const increaseByOne = () => {
    console.log('increasing, value before', counter)    
    setCounter(counter + 1)
  }

  const decreaseByOne = () => { 
    console.log('decreasing, value before', counter)    
    setCounter(counter - 1)
  }

  const setToZero = () => {
    console.log('resetting to zero, value before', counter)    
    setCounter(0)
  }

  const course = { 
    name: 'Half Stack application development',
    parts: [
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
  }
  return (
    <div>
      <Header course={course.name} />
      <Content parts={[course.parts[0].name, course.parts[1].name, course.parts[2].name]} exercises={[course.parts[0].exercises, course.parts[1].exercises, course.parts[2].exercises]} />
      <Total exercises={[course.parts[0].exercises, course.parts[1].exercises, course.parts[2].exercises]} />
      <br /><br />
      <Button onClick={increaseByOne} text='plus' />
      <Button onClick={decreaseByOne} text='minus' />
      <Button onClick={setToZero} text='zero' />
      <br /><br />
      <Display counter={counter} />
    </div>
  )
}

export default App