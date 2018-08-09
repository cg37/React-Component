import React, { Component } from 'react';

import {
        Button,
        ControlLabel,
        Panel,
        PageHeader,
        FormControl,
        FormGroup,
        Form,
        Row,
        Col,
        Well,
        Collapse
    } from 'react-bootstrap';

import ReactDOM from 'react-dom'
import FormControlFeedback from 'react-bootstrap/lib/FormControlFeedback';

class OpenStack extends Component {
  render(){
        return(
        <Panel header={<span>Openstack</span>} bsStyle="info">
            <div>
                <div className="dataTable_wrapper">
                    <div className="row">
                        <div className="col-lg-6">
                            <FormGroup controlId="formBasicText2">
                                <ControlLabel>Controller</ControlLabel>
                                <FormControl
                                        type="text"
                                        placeholder="Openstack Controller IP"
                                    />
                                <FormControlFeedback />
                            </FormGroup>

                            <FormGroup
                                controlId="formBasicFile"
                            >
                                <ControlLabel>Upload Openstack Config</ControlLabel>
                                <FormControl
                                    type="file"
                                />
                                <FormControlFeedback />
                            </FormGroup>
                        </div>
                    </div>
                </div>
            </div>
        </Panel>
        )
    }
}

class CBTS extends Component {
    constructor(props){
        super(props);
        this.state={
                    }
    }
    render(){
        return(
            <Panel header={<span>CBTS</span>} bsStyle="info">
            <div>
                <div className="dataTable_wrapper">
                    <div className="row">
                        <div className="col-lg-6">
                            <FormGroup controlId="formBasicText2">
                                <ControlLabel>OAM IP</ControlLabel>
                                <FormControl
                                    type="text"
                                    placeholder="Openstack Controller IP"
                                />
                                <FormControlFeedback />
                            </FormGroup>
                        </div>
                    </div>
                </div>
            </div>
            </Panel>
        )
    }
}

class RapInit extends Component {
        constructor(props) {
            super(props);
            this.add=this.add.bind(this);
            this.delete=this.delete.bind(this);
            this.upData=this.upData.bind(this);
            this.state={
                lists:[]
            }
        }
    add(){
    
            var lists=this.state.lists;
            lists.push("");
            this.setState({lists:lists})
        }
        delete(e){
            var index=e.target.getAttribute("data-index");
            var lists=this.state.lists;
            lists.splice(index,1);
            this.setState({lists:lists})
    
        }
        upData(i,x){
            var lists=this.state.lists;
            lists[i]=x;
            console.log(lists);
            this.setState({lists:lists});
        }
        render() {
            return (
            <div>
                <Panel header={<span>RAP</span>} bsStyle="info">
                <div>
                    <Button bsStyle="primary" onClick={this.add} >Add RAP</Button>
                </div>
                <div>
                <br />
                </div>
                
                {this.state.lists.map(function (item,index) {
                    return <RapInfo key={item?item:index} index={index} delete={this.delete} upData={this.upData}  item={item}/>
                }.bind(this))}
                </Panel>
            </div>)
        }
        }
class RapInfo extends Component{
    constructor(props){
        super(props);
        this.upData=this.upData.bind(this);
    }

