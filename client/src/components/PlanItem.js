import React from 'react'

export default function PlanItem(props) {
    const {plan,selectPlan } = props;
    

  return (
    <div key={plan._id} className='col-md-4 mb-3'>
        
        <div className='card  p-5'>
        <b className="card-title ">{plan.name}</b>
          <p className="card-text">{plan.description}</p>
          <p className="card-text">Price: <b>{plan.price}/-</b></p>
          <button className="btn btn-warning" onClick={() => selectPlan(plan)}>Activate</button>
        </div>
  </div>
  )
};
