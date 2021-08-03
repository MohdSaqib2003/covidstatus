import './state.css'

import React, { Component } from 'react';



class State_wise extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: '',
            recovered: '',
            deaths: '',
            input: ''
        }
    }

    async getStateData() {
        var response = await fetch('https://api.rootnet.in/covid19-in/stats/latest')
        var state_data = await response.json();
        console.log(state_data);
       
        var input_field = document.querySelector('#input');


        for (let i = 0; i < state_data.data.regional.length; i++) {
            if (state_data.data.regional[i].loc === input_field.value) {
                console.log(state_data.data.regional[i].loc);
                this.setState({
                    active: state_data.data.regional[i].confirmedCasesIndian,
                    recovered: state_data.data.regional[i].discharged,
                    deaths: state_data.data.regional[i].deaths
                })
            }
        }

        console.log('Active  :' + this.state.active);
        console.log('Recovered  :' + this.state.recovered);
        console.log('Deaths  :' + this.state.deaths);

        var state_input = document.querySelector('#state_input');
        state_input.innerHTML="";
        for (let i = 0; i < state_data.data.regional.length; i++) {
            var temp = document.createElement('option');
            temp.value = state_data.data.regional[i].loc;
            state_input.appendChild(temp);
            // console.log('hi'+i);
        }
    }

    componentDidMount() {
        this.getStateData();
    }

    render() {
        return (<>
            <div>
                <h1 className="state_head">Regional status</h1>

                <div className='input_div'>
                    <input list="state_input" id="input" className="form-control" autoComplete='OFF' placeholder='--choose state--' />
                    <button className="button_click" onClick={this.getStateData.bind(this)}>Click</button>
                    <datalist id='state_input'>
                    </datalist>
                </div>
 

          <div className='front_card'>
            <div>
              <h1>Active</h1>
              <h3>{this.state.active}</h3>
            </div>
            <div>
              <h1>Recovered</h1>
              <h3>{this.state.recovered}</h3>
            </div>
            <div>
              <h1>Deaths</h1>
              <h3>{this.state.deaths}</h3>
            </div>
          </div>


            </div>
        </>
        )
    }
}

export default State_wise;