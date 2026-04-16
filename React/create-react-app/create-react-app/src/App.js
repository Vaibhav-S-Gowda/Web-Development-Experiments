import logo from './logo.svg';
// import './App.css';
import Greetings from './Greetings';

function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );

//   let a = 10, b = 20;
//   return (
//     <div className='App'>
//       <header className='App-header'>
//         <h1>React is {a + b} times better with JSX</h1>
//         <ul>
//           <li>Apples</li>
//           <li>Bananas</li>
//           <li>Cherries</li>
//         </ul>
//         <p>End of the List</p>

//         <label>Event Name:</label>
//         <input type='text' id="event-name" className='color'></input>
//         </header>
//     </div>
//   );

  return (
    <div className='App'>
      <Greetings name = "Shannu"/>
      {/* <Greetings name = "Arjuna"/> */}
    </div>
  );
}



export default App;
