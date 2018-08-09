import React, { PropTypes, Component} from 'react';
import {
        Button,
        Panel,
        Collapse,
        PageHeader,
        Table,
        Nav,
        NavItem,     
} from "react-bootstrap"

var axios = require('axios');

const title = 'Titan';  

function TableHead(props) { //表头
    return (
        <th
          className=""
          tabIndex="0"
          aria-controls="dataTables-example"
          rowSpan="1"
          colSpan="1"
          aria-label="Browser: activate to sort column ascending"
          style={{ width: props.width }}
        >
        {props.itemname}
        </th>
    )
}

class TableRow extends Component { //表行
    constructor(props){
        super(props);
        this.state = {
            value:props.defaultval
        }
    }

    handleTextChange = (passvalue) => {
        this.setState({
            value:passvalue
        })
    };

    render() {
        return(
            <tr className="gradeA odd" role="row">
                <td>{this.props.itemnum}</td>
                <td>{this.props.itemname}</td>
                <td>{this.props.unit}</td>
                <TableRowInput onChange={this.handleTextChange} limitation={this.props.limitation}/>
                <TableRowValue value={this.state.value}/>
            </tr>
        )
    }   
}

function isNum(val){
    if(val === "" || val ==null){
        return false;
    }
    if(!isNaN(val)){
        return true;
    }else{
        return false;
    }
}  

class TableRowInput extends Component {
    constructor(){
        super();
        this.state = {
            value:''
        }
    }

    handleContentChange = (event) => {
        if (isNum(event.target.value.charAt(event.target.value.length-1)) == false) {
            event.target.value = event.target.value.substr(0, event.target.value.length-1);
        }

        if(this.props.limitation){
            if(parseInt(event.target.value) > parseInt(this.props.limitation)) {
                //alert(this.props.limitation);
            }
        }
        
        this.setState({
            value:event.target.value
        })
        
        if(this.props.onChange){
            const value = event.target.value;
            this.props.onChange(value)
        }
    };

    render() {
        return(
            <td className="center">
            <input type="text" onChange={this.handleContentChange} name="form-input" class="form-control" id="value-input" />
            </td>
        )
    }
}

class TableRowValue extends Component {
    render() {
        return (
            <td className="center">
                <td className="center">{this.props.value}</td>
            </td>
        )
    }

}

class CellInfo extends Component {
    render() {
        return (
            <Table
              className="table table-striped table-bordered table-hover dataTable no-footer"
              id="dataTables-example"
              role="grid"
              aria-describedby="dataTables-example_info"
              responsive>
                <thead>
                  <tr role="row">
                  <TableHead itemname="#" width="60" />
                  <TableHead itemname="Configuration" width="220" />
                  <TableHead itemname="Unit" width="180" />
                  <TableHead itemname="Customer Input" width="230" />
                  <TableHead itemname="Value" width="120" />
                  </tr>
                </thead>
                <tbody>
                  <TableRow itemnum="1" itemname="Cell Id" unit="eNodeB" defaultval="100"  ID='CellIdref'/>
                  <TableRow itemnum="2" itemname="UE amount" unit="Cell" defaultval="390" ID="UE amount" />
                  <TableRow itemnum="3" itemname="Init UE Id" unit=" " defaultval=" " />
                  <TableRow itemnum="4" itemname="Bear Add/Rel" unit="Cell/s" defaultval="100" />
                  <TableRow itemnum="5" itemname="Attach/Detach" unit="Cell/s" defaultval="100" />
                  <TableRow itemnum="6" itemname="Total DL TP" unit="bps/cell" defaultval="0" />
                  <TableRow itemnum="7" itemname="Total UL TP" unit="bps/cell" defaultval="0" />
                </tbody>
             </Table>
        )
}

}


class UeAmount extends Component {

    constructor(){
        super();
        this.state = {
            amount:'0'
        }
    }

    handleAmountChange = (event) => {
        this.setState({amount:event.target.value})
    };

    render() {
        if (this.props.display == false) {
            return null;
        }
        return (
          <div class="tab-content"> 
            <div class="tab-pane fade in active" id="home-pills1"> 
            <h4>UE</h4> 
            <div class="table-responsive"> 
              <div class="col-lg-6"> 
                <Table striped bordered condensed hover>
                <thead>
                  <tr>
                    <th>UE</th>
                    <th>Value</th>
                 </tr>
                </thead>
                <tbody>
                  <tr>
                  <td>UE amount per</td>
                  <td><input type="text" id="UE amount1" onChange={this.handleAmountChange} value={this.state.amount} /> <span id="sp1"></span></td>
                  </tr>
                </tbody>
                </Table>
              </div> 
            </div> 
            </div> 
          </div> 
        )
    }

}

