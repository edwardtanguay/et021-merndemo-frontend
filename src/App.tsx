import { useState, useEffect } from 'react';
import './App.scss';
import axios from 'axios';

const url = 'http://localhost:4801/frameworks';

interface IFramework {
	title: string;
	description: string;
}

function App() {
	const [frameworks, setFrameworks] = useState<IFramework[]>([]);

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
				<>
					<p>There are {frameworks.length} frameworks.</p>
					<div className="frameworks">
						{frameworks.map((framework) => {
							return (
								<div className="framework">
									<div className="title">
										{framework.title}
									</div>
									<div className="description">
										{framework.description}
									</div>
								</div>
							);
						})}
					</div>
				</>
			) : (
				<div>loading...</div>
			)}
		</div>
	);
}

export default App;
