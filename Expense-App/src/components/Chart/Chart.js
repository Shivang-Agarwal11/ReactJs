import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";
const Chart = (props) => {
    const valueArray = props.dataPoints.map((dataPoint) => dataPoint.value);
    const totalMax = Math.max(...valueArray);
    console.log(totalMax);
    return ( <
        div className = "chart" > {
            props.dataPoints.map((dataPoint) => ( <
                ChartBar key = { dataPoint.label }
                value = { dataPoint.value }
                maxValue = { totalMax }
                label = { dataPoint.label } >
                < /ChartBar>
            ))
        } <
        /div>
    );
};
export default Chart;