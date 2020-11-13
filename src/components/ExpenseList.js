import React from "react";
import ExpenseItem from "./ExpenseItem";
import { MdDelete } from "react-icons/md";

export const ExpenseList = ({
  expenses,
  handleDelete,
  handleEdite,
  clearItems,
}) => {
  return (
    <div>
      <ul className="list">
        {expenses.map((expense) => {
          return (
            <ExpenseItem
              key={expense.id}
              expense={expense}
              handleDelete={handleDelete}
              handleEdite={handleEdite}
            />
          );
        })}
      </ul>
      {expenses.length > 0 && (
        <button className="btn" onClick={clearItems}>
          Clear expenses
          <MdDelete className="btn-icon" />
        </button>
      )}
    </div>
  );
};

export default ExpenseList;
