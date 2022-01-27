import React, { useState } from "react";
import ExpanseItem from "./ExpanseItem";
import "./Expanse.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";

function Expanse(props) {
    const [filteredYear, setFilteredYear] = useState("2020");
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    return ( <
        div >
        <
        Card className = "expanse" >
        <
        ExpensesFilter selected = { filteredYear }
        onChangeFilter = { filterChangeHandler }
        /> {
            props.items.map(
                (expense) => ( <
                    ExpanseItem title = { expense.title }
                    amount = { expense.price }
                    date = { expense.date } >
                    < /ExpanseItem>
                )
                //   console.log(expense.date)
            )
        } <
        /Card> <
        /div>
    );
}

export default Expanse;