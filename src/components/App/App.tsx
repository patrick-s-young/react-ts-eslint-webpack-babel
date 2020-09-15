import React from 'react';
import Input from 'Components/Input/Input';
import 'Components/App/App.css';

const App: React.FC = () => {
	return(
			<div className='hello-flex'>
				<div>
					<h1>Hello World</h1>
				</div>
				<div>
					<Input id="hello-input" label="Hello Input" />
				</div>
			</div>
	);
}

export default App;