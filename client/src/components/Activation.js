// src/components/Activation.js
import React from 'react';
import axios from 'axios';
import apiList from '../services/apiList';

const Activation = ({ plan }) => {
  const handleActivation = () => {
    axios.post(apiList.activate, { planId: plan._id, duration: plan.duration, description:plan.description })
      .then(response => {
        alert('Plan activated!');
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error activating plan:', error);
        alert('Failed to activate the plan. Please try again.');
      });
  };

  return (
    <div className="activation-modal">
      <h2>Activate Plan: {plan.name}</h2>
      <p>{plan.description}</p>
      <p>Price: <b>{plan.price}/-</b></p>
      <button className="btn btn-success" onClick={handleActivation}>Confirm Activation</button>
    </div>
  );
};

export default Activation;
