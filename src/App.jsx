import Expenses from './components/Expenses';

function App() {
  const expenses = [
    { id: 'e1', title: 'School fee', amount: 200, date: new Date(2026, 4, 25) },
    { id: 'e2', title: 'House Rent', amount: 2000, date: new Date(2026, 4, 25) },
    { id: 'e3', title: 'Food expense', amount: 1000, date: new Date(2026, 4, 25) },
    { id: 'e4', title: 'Car Insurance', amount: 5000, date: new Date(2026, 4, 25) }
  ];

  return (
    <div>
      <h2 style={{textAlign: 'center'}}>Let's get started</h2>
      {/* Yahan 'item' ko 'items' kar do */}
      <Expenses items={expenses} /> 
    </div>
  );
}

export default App;