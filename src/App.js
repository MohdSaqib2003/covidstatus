import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavLink, Route, Switch} from "react-router-dom";
import Hospital from './menu/Hospital_status';
import State_wise from './menu/State';
import Helpline from './menu/Helpline';

class App extends Component {

  toggle=()=>{
    var menu = document.querySelector('.menu_img');
    var menu_bar = document.querySelector('.nav_bar');
    var nav = document.getElementsByTagName('nav');

    if(menu_bar.style.display==='block'){
      menu_bar.style.display='none';
      menu.src = process.env.PUBLIC_URL+"/menu.png";
      // menu.style.width = '35px'
    }else{
      menu_bar.style.display='block';
      menu.src = process.env.PUBLIC_URL+"/cross.png";
      // menu.style.width = '45px'
    }
    
    for(let i = 0;i<nav.length;i++){
      nav[i].addEventListener('click',()=>{
        // var menu_bar = document.querySelector('.nav_bar');
        if(window.innerWidth<850){
          menu_bar.style.display='none';
          menu.src = process.env.PUBLIC_URL+"/menu.png";          
      }
    })
  }
  }



  render() {

    // setInterval(()=>{
    //   var h = document.getElementById('h1');
    //   h.innerHTML = window.innerWidth;
    //   // console.log(window.innerWidth)
    // },100);
   

    return (
      <>
        <div className='heading_top'>
          
          <img className='menu_img' src={process.env.PUBLIC_URL+"/menu.png"} onClick={this.toggle} width='40' alt='menu'/>
          
          {/* <img className='cross_img' src={process.env.PUBLIC_URL+"/cross.png"} width='35'/> */}

          <img src="https://images.squarespace-cdn.com/content/v1/5bbba6574d8711a7dcafa92a/1587756882695-3WQNYY2R1HJVFMHYQ0ET/noun_covid-19_3247096.png" alt="" width="50" className="covid_logo" />
          
          <h1 id='h1'>Current covid status </h1>

        </div>
       
        {/* <h1 id='h1'></h1> */}

        
        <div className='nav_bar'>
         <NavLink to='/covidstatus' style={{textDecoration:'none',borderBottom:'1px solid #303030'}}><nav>Home</nav></NavLink> 
         <NavLink to='/state' style={{textDecoration:'none',borderBottom:'1px solid #303030'}}><nav>Regional Status</nav></NavLink> 
         <NavLink to='/hospital' style={{textDecoration:'none',borderBottom:'1px solid #303030'}}><nav>Hospital Status</nav></NavLink>
         <NavLink to='/helpline' style={{textDecoration:'none'}}><nav>Helpline</nav></NavLink>
         
        </div>
    
        <div className='home_front'>
      
      {/* <BrowserRouter> */}
       <Switch>
                <Route path="/covidstatus" component={Country_wise} exact/>
                <Route path="/state" component={State_wise}/>
                <Route path="/hospital" component={Hospital}/>
                <Route path="/helpline" component={Helpline}/>
        </Switch>
         
     {/* </BrowserRouter> */}

         {/* <Country_wise/> */}

     </div>

     </>

    );
  }
}












class Country_wise extends Component {
  constructor(props) {
    super(props);
    this.state = {

      input: '',
      country: 'India',
      population: '',
      continent : '',

      active_case: '',
      new_case: '',
      critical_case: '',
      recovered_case: '',
      total_case: '',

      new_death: '',
      total_death: ''

    }

  }


  async getData() {



    console.log('clicked');

    console.log("fun started");

    var resp = await fetch("https://covid-193.p.rapidapi.com/statistics", {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "9b9cc8e032msh513948e586efe63p1b8cc5jsn9b819ff009fc",
        "x-rapidapi-host": "covid-193.p.rapidapi.com"
      }
    })


    var data = await resp.json();
    console.log(data);
    console.log("Func executed");

