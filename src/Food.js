import axios from 'axios';
import React, { useState } from 'react';

export const Food = () => {
	const [query, setQuery] = useState('');
	const [rcp, setRcp] = useState('');
	const [list, setList] = useState('alcohol-free');
	const YOUR_APP_ID = '727195e4';
	const YOUR_APP_KEY = '733c494d33f22989e7085b56140b05b9';
	const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&&health=${list}`;

	async function getRecipe() {
		const result = await axios.get(url);
		setRcp(result.data.hits);
		console.log(result.data);
	}

	const submitForm = (e) => {
		e.preventDefault();
		getRecipe();
	};

	return (
		<div>
			<form className="form_1" onSubmit={submitForm}>
				<input
					type="text"
					placeholder="Search name of food"
					value={query}
					onChange={(e) => setQuery(e.target.value)}
				/>
				<button type="submit">Search</button>
			</form>

			<div>
				{rcp.map((item, index) => {
					return (
						<div>
							<p>{item['recipe']['label']}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};
