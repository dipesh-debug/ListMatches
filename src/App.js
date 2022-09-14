// import React from "react";


// export default class FetchUser extends React.Component{
//   state ={
//     loading :true,
//     person : null 
//   };
//   async componentDidMount(){
   
//     const url = "http://127.0.0.1:8000/api/streams/matches";
//     const response = await fetch(url);
//     const data = await response.json();
//     this.setState({person: data.results[0], loading : false});
    

//   }
 
//   render(){
//     if(this.state.loading){
//       return <div> loading..</div>
//     }
//     if (!this.state.person){
//       return <div> didn't get a person </div>

//     }
//     return( 
     
//       <div>
//         <div>{this.state.person.id}</div>
//         <div>{this.state.person.description}</div>
//         <div>{this.state.person.embed_code}</div>
//         {/* <img src = {this.state.person.picture.large}/> */}
//       </div>
      
    
   
//     );
//   }

// }
// import React from 'react';
// import './App.css'  ;
// import { useState} from 'react' ;
// import axios  from 'axios' ;

// function App ( ) {
//   const [ quote , setQuote ] = useState ( ' ' )
//   const getQuote = () => {
//     axios.get ( 'http://127.0.0.1:8000/api/streams/matches?format=json' )
//     .then ( res => {
//       console.log ( res.id )
//     setQuote ( res.description)
//     } ).catch ( err => {
//       console.log (err)
//    } )
//  }
//   return (
//     <div className='App'>
//       <button onClick={getQuote}>Get quote</button>
//       {quote && <p>{quote}</p> }
//     </div>
//   );
// }
// export default App;
// import React, { useState } from 'react';
// import Axios from 'axios' ; 
// import './App.css';

// function App ( ) {
//   const[Match,setMatches] = useState ("");
//   const getMatches = ( )  => {
//     Axios.get(" http://127.0.0.1:8000/api/streams/matches?format=json ").then (

//       ( response ) => {
//         // setMatches(response.data.id + "..." + response.data.description);
//         console.log(response);
//         setMatches(response.data.id + "..." + response.data.description);
//       }
//     );
//     // fetch("http://127.0.0.1:8000/api/streams/matches?format=json").then(
//     //   (response) =>
  
//     //    response.json()).then((data) => {
//     //     setMatches(data.id +"..."+ data.description);
        
      
    
//  };
//   return (
//     <div>

//      Welcome <button onClick ={getMatches}> Get Matches </button>
//      {Match}
//     </div>
//   );
// }
// export default App ;
import React from "react";
import './App.css';
class App extends React.Component {

	// Constructor
	constructor(props) {
		super(props);

		this.state = {
			datas: [],
			DataisLoaded: false
		};
	}

	// ComponentDidMount is used to
	// execute the code
	componentDidMount() {
		fetch(
"http://127.0.0.1:8000/api/streams/matches?format=json")
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					datas: json,
					DataisLoaded: true
				});
			})
	}
	render() {
		const { DataisLoaded, datas } = this.state;
		if (!DataisLoaded) return <div>
			<h1> Pleses wait some time.... </h1> </div> ;

		return (
		<div className = "App">
			<h1> List of Matches with their Embed code </h1> {
				datas.map((data) => (
				<ul >
          <li>Match_id:{data.id},</li>
					<li>Description : { data.description },</li>
          <li>embded_code: <a href = { data.embed_code}>{data.embed_code}</a></li>
					{/* <li>status: { data.status }</li> */}
					</ul>
				))
			}
		</div>
	);
}
}

export default App;
