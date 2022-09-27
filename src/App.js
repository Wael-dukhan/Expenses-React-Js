import React , { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
// import ExpensesChart from "./components/Expenses/ExpensesChart";
const InitialExpenses = [
  {
    id: "e1",
    title: "BMW Car",
    price: 20000,
    date: new Date(2022, 7, 14),
  },
  {
    id: "e2",
    title: "Audi Car",
    price: 20000,
    date: new Date(2022, 8, 2),
  },
  {
    id: "e3",
    title: "Tesla Car",
    price: 20000,
    date: new Date(2022, 9, 20),
  },
  {
    id: "e4",
    title: "Hyundai Car",
    price: 20000,
    date: new Date(2022, 11, 12),
  },
];

const App = () => {
 
  const [expenses, setExpenses] = useState(InitialExpenses);
  const addExpenseHandler=expense=>{
    // console.log('IN App.js')
    // console.log(expense)
    setExpenses((expenses)=>[
      ...expenses,
      expense,
    ]);
    // console.log(expenses)
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses products={expenses}/>
      {/* <div style={{backgroundColor:'red','textAlign':'center',color:'greenyellow',fontSize:'30px'}}> Some Style </div> */}
    </div>
  );
}

export default App;
