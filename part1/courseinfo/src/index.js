// import React from 'react'
// import ReactDOM from 'react-dom'

//PART 1.1a

// const Header = (props) => {
//     return (
//         <div>
//             <p>
//                 {props.course}
//             </p>
//         </div>
//     )    
// }
// const Content = (props) => {
//     return (
//         <div>
//                 <Part part1={props.part1} exercises1={props.exercises1} />
//                 <Part part2={props.part2} exercises2={props.exercises2} />
//                 <Part part3={props.part3} exercises3={props.exercises3} />                
//         </div>
//     )    
// }
// const Part = (props) => {
//     return (
//       <div>
//             <p>
//                 {props.part1} {props.exercises1}
//             </p>
//             <p>
//                 {props.part2} {props.exercises2}
//             </p>
//             <p>
//                 {props.part3} {props.exercises3}
//             </p>
//       </div>
//     )
//   }

// const Total = (props) => {
//     return (
//         <div>
//             <p>
//                 Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}
//             </p>
//         </div>
//     )
// }

// const App = () => {
//     // const-definitions
//     const course = 'Half Stack application development'
//     const part1 = 'Fundamentals of React'
//     const exercises1 = 10
//     const part2 = 'Using props to pass data'
//     const exercises2 = 7
//     const part3 = 'State of a component'
//     const exercises3 = 14

//     return (
//       <div>
//         <h1><Header course={course} /></h1>
//         <Content exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} part1={part1} part2={part2} part3={part3} />
//         <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
//       </div>
//     )
//   }
// ReactDOM.render(<App />, document.getElementById('root'))

// PART 1.1b

import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    return (
        <div>
            <h1>
                {props.course}
            </h1>
        </div>
    )    
}

const Content = (props) => {
    return (
        <div>
                <Part part1={props.parts[0].name} exercises1={props.parts[0].exercises} />
                <Part part2={props.parts[1].name} exercises2={props.parts[1].exercises} />
                <Part part3={props.parts[2].name} exercises3={props.parts[2].exercises} />                
        </div>
    )    
}
const Part = (props) => {
    console.log(props , "Inside Part");
    
    return (
      <div>
            <p>
                {props.part1} {props.exercises1} 
            </p>
            <p>
                {props.part2} {props.exercises2}
            </p>
            <p>
                {props.part3} {props.exercises3}
            </p>
      </div>
    )
  }

const Total = (props) => {
    console.log(props)
    return (
        <div>
            <p>
                Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}
            </p>
        </div>
    )
}

// const App = () => {
//   const course = 'Half Stack application development'
//   const parts = [
//     {
//       name: 'Fundamentals of React',
//       exercises: 10
//     },
//     {
//       name: 'Using props to pass data',
//       exercises: 7
//     },
//     {
//       name: 'State of a component',
//       exercises: 14
//     }
//   ]
const App = () => {
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
  //console.log(parts);
  console.log(course);  
  console.log(course.parts);
  
    return (
      <div>
        <Header course={course.name}/>
        <Content parts={course.parts} />
        <Total parts={course.parts} />

        {/* <h1><Header course={course}/></h1>
        <Content exercises1={parts[0].exercises} exercises2={parts[1].exercises} exercises3={parts[2].exercises} 
        part1={parts[0].name} part2={parts[1].name} part3={parts[2].name} />
        <Total exercises1={parts[0].exercises} exercises2={parts[1].exercises} exercises3={parts[2].exercises}/> */}

      </div>
    )
  }
ReactDOM.render(<App />, document.getElementById('root'))
