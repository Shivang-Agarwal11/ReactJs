import React, { useState } from "react";

import "./NewExpenseForm.css";
const NewExpenseForm = (props) => {
    const [enteredtitle, setEnteredTitle] = useState();
    const [enteredAmount, setEnteredAmount] = useState();
    const [enteredDate, setEnteredDate] = useState();

    const TitleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };
    const AmountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };
    const DateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };
    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredtitle,
            amount: +enteredAmount,
            date: new Date(enteredDate),
        };
        props.onSaveExpenseData(expenseData);
        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");
    };
    return ( <
        form onSubmit = { submitHandler } >
        <
        div className = "new-expenses__controls" >
        <
        div className = "new-expenses__control" >
        <
        lable > Title < /lable>{" "} <
        input type = "text"
        value = { enteredtitle }
        onChange = { TitleChangeHandler }
        />{" "} <
        /div>{" "} <
        div className = "new-expenses__control" >
        <
        lable > Amount < /lable>{" "} <
        input type = "number"
        min = "10"
        value = { enteredAmount }
        onChange = { AmountChangeHandler }
        />{" "} <
        /div>{" "} <
        div className = "new-expenses__control" >
        <
        lable > Date < /lable>{" "} <
        input value = { enteredDate }
        type = "date"
        min = "2019-01-01"
        max = "2022-12-31"
        onChange = { DateChangeHandler }
        />{" "} <
        /div>{" "} <
        /div>{" "} <
        div className = "new-expenses__actions" >
        <
        button type = "submit"
        onClick = { props.onCancel } >
        Cancel { " " } <
        /button>{" "} <
        button type = "submit" > Add Expense < /button>{" "} <
        /div>{" "} <
        /form>
    );
};
export default NewExpenseForm;