import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Header from './Components/organisms/header';
import LastThing from './Components/Pages/last-thing';
import YourCar from './Components/Pages/your-car';
import YourDeductibles from './Components/Pages/your-deductibles';
import YourJob from './Components/Pages/your-job';
import { RootState } from './Store/store';

function App() {

  const formStep = useSelector((state: RootState) => state.formStepsManagement.formStep);
  console.log(formStep);

  return (
    <div className="App">
      <Header formStep={formStep}></Header>
      {
        formStep == 1 && <YourCar></YourCar>
      }
      {
        formStep == 2 && <YourJob></YourJob>
      }
      {
        formStep == 3 && <LastThing></LastThing>
      }
      {
        formStep == 4 && <YourDeductibles></YourDeductibles>
      }
    </div>
  );
}

export default App;
