import React, {Component} from 'react'
import landing from '../resources/prebuying-landing.jpg'
import { Button } from '@material-ui/core';

class Landing extends Component {
    render(){
        return(
                  <div id="Landing">
                    
                            <div className="landing-item">
                            <h1>Home Simple Recommendations</h1>
                            <p>Your home buying recommendation coach. We deliver unbiased, personalized and data-driven houses that are best for you</p>
                            <Button
                            variant="contained" size="large" color="primary"  
                            className="btn btn-primary float-right" 
                            type="button" onClick={this._next}>
                            Get started
                            </Button>
                            </div>
                        
                        <div className="landing-item-2">
                            <img className="landing-img" src={landing}></img>
                            </div>
                        
                  </div>
        );
    };
  
    // Render UI will go here...
  }
  export default Landing;