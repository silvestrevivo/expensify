import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';

const ExpenseListItem = ({ removeExpense, id, description, amount, createdAt }) => {
  return (
    <div>
      <h3>{description}</h3>
      <p>{amount} - {createdAt}</p>
      <button onClick={() => removeExpense({ id })}>Remove</button>
    </div>
  );
}

export default connect(null, { removeExpense })(ExpenseListItem);
