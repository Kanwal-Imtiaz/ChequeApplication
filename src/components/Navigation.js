import React from 'react';

function Navigation({onRouteChange})
{
		
		return(

			<nav style={{display: 'flex', justifyContent: 'flex-end'}}>
				<p onClick={()=> onRouteChange('form')} className='f3 link dim dark-blue underline pa3 pointer'> Home </p>

			</nav>
			);
	
}

export default Navigation;