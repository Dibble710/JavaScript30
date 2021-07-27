import React, { useContext } from "react";
import ExpenseItem from './ExpenseItem'
import { AppContext } from '../context/AppContext'


const ExpenseList = () => {
  const { expenses } = useContext(AppContext);

  return (
    <ul className='list-group container'>
      {expenses.map((expense) => (
        <ExpenseItem id={expense.id} name={expense.name} cost={expense.cost} key={expense.id} />
      ))}
    </ul>
  );
};

export default ExpenseList;
