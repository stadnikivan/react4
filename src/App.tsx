import React from 'react';
import './App.css';
import Timer from './Timer';


function App() {
  const [timeOn, setTimeOn] = React.useState(false)
  return (<div className="App">
            <h1>Timer</h1>
            <div className="Clock">
              <button onClick={() => setTimeOn(!timeOn)}>
                { timeOn ? <p>stop</p> : <p>start</p>}
              </button>
              { timeOn ? <Timer /> : null }
            </div>
          </div>
  );
}

export default App;