    upData(e){
        this.props.upData(this.props.index,e.target.value)
    }
    render() {
        return (
            <div>
                <Well bsSize="small">
                                <FormGroup controlId="formBasicText2">
                                    <ControlLabel>Name</ControlLabel>
                                    <FormControl
                                    type="text"
                                    placeholder="Openstack Controller IP" onBlur={this.upData}
                                    defaultValue={this.props.item?this.props.item:""}
                                    />
                                        <FormControlFeedback />
                                </FormGroup>

                                <FormGroup
                                    controlId="formBasicFile"
                                >
                                    <ControlLabel>Ver</ControlLabel>
                                    <FormControl componentClass="select" placeholder="select">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                    </FormControl>
                                    <FormControlFeedback />
                                </FormGroup>   
                                <Button bsStyle="primary" onClick={this.props.delete} data-index={this.props.index}>Remove RAP</Button>
                                </Well>                
            </div>
            )
    }
}
class IphyInit extends Component{
    constructor(props) {
        super(props);
        this.add=this.add.bind(this);
        this.delete=this.delete.bind(this);
        this.upData=this.upData.bind(this);
        this.state={
            lists:[]
        }
    }
add(){

        var lists=this.state.lists;
        lists.push("");
        this.setState({lists:lists})
    }
    delete(e){
        var index=e.target.getAttribute("data-index");
        var lists=this.state.lists;
        lists.splice(index,1);
        this.setState({lists:lists})

    }
    upData(i,x){
        var lists=this.state.lists;
        lists[i]=x;
        console.log(lists);
        this.setState({lists:lists});
    }
    render() {
        return (
        <div>
            <Panel header={<span>Ifphy</span>} bsStyle="info">
            <div>
                <Button bsStyle="primary" onClick={this.add} >Add Ifphy</Button>
            </div>
            <div>
            <br />
            </div>
            
            {this.state.lists.map(function (item,index) {
                return <Ifphyinfo key={item?item:index} index={index} delete={this.delete} upData={this.upData}  item={item}/>
            }.bind(this))}
            <br />
            </Panel>
        </div>)
    }
    }

class Ifphyinfo extends Component{
    constructor(props){
        super(props);
        this.upData=this.upData.bind(this);
        this.state={
            open: false
        }
    }

    upData(e){
        this.props.upData(this.props.index,e.target.value)
    }
    
