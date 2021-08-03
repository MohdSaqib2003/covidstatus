import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

      input: '',
      country: '',
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

 toggle=()=>{
    var menu = document.querySelector('.menu_img');
    var menu_bar = document.querySelector('.nav_bar');
    if(menu_bar.style.display=='block'){
      menu_bar.style.display='none';
      menu.src = process.env.PUBLIC_URL+"/menu.png";
      // menu.style.width = '35px'
    }else{
      menu_bar.style.display='block';
      menu.src = process.env.PUBLIC_URL+"/cross.png";
      // menu.style.width = '45px'
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

          
          <img className='menu_img' src={process.env.PUBLIC_URL+"/menu.png"} onClick={this.toggle} width='40'/>
          
          <img className='cross_img' src={process.env.PUBLIC_URL+"/cross.png"} width='35'/>

          <img src="https://images.squarespace-cdn.com/content/v1/5bbba6574d8711a7dcafa92a/1587756882695-3WQNYY2R1HJVFMHYQ0ET/noun_covid-19_3247096.png" alt="" width="50" className="covid_logo" />
          
          <h1 id='h1'>Current covid status </h1>

        </div>

        {/* <h1 id='h1'></h1> */}

        <div className='nav_bar'>
          <nav>Home</nav>
          <nav>State Wise</nav>
          <nav>covid care</nav>
          <nav>Vaccination </nav>
        </div>

        <div className='home_front'>
          <div className='input_field'>
            <input list="country_input" id="input" className="form-control" autoComplete='OFF' placeholder='--Choose country--' onChange={this.setInput} />
            <button onClick={this.getData.bind(this)} className="button_click">Click</button>
            <datalist id="country_input" className="list">

              <option value='New-Caledonia' />
              <option value='India' />
              <option value='Micronesia' />
              <option value='Montserrat' />
              <option value='Anguilla' />
              <option value='Falkland-Islands' />
              <option value='Solomon-Islands' />
              <option value='Marshall-Islands' />
              <option value='Samoa' />
              <option value='Vatican-City' />
              <option value='Tanzania' />
              <option value='Wallis-and-Futuna' />
              <option value='Grenada' />
              <option value='Cayman-Islands' />
              <option value='Diamond-Princess' />
              <option value='MS-Zaandam' />
              <option value='Macao' />
              <option value='Western-Sahara' />
              <option value='Saint-Helena' />
              <option value='Vanuatu' />
              <option value='Dominica' />
              <option value='Faeroe-Islands' />
              <option value='Saint-Kitts-and-Nevis' />
              <option value='Brunei' />
              <option value='Saint-Pierre-Miquelon' />
              <option value='Greenland' />
              <option value='China' />
              <option value='Laos' />
              <option value='St-Barth' />
              <option value='Lesotho' />
              <option value='Gibraltar' />
              <option value='Taiwan' />
              <option value='Turks-and-Caicos' />
              <option value='Congo' />
              <option value='Yemen' />
              <option value='Djibouti' />
              <option value='Iceland' />
              <option value='Hong-Kong' />
              <option value='Mauritius' />
              <option value='Benin' />
              <option value='Timor-Leste' />
              <option value='Malta' />
              <option value='Syria' />
              <option value='Eritrea' />
              <option value='Mayotte' />
              <option value='Seychelles' />
              <option value='Andorra' />
              <option value='Fiji' />
              <option value='Chad' />
              <option value='Sao-Tome-and-Principe' />
              <option value='Saint-Martin' />
              <option value='CAR' />
              <option value='Antigua-and-Barbuda' />
              <option value='Gabon' />
              <option value='Sierra-Leone' />
              <option value='Comoros' />
              <option value='Bahamas' />
              <option value='Liechtenstein' />
              <option value='St-Vincent-Grenadines' />
              <option value='R&amp;eacute;union' />
              <option value='Cabo-Verde' />
              <option value='French-Guiana' />
              <option value='Suriname' />
              <option value='Equatorial-Guinea' />
              <option value='Mauritania' />
              <option value='Guyana' />
              <option value='Eswatini' />
              <option value='Haiti' />
              <option value='French-Polynesia' />
              <option value='Guadeloupe' />
              <option value='Somalia' />
              <option value='Mali' />
              <option value='Togo' />
              <option value='Tajikistan' />
              <option value='Belize' />
              <option value='Burkina-Faso' />
              <option value='Martinique' />
              <option value='Cura&amp;ccedil;ao' />
              <option value='Aruba' />
              <option value='South-Sudan' />
              <option value='Trinidad-and-Tobago' />
              <option value='Nicaragua' />
              <option value='Gambia' />
              <option value='Channel-Islands' />
              <option value='Burundi' />
              <option value='Saint-Lucia' />
              <option value='San-Marino' />
              <option value='Niger' />
              <option value='Barbados' />
              <option value='Guinea-Bissau' />
              <option value='Sint-Maarten' />
              <option value='Monaco' />
              <option value='Bermuda' />
              <option value='Bhutan' />
              <option value='Caribbean-Netherlands' />
              <option value='British-Virgin-Islands' />
              <option value='Guinea' />
              <option value='Liberia' />
              <option value='Papua-New-Guinea' />
              <option value='Australia' />
              <option value='New-Zealand' />
              <option value='Isle-of-Man' />
              <option value='Kyrgyzstan' />
              <option value='Uzbekistan' />
              <option value='El-Salvador' />
              <option value='Cambodia' />
              <option value='Nigeria' />
              <option value='Norway' />
              <option value='Armenia' />
              <option value='Estonia' />
              <option value='Cameroon' />
              <option value='Latvia' />
              <option value='Finland' />
              <option value='Afghanistan' />
              <option value='Libya' />
              <option value='Singapore' />
              <option value='Qatar' />
              <option value='Senegal' />
              <option value='Bahrain' />
              <option value='Slovenia' />
              <option value='Bosnia-and-Herzegovina' />
              <option value='Namibia' />
              <option value='Botswana' />
              <option value='Maldives' />
              <option value='Myanmar' />
              <option value='Luxembourg' />
              <option value='Moldova' />
              <option value='Cuba' />
              <option value='Zambia' />
              <option value='Mozambique' />
              <option value='Uganda' />
              <option value='DRC' />
              <option value='Albania' />
              <option value='Montenegro' />
              <option value='Cyprus' />
              <option value='Madagascar' />
              <option value='Kenya' />
              <option value='North-Macedonia' />
              <option value='Ivory-Coast' />
              <option value='Angola' />
              <option value='Jamaica' />
              <option value='Sudan' />
              <option value='Malawi' />
              <option value='Zimbabwe' />
              <option value='Rwanda' />
              <option value='Algeria' />
              <option value='Ghana' />
              <option value='S-Korea' />
              <option value='Vietnam' />
              <option value='Mongolia' />
              <option value='Belgium' />
              <option value='Israel' />
              <option value='Belarus' />
              <option value='Guatemala' />
              <option value='Hungary' />
              <option value='Egypt' />
              <option value='Georgia' />
              <option value='Czechia' />
              <option value='Lithuania' />
              <option value='Philippines' />
              <option value='Chile' />
              <option value='Iraq' />
              <option value='Thailand' />
              <option value='Sweden' />
              <option value='Romania' />
              <option value='Portugal' />
              <option value='Japan' />
              <option value='Austria' />
              <option value='Jordan' />
              <option value='Bangladesh' />
              <option value='Serbia' />
              <option value='Switzerland' />
              <option value='Nepal' />
              <option value='UAE' />
              <option value='Lebanon' />
              <option value='Tunisia' />
              <option value='Oman' />
              <option value='Saudi-Arabia' />
              <option value='Ecuador' />
              <option value='Bulgaria' />
              <option value='Panama' />
              <option value='Costa-Rica' />
              <option value='Croatia' />
              <option value='Kuwait' />
              <option value='Uruguay' />
              <option value='Azerbaijan' />
              <option value='Slovakia' />
              <option value='Dominican-Republic' />
              <option value='Palestine' />
              <option value='Denmark' />
              <option value='Ireland' />
              <option value='Sri-Lanka' />
              <option value='Malaysia' />
              <option value='Greece' />
              <option value='Canada' />
              <option value='Paraguay' />
              <option value='Ethiopia' />
              <option value='Morocco' />
              <option value='Venezuela' />
              <option value='Netherlands' />
              <option value='Pakistan' />
              <option value='Bolivia' />
              <option value='Honduras' />
              <option value='Kazakhstan' />
              <option value='India' />
              <option value='Ukraine' />
              <option value='Brazil' />
              <option value='Turkey' />
              <option value='UK' />
              <option value='Argentina' />
              <option value='Colombia' />
              <option value='Italy' />
              <option value='Iran' />
              <option value='Indonesia' />
              <option value='North-America' />
              <option value='South-Africa' />
              <option value='Peru' />
              <option value='Russia' />
              <option value='Poland' />
              <option value='Asia' />
              <option value='Africa' />
              <option value='Europe' />
              <option value='All' />
              <option value='Spain' />
              <option value='USA' />
              <option value='South-America' />
              <option value='Oceania' />
              <option value='France' />
              <option value='Mexico' />
              <option value='Germany' />
              <option value='MS-Zaandam-' />
              <option value='Diamond-Princess-' />
              <option value='US-Virgin-Islands' />
              <option value='Puerto-Rico' />
              <option value='Guam' />

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
      </>
    );
  }
}

