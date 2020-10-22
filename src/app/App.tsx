import React from 'react';
import Input from 'components/input/Input';
import { useSelector } from 'react-redux';
import type { RootState } from 'app/rootReducer';
import type { AppState } from 'app/appSlice';
import 'app/app.css';

const App: React.FC = () => {
	const { greeting } = useSelector<RootState, AppState>((state) => state.app as AppState);
	return(
			<div className='hello-flex'>
				<div>
					<h1>{greeting}</h1>
				</div>
				<div>
					<Input id="hello-input" label="Hello Input" />
				</div>
			</div>
	);
}

export default App;