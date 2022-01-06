import React from 'react';
import './App.css';
import LastThing from './Components/Pages/last-thing';
import YourCar from './Components/Pages/your-car';
import YourDeductibles from './Components/Pages/your-deductibles';
import YourJob from './Components/Pages/your-job';

function App() {
  return (
    <div className="App">
      <YourCar></YourCar>
      {/* <YourJob></YourJob>
      <LastThing></LastThing>
      <YourDeductibles></YourDeductibles> */}
    </div>
  );
}

export default App;
