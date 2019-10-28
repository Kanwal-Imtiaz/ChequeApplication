import React from 'react';
import './ChequeBox.css';

function ChequeBox({payee,amount, amountInWords, date})
{
		return(
			<div>

 				

				<article className="center mw5 mw7-ns bg-light-blue ba bw1 ph5-ns">
					 
				  <div className='column'>
					<h1 class="f4 bg-dark-blue br3 mr5 br--top white pv2 ">Payment cheque </h1>
					<div className= 'container center'>
						<p className='f4 pa2 w-60 center'>  PAY  <div className='boxBottom'> {payee}  </div> </p>
						<p className='w-40 f4 pa2 mr5 end'>  DATE  <div className='boxBottom'> {date} </div> </p>
					</div>
					
					<div className='container center'>
						<p className='f4 pa2 w-70 center'>  <div className='boxBottom'> {amountInWords} </div> </p>
						<p className='w-30 f4 pa25 mr5 end'>   $ <div className='box'>  {amount} </div> </p>
					</div>
				</div>

				  
				</article>

			</div>

			
			/*  <p >
			   Payee: {payee} , Amount: {amount} 
				date: {date} , amountInWords:  {amountInWords}
			  </p>*/
			 


		);

}
export default ChequeBox;