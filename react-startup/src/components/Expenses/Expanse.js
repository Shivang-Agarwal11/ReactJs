import React, { useState } from "react";
import "./Expanse.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expanse(props) {
    const [filteredYear, setFilteredYear] = useState("2020");
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };
    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return ( <
        li >
        <
        Card className = "expanse" >
        <
        ExpensesFilter selected = { filteredYear }
        onChangeFilter = { filterChangeHandler }
        />{" "} <
        ExpensesChart expenses = { filteredExpenses } > < /ExpensesChart> <
        ExpenseList items = { filteredExpenses }
        />{" "} <
        /Card>{" "} <
        /li>
    );
}

export default Expanse;