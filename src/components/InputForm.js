import React from 'react';

const initialState = {
  payee: "",
  amount: "",
  date:"",
  amountInWords: "",
  payeeError: "",
  amountError: "",
  dateError:"",
};

class InputForm extends React.Component
{
	constructor(props) {
    super(props);
    this.state = initialState;
  }

  handleChange = event => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value
    });
  };

  	validate = () => {
    let payeeError = "";
    let amountError = "";
    let dateError ="";
    // let passwordError = "";

    if (!this.state.payee) {
      payeeError = "Payee name should not be blank";
    }

    if (!this.state.amount) {
    	console.log(!this.state.amount);
      amountError = "Amount should not be blank, enter a valid number";
      
    }
    else {
    	
    	let amountVal = parseInt(this.state.amount);
    	//console.log(amountVal);
    	if(amountVal <1 || amountVal>(10000000000000-1)){
     	 amountError = "Amount should be greater than 0 and smaller than 10000000000000";
      
    	}
	}

	if(!this.state.date){
		dateError = "Date should not be blank";
	}
	else{
		var SelectedDate = this.state.date;
		var CurrentDate = new Date();
		CurrentDate.setHours(0,0,0,0);
		SelectedDate = new Date(SelectedDate);
		SelectedDate.setHours(0,0,0,0);

		if(SelectedDate < CurrentDate){
			dateError = "Please select a future date, it is an older date";
		    //alert('Date should be equal or greater than current date.');
		}
	}

    if (amountError || payeeError || dateError) {
      this.setState({ amountError, payeeError, dateError});
      return false;
    }

    return true;
  };

  handleSubmit = event => {
    event.preventDefault();
    const isValid = this.validate();
    if(isValid){
    const urlString ="https://te5299oebg.execute-api.us-west-2.amazonaws.com/prod/"+this.state.amount;
    fetch(urlString)
    .then(response => response.text())
    .then(results => this.setState({amountInWords:results}//console.log(results))
    , () => {
    console.log(this.state);
    this.props.onDisplayCheque(this.state.payee, this.state.amount, this.state.date, this.state.amountInWords);
    this.props.onRouteChange('cheque');
    this.setState(initialState);
     }));
	}
	
  };

	render(){
	return(

			<article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
				<main className="pa4 black-80">
				  <div className="measure">
				    <fieldset id="input-form" className="ba b--transparent ph0 mh0">
				      <legend className="f3 fw6 ph0 mh0">Input Form</legend>
				      <div className="mt3">
				        <label className="db fw6 lh-copy f6" htmlFor="payee">Payee</label>
				        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				          name="payee"
				          placeholder="Enter payee name"
				          value={this.state.payee}
				          onChange={this.handleChange}
				        />
				        <div style={{ fontSize: 12, color: "red" }}>
		            	{this.state.payeeError}
		          		</div>
				      </div>
				      <div className="mv3">
				        <label className="db fw6 lh-copy f6" htmlFor="amount">Amount</label>
				        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				          type="number"
				          name="amount"
				          placeholder="Enter amount in $"
				          value={this.state.amount}
				          onChange={this.handleChange} 
				        />
				        <div style={{ fontSize: 12, color: "red" }}>
		            	{this.state.amountError}
		          		</div>
				      </div>
				      <div className="mv3">
				        <label className="db fw6 lh-copy f6" htmlFor="date">Date</label>
				        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				          type="date"
				          name="date"
				          placeholder="Enter a valid date"
				          value={this.state.date}
				          onChange={this.handleChange}
				        />
				        <div style={{ fontSize: 12, color: "red" }}>
		            	{this.state.dateError}
		          		</div>
				      </div>
				     
				    </fieldset>
				    <div className="">
				      <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Submit" onClick={this.handleSubmit}/>
				    </div>
				  </div>
				</main>
			</article>

			/*<form onSubmit={this.handleSubmit}>
	        <div>
		        <input
		          name="payee"
		          placeholder="Enter payee name"
		          value={this.state.payee}
		          onChange={this.handleChange}
		        />
		        <div style={{ fontSize: 12, color: "red" }}>
            	{this.state.payeeError}
          		</div>
	        </div>
	         <div>
		        <input
		          type="number"
		          name="amount"
		          placeholder="Enter amount in $"
		          value={this.state.amount}
		          onChange={this.handleChange}
		        />
		        <div style={{ fontSize: 12, color: "red" }}>
            	{this.state.amountError}
          		</div>
	        </div>
	        <div>
		        <input
		          type="date"
		          name="date"
		          placeholder="Enter a valid date"
		          value={this.state.date}
		          onChange={this.handleChange}
		        />
		        <div style={{ fontSize: 12, color: "red" }}>
            	{this.state.dateError}
          		</div>
	        </div>
 
	        <button type="submit">submit</button>
	      </form>
		</div>
		*/
		);
}
}

export default InputForm;