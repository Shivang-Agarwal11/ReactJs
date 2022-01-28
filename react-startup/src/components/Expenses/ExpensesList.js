import React from "react";
import ExpanseItem from "./ExpanseItem";
import "./ExpensesList.css";
const ExpenseList = (props) => {
    if (props.items.length === 0) {
        return <h2 className = "expense-list__fallback" > No Expenses Found. < /h2>;
    }
    return ( <
        ul className = "expense-list" > {
            props.items.map((expense) => ( <
                ExpanseItem key = { expense.id }
                title = { expense.title }
                amount = { expense.amount }
                date = { expense.date } >
                < /ExpanseItem>
            ))
        } <
        /ul>
    );
};
export default ExpenseList;