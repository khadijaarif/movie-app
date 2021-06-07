import React from 'react';
import Popup from './Popup';

const MoviesList = (props) =>{
const FavComponent =props.FavComponent;

    return (
		// map will loop over all the movies in the list 
		//render the image poster for each of these movies
		// movie.poster has the url to the image 
        <>
			{props.movies.map((movie, index) => ( 
				<div
				
				className='image-container d-flex justify-content-center'>
					
					
					<img 
					
					src={movie.Poster} alt='movie'>
						
						
					</img>
					
					

					<div
						
						onClick={()=> props.handleFavClick(movie)}
						className='overlay d-flex align-items-center justify-content-center' >
							<FavComponent/>
				</div>
				</div>
			))}
		</>
    );
};

export default MoviesList;
