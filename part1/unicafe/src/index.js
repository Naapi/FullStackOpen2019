// import React, { useState } from 'react'
// import ReactDOM from 'react-dom'

// //const Display = props => <div>{props.name} {props.value}</div>

// const Button = (props) => (
//     <button onClick={props.handleClick} style={{backgroundColor:props.color}}>
//       {props.text}
//     </button>
//   )
// const Statistics = (props) => {
    
//     const all = () => {
//         return (props.good + props.neutral + props.bad)
//     }
//     const average = () => {
//         return ((props.good-props.bad)/(props.good+props.neutral+props.bad))
//     }
//     const positive = (good,neutral,bad) => {
//         return (((props.good/props.bad)/(props.good+props.neutral+props.bad)*100).toFixed(13) + ' %')
//     }
    
 
//     console.log(all)
//     console.log(props)
//     if ((props.good + props.neutral + props.bad) > 0) {
//         return (
//             <div>
//                     <div>Good {props.good}</div>
//                     <div>Neutral {props.neutral}</div>
//                     <div>Bad {props.bad}</div>
//                     <div>All {all()}</div>
//                     <div>Average {average()}</div>
//                     <div>Positive {positive()}</div>

//             </div>
//         )
//     } else {
//         return <h4><font color='red'>No feedback given</font></h4>
//     }    
    
// }
// const App = () => {
//   // save clicks of each button to own state
//   const [good, setGood] = useState(0)
//   const [neutral, setNeutral] = useState(0)
//   const [bad, setBad] = useState(0)
  
//   const setToGood = newGood => {
//     setGood(newGood)
// }
//   const setToNeutral = newNeutral=> {
//     setNeutral(newNeutral)
// }
//   const setToBad = newBad => {
//     setBad(newBad)
// }

// return (
//     <div>
//       <h1> <font color="green">Give feedback</font></h1>
//       <Button handleClick={() => setToGood(good + 1)} text="Good" color="green"/>
//       <Button handleClick={() => setToNeutral(neutral + 1)} text="Neutral" color="tan"/>
//       <Button handleClick={() => setToBad(bad + 1)} text="Bad" color="red"/>
//       <h2>Statistics</h2>
//       <Statistics good={good} neutral={neutral} bad={bad}/>
      
//       {/* <Display name={"All"} value={good+neutral+bad} /> */}
//       {/* <Display name={"Average"} value={(good-bad)/(good+neutral+bad)} />
//       <Display name={"Positive"} value={((good/bad)/(good+neutral+bad)*100).toFixed(13) + ' %'}/> */}
//     </div>
//   )
// }
// ReactDOM.render(<App />, document.getElementById('root'));


import React, { useState } from 'react'
import ReactDOM from 'react-dom'

//const Display = props => <div>{props.name} {props.value}</div>

const Buttons = (props) => (
    
    <button onClick={props.onClick} style={{backgroundColor:props.color}}>
    {props.text}
    </button>
    
)

const Button = (props) => {
    // <button onClick={props.handleClick} style={{backgroundColor:props.color}}>
    //   {props.text}
    // </button>
    console.log(props, "Button stuff");
    
    return (
        <div>
            <Buttons onClick={() => props.setToGood(props.good + 1)} text="Good" color="green"/> 
            <Buttons onClick={() => props.setToNeutral(props.neutral + 1)} text="Neutral" color="tan"/>
            <Buttons onClick={() => props.setToBad(props.bad + 1)} text="Bad" color="red"/>
        </div>
    )
}

const Statistic = (props) => {
    console.log(props);
    
    return (
        // <div>{props.text} {props.value}</div>
        <tr>
            <td>{props.text}</td> 
            <td>{props.value}</td>
        </tr>
    )
}

const Statistics = (props) => {
    console.log(props, "StatisticS!");


    if ((props.good + props.neutral + props.bad) > 0) {
    return (
        <table>
            <tbody>
                <Statistic text="Good" value={props.good} />
                <Statistic text="Neutral" value={props.neutral} />
                <Statistic text="Bad" value={props.bad} />
                <Statistic text="All" value={props.good + props.neutral + props.bad} />
                <Statistic text="Average" value={(props.good-props.bad)/(props.good+props.neutral+props.bad)} />
                <Statistic text="Positive" value={((props.good/props.bad)/(props.good+props.neutral+props.bad)*100) + ' %'} /> 
            </tbody>
        </table>
    )
    } else {
        return <h4><font color='red'>No feedback given</font></h4>
    }    
    
}
const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const setToGood = newGood => {
    setGood(newGood)
}
  const setToNeutral = newNeutral=> {
    setNeutral(newNeutral)
}
  const setToBad = newBad => {
    setBad(newBad)
}

return (
    <div>
      <h1> <font color="green">Give feedback</font></h1>
      <Button setToGood={setToGood} setToNeutral={setToNeutral} setToBad={setToBad} good={good} neutral={neutral} bad={bad}/>
      <h2>Statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById('root'));