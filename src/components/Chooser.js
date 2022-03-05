import { Link } from "react-router-dom";
import {useContext, useState} from "react";
import {Context} from '../Context'
import MovieCard from "./MovieCard"


function Chooser() {

    const {currentId} = useContext(Context)
    //const {addMovie} = useContext(Context)
    const [query, setQuery] = useState('');
    //create the state for movies, and update that state appropriate
    const [movies, setMovies] = useState([]);
    
    const searchMovies = async (e) => {
        e.preventDefault();    
        const url = `https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&query=${query}&page=1&include_adult=false`;
        try {
            const res = await fetch(url);
            const data  = await res.json();
            setMovies(data.results);
        }catch(err){
            console.error(err);
        }
    }

    
    return (
        <>
            <div className="p-8 bg-blue-200 flex justify-center">
                <div className="grid grid-cols-2 gap-4 p-12 border-2 w-2/6 h-4/6 justify-items-center">
                    <div className="">
                        <h3>Hello from Chooser</h3>
                        <h3>current Id is {currentId}</h3>
                        {/* <button onClick={()=>addMovie("3","UCL")}>add Movie</button> */}
                    </div>
                    <div>
                        <button><Link to = "/cheecker">Go to Cheecker</Link></button>
                        <form className="form" onSubmit={searchMovies}>
                            <label className="label" htmlFor="query">Movie Name</label>
                            <input className="input" type="text" name="query"
                                placeholder="i.e. Jurassic Park"
                                value={query} onChange={(e) => setQuery(e.target.value)}
                                />
                            <button className="button" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className= "grid grid-cols-3 gap-4 p-12 bg-gray-900">
                {movies.filter(movie => movie.poster_path).map(movie => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div> 
        </>
    );
}
  
export default Chooser;