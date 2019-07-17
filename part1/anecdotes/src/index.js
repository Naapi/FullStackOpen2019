import React, { useState } from 'react'
import ReactDOM from 'react-dom';

const Button = (props) => (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
const Vote = (props) => {
    return (
    <button onClick={props.handleClickVote}>
    {props.text}
    </button>
    )
}
const App = (props) => {
    const [selected, setSelected] = useState(0)
    const [voted, setVoted] = useState(new Array(6).fill(0))
    // const [voted, setVoted] = useState({
    //     0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0
    //   })
 
    const setToVote = () => setVoted (
        voted.map( (value, index) => index ===selected ? value + 1 : value )
        // Object.keys(voted).map( (value, index) => value === )
        // [...voted, sulut.voted[selected] += 1]
    )
    const setToValue = newValue => {
        setSelected(newValue)
      }
    const randomize = () => {
        return (
        Math.floor(Math.random() * 6)
        )
    }
    const getHighest = voted.indexOf(Math.max(...voted))

    //MADCSS
    const wildH2 = {
        color: 'blue'
    };
    const rainbowBg = {
        backgroundImage: 'linear-gradient(to right, pink, violet, indigo, cyan, blue, green, yellow, orange, red)',
        color: 'white'
    };

    //DEBUG
    console.log(voted);
    console.log(selected);
    console.log(getHighest);
    return (
      <div>
        <center>
        <h1 style={rainbowBg}>Anecdote of the day</h1>

        <p>{props.anecdotes[selected]}</p>
        <p>Has {voted[selected]} votes</p>
        <Vote handleClickVote={() => setToVote()} text="Vote!" />
        <Button handleClick={() => setToValue(randomize)} text="Next anecdote!" />
        <h2 style={wildH2}>Anecdote with most votes</h2>
        <p>{props.anecdotes[getHighest]}</p>
        <p>Most voted with {voted[getHighest]} votes</p>
        </center>
      </div>
    )
  }

  
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById('root'));