export default App;






























*{
  padding: 0px;
  margin:0px;
}
.heading_top{
  background-color: #124680;
  color: white;
  padding: 5px;
  padding-left:150px;
  display: flex;
  align-items: center;
  /* justify-content: flex-end; */
  /* font-family:cursive; */
  /* background-color: transparent; */
}
.heading_top h1{
  transform: translateY(3px);
}
.covid_logo{
  float:left;
}
.menu_img,.cross_img{
   display: none;
}


.nav_bar{
  background-color: rgb(172, 170, 169);
  /* width:max-content; */
  display: flex;
  opacity: 0.6;
  flex-direction: column;
  /* justify-content: flex-end; */
  /* float:right; */
  position:absolute;
  top:70px;
  /* padding-top:20px; */
  /* background-color:; */
  /* height: 100%; */
  background-color: rgba(0, 0, 0, 0.3)
}

.nav_bar nav{
  padding: 20px;
  /* padding-top: 30px; */
  background-color: chartreuse;
  background-color: black;
  font-size: 20px;
  color: white;
  opacity:1;
  z-index:2;
  font-family: cursive;
  padding-left:20px;
  
}

.nav_bar nav:hover{
  background-color:white;
  color: black;

}



.home_front{
  padding-left: 160px;
}
.input_field{
  /* padding-left: 160px; */
  display: flex;
  flex-direction: column;
  align-items: center;
}
#input{
  /* opacity: 0.5; */
  /* display: none; */
  margin: 10px;
}
.button_click{
  background-color: #198754;
  width:150px;
  outline: none;
  border: none;
  padding: 7px;
  color: white;
  border-radius:5px;
  /* color: red; */
}
.button_click:hover{
  background-color: #0e7a48;
}
.button_click:active{
  /* color: black; */
  background-color: #075c34;
}

