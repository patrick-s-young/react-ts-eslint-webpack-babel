import React from 'react';
import Input from 'components/input/Input';
import 'app/app.css';

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