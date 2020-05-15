import React from 'react';
import Card from './Card';


const CardList = ( {robots} ) => { 

	// if (true) {
	// 	throw new Error('NOOOO!');
	// }

	return (
		<div>
	  		{ 
		  		robots.map((user, i) => {
					return (<Card 
					// kep rprops should have something that doesn't 
					// change. For example, index (or i in our case) 
					// could chmage if array items get moved. So a 
					// better key in this case would be something 
					// unique like an id
					key={i} 
					id={robots[i].id} 
					name={robots[i].name} 
					email={robots[i].email}
					/>
				);
				})
			}
	  	</div>
	);
}


export default CardList;