    render(){
        return(
            <div>  
             <Well>
                <div>
                  <div>
                    <Form>
                        <Row>
                          <Col  xs={6 } mdPush={6} >
                            <ControlLabel>CBTS_CP0_IP</ControlLabel>
                              <FormControl
                                type="text"
                                defaultValue='10.56.115.106'
                                />
                              <FormControlFeedback />
                          </Col>
                          <Col  xs={6 } mdPull={6}>
                            <ControlLabel>CBTS_UP0_IP</ControlLabel>
                              <FormControl
                                type="text"
                                defaultValue='10.56.115.236'
                                />
                              <FormControlFeedback />
                          </Col>
                        </Row>
                    </Form>   
                  </div>
                  <br />
                  <div>
                    <Form>
                      <Row>
                      <Col  xs={6 } mdPush={6}>
                        <ControlLabel>IPHY_UTE_CP0_IP</ControlLabel>
                          <FormControl
                            type="text"
                            defaultValue='12.56.115.107'
                            />
                          <FormControlFeedback />
                      </Col>
                      <Col  xs={6 } mdPull={6}>
                                            <ControlLabel>IPHY_UTE_UP0_IP</ControlLabel>
                                                <FormControl
                                                type="text"
                                                defaultValue='10.56.115.236'
                                                />
                                                <FormControlFeedback />
                                        </Col>
                                    </Row>
                                </Form>
                            </div>
                            </div>   
                <Collapse in={this.state.open}>
                    <div>    
                        <div>
                        <Form>
                            <Row>
                                <Col  xs={6 } mdPush={6} >
                                    <ControlLabel>numOfProxy</ControlLabel>
                                        <FormControl
                                        type="text"
                                        defaultValue='1'
                                        />
                                        <FormControlFeedback />
                                </Col>
                                <Col  xs={6 } mdPull={6}>
                                    <ControlLabel>numOfCellPerProxy</ControlLabel>
                                        <FormControl
                                            type="text"
                                            defaultValue='{3}'
                                            />
                                            <FormControlFeedback />
                                </Col>
                            </Row>
                        </Form>  
                        </div>

                    <br />

                        <div> 
                        <FormGroup>
                            <ControlLabel>PROXY_IP</ControlLabel>
                                <FormControl
                                    type="text"
                                    defaultValue='{"10.56.115.232"}'
                                    />
                                    <FormControlFeedback />
                        </FormGroup>
                        </div> 

                        <div>
                        <Form >
                            <Row>
                                <Col xs={6 } mdPush={6}>
                                    <ControlLabel>UEC_IP_PORT</ControlLabel>
                                        <FormControl
                                            type="text"
                                            defaultValue='10.56.115.236:20000'
                                            />
                                        <FormControlFeedback />
                                </Col>
                                <Col xs={6} mdPull={6}>
                                    <ControlLabel>numOfCell</ControlLabel>
                                        <FormControl
                                            type="text"
                                            defaultValue='3'
                                            />
                                            <FormControlFeedback />
                                </Col>
                            </Row>
                        </Form>
                        </div>   
                        <br />
                        <div>
                        <Form  >
                            <Row>
                                <Col xs={6 } mdPush={6}>
                                    <ControlLabel>cellId</ControlLabel>
                                        <FormControl
                                            type="text"
                                            defaultValue='{1,2,3}'
                                            />
                                            <FormControlFeedback />
                                    </Col>
                                    <Col xs={6} mdPull={6}>
                                        <ControlLabel>cellGroup</ControlLabel>
                                            <FormControl
                                            type="text"
                                            defaultValue='89'
                                            />
                                        <FormControlFeedback />
                                    </Col>
                            </Row>
                        </Form>
                        </div>
                        <br />  
                        <div> 
                        <Form >
                            <Row>
                                <Col xs={6 } mdPush={6}>
                                    <ControlLabel>ENB_ID</ControlLabel>
                                        <FormControl
                                        type="text"
                                        defaultValue='0xC5B'
                                        />
                                        <FormControlFeedback />
                                </Col>
                                <Col xs={6} mdPull={6}>
                                    <ControlLabel>PLMN</ControlLabel>
                                        <FormControl
                                            type="text"
                                            defaultValue='262:101'
                                            />
                                            <FormControlFeedback />
                                </Col>
                            </Row>
                        </Form>
                        </div>
                        <br />
                        <div>
                        <Form >
                            <Row>
                                <Col xs={6 } mdPush={6}>
                                    <ControlLabel>TAC</ControlLabel>
                                        <FormControl
                                            type="text"
                                            defaultValue='1'
                                            />
                                        <FormControlFeedback />
                                </Col>

                                <Col xs={6} mdPull={6}>
                                    <ControlLabel>UE_COUNT</ControlLabel>
                                        <FormControl
                                            type="text"
                                            defaultValue='7650'
                                            />
                                        <FormControlFeedback />
                                </Col>
                            </Row>
                        </Form> 
                        </div>
                    <br / >
                        <div>
                            <Form >
                                <Row>
                                    <Col xs={6 } mdPush={6}>
                                        <ControlLabel>EIA</ControlLabel>
                                            <FormControl
                                                type="text"
                                                defaultValue='aes'
                                                />
                                                <FormControlFeedback />
                                    </Col>                           
                                    <Col xs={6} mdPull={6}>
                                        <ControlLabel>EEA</ControlLabel>
                                            <FormControl
                                                type="text"
                                                defaultValue='aes'
                                                />
                                                <FormControlFeedback />
                                    </Col>
                                </Row>
                            </Form>
                        </div>                                        
                    <br />
                            <Button 
                                    bsStyle="primary" 
                                    onClick={this.props.delete} 
                                    data-index={this.props.index}>
                                    Remove Ifphy
                            </Button>   
                    </div>
                    </Collapse> 
                    <br/>
                    <Button 
                    bsStyle="primary" 
                    bsSize="large" 
                    block 
                    style={this.BtnStyles} 
                    onClick={() => this.setState({ open: !this.state.open })}>
                    Iphy info(CLick to unfold)
                </Button>
                    </Well>
                
            </div>
            )
    }
    }
class envBook extends Component{
    render(){
        return (
            <div className="row">
                <div className="col-lg-12">
                    <PageHeader>Environment Book</PageHeader>
                </div>
                <div className="col-lg-12">
               
                    <OpenStack />
                    <CBTS />
                        <Row >
                            <Col md={6} mdPush={6}>
                            <IphyInit /> 
                            </Col>
                            <Col md={6} mdPull={6}>
                            <RapInit /> 
                            </Col>
                        </Row>
                    <FormGroup controlId="formControlsButton">
                        <Button bsStyle="primary" type="submit" >Submit </Button>
                    </FormGroup>
                </div>
            </div>
            )
    }       
            }
export default envBook;
