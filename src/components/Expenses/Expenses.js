import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
// import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import React , { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  // console.log(props.products.length)
  const [FilteredYear,setFilteredYear]=useState('2022');
  const filterChangeHandler=(selectedYear)=>{
    setFilteredYear(selectedYear);
  }
  const filteredExpenses = props.products.filter((expense)=>{
    return expense.date.getFullYear().toString()===FilteredYear;
  })
  // let expensesContent=<h1 className="text-white">No Expenses</h1>;
  // if (filteredExpenses.length > 0 ) {
  //   expensesContent=filteredExpenses.map((product) => {
  //     return (
  //       <ExpenseItem
  //         key={product.id}
  //         title={product.title}
  //         price={product.price} 
  //         date={product.date}
  //       ></ExpenseItem>
  //     );
  //     })
  // }
  return (
    <Card className="expenses">

      <ExpenseFilter selected={FilteredYear} onChangeFilter={filterChangeHandler}/>
      
      {/* {
        filteredExpenses.length===0 ? (<h1 className="text-white">No Expenses</h1>):
        (filteredExpenses.map((product) => {
          return (
            <ExpenseItem
              key={product.id}
              title={product.title}
              price={product.price} 
              date={product.date}
              
            ></ExpenseItem>
          );
          })
        )
      } */}
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList filteredExpenses={filteredExpenses} />
      {/* {expensesContent} */}
      {/* <ExpenseItem 
          title={props.products[0].title}
          price={props.products[0].price}
          date={props.products[0].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.products[1].title}
          price={props.products[1].price}
          date={props.products[1].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.products[2].title}
          price={props.products[2].price}
          date={props.products[2].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.products[3].title}
          price={props.products[3].price}
          date={props.products[3].date}
        ></ExpenseItem> */}

      {/* <h2>{props.mTitle}</h2> */}
    </Card>
  );
};

export default Expenses;
