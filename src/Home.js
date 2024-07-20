import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {
    constructor(props) {
        super(props);
    }
    state = { 
        name: ""
     }

    componentDidMount(){
        
    }
    async getData(){
        console.log();
        await axios.get('http://localhost:4000/')
        .then(res => {
            console.log(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    }
    async setData(){
        axios.post("http://localhost:5000/animals", {
            name: this.state.name
        })
        .then(res => {
            console.log(res.data)
        })
        .catch(err => console.log(err))
    }
    render() { 
        return ( 
            <div>
                <input id='input1' onChange={(e) => this.setState({"name":e.target.value})} type='text'></input>
                <button onClick={() => this.getData()}>Get Data</button>
                <button onClick={() => this.setData()}>Set Data</button>
            </div>
         );
    }
}
 
export default Home;