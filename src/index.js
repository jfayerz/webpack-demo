import _ from 'lodash'; 

function component() {
	const element = document.createElement('div');

	//Lodash, currently included via a script in the html header, is required for this line to work
	element.innerHTML = _.join(['Hello', 'webpack', 'How\'s it going?'], ' ');
	
	return element;
}

document.body.appendChild(component());
