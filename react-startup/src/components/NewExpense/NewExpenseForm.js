import React, { useState } from "react";

import "./NewExpenseForm.css";
const NewExpenseForm = () => {
    const [enteredtitle, setEnteredTitle] = useState();
    const [enetredAmount, setEnteredAmount] = useState();
    const [enetredDate, setEnteredDate] = useState();
    const TitleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };
    const AmountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };
    const DateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };
    return ( <
        form >
        <
        div className = "new-expenses__controls" >
        <
        div className = "new-expenses__control" >
        <
        lable > Title < /lable> <
        input type = "text"
        onChange = { TitleChangeHandler }
        /> <
        /div> <
        div className = "new-expenses__control" >
        <
        lable > Amount < /lable> <
        input type = "number"
        min = "10"
        onChange = { AmountChangeHandler }
        /> <
        /div> <
        div className = "new-expenses__control" >
        <
        lable > Date < /lable> <
        input type = "date"
        min = "2019-01-01"
        max = "2022-12-31"
        onChange = { DateChangeHandler }
        /> <
        /div> <
        /div> <
        div className = "new-expenses__actions" >
        <
        button type = "submit" > Add Expense < /button> <
        /div> <
        /form>
    );
};

export default NewExpenseForm;