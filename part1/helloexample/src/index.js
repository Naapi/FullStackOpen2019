// import React from 'react';
// import ReactDOM from 'react-dom';

// const Hello = ({ name, age }) => {

//     const bornYear = () => new Date().getFullYear() - age
  
//     return (
//       <div>
//         <p>Hello {name}, you are {age} years old</p>
//         <p>So you were probably born {bornYear()}</p>
//       </div>
//     )
//   }
  


// const App = () => {
//   const name = 'Peter'
//   const age = 10
  
//   return (
//     <div>
//       <h1>Greetings</h1>
//       <Hello name="Maya" age={26 + 10} />
//       <Hello name={name} age={age} />
//     </div>
//   )
// }

// ReactDOM.render(<App />, document.getElementById('root'));

// **********************************************

// import React from 'react';
// import ReactDOM from 'react-dom';

// const App = (props) => {
//     const { counter } = props
//     return ( 
//         <div>{counter}</div>
//     )
// }
// let counter = 1
// const refresh = () => { 
//     ReactDOM.render(<App counter={counter}/>, document.getElementById('root')); 
// }

// setInterval(() => {
//     refresh()
//     counter += 1
//   }, 1000)

//*************************** */

// import React, {useState} from 'react'
// import ReactDOM from 'react-dom'

// const App = (props) => {
//     const [counter, setCounter] = useState(0)

//     setTimeout(
//         () => setCounter(counter + 1),500
//     )

//     console.log('rendering...', counter);
    

//     return(
//         <div>{counter}</div>
//     )
// }

//ReactDOM.render(<App />, document.getElementById('root'))

//******************************* */

// import React, {useState} from 'react'
// import ReactDOM from 'react-dom'

// const Display = ({counter}) => <div>{counter}</div>

// const Button = ({onClick, text}) => (
//     <button onClick={onClick}>
//       {text}
//     </button>
//   )

// const App = (props) => {

//   const [ counter, setCounter ] = useState(0)

//   const setValue = (value) => setCounter(value) 
  
//   return (
//     <div>
//       <Display counter={counter}/>
    //   <Button onClick={() => setValue(counter + 1)} text='PLUS!'/>
//       <Button onClick={() => setValue(counter - 1)} text='MINUS!'/>
//       <Button onClick={() => setValue(0)} text='ZERO!'/>
//     </div>
//   )
// }
// ReactDOM.render(<App />, document.getElementById('root'))

/********** */

// import React, {useState} from 'react'
// import ReactDOM from 'react-dom'

// const History = (props) => {
//     if (props.allClicks.length === 0) {
//       return (
//         <div>
//           the app is used by pressing the buttons
//         </div>
//       )
//     }
  
//     return (
//       <div>
//         button press history: {props.allClicks.join(' ')}
//       </div>
//     )
//   }
// const Button = ({ onClick, text }) => (
//   <button onClick={onClick}>
//     {text}
//   </button>
// )
// const App = (props) => {
//     console.log('props value is', props)
//     const [left, setLeft] = useState(0)
//     const [right, setRight] = useState(0)
//     const [allClicks, setAll] = useState([])
  
//     const handleLeftClick = () => {
//       setAll(allClicks.concat('L'))
//       setLeft(left + 1)
//     }
  
//     const handleRightClick = () => {
//       setAll(allClicks.concat('R'))
//       setRight(right + 1)
//     }

//     return (
//       <div>
//         <div>
//           {left}
//           <Button onClick={handleLeftClick} text='left' />
//           <Button onClick={handleRightClick} text='right' />
//           {right}
//           <History allClicks={allClicks} />
//         </div>
//       </div>
//     )
//   }

//   ReactDOM.render(<App />, document.getElementById('root'))

// ***************** */

import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const Display = props => <div>{props.value}</div>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = props => {
  const [value, setValue] = useState(10)

  const setToValue = newValue => {
    setValue(newValue)
  }

  return (
    <div>
      <Display value={value} />
      <Button handleClick={() => setToValue(10)} text="ten"/>   
      <Button handleClick={() => setToValue(value + 1)} text="increment" />
      <Button handleClick={() => setToValue(value - 1)} text="minus"/>   
      <Button handleClick={() => setToValue(0)} text="ZERO"/>   
      <Button handleClick={() => setToValue(9000)} text="OVER 9000!!"/>   
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))
