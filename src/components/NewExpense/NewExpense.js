import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const SaveExpenseDataHandler=(EnteredexpenseData)=>{
    const expenseData={
      ...EnteredexpenseData,
      id:Math.random().toString(),
    };
    // console.log('printed from NewExpense.js ',expenseData)
    props.onAddExpense(expenseData)
  }
  return (
    <div className="new-expense">
      <h1>Add New Expense</h1>
      <ExpenseForm onSaveExpenses={SaveExpenseDataHandler}/>
    </div>
  );
};

export default NewExpense;
