import "./ExpanseDate.css";

function ExpanseDate(props) {
    const month = props.date.toLocaleString("en-US", { month: "long" });
    const day = props.date.toLocaleString("en-US", { day: "2-digit" });
    const year = props.date.getFullYear();
    return ( <
        div className = "expansedate" >
        <
        div className = "expansedate__month" > { month } < /div> <
        div className = "expansedate__year" > { year } < /div> <
        div className = "expansedate__day" > { day } < /div> <
        /div>
    );
}
export default ExpanseDate;