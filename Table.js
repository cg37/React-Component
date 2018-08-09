
import React, { PropTypes, Component} from 'react';
import ReactDOM from 'react-dom'
import {
        Button,
        Pagination,
        Panel,
        PageHeader,
        Table
        } from 'react-bootstrap';

var axios=require('axios')
 
class displayTable extends Component {
    constructor(props){
        super(props);
        this.state={
            titanreleasekey: [],
            titanreleasevalue: []
        };
        axios.get(' http://10.140.160.64:3012/servers/titan-releases',{
            headers:{
                "Content-Type": "application/json",
                },
              params:{
                "Access-Control-Allow-Origin" : "*",
                "Access-Control-Allow-Headers": " Origin, X-Requested-With, Content-Type ",
                "Access-Control-Allow-Methods": "POST, GET, OPTIONS, PUT, DELETE",
                "async": true,
                "crossDomain": true,
                }, 
              dataType: 'JSONP'
        })
            .then((res) => {

                this.setState(
                    {   
                        titanreleasekey:Object.keys(res.data),
                        titanreleasevalue:Object.values(res.data)
                    }
                    ); 
                    console.log(Object.values(this.state.titanreleasevalue)[0]['time'])
                })
              .catch((err)=>{
              });

    }
    


    render () {
    return (
    <div >
        <div className="col-lg-12">
            <PageHeader>Titan Release Note</PageHeader>
        </div>
        <div className="col-lg-12">
            <Panel header={<span>Titan Release Note Tables</span>} bsStyle="info" >
                <div>
                    <div className="dataTable_wrapper">
                        <div >
                            <Table responsive bordered condensed hover>
                                <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>Titan Release</th>
                                        <th>1RAP-3Cell</th>
                                        <th>multi-RAP</th>
                                        <th>titanmain</th>
                                        <th>oam</th>
                                        <th>redits</th>
                                        <th>iphy-ute</th>
                                    </tr>
                                </thead>
                                <tbody>                                
                                { 
                                    this.state.titanreleasekey.map((keys,index)=>(         
                                            <tr>
                                            <td>{ this.state.titanreleasevalue[index]['time'] }</td>
                                            <td>{ this.state.titanreleasekey[index]}</td>
                                            <td>{ this.state.titanreleasevalue[index]['RAPCell']}</td>
                                            <td>{ this.state.titanreleasevalue[index]['multiRAP']}</td>
                                            <td>{ this.state.titanreleasevalue[index]['titanmain']}</td>
                                            <td>{ this.state.titanreleasevalue[index]['oam']}</td>
                                            <td>{ this.state.titanreleasevalue[index]['redis']}</td>
                                            <td>{ this.state.titanreleasevalue[index]['iphyUte']}</td>
                                            </tr>       
                                        ))}
                                </tbody>
                                <Pageination />
                            </Table>
                        </div>
                    </div>
                </div>

                <div>
                    <Button bsStyle="primary" >Primary</Button>
                </div>
            </Panel>
        </div>
    </div>
  )};
}
displayTable.contextTypes = { setTitle: PropTypes.func.isRequired };
export default displayTable;
