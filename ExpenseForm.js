import { useState } from "react";
function ExpenseForm({onAddExpense})
{
    const[title,setTitle]=useState("")
    const[amount,setAmount]=useState("")
    function handleSubmit(e)
    {
        e.preventDefault();
        if(!title || !amount)return;
        onAddExpense({title,amount:parseFloat(amount)})
        setAmount("");
        setTitle("");// clear input field
    }
    
    return(
        <form onSubmit={handleSubmit}className="expense-form">
            <input type="text" placeholder="Expense Title" value={title} onChange={(e)=>setTitle(e.target.value)}></input>
            <input type="number" placeholder="Expense Amount" value={amount} onChange={(e)=>setAmount(e.target.value)}></input>
            <button type="submit"> Add Expense</button>
        </form>    
    )
}
export default ExpenseForm;