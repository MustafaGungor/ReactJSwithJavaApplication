import React from "react";
import {ShallowComponent,AjaxRequest,RemoteEndPoint,Store} from "robe-react-commons";
import PieChart from "robe-react-ui/lib/charts/PieChart";
import {Col} from "react-bootstrap";

export default class Piechart extends ShallowComponent{

    dataRequest = new AjaxRequest({
        url: "piecharts",
        type: "GET"
    });
    ///Eğer kullanılsaydı robe-react-ui piechart için kullanılacaktı
    constructor(props){
        super(props);
        let data2 = [
            {
                value: 1500,
                label: "A",
                key: "0",
                unit: "ms"
            },
            {
                value: 2500,
                label: "B",
                key: "1",
                unit: "ms"
            },
            {
                value: 3000,
                label: "C",
                key: "3",
                unit: "ms"
            }
        ];
        this.state = {
            data : data2
        }
    }
    render(){
        return(
            <div className="form-group">
                <Col xs={12} md={6}>
                    <PieChart size={400} data={this.state.data}/>
                </Col>
            </div>
        );
    }

}