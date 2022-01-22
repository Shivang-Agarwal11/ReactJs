import ExpanseItem from "./ExpanseItem";
import "./Expanse.css";
import Card from "./Card";

function Expanse(props) {
    return ( <
        Card className = "expanse" >
        <
        ExpanseItem title = { props.items[0].title }
        amount = { props.items[0].price }
        date = { props.items[0].date } >
        < /ExpanseItem> <
        ExpanseItem title = { props.items[1].title }
        amount = { props.items[1].price }
        date = { props.items[1].date } >
        < /ExpanseItem> <
        ExpanseItem title = { props.items[2].title }
        amount = { props.items[2].price }
        date = { props.items[2].date } >
        < /ExpanseItem> <
        ExpanseItem title = { props.items[3].title }
        amount = { props.items[3].price }
        date = { props.items[3].date } >
        < /ExpanseItem> <
        /Card>
    );
}

export default Expanse;