import React, { useState } from 'react';
import Login from './Login';
import Expenses from './components/Expenses';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = (email, password) => {
    // Real project mein yahan API call hoti hai
    // Abhi ke liye hum seedha login kar rahe hain
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  const expenses = [
    { id: 'e1', title: 'School fee', amount: 200, date: new Date(2026, 4, 25) },
  ];

  return (
    <React.Fragment>
      <h2 style={{textAlign: 'center'}}>Sultanpur Tech Portal</h2>
      
      {!isLoggedIn && <Login onLogin={loginHandler} />}
      
      {isLoggedIn && (
        <>
          <Expenses items={expenses} />
          <button onClick={logoutHandler} style={{margin: '20px auto', display: 'block'}}>Logout</button>
        </>
      )}
    </React.Fragment>
  );
}

export default App;