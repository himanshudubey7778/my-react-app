import React from 'react';
import Expenses from './components/Expenses'; // Ye line import ke liye hai
import './App.css';

function App() {
  // Ye wahi data hai jo humne pehle discuss kiya tha
  const expenses = [
    { id: 'e1', title: 'School fee', amount: 200, date: new Date(2026, 4, 25) },
    { id: 'e2', title: 'House Rent', amount: 2000, date: new Date(2026, 4, 25) },
    { id: 'e3', title: 'Food expense', amount: 1000, date: new Date(2026, 4, 25) },
    { id: 'e4', title: 'Car Insurance', amount: 5000, date: new Date(2026, 4, 25) }
  ];

  return (
    <div>
      <h2 style={{textAlign: 'center', color: '#2c3e50'}}>My Expense Tracker</h2>
      {/* Yahan hum 'Expenses' component ko data (items) bhej rahe hain */}
      <Expenses items={expenses} /> 
    </div>
  );
}

export default App;