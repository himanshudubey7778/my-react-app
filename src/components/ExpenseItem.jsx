import ExpenseItem from './ExpenseItem';
import Card from './Card.jsx';
import './Expenses.css';

function Expenses(props) {
  return (
    <Card className="expenses">
      {/* Yahan bhi props.items hona chahiye */}
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