import React, { Component } from 'react';
import './Helpline.css'

class Helpline extends Component{
    constructor(props){
       super(props);
       this.state={
           state : '',
           number : ''
       }
    }
    async getHelplineData(){
        var response = await fetch('https://api.rootnet.in/covid19-in/contacts');
        var result = await response.json();
        console.log(result);
        // console.log(result.data.contacts.regional[1]);
        // console.log(result.data.contacts.regional[1].loc);
       
        
        var input_state = document.querySelector('#input_state');
        for (let i = 0; i < result.data.contacts.regional.length; i++) {
           if(input_state.value===result.data.contacts.regional[i].loc){
               this.setState({
                   state : result.data.contacts.regional[i].loc,
                   number :"  "+result.data.contacts.regional[i].number
               })
           }
        }
        
        console.log(this.state.state);
        console.log(this.state.number);

        var state_input = document.querySelector('#datalist');
        state_input.innerHTML = "";
        for (let i = 0; i < result.data.contacts.regional.length; i++) {
            var temp = document.createElement('option');
            temp.value = result.data.contacts.regional[i].loc;
            state_input.appendChild(temp);
        }
    }
    componentDidMount(){
        this.getHelplineData();
    }
    render() {
        return (
            <div>
                <h1 className="helpline_head">Covid Helpline</h1>

                <div className='input_div'>
                    <input list="datalist" id="input_state" className="form-control" autoComplete='OFF' placeholder='--choose state--' />
                    <button className="button_click" onClick={this.getHelplineData.bind(this)}>Click</button>
                    <datalist id='datalist'>
                    </datalist>
                </div>
                <div className="helpline">
                     <img src={process.env.PUBLIC_URL+"/phone.png"} alt="" width="40"/> 
                     {this.state.number}
                </div>

            </div>
        );
    }
}

export default Helpline;