import './project.css';
import { useState,useEffect } from 'react';
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";
function Expencetracking()
{
    const [expenses,setExpense]=useState([])
    const [Salary,setSalary]=useState([5000])
    const addExpense=(expense)=>
    {
        setExpense([...expenses,expense]);
        setSalary((prevsalary)=>prevsalary-expense.amount);
    }
    useEffect(()=>
    {
        if(expenses.length >0 )
        {
            localStorage.setItem("expenses",JSON.stringify(expenses));
            localStorage.setItem("salary",Salary.toString())
        }
        if(Salary <=0)
        {
            alert("Beyond the limit")
        }
    },[expenses,Salary]);

    useEffect(()=>
    {
        const savedExpenses= JSON.parse( localStorage.getItem("expenses"));
        if(savedExpenses)
            setExpense(savedExpenses);
        const savedSalary=parseFloat(localStorage.getItem("salary"));
        if(savedSalary)
            setSalary(savedSalary);
        
    },[]);

    const deleteExpense=(index)=>
    {
        const deleteExpense=expenses[index];
        const updatedExp=expenses.filter((expense,a)=> a!==index);
        setExpense(updatedExp);
        setSalary((prevsalary)=>prevsalary+deleteExpense.amount);
    };

    const totalExpense = expenses.reduce((sum,exp)=>sum+exp.amount,0);

    const resetData=()=>
    {
        localStorage.removeItem("expenses");
        localStorage.removeItem("Salary");
        setExpense([]);
        setSalary(5000);
    }

    return(
        <>
            <h1>Expense Tracking</h1>
            <h2>SALARY:Rs.5000</h2>
            <h3 className='balance'> Balance: {Salary} </h3>
            <ExpenseForm onAddExpense ={addExpense}/>             
            <ExpenseList expenses ={expenses} onDeleteExpense={deleteExpense}/>
            <h3 className="bal">Expenses : Rs.{totalExpense.toFixed(2)}</h3> 
            <button onClick={resetData}className='resetdata'>ResetData</button>    
        </>
    )
}
export default Expencetracking;