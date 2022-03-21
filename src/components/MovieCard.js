import {useContext} from "react";
import {Context} from '../Context'

export default function MovieCard({movie}){
    const {addMovie} = useContext(Context)
    return (
        <div className="max-w-sm mx-auto overflow-scroll bg-gray-100 rounded-lg shadow-lg">
            <img className="object-cover object-center w-full h-1/3"
                src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                alt={movie.title + ' poster'}
            />
            <div className="bg-white h-2/3  px-8 py-4 pt-4">
                <button className="sticky top-0 border-2 border-black"onClick={()=>addMovie(movie.id)}>add Movie</button>
                <div className="h-48 px-6 py-4">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{movie.title}</h3>
                    {/* <h3 className="card--title">{movie.id}</h3> */}
                    <p className = "text-xl text-gray-500 dark:text-gray-200 font-light"><small>RELEASE DATE: {movie.release_date}</small></p>
                    <p className = "text-xl text-gray-500 dark:text-gray-200 font-light"><small>RATING: {movie.vote_average}</small></p>
                    <p className="text-xl text-gray-500 dark:text-gray-200 font-light">{movie.overview}</p>
                </div>
            </div>
        </div>
    )
}