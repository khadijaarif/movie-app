import React from 'react';

const SearchBar = (props) => {
	return (
		//col-sm-4 makes the bar smaller. Takes 4/12 of the screen
		//whenever value changes, update it. Call setSearch
		<div className='col col-sm-4'>
			<input
				className='form-control'
				value={props.value}
				onChange={(event) => props.setSearchVal(event.target.value)}
				placeholder='Type to search...'
			></input>
		</div>
	);
};

export default SearchBar;