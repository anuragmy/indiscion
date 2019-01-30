import React from 'react';
import ReactDOM from 'react-dom';
import Indiscion from './components/IndiscionApp';

import { sq } from './Test1';
console.log(sq(3));

ReactDOM.render(
	<Indiscion options={[ 'devil', 'negi' ]} className="text-center" name="anurag" age="34" />,
	document.getElementById('root')
);
