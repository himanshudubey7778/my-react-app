import React from 'react';
import Expenses from './components/Expenses'; // Purana component rehne dijiye
import './App.css';

function App() {
  const expenses = [
    { id: 'e1', title: 'School fee', amount: 200, date: new Date(2026, 4, 25) },
    { id: 'e2', title: 'House Rent', amount: 2000, date: new Date(2026, 4, 25) },
    { id: 'e3', title: 'Food expense', amount: 1000, date: new Date(2026, 4, 25) },
    { id: 'e4', title: 'Car Insurance', amount: 5000, date: new Date(2026, 4, 25) }
  ];

  // Kal ke DBMS exam ke liye revision data
  const dbmsConcepts = [
    { id: 'd1', title: 'Normalization', amount: '1NF, 2NF, 3NF', date: new Date(2026, 4, 5) },
    { id: 'd2', title: 'ACID Properties', amount: 'Atomicity...', date: new Date(2026, 4, 5) }
  ];

  return (
    <div>
      <h2 style={{textAlign: 'center', color: '#2c3e50'}}>Sultanpur BCA DBMS Revision 📚</h2>
      {/* Hum wahi Expenses component use kar rahe hain DBMS data ke saath */}
      <Expenses items={dbmsConcepts} /> 
      
      <hr />
      
      <h2 style={{textAlign: 'center', color: '#2c3e50'}}>My Expense Tracker</h2>
      <Expenses items={expenses} /> 
    </div>
  );
}

export default App;