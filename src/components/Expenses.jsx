import React from 'react';
import ExpenseItem from './ExpenseItem';
import Card from './Card';
import './Expenses.css';

function Expenses(props) {
  return (
    <Card className="expenses">
      {/* Aaj ka naya feature: Filter Dropdown (Abhi sirf UI hai) */}
      <div className='expenses-filter'>
        <div className='expenses-filter__control'>
          <label style={{color: 'white'}}>Filter by year</label>
          <select>
            <option value='2026'>2026</option>
            <option value='2025'>2025</option>
            <option value='2024'>2024</option>
          </select>
        </div>
      </div>

      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
}

export default Expenses;