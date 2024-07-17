import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Activation from './components/Activation';
import apiList from './services/apiList';
import './App.css'
import PlanItem from './components/PlanItem';

function App() {
  const [plans, setPlans] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState(null);

  useEffect(() => {
    axios.get(apiList.plans)
      .then(response => setPlans(response.data))
      .catch(error => console.error('Error fetching plans:', error));
  }, []);

   const selectPlan = (plan) => {
    setSelectedPlan(plan);
  };


  return (
    <div className="App pt-5">
      <h1 className='text-primary'>Inflight Internet Plans</h1>
      <div className='container'>
        <div className='row'>
          <h1 className='col-12 text-warning'>Available Plans</h1>
          {plans.length > 0 ?plans.map(plan => (
            <PlanItem plan={plan} selectPlan={selectPlan}/>
          )):<div class="spinner-border text-primary text-center"></div>
          }
      
        </div>
      </div>
      {selectedPlan && <Activation plan={selectedPlan} />}
    </div>
  );
}

export default App;
