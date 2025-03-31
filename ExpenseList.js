import React from "react";
function ExpenseList({expenses,onDeleteExpense})
{
    return(
        <div className="expense-list">
            <h2>Expenses</h2>
            <ul>
                {expenses.map((expense,index)=>(
                    <li key={index}>
                        {expense.title} - Rs.{expense.amount.toFixed(2)}
                        <button onClick={()=>onDeleteExpense(index)} >X</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default ExpenseList;