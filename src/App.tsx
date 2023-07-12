import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

const url = 'http://localhost:4801/frameworks';

function App() {
	const [frameworks, setFrameworks] = useState([]);

	useEffect(() => {
		setTimeout(async () => {
			const response = await axios.get(url);
			const _frameworks = response.data;
			setFrameworks(_frameworks);
		}, 1500);
	}, []);

	return (
		<div>
			<h1>Frameworks</h1>
			{frameworks.length > 0 ? (
				<p>There are {frameworks.length} frameworks.</p>
			) : (
				<div>loading...</div>
			)}
		</div>
	);
}

export default App;
