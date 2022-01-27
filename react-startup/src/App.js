import React, { useState } from "react";
import Expanse from "./components/Expenses/Expanse";
import NewExpense from "./components/NewExpense/NewExpense";

const dummy_expenses = [{
        id: "1",
        title: "Chimney",
        price: "24500",
        date: new Date(2022, 1, 9),
    },
    {
        id: "2",
        title: "Microwaave",
        price: "20000",
        date: new Date(2022, 1, 9),
    },
    {
        id: "3",
        title: "TV",
        price: "121000",
        date: new Date(2021, 3, 12),
    },
    {
        id: "4",
        title: "Fridge",
        price: "221000",
        date: new Date(2020, 5, 11),
    },
];

function App() {
    const [expenses, setExpense] = useState(dummy_expenses);
    const addExpenseHandler = (expense) => {
        setExpense([expense, ...expenses]);
    };
    return ( <
        div >
        <
        NewExpense onAddExpense = { addExpenseHandler } > < /NewExpense>{" "} <
        Expanse items = { expenses } > < /Expanse>{" "} <
        /div>
    );
}

export default App;