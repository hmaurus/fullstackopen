import { useState } from 'react'
import Header from "./Header"
import Content from "./Content"
import Total from "./Total"
import Display from "./Display"
import Button from "./Button"
import History from "./History"
import Button2 from './Button2'
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

  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)
  
  const handleLeftClick = () => {  
    setAll(allClicks.concat('L'))    
    const updatedLeft = left + 1
    setLeft(updatedLeft)  
    setTotal(updatedLeft + right)
  }
  const handleRightClick = () => {    
    setAll(allClicks.concat('R'))  
    const updatedRight = right + 1  
    setRight(updatedRight)  
    setTotal(left + updatedRight)
  }

  const [value, setValue] = useState(10)

  const setToValue = (newValue) => {
    console.log('value now', newValue)
    setValue(newValue)
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
      <br /><br />
      <br /><br />
      {left}
      <Button onClick={handleLeftClick} text='left' />
      <Button onClick={handleRightClick} text='right' />
      {right}
      <br /><br />
      <History allClicks={allClicks} />
      <br /><br />
      <p>Total: {total}</p>
      <br /><br />
      <Button2 onClick={() => setToValue(1000)} text='thousand' />
      <Button2 onClick={() => setToValue(0)} text='reset' />
      <Button2 onClick={() => setToValue(value + 1)} text='increment' />
      <br></br>
      {value}
      <br></br>
    </div>
  )
}

export default App