.front_card{
  /* background-color: yellow; */
  margin-bottom: 0px;
  padding-bottom: 0px;
  display: flex;
  justify-content: center;
  margin-top: -18px;
 }

.front_card div{
  padding: 15px;
  width: 250px;
  margin: 50px;
  height: 115px;
  margin-bottom: 30px;
  background-color: wheat;
  text-align: center;
  border-radius: 10px;
}
.front_card div:nth-child(1){
  background-color: #A6CAFE;
}
.front_card div:nth-child(2){
  background-color: #A0E99A;
}
.front_card div:nth-child(3){
  background-color: #FE8786;
}






.tables{
  /* margin: 20px; */
  /* margin-top: 20px; */
  display: flex;
  justify-content: center;

  /* display: flex; */
  color: white;
  /* background-color: #3adfdf; */
  /* opacity: 0.6; */
  /* padding: 18px; */
  margin-top: -15px;
}
.tables table{
  background-color: #353737;
  margin-top: 20px;
  /* margin: 20px; */
  font-size: 20px;
  /* font-family: cursive; */
  display: block;
  /* padding-left: 25px;
  padding-right: 25px; */
  /* padding: 25px; */
  padding-top:0px;
  padding-bottom:10px;
  width: 100%;
  font-size: 15px;
  /* padding: 100px; */
}
.tables h3{
  padding-top: 5px;
  padding-bottom: 5px;
  text-align: center;
  color: black;
}
.tables .case_head{
  background-color:#A6CAFE;
}
.tables .death_head{
  background-color:#FE8786;
}
tr td{
  opacity:0.9;
  padding-left: 20px;
  padding-right: 20px;
  /* padding-left:35px; */
}