class UeDRB extends Component {

    constructor(){
        super();
        this.state = {
            
            dlpktsize:'0',      // DBR DL Packet size
            ulpktsize:'0',      // UL Packer size
            dltp:'0',           // DLTP 输入框
            ultp:'0',           // ULTP 输入框
            qci:'0'             // QCI 输入框
        }
    }

    handleDlpktsizeChange = (event) => {
        this.setState({dlpktsize:event.target.value})
        console.log("123")
    };

    handleUlpktsizeChange = (event) => {
        this.setState({ulpktsize:event.target.value})
    };

    handleDltpChange = (event) => {
        this.setState({dltp:event.target.value})
    };

    handleUltpChange = (event) => {
        this.setState({ultp:event.target.value})
    };

    handleQciChange = (event) => {
        this.setState({qci:event.target.value})
    };

    render() {
        if (this.props.display == false) {
            return null;
        }
        return (
          <div class="tab-content"> 
                <div class="tab-pane fade in active" id="home-pills1"> 
                <h4>DBR{this.props.drbid}</h4> 
                <div class="table-responsive"> 
                <div class="col-lg-6"> 
                    <Table striped bordered condensed hover>
                        <thead>
                            <tr>
                                <th width={200}>DBR</th>
                                <th width={200}>Value</th>
                                <th width={200}>Range</th>
                            </tr>
                        </thead>

                <tbody>
                    <tr>
                        <td width={200}>DL Packet size</td>
                        <td width={200}><input type="text" id=" DLPackageSize "  value={this.state.dlpktsize} onChange={this.handleDlpktsizeChange} />
                            <span id="sp1"></span>
                        </td>
                        <td width={200}></td>
                    </tr>
                    <tr>
                        <td width={200}>UL Packet size</td>
                        <td width={200}><input type="text" id="UIPackageSize" onChange={this.handleUlpktsizeChange} value={this.state.ulpktsize}  /><span id="sp1"></span></td>
                        <td width={200}></td>
                    </tr>
                    <tr>
                        <td width={200}>DL TP</td>
                        <td width={200}><input type="text" id="DLTP" onChange={this.handleDltpChange} value={this.state.dltp}  /><span id="sp1"></span></td>
                        <td width={200}></td>
                    </tr>
                    <tr>
                        <td width={200}>UL TP</td>
                        <td width={200}><input type="text" id="ULTP" onChange={this.handleUltpChange} value={this.state.ultp}  /><span id="sp1"></span></td>
                        <td width={200}></td>
                    </tr>
                    <tr>
                        <td width={200}>QCI</td>
                        <td width={200}><input type="text" id="QCI" onChange={this.handleQciChange} value={this.state.qci}  /><span id="sp1"></span></td>
                        <td width={200}>[1,9]</td>
                    </tr>
                </tbody>
                </Table>
              </div> 
            </div> 
            </div> 
          </div> 
        )
    }

}

class UeNav extends Component {
    constructor(props){
        super(props);
        this.state = {
            activekey:1
        }
        this.handleSelect = this.handleSelect.bind(this); // why still need this bind?
    }

    handleSelect(selectedKey) {
        if(this.props.onChange){
            const value = selectedKey;
            this.props.onChange(value);
        }

        this.setState({
            activekey:selectedKey
        })
    }

    render() {
        return (
            <Nav bsStyle="pills" activeKey={this.state.activekey} onSelect={this.handleSelect}>
              <NavItem eventKey={1} id="UE amount" value="0">
                  UE amount
              </NavItem>
              <NavItem eventKey={2}>
                  DRB1
              </NavItem>
              <NavItem eventKey={3} style={this.props.drbnum == "2" || this.props.drbnum == "3" ? {display: 'block'} : {display: 'none'}}>
                  DRB2
              </NavItem>
              <NavItem eventKey={4} style={this.props.drbnum == "3" ? {display: 'block'} : {display: 'none'}}>
                  DRB3
              </NavItem>
            </Nav>
        )
    }

}


class UeGroup extends Component {

    constructor(props){
        super(props);
        this.state = {
            drbnum:"1",
            open:false,
            navitem:"1"
        }
    }

    handleSelectChange = (event) => {
        this.setState({
            drbnum:event.target.value
        })
    }

    handleNavChange = (passvalue) => {
        this.setState({
            navitem:passvalue
        })
    };

