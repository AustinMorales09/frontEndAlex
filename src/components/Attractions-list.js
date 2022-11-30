import React, { Component } from 'react'; 
import axios from 'axios';


const url = 'https://alexcapstone.adaptable.app/';


const Attraction = (props) => (
    <div className='text-center'>
      <h3>{props.attraction.name}</h3>
      <h4>{props.attraction.location}</h4>
      <img src={props.attraction.imageURL} alt='otr'/>
    </div>
  )

export default class AttractionsList extends Component {
    constructor(props) {  
        super(props); 
        
        
        this.state = {attractions: []};  
      }
      componentDidMount() {
        axios.get(url + 'attractions/')
         .then(response => {
           this.setState({ attractions: response.data });
         })
         .catch((error) => {
            console.log(error);
         })
      }
    
attractionList() {
    return this.state.attractions.map(currentattraction => {
      return <Attraction attraction={currentattraction} key={currentattraction._id}/>;
    })
  }
  render() {
    return (
        <div>
          <div>
            { this.attractionList() }
          </div>
      </div>
    )
  }
}