    for (let i = 0; i < data.response.length; i++) {
      if (data.response[i].country === this.state.input) {
        console.log('Country : ' + data.response[i].country);
        console.log('Popolation : ' + data.response[i].population);
        console.log('Recovered : ' + data.response[i].cases.recovered);
        console.log('Data Fetched');
        this.setState({

          country: data.response[i].country,
          population: data.response[i].population,
          continent: " ("+data.response[i].continent+")",

          active_case: data.response[i].cases.active,
          new_case: data.response[i].cases.new,
          critical_case: data.response[i].cases.critical,
          recovered_case: data.response[i].cases.recovered,

          total_case: data.response[i].cases.total,
          new_death: data.response[i].deaths.new,
          total_death: data.response[i].deaths.total

        })
        console.log('matched country');

      }
      // console.log('End of for ' + i);
    }

   var cntry_inpt = document.getElementById('country_input');
   cntry_inpt.innerHTML = "";
    for (let i = 0; i < data.response.length; i++) {
      var temp = document.createElement('option');
      temp.value = data.response[i].country;
      cntry_inpt.appendChild(temp);
    }


    console.log('\n\n Area');
    console.log('country :  ' + this.state.country);
    console.log('Population : ' + this.state.population);

    console.log('\n\n Case : ');
    console.log('active_case :  ' + this.state.active_case);
    console.log('new_case : ' + this.state.new_case);
    console.log('critical_case : ' + this.state.critical_case);
    console.log('recovered : ' + this.state.recovered_case);
    console.log('Total case  : ' + this.state.total_case);

    console.log('\n\n Death');
    console.log('deaths_new :  ' + this.state.new_death);
    console.log('Death_total : ' + this.state.total_death);


  }

  setInput = () => {
    var inp = document.querySelector('#input');
    this.setState({ input: inp.value })

  }

   componentDidMount(){
     this.getData();
   }

  render() {

    return (
      <div>
        


          <div className='input_field'>
            <input list="country_input" id="input" className="form-control" autoComplete='OFF' placeholder='--Choose country--' onChange={this.setInput} />
            <button onClick={this.getData.bind(this)} className="button_click">Click</button>
            <datalist id="country_input" className="list">


            </datalist>
          </div>



         


          <div className='front_card'>
            <div>
              <h1>Active</h1>
              <h3>{this.state.active_case}</h3>
            </div>
            <div>
              <h1>Recovered</h1>
              <h3>{this.state.recovered_case}</h3>
            </div>
            <div>
              <h1>Deaths</h1>
              <h3>{this.state.total_death}</h3>
            </div>
          </div>






          <div className="tables">

            <table className='case_table'>
              <h3  className='case_head'>Cases</h3>
              <tr>
                <td>New Case </td>
                <td>{this.state.new_case}</td>
              </tr> <hr />
              <tr>
                <td>Active Case</td>
                <td>{this.state.active_case}</td>
              </tr> <hr />
              <tr>
                <td>Critical Case</td>
                <td>{this.state.critical_case}</td>
              </tr> <hr />
              <tr>
                <td>Recovered </td>
                <td>{this.state.recovered_case}</td>
              </tr> <hr />
              <tr>
                <td>Total Case </td>
                <td>{this.state.total_case}</td>
              </tr>

            </table>
            <table className='death_table'>
              <h3 className='death_head'>Deaths</h3>
              <tr>
                <td>New Deaths </td>
                <td>{this.state.new_death}</td>
              </tr> <hr />
              <tr>
                <td>Total Deaths </td>
                <td>{this.state.total_death}</td>
              </tr> <hr />



            </table>

          </div>
     

        <div className='country'>
           <table>
             <tr>
               <td>Country </td>
               <td>{this.state.country} {this.state.continent}</td>
             </tr> <hr />
             <tr>
               <td>Population </td>
               <td>{this.state.population}</td>
             </tr> 
           </table>
         </div>

        </div>
            

      // </div>
    );
  }
}

export default App;
