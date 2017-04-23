import React from "react";
import Card from "../../card/Card";
import ModalDataForm from "robe-react-ui/lib/form/ModalDataForm";
import DataGrid from "robe-react-ui/lib/datagrid/DataGrid";
import AjaxRequest from "robe-react-commons/lib/connections/AjaxRequest";
import Assertions from "robe-react-commons/lib/utils/Assertions";
import RemoteEndPoint from "robe-react-commons/lib/endpoint/RemoteEndPoint";
import ShallowComponent from "robe-react-commons/lib/components/ShallowComponent";
import Store from "robe-react-commons/lib/stores/Store";
import TestModel from "./TestModel.json";

export default class Test extends ShallowComponent{
    static idField ="oid";
    constructor(props){
        super(props);
        let store = new Store({
            endPoint: new RemoteEndPoint({
                url: "menus",
                read: {
                    url: "menus/all"
                }
            }),
            idField: Test.idField,
            autoLoad: true
        });
        this.state = {
            fields : TestModel.fields,
            store: store,
            propsOfFields:{
                roleOid:{
                    items:[]
                },
                parentOid:{
                    items:[]
                }
            },
            urlAjax:{
                request:[
                    //{"url":"users", "type":"GET", "fieldName":"roleOid","showName":"username"},
                    {"url":"roles", "type":"GET", "fieldName":"parentOid","showName":"name"}
                ]
            }
        }
    }
    render(){
        return(
            <div>

            </div>
        );
    }
}