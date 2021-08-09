import React, { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients'
  ]
   
  const [selected, setSelected] = useState(0)
  const [mostVotesIndex, setMostVotesIndex] = useState(0)
  const [votes, setVotes] = useState({0:0, 1:0, 2:0, 3:0, 4:0, 5:0, 6:0})

  const handleNextAnecdoteClick = () => {
    setSelected(getRandomInt(anecdotes.length))
  }
  const handleVoteClick = () => {
    const copy = {...votes}
    copy[selected] = copy[selected] + 1
    if(copy[mostVotesIndex] < copy[selected]){
      setMostVotesIndex(selected)
    }

    setVotes(copy)
  }

  const getRandomInt = (max) => Math.floor(Math.random() * max)
  
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>votes: {votes[selected]}</p>
      <button onClick = {handleVoteClick}>
        vote
      </button>
      <button onClick = {handleNextAnecdoteClick}>
        next anecdote
      </button>

      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[mostVotesIndex]}</p>
      <p>votes: {votes[mostVotesIndex]}</p>
    </div>
  )
}

export default App