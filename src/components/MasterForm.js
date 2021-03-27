import React, {Component} from 'react'
import { Button,TextField } from '@material-ui/core';
import landing from '../resources/prebuying-landing.jpg'
const min = 0;
const max = 10;
class MasterForm extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        currentStep: 0,
        name: '', //s1
        location: '', //s1
        houseType: '', //s1
        priceRange: '', //s1
        numBed: '', //s1
        numBath: '', //s1
        preapprovedAmount:'', //s4
        annualIncome:'', //s7
        downPayment:'', //s7
        creditcardDebt:'', //s8
        locLoans:'', //s8
        householdExpenses:'', //s8
        utilities:'', //s8
        creditScore:'', //s9
        preapproval: false,
        preapprovedEstimate:0,
      }
    }
    
    handleChange = event => {
      const {name, value} = event.target
      this.setState({
        [name]: value
      })    
    }
     
    handleSubmit = event => {
      event.preventDefault()
      const { email, username, password } = this.state
      alert(`Your registration detail: \n 
             Email: ${email} \n 
             Username: ${username} \n
             Password: ${password}`)
    }
    
    _next = () => {
      let currentStep = this.state.currentStep
      currentStep = currentStep >= max-1? max: currentStep + 1
      this.setState({
        currentStep: currentStep
      })
    }
      
    _prev = () => {
      let currentStep = this.state.currentStep
      currentStep = currentStep <= min? min: currentStep - 1
      this.setState({
        currentStep: currentStep
      })
    }

    _next_estimate = () => {
      let currentStep = this.state.currentStep
      currentStep = 6
      this.setState({
        currentStep: currentStep
      })
    }
      
    _prev_estimate = () => {
      let currentStep = this.state.currentStep
      currentStep = 3
      this.setState({
        currentStep: currentStep
      })
    }
  
  /*
  * the functions for our button
  */
  previousButton() {
    let currentStep = this.state.currentStep;
    if(currentStep !==min){
      if(currentStep == 6){
        return (<Button 
          variant="outlined" size="large" color="grey" 
            className="btn btn-secondary" 
            type="button" onClick={this._prev_estimate}>
          Back
          </Button>
        )
      }
      return (
        <Button 
        variant="outlined" size="large" color="grey" 
          className="btn btn-secondary" 
          type="button" onClick={this._prev}>
        Back
        </Button>
      )
    }
    return null;
  }
  
  nextButton(){
    let currentStep = this.state.currentStep;
    if(currentStep <=max){
      if(currentStep == 3){
        return (
          <div>
            <Button 
        variant="outlined" size="large" color="grey" 
          className="btn btn-secondary" 
          type="button" onClick={this._next_estimate}>
        No I Haven't
        </Button>
         
          <Button
          variant="contained" size="large" color="primary"  
            className="btn btn-primary float-right" 
            type="button" onClick={this._next}>
          Yes I Have
          </Button> 
          </div>       
        )
      }else if(currentStep == 5 || currentStep == max){
        return (
          <Button
          variant="contained" size="large" color="primary"  
            className="btn btn-primary float-right" 
<<<<<<< HEAD
            type="button" href='/hs-prebuying#/search'>
=======
            type="button" href='/hs-prebuying/#/search'>
>>>>>>> 95d7e2ab2d804c412e588052abce7bca314f9804
          Continue to search process
          </Button>        
        )
      }
      return (
        <Button
        variant="contained" size="large" color="primary"  
          className="btn btn-primary float-right" 
          type="button" onClick={this._next}>
        Continue
        </Button>        
      )
    }
    return null;
  }
    
    render() {    
      return (
          <div id="page">
        <React.Fragment>
  
        <form onSubmit={this.handleSubmit}>
        {/* 
          render the form steps and pass required props in
        */}
        <Step0
            currentStep={this.state.currentStep} 
            handleChange={this.handleChange}
            start={this._next}        
          />
          <Step1 
            currentStep={this.state.currentStep} 
            handleChange={this.handleChange}
          />
          <Step2 
            currentStep={this.state.currentStep} 
            handleChange={this.handleChange}
            username={this.state.username}
            name={this.state.name}
            location={this.state.location}
            houseType={this.state.houseType}
            priceRange={this.state.priceRange}
            numBed={this.state.numBed}
            numBath={this.state.numBath}
          />
          <Step3 
            currentStep={this.state.currentStep} 
            handleChange={this.handleChange}
          />
          <Step4 
            currentStep={this.state.currentStep} 
            handleChange={this.handleChange}
            preapprovedAmount={this.state.preapprovedAmount}
          />
          <Step5 
            currentStep={this.state.currentStep} 
            handleChange={this.handleChange}
            password={this.state.password}
          />
          <Step6 
            currentStep={this.state.currentStep} 
            handleChange={this.handleChange}
            password={this.state.password}
          />
          <Step7 
            currentStep={this.state.currentStep} 
            handleChange={this.handleChange}
            annualIncome={this.state.annualIncome}
            downPayment={this.state.downPayment}
          />
          <Step8 
            currentStep={this.state.currentStep} 
            handleChange={this.handleChange}
            creditcardDebt={this.state.creditcardDebt}
            locLoans={this.state.locLoans}
            householdExpenses={this.state.householdExpenses}
            utilities={this.state.utilities}
          />
          <Step9 
            currentStep={this.state.currentStep} 
            handleChange={this.handleChange}
            creditScore={this.state.creditScore}
          />
          <Step10 
            currentStep={this.state.currentStep} 
            handleChange={this.handleChange}
          />
          <br/> <br/>
          <div id="nav-buttons">
            <ul>
                <li id="back">
                {this.previousButton()}
                </li>
                <li id="front">
                {this.nextButton()}
                </li>
            </ul>
          </div>
        </form>
        </React.Fragment>
        </div>
      );
    }
  }
  
  function Step0(props){
    if (props.currentStep !== 0) {
        return null
      } 
      return(<div id="Landing">
                    
      <div className="landing-item">
      <h1>Home Simple Recommendations</h1>
      <p>Your home buying recommendation coach. We deliver unbiased, personalized and data-driven houses that are best for you</p>
      <Button
      variant="contained" size="large" color="primary"  
      className="btn btn-primary float-right" 
      type="button" onClick={props.start}>
      Get started
      </Button>
      </div>
  
  <div className="landing-item-2">
      <img className="landing-img" src={landing}></img>
      </div>
  
</div>);
  }
  
  function Step1(props) {
    if (props.currentStep !== 1) {
      return null
    } 
    return(
      <div className="form-group">
        <h1>We respect your data and privacy</h1>
        <p>We realize that to make accurate recommendations, this requires the input of personal user data. The data we collect will solely be used for generating tailored home recommendations and will not be sold. </p>
      </div>
    );
  }
  
  function Step2(props) {
    if (props.currentStep !== 2) {
      return null
    } 
    return(
      <div className="form-group">
        <h1 className="form-title">Tell Us About Yourself</h1>
        <p>Letting us know more about you helps us find houses that are better suited for you</p>
        <TextField
          variant="filled"
          className="form-control"
          id="name"
          name="name"
          type="text"
          fullWidth
          placeholder="Your name"
          value={props.name}
          onChange={props.handleChange}
          /><br/><br/>
          <TextField
          variant="filled"
          className="form-control"
          id="location"
          name="location"
          type="text"
          fullWidth
          placeholder="Where do you want to live?"
          value={props.location}
          onChange={props.handleChange}
          /><br/><br/>
          <TextField
          variant="filled"
          className="form-control"
          id="houseType"
          name="houseType"
          type="text"
          fullWidth
          placeholder="Type of house"
          value={props.houseType}
          onChange={props.handleChange}
          /><br/><br/>
          <TextField
          variant="filled"
          className="form-control"
          id="priceRange"
          name="priceRange"
          type="text"
          fullWidth
          placeholder="Price range"
          value={props.priceRange}
          onChange={props.handleChange}
          /><br/><br/>
          <TextField
          variant="filled"
          className="form-control"
          id="numBed"
          name="numBed"
          type="text"
          fullWidth
          placeholder="Number bedrooms"
          value={props.numBed}
          onChange={props.handleChange}
          /><br/><br/>
          <TextField
          variant="filled"
          className="form-control"
          id="numBath"
          name="numBath"
          type="text"
          fullWidth
          placeholder="Number bathrooms"
          value={props.numBath}
          onChange={props.handleChange}
          /><br/><br/>
      </div>
    );
  }
  
  function Step3(props) {
    if (props.currentStep !== 3) {
      return null
    } 
    return(
      <React.Fragment>
      <div className="form-group">
      <h1 className="form-title">Have you been pre-approved for a mortgage?</h1>
        <p>If you’re futher in the home buying process, you may have already been pre-approved for a mortgage by your bank.</p>
      </div>
      
      </React.Fragment>
    );
  }
  function Step4(props) {
    if (props.currentStep !== 4) {
      return null
    } 
    return(
      <React.Fragment>
      <div className="form-group">
      <h1 className="form-title">Enter your pre-approved mortgage amount</h1>
        <p>Your bank or mortgage lender should have given you a rough estimate of what you’ve been pre-approved for </p>
        <TextField
          className="form-control"
          id="preapprovedAmount"
          name="preapprovedAmount"
          type="text"
          fullWidth
          placeholder="Pre-approved amount"
          value={props.preapprovedAmount}
          onChange={props.handleChange}
          />
      </div>
      
      </React.Fragment>
    );
  }
  function Step5(props) {
    if (props.currentStep !== 5) {
      return null
    }
    return(
      <React.Fragment>
      <div className="form-group">
      <h1 className="form-title">Congratulations on your pre-approval!</h1>
        <p>Now that we know more about you, begin your house hunting journey to recieve tailored recommendations</p>
      </div>
      </React.Fragment>
    );
  }


  function Step6(props) {
    if (props.currentStep !== 6) {
      return null
    }
    return(
      <React.Fragment>
      <div className="form-group">
      <h1 className="form-title">Your approximate pre-approval estimate</h1>
        <p>Proceeding without a pre-approval is not advised. At this stage we recommend getting a pre-approved mortgage from a professional. To continue, we can calculate a rough estimate</p>
      </div>
      </React.Fragment>
    );
  }
  function Step7(props) {
    if (props.currentStep !== 7) {
      return null
    }
    return(
      <React.Fragment>
      <div className="form-group">
      <h1 className="form-title">Your financial overview</h1>
        <p>Annual income can be found in Box 14, Line 10100 of your T4. This includes employment income and other sources of taxable income you generate</p>
        <TextField
          className="form-control"
          id="annualIncome"
          name="annualIncome"
          type="text"
          fullWidth
          placeholder="Annual income (before taxes)"
          value={props.annualIncome}
          onChange={props.handleChange}
          />
          <p>The amount of immediate money you put towards the initial purchase price of a home</p>
        <TextField
          className="form-control"
          id="downPayment"
          name="downPayment"
          type="text"
          fullWidth
          placeholder="Down payment"
          value={props.downPayment}
          onChange={props.handleChange}
          />
      </div>
      
      </React.Fragment>
    );
    }
    function Step8(props) {
      if (props.currentStep !== 8) {
        return null
      }
      return(
        <React.Fragment>
        <div className="form-group">
        <h1 className="form-title">What do your monthly expenses look like?</h1>
          <p>This includes debts that you’re currently paying back and the monthly expenses of other partner’s invovled </p>
          <p htmlFor="creditcardDebt">Credit card repayments</p>
          <TextField
            className="form-control"
            id="creditcardDebt"
            name="creditcardDebt"
            type="text"
            fullWidth
            placeholder="Credit card debt"
            value={props.creditcardDebt}
            onChange={props.handleChange}
            />
            <p htmlFor="locLoans">Lines of credit + loans</p>
          <TextField
            className="form-control"
            id="locLoans"
            name="locLoans"
            type="text"
            fullWidth
            placeholder="LOC and loans"
            value={props.locLoans}
            onChange={props.handleChange}
            />
        <p htmlFor="householdExpenses">Household (groceries, car repairs, medical etc.)</p>
          <TextField
            className="form-control"
            id="householdExpenses"
            name="householdExpenses"
            type="text"
            fullWidth
            placeholder="Household expenses"
            value={props.householdExpenses}
            onChange={props.handleChange}
            />
          <p htmlFor="utilities">Utilities + Communications (hydro, internet, phone etc.)</p>
          <TextField
            className="form-control"
            id="utilities"
            name="utilities"
            type="text"
            fullWidth
            placeholder="Utilities + comms"
            value={props.utilities}
            onChange={props.handleChange}
            />
        </div>
        
        
        </React.Fragment>
      );
    
  }
  function Step9(props) {
    if (props.currentStep !== 9) {
      return null
    }
    return(
      <React.Fragment>
      <div className="form-group">
      <h1 className="form-title">What’s you credit score?</h1>
        <p>Your credit score is a three-digit number that comes from the information in your credit report. It shows how well you manage credit and how risky it would be for a lender to lend you money.</p>
        <TextField
          className="form-control"
          id="creditScore"
          name="creditScore"
          type="text"
          fullWidth
          placeholder="Credit score"
          value={props.creditScore}
          onChange={props.handleChange}
          />
          
      </div>
      
      
      </React.Fragment>
    );
  
}
function Step10(props) {
  if (props.currentStep !== 10) {
    return null
  }
  return(
    <React.Fragment>
    <div className="form-group">
    <h1 className="form-title">Congratulations! You maybe eligible for a mortage pre-approval of $460,829</h1>
      <p>Continue with your home buying journey. Search and like homes you might visit to recieve tailored recommendations</p>
    </div>
    
    
    </React.Fragment>
  );

}
//   ReactDOM.render(<MasterForm />, document.getElementById('root'))
  export default MasterForm;