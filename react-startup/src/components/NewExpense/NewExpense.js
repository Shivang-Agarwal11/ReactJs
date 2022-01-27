import React from "react";
import NewExpenseForm from "./NewExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
    const saveDataHandler = (enterdExpenseData) => {
        const expenseData = {
            ...enterdExpenseData,
            id: Math.random().toString(),
        };
        props.onAddExpense(expenseData);
    };
    return ( <
        div className = "new-expense" >
        <
        NewExpenseForm onSaveExpenseData = { saveDataHandler } > < /NewExpenseForm>{" "} <
        /div>
    );
};
export default NewExpense;