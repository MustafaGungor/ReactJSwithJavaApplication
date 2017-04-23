import React from "react";
import {ShallowComponent} from "robe-react-commons";
import {LineChart} from "react-chartjs";

export default class LineChartX extends ShallowComponent{
    constructor(props){
        super(props);
        let data =  {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [
                {
                    label: "My First dataset",
                    fillColor: "rgba(220,220,220,0.2)",
                    strokeColor: "rgba(220,220,220,1)",
                    pointColor: "rgba(220,220,220,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(220,220,220,1)",
                    data: rand(32, 100, 7)
                },
                {
                    label: "My Second dataset",
                    fillColor: "rgba(151,187,205,0.2)",
                    strokeColor: "rgba(151,187,205,1)",
                    pointColor: "rgba(151,187,205,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(151,187,205,1)",
                    data: rand(32, 100, 7)
                }
            ]
        };
        this.state = {
            data : data
        }
    }
    render(){
        return(
            <div>
                <LineChart data={this.state.data} options={chartOptions}/>
            </div>
        );
    }
}