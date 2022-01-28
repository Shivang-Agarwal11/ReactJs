import React, { useState } from "react";
import NewExpenseForm from "./NewExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);
    const saveDataHandler = (enterdExpenseData) => {
        const expenseData = {
            ...enterdExpenseData,
            id: Math.random().toString(),
        };
        props.onAddExpense(expenseData);
        setIsEditing(false);
    };
    const startEditingHandler = () => {
        setIsEditing(true);
    };

    const stopEditingHandler = () => {
        setIsEditing(false);
    };
    return ( <
        div className = "new-expense" > {!isEditing && ( <
                button onClick = { startEditingHandler } > Add New Expense < /button>
            )
        } {
            isEditing && ( <
                NewExpenseForm onSaveExpenseData = { saveDataHandler }
                onCancel = { stopEditingHandler }
                />
            )
        } <
        /div>
    );
};
export default NewExpense;