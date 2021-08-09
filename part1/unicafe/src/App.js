import React, { useState } from 'react'

const Statistics = ({good, neutral, bad, allClicks}) => {
  const getAll = () => neutral + good + bad
  if (allClicks.length === 0) {
    return (
      <div>
        no feedback given
      </div>
    )
  }
  return (
    <div>
      <h1>statistics</h1>
      <table>
        <tbody>
          <StatisticTable text = 'good' value = {good}/>
          <StatisticTable text = 'neutral' value = {neutral}/>
          <StatisticTable text = 'bad' value = {bad}/>
          <StatisticTable text = 'all' value = {getAll()}/>
          <StatisticTable text = 'average' value = {(good - bad)/getAll()}/>
          <StatisticTable text = 'positive' value = {good / getAll()}/>
        </tbody>
      </table>
    </div>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const StatisticTable = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleGoodClick = () => {
    setGood(good + 1)
    setAll(allClicks.concat('G'))
  }
  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    setAll(allClicks.concat('N'))
  }
  const handleBadClick = () => {
    setBad(bad + 1)
    setAll(allClicks.concat('B'))
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick = {handleGoodClick} text = 'good'/>
      <Button handleClick = {handleNeutralClick} text = 'neutral'/>
      <Button handleClick = {handleBadClick} text = 'bad'/>
      <Statistics good = {good} neutral = {neutral} bad = {bad} allClicks = {allClicks}/>
    </div>
  )
}

export default App