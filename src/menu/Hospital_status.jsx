import React, { Component } from 'react';
import './hospital.css'

class Hospital extends Component {
    constructor(props){
       super(props);
       this.state={
           state : '',
           total_hospital :'',
           total_beds : ''
       }
    }

    async getHospitalData(){
        var response = await fetch('https://api.rootnet.in/covid19-in/hospitals/beds');
        var result = await response.json();
        // console.log(result);
       
       
        var input_state = document.querySelector('#input_state');
        // this.setState({
        //     state : input_state.value
        // })
        for(let i = 0;i<result.data.regional.length;i++){
            if(input_state.value === result.data.regional[i].state){
                this.setState({
                    state : result.data.regional[i].state,
                    total_beds :result.data.regional[i].totalBeds,
                    total_hospital :result.data.regional[i].totalHospitals
                })
                // console.log('matched');
            }
            // console.log('not matched');
        }
        //  console.log(input_state.value);
        //  console.log("State : "+this.state.state);
        //  console.log("Total beds : "+this.state.total_beds);
        //  console.log("Total Hospitals : "+this.state.total_hospital);

        var state_input = document.querySelector('#datalist');
        state_input.innerHTML = "";
        for (let i = 0; i < result.data.regional.length; i++) {
            var temp = document.createElement('option');
            temp.value = result.data.regional[i].state;
            state_input.appendChild(temp);
            
        }
    }

   componentDidMount(){
       this.getHospitalData();
   }
    render() {
        return (
            <div>
                <h1 className="hospital_head">Hospitals</h1>

                <div className='input_div'>
                    <input list="datalist" id="input_state" className="form-control" autoComplete='OFF' placeholder='--choose state--' />
                    <button className="button_click" onClick={this.getHospitalData.bind(this)}>Click</button>
                    <datalist id='datalist'>
                    </datalist>
                </div>

                
             <table className="hospital_table">

              <tr>
                <td>State</td>
                <td>{this.state.state}</td>
              </tr> 
              <tr>
                <td>Total Hospitals </td>
                <td>{this.state.total_hospital}</td>
              </tr>
              <tr>
                <td>Total Beds</td>
                <td>{this.state.total_beds}</td>
              </tr> 

            </table>

            </div>
        );
    }
}

export default Hospital;