    render() {
        if (this.props.display == false) {
            return null;
        }
        return (
            <div>
              <Panel header={<div><span className="fa fa-chevron-down"></span>
              <span onClick={()=> this.setState({open: !this.state.open})}> UE Group #{this.props.itemnum} DBR </span>
                <select onChange={this.handleSelectChange}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>} bsStyle="info" style={{display: 'block'}}  collapsible>
              </Panel>
              <Collapse in={this.state.open}>
              <div>
                <Panel body>
                  <UeNav onChange={this.handleNavChange} drbnum={this.state.drbnum} />
                  <UeAmount display={this.state.navitem == "1" ? true : false} />
                  <UeDRB display={this.state.navitem == "2" ? true : false} drbid={1} />
                  <UeDRB display={this.state.navitem == "3" ? true : false} drbid={2} />
                  <UeDRB display={this.state.navitem == "4" ? true : false} drbid={3} />
                </Panel>
              </div>
              </Collapse>
            </div>
        )
    }

}

class UeInfo extends Component {

    constructor(props){
        super(props);
        this.state = {
            grpnum:1
        }
    }

    handleSelectChange = (event) => {
        this.setState({
            grpnum:event.target.value
        })
    }

    render() {
        return (
            <Panel header={<span>ALL UE GROUP
              <select id="s1"  onChange={this.handleSelectChange}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
              </select></span>} bsStyle="info" >

              <UeGroup itemnum="1"/>
              <UeGroup itemnum="2" display={this.state.grpnum >= 2 ? true : false}/>
              <UeGroup itemnum="3" display={this.state.grpnum >= 3 ? true : false}/>
              <UeGroup itemnum="4" display={this.state.grpnum >= 4 ? true : false}/>
              <UeGroup itemnum="5" display={this.state.grpnum >= 5 ? true : false}/>
              <UeGroup itemnum="6" display={this.state.grpnum >= 6 ? true : false}/>
              <UeGroup itemnum="7" display={this.state.grpnum >= 7 ? true : false}/>
              <UeGroup itemnum="8" display={this.state.grpnum >= 8 ? true : false}/>
              <UeGroup itemnum="9" display={this.state.grpnum >= 9 ? true : false}/>
            </Panel>
        )
    }
}


class Drop extends Component{
    constructor(props){
        super(props);
        this.state = {
            action:" "
        }
    }
    handleChange = (event) => {
        this.setState({   
            action:event.target.value
        })
    };
   
    render() {
        var message = "you selected" +this.state.action;
        return (         
            <Panel>
            <h3>Action :
                <select   value={this.state.action} 
                    onChange={this.handleChange} >
                    <option eventKey="attach" selected>Attach</option>
                    <option eventKey="detach" >Detach</option>
                    <option eventKey="traffic" >Traffic</option>
                    <option eventKey="trafficstop" >Trafficstop</option>
                </select>
                <p>{message}</p>
                </h3>
            </Panel>
        )
    }
}

class ButtonGo extends Component{
    constructor(props){
        super(props);
        this.state={
            atdt:''
        }
    }
    BtnStyles = { maxWidth: 400, margin: '0 auto 20px' };
    
   
    sendPETInfo=()=>{

        var PETInfo = {
                        "CellId":'0',
                        "UEAmount":'0',
                        "BearAddDel":'0',
                        "UEAttachDe":'0',
                        "TotalDLTP":'0',
                        "TotalULTP":'0',
                    };
        post('http://10.140.160.64:3012/users/ueinfo',PETInfo)
        .then((res) => {
            console.log(res.data)
          }) 
          .catch((err)=>{
           
          });
        }
    render(){
            return(
            <Button bsStyle="primary" bsSize="large" block style={this.BtnStyles} onClick={this.sendPETInfo}>
            GO!
            </Button>)
            }
}

class UeAttachDetach extends Component {
    render() {
        return (
            <div>
            <br />
            <div className="row">
                    <Drop />
                <div className="col-md-12">
                    <PageHeader>UE Attach and Detach                        
                        <Button bsStyle="primary" style={{float: 'right'}} style={{margin: "0px 5px 0px 680px"}} >Load</Button>
                        <Button bsStyle="primary" style={{float: 'right'}} style={{margin: "0px 5px 0px 10px"}}>Save</Button>
                    </PageHeader>
                </div>
               
              
                <div className="col-lg-12">
                   
                    <Panel header={<span>UE Attach and Detach</span>} bsStyle="info" >
                        <div>
                            <form>
                                <div className="dataTable_wrapper">
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <h1>Cell-Info</h1>
                                            <CellInfo />
                                            <h1>UE-Info</h1>
                                            <UeInfo />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <ButtonGo/>
                    </Panel>
                </div>  
            </div>
            </div>
        )
    }
}

function displayContent(props, context) {
    context.setTitle(title);
    open = true;
    return (
        <UeAttachDetach />
    );
}

displayContent.contextTypes = { setTitle: PropTypes.func.isRequired };

export default displayContent;
