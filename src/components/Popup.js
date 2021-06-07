
import React from 'react'

const Popup=( movie) => {
	return (
		<section className="popup">
			<div className="content">
				<h2>{ movie.Title } <span>({ movie.Year })</span></h2>
				<p className="rating">Rating: {movie.imdbRating}</p>
				<div className="plot">
					<img src={movie.Poster} />
					<p>{movie.Plot}</p>
				</div>
				
			</div>
		</section>
	)
}

export default Popup;