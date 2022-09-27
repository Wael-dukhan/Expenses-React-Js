import "./ExpenseForm.css";
import React,{useState} from "react";
const ExpenseForm = (props) => {
  // const [EnteredTiltle,setEnteredTitle]=useState("");
  // const [EnteredPrice,setEnteredPrice]=useState("");
  // const [EnteredDate,setEnteredDate]=useState("");
  // console.log(props.onSaveExpenses)
  const [UserInput,setUserInput]=useState({
    EnteredTiltle:"",
    EnteredPrice:"",
    EnteredDate:"",
  });
  const TitleChangeHandler=(event)=>{
    setUserInput((UserInput)=>{
      return{ 
      // EnteredTiltle:UserInput.EnteredTiltle,
      // EnteredPrice:UserInput.EnteredPrice,
      // EnteredDate:UserInput.EnteredDate,
      ...UserInput,
      EnteredTiltle:event.target.value
    }})
    // console.log(UserInput)
  }

  const PriceChangeHandler=(event)=>{
    setUserInput((UserInput)=>{
      return{ 
      // EnteredTiltle:UserInput.EnteredTiltle,
      // EnteredPrice:UserInput.EnteredPrice,
      // EnteredDate:UserInput.EnteredDate,
      ...UserInput,
      EnteredPrice:event.target.value
    }})
    // console.log(UserInput)
  }  
  const DateChangeHandler=(event)=>{
    setUserInput((UserInput)=>{
      return{ 
      // EnteredTiltle:UserInput.EnteredTiltle,
      // EnteredPrice:UserInput.EnteredPrice,
      // EnteredDate:UserInput.EnteredDate,
      ...UserInput,
      EnteredDate:event.target.value
    }})
    // console.log(UserInput)
  }
  
  const SubmitHandler = (event)=>{
    event.preventDefault();
    
    const expenseDate={
      title:UserInput.EnteredTiltle,
      price:+ UserInput.EnteredPrice,
      date:new Date(UserInput.EnteredDate),
    }
    // console.log(expenseDate)
    setUserInput({     
      EnteredTiltle:"",
      EnteredPrice:"",
      EnteredDate:"",
    })
    props.onSaveExpenses(expenseDate);

  }
  
  return (
    <form onSubmit={SubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label >Title</label>
          <input type="text" id="title" value={UserInput.EnteredTiltle} onChange={TitleChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Price</label>
          <input type="number" min="1" step="0.1" value={UserInput.EnteredPrice} onChange={PriceChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2010-01-01" max="2022-12-31" value={UserInput.EnteredDate}  onChange={DateChangeHandler}/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