tr td:nth-child(2){
  padding-left: 100px;
}
.tables table:nth-child(1){
  /* padding: 30px;
  padding-left: 30px;
  padding-right: 30px; */
  display: block;
  /* color: red; */
  border-right: 1px solid grey;
}
.tables table:nth-child(2){
  /* float: right; */
  /* height: 500px; */
  display:block;
  flex-direction: column;
  align-items: center;
}


.tables table tr td:nth-child(2){
  /* display: flex;
  justify-content: flex-end; */
  float: right;
  /* width: 300px; */
  width: 300px;
  /* background-color: chartreuse; */
}
.tables table tr td:nth-child(1){
  width: 300px;
}






.country{
  background-color: #353737;
  /* margin: 20px; */
  font-size: 20px;
  /* font-family: cursive; */
  display: block;
  /* text-align: center; */
  /* padding-left: 25px;
  padding-right: 25px; */
  /* padding: 25px; */
  /* padding-top:0px; */
  /* padding-bottom:10px; */
  /* width: 100%; */
  color: white;
  display: flex;
  /* width: fit-content; */
  justify-content: center;
  align-items: center;
  /* margin-top:-40px; */
  margin-top:20px;
  border: 1px solid rgb(168, 168, 168);
  margin-bottom: 50px;
}
.country table{
  display: block;
  width: 100%;
  /* width: fit-content; */
}

.country table tr td:nth-child(1){
  width: 270px;
  /* background-color: chartreuse; */
}



@media only screen and (max-width:1244px) {
 
 .home_front{
   margin-right:5px;
 }
}

@media only screen and (max-width:1090px) {
  .tables {
    display:block;
  }
  .tables table{
    border: 1px solid grey;
  }
  .front_card div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}

@media only screen and (max-width:850px) {
  .home_front{
    padding-left: 10px;
    padding-right: 10px;
  }
  .nav_bar{
    display: none;
    opacity: 1;
  }
  .menu_img{
    display: block;
  }
  .heading_top{
    padding-left:10px;
  }
  .home_front{
    margin:0px;
  }
}
@media only screen and (max-width:670px) {
  .front_card div{
   margin: 3px;
   padding: 10px;
   margin-top: 50px;
   align-items: center;
   margin-bottom:20px;
   /* display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center; */
   height:90px;
  }



  .tables table tr td:nth-child(1){
    width:170px;
  }

  .tables table tr td:nth-child(2){
    /* display: flex;
    justify-content: flex-end; */
    float: right;
    /* width: 300px; */
    width:150px;
    /* background-color: chartreuse; */
  }
/*   
  .input_field{
    width:380px;
  }
  #input{
    width: 100%;
  } */

  .home_front{
    /* margin-right:5px; */
  }
  #h1{
    font-size:25px;
  }
}


@media only screen and (max-width:500px) {
  .front_card div h1{
    font-size :23px;
  }
  .front_card div h3{
    font-size:18px;
  }
  .front_card div{
    padding:5px;
  }

  .tables table tr td:nth-child(1){
    width:130px;
  }

  .tables table tr td:nth-child(2){
    /* display: flex;
    justify-content: flex-end; */
    float: right;
    /* width: 300px; */
    width:130px;
    /* background-color: chartreuse; */
  }

  
.country table tr td:nth-child(1){
  width: 50px;
  /* background-color: chartreuse; */
  /* background-color: chartreuse; */
}
.country table tr td:nth-child(2){
  /* width:90px; */
  /* background-color: coral; */
  /* margin-right: 20px; */
  /* width: 20px; */
  /* position: absolute;
  left:120px; */
  /* padding-left: 30px; */
  /* background-color: chartreuse; */
  display: block;
  transform: translateX(-50px);
}
#h1{
  font-size:20px;
}
}

