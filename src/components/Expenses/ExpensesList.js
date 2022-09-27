import React from "react";
import ExpenseItem from "./ExpenseItem";
const ExpensesList = (props) => {
// const ExpensesList = () => <h1 className="text-white">No Expenses</h1>;
if (props.filteredExpenses.length > 0) {
  
    return props.filteredExpenses.map((product) => {
      return (
        <ExpenseItem
          key={product.id}
          title={product.title}
          price={product.price}
          date={product.date}
        ></ExpenseItem>
      );
    });
  };
    return <h1 className="text-white">No Expenses</h1>;
}
export default ExpensesList;
