import React from 'react';


// using cildren, we can create components that wrap other 
// components (not just the html components but customed components)!
const Scroll = (props) => {
	return (
		<div style={{overflow: 'scroll', height: '800px'}}>
			{props.children}
		</div>
	);
};

export default Scroll;