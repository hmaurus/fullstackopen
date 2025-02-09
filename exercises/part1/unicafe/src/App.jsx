import { useState } from 'react'

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const Statistic = ({ good, neutral, bad }) => {
  if (good + neutral + bad === 0) {
    return (
      <div>
        <h2>statistics</h2>
        <p>No feedback given</p>
      </div>
    )} else {
  return (
    <>
      <h2>statistics</h2>
      <table style={{ border: '1px solid black' }}>
        <tbody>
          <tr>
            <StatisticLineTable text='good' value={good} />
          </tr>
          <tr>
            <StatisticLineTable text='neutral' value={neutral} />
          </tr>
          <tr>
            <StatisticLineTable text='bad' value={bad} />
          </tr>
          <tr>
            <td style={{ padding: '4px 16px' }}>all</td>
            <td style={{ padding: '4px 16px' }}>{good + neutral + bad}</td>
          </tr>
          <tr>
            <td style={{ padding: '4px 16px' }}>average</td>
            <td style={{ padding: '4px 16px' }}>{(good - bad) / (good + neutral + bad)}</td>
          </tr>
          <tr>
            <td style={{ padding: '4px 16px' }}>positive</td>
            <td style={{ padding: '4px 16px' }}>{good / (good + neutral + bad) * 100} %</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}}

const StatisticLineTable = ({ text, value }) => {
  return (
    <>
      <td style={{ padding: '4px 16px' }}>{text}</td>
      <td style={{ padding: '4px 16px' }}>{value}</td>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClickGood = () => setGood(good + 1)
  const handleClickNeutral = () => setNeutral(neutral + 1)
  const handleClickBad = () => setBad(bad + 1)

  return (
    <div>
      <h2>give feedback</h2>
      <Button onClick={handleClickGood} text='good' />
      <Button onClick={handleClickNeutral} text='neutral' />
      <Button onClick={handleClickBad} text='bad' />  
      <Statistic good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App