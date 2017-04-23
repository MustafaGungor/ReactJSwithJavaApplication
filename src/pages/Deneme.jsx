import React from "react";
import{ ReactBsTable,BootstrapTable,TableHeaderColumn } from "react-bootstrap-table";
import {ShallowComponent} from "robe-react-commons";
import Card from "../card/Card";


export default class Deneme extends ShallowComponent{
products = [{
        id: 1,
        name: "Product1",
        price: 120
    }, {
        id: 2,
        name: "Product2",
        price: 80
    }];
constructor(props){
    super(props);
    let store = new Store({
        endPoint: new RemoteEndPoint({
            url: "menus",
            read: {
                url: "menus/all"
            }
        }),
        idField: Menu.idField,
        autoLoad: true
    });
}
render(){
    return(
        <div>
            <Card header="React Table">
                <BootstrapTable data={this.products} >
                    <TableHeaderColumn isKey dataField='id'>Product ID</TableHeaderColumn>
                    <TableHeaderColumn dataField='name' filter={ { type: 'TextFilter', defaultValue: '' } }>Product Name</TableHeaderColumn>
                    <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
                </BootstrapTable>
            </Card>
        </div>
    );
}

}