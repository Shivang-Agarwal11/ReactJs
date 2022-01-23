import React, { useState } from "react";
import "./ExpanseItem.css";
import ExpanseDate from "./ExpanseDate";
import Card from "../UI/Card";

function ExpanseItem(props) {
    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        setTitle("Updated");
    };
    return ( <
        Card className = "expense-item" >
        <
        ExpanseDate date = { props.date } > < /ExpanseDate> <
        div className = "expense-item__description" >
        <
        h2 > { title } < /h2> <
        div className = "expense-item__price" > ₹{ props.amount } < /div> <
        /div> <
        button onClick = { clickHandler } > Change title < /button> <
        /Card>
    );
}

export default ExpanseItem;